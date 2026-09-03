import Link from "next/link";
import styles from "./Washingtons.module.css";

export const metadata = {
  title: "The Washingtons",
  description: "The Washingtons — visual art by Théo Heron.",
  openGraph: {
    title: "The Washingtons",
    description: "The Washingtons — visual art by Théo Heron.",
    url: "https://goodymoog.com/art/the-washingtons",
    images: [
      {
        url: "https://goodymoog.com/images/art/the-washingtons/carrie.png",
        alt: "The Washingtons by Théo Heron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://goodymoog.com/images/art/the-washingtons/carrie.png"
    ],
  },
};


export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / The Washingtons
        </div>

        <header className={styles.header}>
          <h1>The Washingtons</h1>
        </header>

        <section className={styles.gallery}>

          <figure className={styles.work}>
            <img
              src="/images/art/the-washingtons/carrie.png"
              alt="Carrie Washington"
            />
            <figcaption>
              Carrie Washington, Digital Print, 2021, 24&quot; × 36&quot;
            </figcaption>
          </figure>

          <figure className={styles.work}>
            <img
              src="/images/art/the-washingtons/albert.png"
              alt="Albert Washington"
            />
            <figcaption>
              Albert Washington, Digital Print, 2021, 24&quot; × 36&quot;
            </figcaption>
          </figure>

          <figure className={styles.work}>
            <img
              src="/images/art/the-washingtons/leisure.png"
              alt="Leisure"
            />
            <figcaption>
              Leisure, Digital Print, 2021, 24&quot; × 36&quot;
            </figcaption>
          </figure>

        </section>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>

      </div>
    </main>
  );
}
