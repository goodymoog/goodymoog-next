import Link from "next/link";
import { notFound } from "next/navigation";
import { ART } from "../../../lib/art";

function formatMeta(series: any) {
  const rows: { k: string; v: string }[] = [];
  if (series.year) rows.push({ k: "Year", v: series.year });
  if (series.location) rows.push({ k: "Location", v: series.location });
  if (series.tags?.length) rows.push({ k: "Tags", v: series.tags.join(", ") });
  if (series.works?.length) rows.push({ k: "Works", v: String(series.works.length) });
  return rows;
}

export default function ArtSeriesPage({ params }: { params: { slug: string } }) {
  const series = ART.find((s) => s.slug === params.slug);
  if (!series) return notFound();

  const meta = formatMeta(series);

  return (
    <main className="bg-white text-[#202122]">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">Art</Link> / {series.title}
        </div>

        <header className="mt-3 border-b border-[#a2a9b1] pb-4">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-[38px] leading-[1.1] font-bold tracking-[-0.3px]">
              {series.title}
            </h1>
            {series.year ? (
              <span className="text-[13px] border border-[#a2a9b1] px-2 py-[2px] rounded-full text-[#54595d]">
                {series.year}
              </span>
            ) : null}
          </div>

          {series.description ? (
            <p className="mt-3 text-[#202122] max-w-[80ch] leading-relaxed">
              {series.description}
            </p>
          ) : null}
        </header>

        {/* Wikipedia-ish layout: main + right infobox + right sticky contents */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Main article */}
          <article className="min-w-0">
            {/* Contents (sticky on desktop) */}
            <div className="lg:hidden border border-[#a2a9b1] bg-[#f8f9fa] p-4 rounded mb-6">
              <div className="text-[14px] font-semibold mb-2">Contents</div>
              <ol className="list-decimal pl-5 text-[14px] space-y-1">
                <li><a className="underline" href="#overview">Overview</a></li>
                <li><a className="underline" href="#works">Works</a></li>
              </ol>
            </div>

            <section id="overview">
              <h2 className="text-[22px] font-bold border-b border-[#a2a9b1] pb-1">
                Overview
              </h2>

              {series.longText?.length ? (
                <div className="mt-4 space-y-3 max-w-[80ch] text-[15px] leading-relaxed">
                  {series.longText.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 max-w-[80ch] text-[15px] leading-relaxed text-[#54595d]">
                  Add a longer writeup for this series in <code>lib/art.ts</code> (field: <code>longText</code>).
                </p>
              )}
            </section>

            <section id="works" className="mt-10">
              <h2 className="text-[22px] font-bold border-b border-[#a2a9b1] pb-1">
                Works
              </h2>

              {series.works?.length ? (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {series.works.map((w: any) => (
                    <figure key={w.title} className="border border-[#a2a9b1] rounded overflow-hidden bg-white">
                      {/* Using <img> keeps it dead-simple (no next.config remote image setup). */}
                      <img
                        src={w.image}
                        alt={w.title}
                        loading="lazy"
                        className="w-full h-auto block bg-[#f8f9fa]"
                      />
                      <figcaption className="p-3 text-[13px] leading-snug">
                        <div className="font-semibold">{w.title}</div>
                        <div className="text-[#54595d] mt-1">
                          {[w.year, w.medium, w.size].filter(Boolean).join(" · ")}
                        </div>
                        {w.note ? <div className="text-[#54595d] mt-1">{w.note}</div> : null}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-[#54595d]">
                  No works added yet for this series. Add them in <code>lib/art.ts</code>.
                </p>
              )}
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 h-fit space-y-4">
            {/* Infobox */}
            <div className="border border-[#a2a9b1] bg-[#f8f9fa] rounded">
              {series.leadImage ? (
                <img
                  src={series.leadImage}
                  alt={`${series.title} cover`}
                  className="w-full h-auto block border-b border-[#a2a9b1]"
                  loading="lazy"
                />
              ) : null}

              <div className="p-3">
                <div className="text-[14px] font-semibold mb-2">Details</div>
                <dl className="text-[13px]">
                  {meta.map((r) => (
                    <div key={r.k} className="grid grid-cols-[90px_1fr] gap-2 py-1 border-t border-[#d0d4d8] first:border-t-0">
                      <dt className="text-[#54595d]">{r.k}</dt>
                      <dd className="text-[#202122]">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Contents sticky (desktop) */}
            <div className="hidden lg:block border border-[#a2a9b1] bg-[#f8f9fa] p-4 rounded">
              <div className="text-[14px] font-semibold mb-2">Contents</div>
              <ol className="list-decimal pl-5 text-[14px] space-y-1">
                <li><a className="underline" href="#overview">Overview</a></li>
                <li><a className="underline" href="#works">Works</a></li>
              </ol>
            </div>
          </aside>
        </div>

        <div className="mt-10 text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}