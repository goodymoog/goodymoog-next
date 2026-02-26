// app/art/shattered-sidewalks/page.tsx
import Link from "next/link";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "youtube"; id: string; title: string }
  | { kind: "vimeo"; id: string; title: string }
  | { kind: "mp4"; src: string; title: string; poster?: string };

const PAGE = {
  title: "Shattered Sidewalks",
  year: "2024",
  location: "San Diego, CA",
  tags: ["photography", "street", "series"],
  lead:
    "Shattered Sidewalks is a photo/video series documenting fractures, repairs, and patterns in everyday pavement—small failures that become textures and maps.",

  // Put a cover image here (file should live in /public/art/shattered-sidewalks/)
  leadImage: {
    src: "/art/shattered-sidewalks/cover.jpg",
    alt: "Shattered Sidewalks cover",
  },

  details: [
    { k: "Medium", v: "Photo + video" },
    { k: "Format", v: "Series" },
    { k: "Status", v: "Ongoing" },
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "Write 1–2 paragraphs explaining what you’re noticing and why it matters (memory, urban wear, patterns, repair culture, etc.).",
        "Optional second paragraph: how you shoot (phone, film, DSLR), what you collect, how you edit.",
      ],
    },
    {
      id: "process",
      heading: "Process",
      paragraphs: [
        "Where you find scenes, how you frame them, what counts as a ‘shattered’ sidewalk, and how video fits into the series.",
      ],
    },
    {
      id: "works",
      heading: "Works",
      paragraphs: ["Selected works from the series (photos and clips)."],
    },
    {
      id: "credits",
      heading: "Credits / Links",
      paragraphs: [
        "Add credits, locations, collaborators, gear notes, or links out to a film/video version.",
      ],
    },
  ],

  gallery: [
    {
      title: "Shattered Sidewalks 01",
      meta: "2024 · photo",
      media: {
        kind: "image",
        src: "/art/shattered-sidewalks/01.jpg",
        alt: "Shattered Sidewalks 01",
      } as Media,
      note: "Optional caption: neighborhood / detail / what drew you to it.",
    },
    {
      title: "Shattered Sidewalks 02",
      meta: "2024 · photo",
      media: {
        kind: "image",
        src: "/art/shattered-sidewalks/02.jpg",
        alt: "Shattered Sidewalks 02",
      } as Media,
      note: "Optional caption.",
    },

    // YouTube example — replace id with your own (the part after v=)
    {
      title: "Sidewalk Clip",
      meta: "2024 · video",
      media: { kind: "youtube", id: "R_CMnyW23f0", title: "Sidewalk Clip" } as Media,
      note: "Optional caption for the clip.",
    },

    // Local mp4 example (best for short clips)
    // Put file in public/art/shattered-sidewalks/bts.mp4
    // {
    //   title: "BTS Clip",
    //   meta: "2024 · mp4",
    //   media: {
    //     kind: "mp4",
    //     src: "/art/shattered-sidewalks/bts.mp4",
    //     poster: "/art/shattered-sidewalks/bts-poster.jpg",
    //     title: "BTS Clip",
    //   } as Media,
    //   note: "Optional caption.",
    // },
  ],
};

function InfoboxRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[92px_1fr] gap-2 py-1 border-t border-[#d0d4d8] first:border-t-0">
      <dt className="text-[#54595d]">{k}</dt>
      <dd className="text-[#202122]">{v}</dd>
    </div>
  );
}

function MediaBlock({ item }: { item: (typeof PAGE.gallery)[number] }) {
  const m = item.media;

  return (
    <figure className="border border-[#a2a9b1] rounded overflow-hidden bg-white">
      <div className="bg-[#f8f9fa]">
        {m.kind === "image" ? (
          <img src={m.src} alt={m.alt} loading="lazy" className="w-full h-auto block" />
        ) : m.kind === "youtube" ? (
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${m.id}`}
              title={m.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : m.kind === "vimeo" ? (
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://player.vimeo.com/video/${m.id}`}
              title={m.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <video className="w-full h-auto block" controls preload="metadata" poster={m.poster}>
            <source src={m.src} type="video/mp4" />
          </video>
        )}
      </div>

      <figcaption className="p-3 text-[13px] leading-snug">
        <div className="font-semibold">{item.title}</div>
        <div className="text-[#54595d] mt-1">{item.meta}</div>
        {item.note ? <div className="text-[#54595d] mt-1">{item.note}</div> : null}
      </figcaption>
    </figure>
  );
}

export default function Page() {
  const toc = PAGE.sections.map((s) => ({ id: s.id, heading: s.heading }));

  return (
    <main className="bg-white text-[#202122]">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">
            Art
          </Link>{" "}
          / {PAGE.title}
        </div>

        <header className="mt-3 border-b border-[#a2a9b1] pb-4">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-[38px] leading-[1.1] font-bold tracking-[-0.3px]">
              {PAGE.title}
            </h1>
            {PAGE.year ? (
              <span className="text-[13px] border border-[#a2a9b1] px-2 py-[2px] rounded-full text-[#54595d]">
                {PAGE.year}
              </span>
            ) : null}
          </div>

          {PAGE.lead ? <p className="mt-3 max-w-[80ch] leading-relaxed">{PAGE.lead}</p> : null}
        </header>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <article className="min-w-0">
            {/* Contents (mobile) */}
            <div className="lg:hidden border border-[#a2a9b1] bg-[#f8f9fa] p-4 rounded mb-6">
              <div className="text-[14px] font-semibold mb-2">Contents</div>
              <ol className="list-decimal pl-5 text-[14px] space-y-1">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a className="underline" href={`#${t.id}`}>
                      {t.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {PAGE.sections.map((s) => (
              <section key={s.id} id={s.id} className={s.id === "overview" ? "" : "mt-10"}>
                <h2 className="text-[22px] font-bold border-b border-[#a2a9b1] pb-1">
                  {s.heading}
                </h2>

                {s.paragraphs?.length ? (
                  <div className="mt-4 space-y-3 max-w-[80ch] text-[15px] leading-relaxed">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : null}

                {s.id === "works" ? (
                  PAGE.gallery?.length ? (
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {PAGE.gallery.map((item) => (
                        <MediaBlock key={`${item.title}-${item.meta}`} item={item} />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 text-[#54595d]">No works added yet.</p>
                  )
                ) : null}
              </section>
            ))}
          </article>

          <aside className="lg:sticky lg:top-6 h-fit space-y-4">
            <div className="border border-[#a2a9b1] bg-[#f8f9fa] rounded">
              {PAGE.leadImage?.src ? (
                <img
                  src={PAGE.leadImage.src}
                  alt={PAGE.leadImage.alt}
                  className="w-full h-auto block border-b border-[#a2a9b1]"
                  loading="lazy"
                />
              ) : null}

              <div className="p-3">
                <div className="text-[14px] font-semibold mb-2">Details</div>
                <dl className="text-[13px]">
                  {PAGE.year ? <InfoboxRow k="Year" v={PAGE.year} /> : null}
                  {PAGE.location ? <InfoboxRow k="Location" v={PAGE.location} /> : null}
                  {PAGE.tags?.length ? <InfoboxRow k="Tags" v={PAGE.tags.join(", ")} /> : null}
                  {PAGE.gallery?.length ? <InfoboxRow k="Works" v={String(PAGE.gallery.length)} /> : null}
                  {PAGE.details?.map((d) => <InfoboxRow key={d.k} k={d.k} v={d.v} />)}
                </dl>
              </div>
            </div>

            {/* Contents (desktop) */}
            <div className="hidden lg:block border border-[#a2a9b1] bg-[#f8f9fa] p-4 rounded">
              <div className="text-[14px] font-semibold mb-2">Contents</div>
              <ol className="list-decimal pl-5 text-[14px] space-y-1">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a className="underline" href={`#${t.id}`}>
                      {t.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>

        <div className="mt-10 text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">
            ← Back to Art
          </Link>
        </div>
      </div>
    </main>
  );
}