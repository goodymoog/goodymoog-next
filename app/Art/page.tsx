import Header from "@/components/Header";
import Link from "next/link";
import styles from "./Art.module.css";
import { ART } from "../../lib/art";

export default function ArtIndexPage() {
  return (
    <main className={styles.wrap}>
      <Header />

      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.h1}>Art</h1>
            <span className={styles.badge}>portfolio</span>
          </div>
          <p className={styles.subtitle}>
            Minimal presentation, detail-rich captions. Click a series for the full “article” view.
          </p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.toc}>
            <div className={styles.tocTitle}>Contents</div>
            <ol className={styles.tocList}>
              <li><a href="#series">Series</a></li>
              <li><a href="#prints">Prints / editions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </aside>

          <article className={styles.article}>
            <section id="series">
              <h2 className={styles.h2}>Series</h2>

              <div className={styles.grid}>
                {ART.map((s: any) => (
                  <Link key={s.slug} href={`/art/${s.slug}`} className={styles.card}>
                    <div className={styles.cardTop}>
                      <div className={styles.cardTitle}>{s.title}</div>
                      {s.year ? <div className={styles.cardYear}>{s.year}</div> : null}
                    </div>

                    {s.description ? (
                      <p className={styles.cardDesc}>{s.description}</p>
                    ) : (
                      <p className={styles.cardDescMuted}>Open to view works and notes.</p>
                    )}

                    {s.tags?.length ? (
                      <div className={styles.tags}>
                        {s.tags.slice(0, 4).map((t: string) => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                    ) : null}

                    <div className={styles.cardHint}>Open →</div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="prints" className={styles.section}>
              <h2 className={styles.h2}>Prints / editions</h2>
              <p className={styles.p}>
                Add a short paragraph here about availability, editions, and how to inquire.
              </p>
            </section>

            <section id="contact" className={styles.section}>
              <h2 className={styles.h2}>Contact</h2>
              <p className={styles.p}>
                For inquiries: <a className={styles.a} href="/contact">contact page</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}