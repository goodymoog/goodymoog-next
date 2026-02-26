import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-[#202122]">
      <div className="mx-auto max-w-[1100px] px-4 py-8">
        <div className="text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">Art</Link> / wild flowers
        </div>

        <h1 className="mt-3 text-[38px] leading-[1.1] font-bold tracking-[-0.3px] capitalize">
          wild flowers
        </h1>

        <p className="mt-4 max-w-[80ch] text-[15px] leading-relaxed text-[#54595d]">
          Placeholder page. Replace this with your Wikipedia-style template and media.
        </p>

        <div className="mt-10 text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}
