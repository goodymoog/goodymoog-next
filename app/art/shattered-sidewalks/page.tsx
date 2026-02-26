import Link from "next/link";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "youtube"; id: string; title: string }
  | { kind: "vimeo"; id: string; title: string }
  | { kind: "mp4"; src: string; title: string; poster?: string };

type GalleryItem = {
  title: string;
  meta?: string;
  note?: string;
  media: Media;
};

const PAGE = {
  title: "Shattered Sidewalks",
  year: "2021–2022",
  location: "Site-specific sidewalk intervention",
  tags: ["stencil", "ash", "ephemeral", "video", "site-specific"],

  // Lead paragraph (Wikipedia vibe)
  lead:
    "Shattered Sidewalks is a site-specific stencil-and-ash work made on a sidewalk at the former location of a church that burned down. The piece is designed to be temporary: ash is brushed through a stencil and filmed as wind and motion erase the image.",

  // Infobox cover image (put this in /public/art/shattered-sidewalks/cover.jpg)
  leadImage: { src: "/art/shattered-sidewalks/cover.jpg", alt: "Shattered Sidewalks cover image" },

  // Infobox extra rows
  details: [
    { k: "Medium", v: "Stencil + ash (charcoal-like), video documentation" },
    { k: "Theme", v: "Ephemerality; loss; reconstruction" },
    { k: "Influences", v: "Banksy; sand animation techniques" },
  ],

  // Sections + paragraphs
  sections: [
    {
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "The project began after witnessing a neighborhood church on fire; the resulting destruction became a prompt to think about impermanence and how even structures that feel timeless can vanish.",
        "Instead of making a permanent memorial, the work uses a stencil of the church and the building’s ash to form an image that is meant to disappear. The video serves as the record of that disappearance.",
      ],
    },
    {
      id: "process",
      heading: "Process",
      paragraphs: [
        "A stencil of the church was produced and brought to the original site. Rather than aerosol paint, ash from the burned building was used to fill the stencil.",
        "The artist expected wind to gradually carry the ash away, but found that the air was not strong enough—so the ash had to be brushed away, borrowing techniques from sand animation practice.",
      ],
    },
    {
      id: "influences",
      heading: "Influences",
      paragraphs: [
        "The project is influenced by Banksy’s site-specific stencil practice, where the environment and existing signage become part of the work rather than a neutral backdrop.",
        "It also draws on sand animation methods (working with granular material and controlled removal) to shape how the image dissolves over time on camera.",
      ],
    },
    {
      id: "works",
      heading: "Gallery",
      paragraphs: ["Selected stills and clips. Replace the placeholders with your actual files/IDs."],
    },
  ],

  // Gallery (edit these)
  gallery: [
    {
      title: "Stencil + ash (still)",
      meta: "2021 · photo",
      media: {
        kind: "image",
        src: "/art/shattered-sidewalks/01.jpg",
        alt: "Stencil filled with ash (still image)",
      },
      note: "Put your real caption here (location / moment / what we’re seeing).",
    },
    {
      title: "Erosion sequence (still)",
      meta: "2022 · photo",
      media: {
        kind: "image",
        src: "/art/shattered-sidewalks/02.jpg",
        alt: "Erosion sequence (still image)",
      },
      note: "Caption: ash breaks apart / wind + brushing remove the image.",
    },

    // Replace with YOUR YouTube ID (the part after v=...)
    {
      title: "Video excerpt",
      meta: "2022 · video",
      media: { kind: "youtube", id: "qt16dkt6T-Q", title: "Shattered Sidewalks – excerpt" },
      note: "YouTube embed (swap ID if needed).",
    },

    // Optional: local mp4 (best for short clips)
    // Put file at public/art/shattered-sidewalks/clip.mp4
    // {
    //   title: "Local clip",
    //   meta: "2022 · mp4",
    //   media: {
    //     kind: "mp4",
    //     src: "/art/shattered-sidewalks/clip.mp4",
    //     poster: "/art/shattered-sidewalks/clip-poster.jpg",
    //     title: "Local clip",
    //   },
    //   note: "Short local MP4 clips only (keep file sizes small).",
    // },
  ] satisfies GalleryItem[],
};

function InfoboxRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[98px_1fr] gap-2 py-1 border-t border-[#d0d4d8] first:border-t-0">
      <dt className="text-[#54595d]">{k}</dt>
      <dd className="text-[#202122]">{v}</dd>
    </div>
  );
}

function MediaBlock({ item }: { item: GalleryItem }) {
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
        {item.meta ? <div className="text-[#54595d] mt-1">{item.meta}</div> : null}
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
        {/* Breadcrumb */}
        <div className="text-[14px] text-[#54595d]">
          <Link className="underline" href="/art">
            Art
          </Link>{" "}
          / {PAGE.title}
        </div>

        {/* Title + lead */}
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

          {PAGE.lead ? <p className="mt-3 max-w-[85ch] leading-relaxed">{PAGE.lead}</p> : null}
        </header>

        {/* Layout: article + sidebar */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Main article */}
          <article className="min-w-0">
            {/* TOC (mobile) */}
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
                  <div className="mt-4 space-y-3 max-w-[85ch] text-[15px] leading-relaxed">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : null}

                {/* Gallery in its own section */}
                {s.id === "works" ? (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {PAGE.gallery.map((item) => (
                      <MediaBlock key={`${item.title}-${item.meta ?? ""}`} item={item} />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}

            {/* Wiki-ish footnote area (optional) */}
            <section className="mt-12">
              <h2 className="text-[22px] font-bold border-b border-[#a2a9b1] pb-1">Notes</h2>
              <ol className="mt-4 text-[14px] text-[#54595d] space-y-2 list-decimal pl-6 max-w-[85ch]">
                <li>Site-specific stencil practice and context influence.</li>
                <li>Ash used as material; video documents the work’s disappearance.</li>
              </ol>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 h-fit space-y-4">
            {/* Infobox */}
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
                  <InfoboxRow k="Works" v={String(PAGE.gallery.length)} />
                  {PAGE.details.map((d) => (
                    <InfoboxRow key={d.k} k={d.k} v={d.v} />
                  ))}
                </dl>
              </div>
            </div>

            {/* TOC (desktop) */}
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