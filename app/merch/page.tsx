"use client";

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
  image?: string;
};

const MERCH: MerchItem[] = [
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
  async function handleCheckout(itemId: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });

      if (!res.ok) {
        const msg = await res.text();
        alert(msg || "Checkout failed");
        return;
      }

      const data: { url?: string; error?: string } = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || "Checkout failed");
    } catch {
      alert("Checkout failed (network error)");
    }
  }

  return (
    <>

      <main className={styles.wrap}>
        <div className={styles.article}>
          <header className={styles.top}>
            <div className={styles.titleRow}>
              <h1 className={styles.h1}>Items</h1>
            </div>
            <p className={styles.subtitle}>
              Official physical items and limited releases.
            </p>
            <div className={styles.rule} />
          </header>

          <div className={styles.grid}>
            {/* MAIN COLUMN */}
            <section className={styles.contentCol}>
              <section id="items" className={styles.section}>
                {/* <h2 className={styles.h2}>Items</h2> */}

                <div className={styles.cards}>
                  {MERCH.map((item) => {
                    const disabled =
                      item.status === "Sold out" ||
                      item.status === "Unavailable";

                    return (
                      <article
                        key={item.id}
                        id={item.id}
                        className={styles.card}
                      >
                        <div className={styles.cardHeader}>
                          <div>
                            <h3 className={styles.h3}>{item.title}</h3>
                            {item.subtitle && (
                              <div className={styles.kicker}>
                                {item.subtitle}
                              </div>
                            )}
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
                                />
                              </div>
                            ) : (
                              <div className={styles.imgPlaceholder}>
                                Image
                              </div>
                            )}
                          </div>

                          <div className={styles.text}>
                            <p className={styles.p}>
                              {item.description}
                            </p>

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
                                onClick={() =>
                                  handleCheckout(item.id)
                                }
                                disabled={disabled}
                              >
                                {disabled ? item.status : "Buy"}
                              </button>

                              <a
                                className={styles.linkBtn}
                                href="/contact"
                              >
                                Questions
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section id="shipping" className={styles.section}>
                <h2 className={styles.h2}>Shipping & returns</h2>
                <ul className={styles.ul}>
                  <li>Orders ship in 1–5 business days.</li>
                  <li>Tracking provided when available.</li>
                  <li>
                    Returns accepted for damaged items within 7 days.
                  </li>
                </ul>
              </section>

              <section id="faq" className={styles.section}>
                <h2 className={styles.h2}>FAQ</h2>

                <details className={styles.details}>
                  <summary>Do you ship internationally?</summary>
                  <p className={styles.p}>
                    Not yet — contact me for options.
                  </p>
                </details>

                <details className={styles.details}>
                  <summary>Can I bundle items?</summary>
                  <p className={styles.p}>
                    Yes — contact me and I can arrange it manually.<a href="/contact">Contact</a>
                  </p>
                </details>
              </section>
            </section>

            {/* SIDEBAR */}
            <aside className={styles.infoCol}>
              <div className={styles.infobox}>
                <nav
                  className={styles.toc}
                  aria-label="Table of contents"
                >
                  <div className={styles.tocTitle}>Contents</div>
                  <ol className={styles.tocList}>
                    <li>
                      <a href="#items">Items</a>
                    </li>
                    <li>
                      <a href="#shipping">
                        Shipping & returns
                      </a>
                    </li>
                    <li>
                      <a href="#faq">FAQ</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </aside>
          </div>

          <footer className={styles.footer}>
            <div className={styles.rule} />
            <p className={styles.footerText}>
              Styled in a Wikipedia-inspired layout.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}