import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand, GetObjectCommand, HeadObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createHash, randomUUID } from 'node:crypto';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;
const MAX = 50 * 1024 * 1024;
const mime: Record<string,string> = { wav:'audio/wav', mp3:'audio/mpeg', m4a:'audio/mp4', mp4:'audio/mp4', aac:'audio/aac', webm:'audio/webm', ogg:'audio/ogg', flac:'audio/flac', aiff:'audio/aiff', aif:'audio/aiff', caf:'audio/x-caf' };
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
class ApiError extends Error { constructor(public status:number, message:string){super(message);} }
function env(n:string){ const v=process.env[n]; if(!v) throw new ApiError(503,'Archive configuration is incomplete.'); return v; }
function json(data:unknown,status=200){return NextResponse.json(data,{status,headers:{'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow','Referrer-Policy':'no-referrer'}});}
async function sup(path:string, token?:string, body?:unknown, more:Record<string,string>={}) {
  const res=await fetch(env('NEXT_PUBLIC_SUPABASE_URL').replace(/\/$/,'')+path,{method:body===undefined?'GET':'POST',headers:{apikey:env('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'),...(token?{Authorization:`Bearer ${token}`} : {}), 'Content-Type':'application/json', ...more},body:body===undefined?undefined:JSON.stringify(body),cache:'no-store'});
  if(!res.ok) throw new ApiError(res.status===401?401:res.status===403?403:res.status===409?409:502, res.status===401?'Please sign in again.':res.status===403?'Access denied.':'Database request failed. Check the configuration and retry.');
  const raw=await res.text();return raw?JSON.parse(raw):null;
}
async function owner(token:string){
  if(!token) throw new ApiError(401,'Sign in to your archive.');
  const u=await sup('/auth/v1/user',token);
  if(!u?.id || !uuid.test(u.id)) throw new ApiError(401,'Sign in again.');
  if(await sup('/rest/v1/rpc/gm_is_archive_owner',token,{})!==true) throw new ApiError(403,'This account is not the archive owner.');
  return u.id as string;
}
function s3(){return new S3Client({region:'auto',endpoint:env('R2_ENDPOINT'),forcePathStyle:true,credentials:{accessKeyId:env('R2_ACCESS_KEY_ID'),secretAccessKey:env('R2_SECRET_ACCESS_KEY')},requestChecksumCalculation:'WHEN_REQUIRED',responseChecksumValidation:'WHEN_REQUIRED'});}
function validId(v:unknown){if(typeof v!=='string'||!uuid.test(v)) throw new ApiError(400,'Invalid ID.');return v.toLowerCase();}
function label(v:unknown){if(typeof v!=='string'||!v.trim()||v.trim().length>512)throw new ApiError(400,'Enter a name (1–512 characters).');return v.trim();}
async function folder(token:string,v:unknown){if(v===null||v===undefined)return null;const id=validId(v);const rows=await sup(`/rest/v1/gm_folders?select=id&id=eq.${id}&trashed_at=is.null`,token);if(!rows.length)throw new ApiError(400,'Folder no longer exists.');return id;}
function meta(b:Record<string,unknown>){
  const id=validId(b.id), ext=typeof b.extension==='string'?b.extension.toLowerCase():'';
  if(!Object.hasOwn(mime,ext))throw new ApiError(400,'Unsupported audio format.');
  const size=b.byte_count, hash=b.sha256;
  if(typeof size!=='number'||!Number.isSafeInteger(size)||size<1||size>MAX||typeof hash!=='string'||!/^[a-f0-9]{64}$/.test(hash))throw new ApiError(400,'Invalid file or exceeds the 50 MB pilot limit.');
  const date=typeof b.recorded_at==='string'?new Date(b.recorded_at):new Date(NaN);if(!Number.isFinite(date.getTime()))throw new ApiError(400,'Invalid recording date.');
  const duration=b.duration_seconds;if(typeof duration!=='number'||!Number.isFinite(duration)||duration<0)throw new ApiError(400,'Invalid duration.');
  return {id,extension:ext,byte_count:size,sha256:hash,name:label(b.name),original_filename:label(b.original_filename),recorded_at:date.toISOString(),duration_seconds:duration};
}
async function all(table:string,token:string,filter=''){const out=[];for(let i=0;i<10000;i+=500){const rows=await sup(`/rest/v1/${table}?select=*&order=created_at.asc,id.asc&limit=500&offset=${i}${filter}`,token);out.push(...rows);if(rows.length<500)return out;}throw new ApiError(413,'Library exceeds the pilot listing limit.');}
export async function POST(req:NextRequest){
  try {
    const origin=req.headers.get('origin');
    if(!origin || origin!==req.nextUrl.origin || req.headers.get('sec-fetch-site')==='cross-site')throw new ApiError(403,'Invalid request origin.');
    const len=Number(req.headers.get('content-length')||0);if(len>24000)throw new ApiError(413,'Request too large.');
    const raw=await req.text();if(raw.length>24000)throw new ApiError(413,'Request too large.');
    let b:Record<string,unknown>;try{b=JSON.parse(raw);if(!b||typeof b!=='object'||Array.isArray(b))throw 0;}catch{throw new ApiError(400,'Invalid request.');}
    if(b.action==='login'){
      if(typeof b.email!=='string'||typeof b.password!=='string'||b.email.length>320||b.password.length>1024)throw new ApiError(400,'Enter email and password.');
      let session;try{session=await sup('/auth/v1/token?grant_type=password',undefined,{email:b.email,password:b.password});}catch(e){if(e instanceof ApiError && e.status===503)throw e;throw new ApiError(401,'Sign-in failed. Check your credentials or try again.');}
      await owner(session.access_token);
      const r=json({ok:true});r.cookies.set('gm_archive_session',session.access_token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/api/memos',maxAge:Math.min(Number(session.expires_in)||3600,3600)});return r;
    }
    if(b.action==='logout'){const r=json({ok:true});r.cookies.set('gm_archive_session','',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/api/memos',maxAge:0});return r;}
    const token=req.cookies.get('gm_archive_session')?.value||'';
    const uid=await owner(token);
    if(b.action==='list'||b.action==='list_v2'||b.action==='list_v3'){
      const [folders,recordings]=await Promise.all([all('gm_folders',token,b.action==='list_v3'?'':'&trashed_at=is.null'),all('gm_recordings',token,b.action==='list'?'&trashed_at=is.null':'')]);
      return json({folders,recordings:b.action==='list_v3'?recordings:recordings.filter(r=>!r.purged_at),sync_version:b.action==='list_v3'?3:2});
    }
    if(b.action==='purge_recording'){
      const id=validId(b.id);if(typeof b.revision!=='number'||!Number.isSafeInteger(b.revision)||b.revision<0)throw new ApiError(400,'Invalid revision.');
      const row=await sup('/rest/v1/rpc/gm_claim_purge',token,{p_id:id,p_revision:b.revision});
      if(!row)throw new ApiError(409,'Recording is not in Trash or changed. Refresh first.');
      if(!Object.hasOwn(mime,row.extension)||row.object_key!==`${uid}/${id}.${row.extension}`)throw new ApiError(409,'Invalid storage key.');
      if(!row.purge_done){await s3().send(new DeleteObjectCommand({Bucket:env('R2_BUCKET_NAME'),Key:row.object_key}));if(await sup('/rest/v1/rpc/gm_finish_purge',token,{p_id:id})!==true)throw new ApiError(502,'Cloud deletion not confirmed; retry.');}
      return json({purged:true});
    }
    if(b.action==='edit_recording_v3'||b.action==='edit_recording'){
      const id=validId(b.id), name=label(b.name), folder_id=await folder(token,b.folder_id);
      if(typeof b.revision!=='number'||!Number.isSafeInteger(b.revision)||b.revision<0||typeof b.trashed!=='boolean')throw new ApiError(400,'Invalid revision or Trash state.');
      const fields={p_id:id,p_revision:b.revision,p_name:name,p_folder_id:folder_id,p_trashed:b.trashed};
      let updated;
      if(b.action==='edit_recording_v3'){
        if(typeof b.favorite!=='boolean'||typeof b.notes!=='string'||b.notes.length>4000)throw new ApiError(400,'Invalid notes or favorite.');
        updated=await sup('/rest/v1/rpc/gm_edit_track_v3',token,{...fields,p_favorite:b.favorite,p_notes:b.notes});
      }else{updated=await sup('/rest/v1/rpc/gm_edit_recording',token,fields);}
      if(!updated)throw new ApiError(409,'Recording changed on another device. Refresh and try again.');return json({recording:updated});
    }
    if(b.action==='edit_folder_v3'){
      const id=validId(b.id), name=label(b.name), parent_id=b.parent_id==null?null:validId(b.parent_id);
      if(typeof b.revision!=='number'||!Number.isSafeInteger(b.revision)||b.revision<0||typeof b.trashed!=='boolean'||typeof b.color_hex!=='string'||!(/^[a-f0-9]{6}$/i.test(b.color_hex)))throw new ApiError(400,'Invalid folder edit.');
      const updated=await sup('/rest/v1/rpc/gm_edit_folder_v3',token,{p_id:id,p_revision:b.revision,p_name:name,p_parent_id:parent_id,p_color_hex:b.color_hex,p_trashed:b.trashed,p_recursive:b.recursive===true,p_trash_contents:b.trash_contents===true});
      if(!updated)throw new ApiError(409,'Folder changed on another device. Refresh and try again.');return json({folder:updated});
    }
    if(b.action==='folder'||b.action==='folder_v3'){
      const parent_id=await folder(token,b.parent_id), name=label(b.name), color_hex=typeof b.color_hex==='string'&&/^[0-9a-f]{6}$/i.test(b.color_hex)?b.color_hex:'659ce0',id=b.action==='folder_v3'?validId(b.id):randomUUID();
      const existing=await sup(`/rest/v1/gm_folders?select=*&id=eq.${id}`,token);
      if(existing.length){const f=existing[0];if(!f.trashed_at&&f.name===name&&f.parent_id===parent_id&&f.color_hex?.toUpperCase()===color_hex.toUpperCase())return json({folder:f});throw new ApiError(409,'Folder ID already exists.');}
      const rows=await sup('/rest/v1/gm_folders',token,{id,parent_id,name,color_hex},{Prefer:'return=representation'});return json({ok:true,folder:rows[0]});
    }
    if(b.action==='prepare'||b.action==='finish'){
      const m=meta(b),folder_id=await folder(token,b.folder_id),key=`${uid}/${m.id}.${m.extension}`,Bucket=env('R2_BUCKET_NAME'),client=s3();
      const rows=await sup(`/rest/v1/gm_recordings?select=id,sha256,byte_count,extension,purged_at&id=eq.${m.id}`,token);
      if(rows.length){if(rows[0].purged_at)throw new ApiError(409,'Recording was permanently deleted.');if(rows[0].sha256===m.sha256&&Number(rows[0].byte_count)===m.byte_count&&rows[0].extension===m.extension)return json({complete:true});throw new ApiError(409,'Recording ID already used.');}
      if(b.action==='prepare'){
        const checksum=Buffer.from(m.sha256,'hex').toString('base64');
        const headers={'Content-Type':mime[m.extension],'If-None-Match':'*','x-amz-checksum-sha256':checksum};
        const url=await getSignedUrl(client,new PutObjectCommand({Bucket,Key:key,ContentType:mime[m.extension],IfNoneMatch:'*',ChecksumSHA256:checksum}),{expiresIn:300,signableHeaders:new Set(['content-type','if-none-match']),unhoistableHeaders:new Set(['x-amz-checksum-sha256'])});
        const signed=new URL(url).searchParams.get('X-Amz-SignedHeaders')?.split(';')||[];
        if(!['content-type','if-none-match','x-amz-checksum-sha256'].every(x=>signed.includes(x)))throw new ApiError(503,'Upload signing configuration is unsafe.');
        return json({url,headers});
      }
      // Verify bytes independently before inserting metadata. No audio is buffered in memory on server.
      const head=await client.send(new HeadObjectCommand({Bucket,Key:key}));if(head.ContentLength!==m.byte_count)throw new ApiError(409,'Uploaded size does not match.');
      const obj=await client.send(new GetObjectCommand({Bucket,Key:key,IfMatch:head.ETag}));
      if(!obj.Body)throw new ApiError(502,'Could not read uploaded audio.');
      const h=createHash('sha256');let n=0;for await(const part of obj.Body as AsyncIterable<Uint8Array>){n+=part.byteLength;if(n>MAX)throw new ApiError(413,'File too large.');h.update(part);}
      if(n!==m.byte_count||h.digest('hex')!==m.sha256)throw new ApiError(409,'Uploaded checksum does not match.');
      await sup('/rest/v1/gm_recordings',token,{...m,folder_id});return json({complete:true});
    }
    if(b.action==='play'||b.action==='export_audio'){
      const id=validId(b.id),rows=await sup(`/rest/v1/gm_recordings?select=id,extension,object_key,purged_at,trashed_at&id=eq.${id}`,token);const r=rows[0];
      if(!r||r.purged_at||(b.action==='export_audio'&&r.trashed_at)||!Object.hasOwn(mime,r.extension)||r.object_key!==`${uid}/${id}.${r.extension}`)throw new ApiError(404,'Recording not found.');
      const url=await getSignedUrl(s3(),new GetObjectCommand({Bucket:env('R2_BUCKET_NAME'),Key:r.object_key}),{expiresIn:900});return json({url});
    }
    throw new ApiError(400,'Unknown action.');
  }catch(e){if(e instanceof ApiError)return json({error:e.message},e.status);return json({error:'Archive request failed. Check cloud configuration or retry.'},502);}
}
