"use client";

import Header from "@/components/Header";
import Image from "next/image";
import styles from "./MerchPage.module.css";

type MerchItem = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  status?: "In stock" | "Preorder" | "Sold out" | "Unavailable";
  description: string;
  details: { label: string; value: string }[];
  image?: string; // e.g. "/images/merch/cd.webp"
};

const MERCH: MerchItem[] = [
   {
    id: "warp-drive-cd",
    title: "Warp Drive — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "Unavailable",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/Warp Drive.png",
  },
   {
    id: "sickwiththeflow-cd",
    title: "Sickwiththeflow — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "In stock",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/swtf.jpg",
  },
   {
    id: "new-mexico-cd",
    title: "New Mexico — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "In stock",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/new_mexico.webp",
  },
  {
    id: "poster",
    title: "Goodymoog — Poster",
    subtitle: "Print",
    price: "$20",
    status: "Sold out",
    description: "High-quality poster print of the album artwork. Limited run.",
    details: [
      { label: "Size", value: "18×24 in" },
      { label: "Paper", value: "Matte" },
      { label: "Edition", value: "Limited" },
    ],
    image: "/images/merch/poster.webp",
  },
];

function StatusPill({ status }: { status?: MerchItem["status"] }) {
  if (!status) return null;

  const cls =
    status === "In stock"
      ? styles.pillIn
      : status === "Preorder"
      ? styles.pillPre
      : styles.pillOut;

  return <span className={`${styles.pill} ${cls}`}>{status}</span>;
}

export default function MerchPage() {
  return (
    <>
      <Header />

      <main className={styles.wrap}>
        <div className={styles.article}>
          <header className={styles.top}>
            <div className={styles.titleRow}>
              <h1 className={styles.h1}>Merch</h1>
              <span className={styles.badge}>Goodymoog</span>
            </div>
            <p className={styles.subtitle}>
              Official physical items and limited releases.
            </p>
            <div className={styles.rule} />
          </header>

          <div className={styles.grid}>
            <section className={styles.contentCol}>
              <nav className={styles.toc} aria-label="Table of contents">
                <div className={styles.tocTitle}>Contents</div>
                <ol className={styles.tocList}>
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#items">Items</a>
                    <ol>
                      {MERCH.map((m) => (
                        <li key={m.id}>
                          <a href={`#${m.id}`}>{m.title}</a>
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    <a href="#shipping">Shipping & returns</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ol>
              </nav>
              <section id="items" className={styles.section}>
                <h2 className={styles.h2}>Items</h2>

                <div className={styles.cards}>
                  {MERCH.map((item) => (
                    <article key={item.id} id={item.id} className={styles.card}>
                      <div className={styles.cardHeader}>
                        <div>
                          <h3 className={styles.h3}>{item.title}</h3>
                          {item.subtitle ? (
                            <div className={styles.kicker}>
                              {item.subtitle}
                            </div>
                          ) : null}
                        </div>

                        <div className={styles.metaRight}>
                          <div className={styles.price}>{item.price}</div>
                          <StatusPill status={item.status} />
                        </div>
                      </div>

                      <div className={styles.cardBody}>
                        <div className={styles.media}>
                          {item.image ? (
                            <div className={styles.imageFrame}>
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={160}
                                height={160}
                                className={styles.img}
                                priority={item.id === "warp-drive-cd"}
                              />
                            </div>
                          ) : (
                            <div className={styles.imgPlaceholder}>Image</div>
                          )}
                        </div>

                        <div className={styles.text}>
                          <p className={styles.p}>{item.description}</p>

                          <table className={styles.table}>
                            <tbody>
                              {item.details.map((d) => (
                                <tr key={d.label}>
                                  <th className={styles.th}>{d.label}</th>
                                  <td className={styles.td}>{d.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <div className={styles.actions}>
                            <button
                              className={styles.buyBtn}
                              type="button"
                              onClick={() => {
                                // TODO: Replace with Stripe/Shopify checkout link
                                alert(`Checkout: ${item.title}`);
                              }}
                              disabled={item.status === "Sold out"}
                            >
                              {item.status === "Sold out" ? "Sold out" : "Buy"}
                            </button>

                            <a className={styles.linkBtn} href="/contact">
                              Questions
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="shipping" className={styles.section}>
                <h2 className={styles.h2}>Shipping & returns</h2>
                <ul className={styles.ul}>
                  <li>Orders ship in 1–5 business days (unless preorder).</li>
                  <li>Tracking is provided when available.</li>
                  <li>
                    Returns accepted for damaged items; contact within 7 days of
                    delivery.
                  </li>
                </ul>
              </section>

              <section id="faq" className={styles.section}>
                <h2 className={styles.h2}>FAQ</h2>

                <details className={styles.details}>
                  <summary>Do you ship internationally?</summary>
                  <p className={styles.p}>
                    Not yet by default—if you need international shipping, hit
                    “Questions” and I’ll tell you options.
                  </p>
                </details>

                <details className={styles.details}>
                  <summary>How do preorders work?</summary>
                  <p className={styles.p}>
                    Preorders charge at checkout (unless you set it up otherwise)
                    and ship once production finishes.
                  </p>
                </details>

                <details className={styles.details}>
                  <summary>Can I bundle items?</summary>
                  <p className={styles.p}>
                    Yes—once you wire a real checkout, bundling is easy. For now,
                    message me and I can arrange it manually.
                  </p>
                </details>
              </section>
            </section>

            <aside className={styles.infoCol}>
              <div className={styles.infobox}>
                <div className={styles.infoboxTitle}>Merch (Goodymoog)</div>

                <div className={styles.infoboxImageWrap}>
                  <Image
                    src="/images/logo.webp"
                    alt="Goodymoog logo"
                    width={160}
                    height={160}
                    className={styles.infoboxImg}
                    priority
                  />
                </div>

                <table className={styles.infoTable}>
                  <tbody>
                    <tr>
                      <th>Creator</th>
                      <td>Goodymoog</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>Physical media, apparel, prints</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td>Varies by item</td>
                    </tr>
                    <tr>
                      <th>Support</th>
                      <td>
                        <a href="/contact">Contact</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.infoboxFooter}>
                  <a className={styles.smallLink} href="#items">
                    View items
                  </a>
                  <span className={styles.dot}>·</span>
                  <a className={styles.smallLink} href="/music">
                    Music
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <footer className={styles.footer}>
            <div className={styles.rule} />
            <p className={styles.footerText}>
              Text is styled in a Wikipedia-inspired layout (not affiliated with
              Wikipedia).
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}