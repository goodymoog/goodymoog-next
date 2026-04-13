import Link from "next/link";
import styles from "./Mexico.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / Wild Flowers
        </div>

        <header className={styles.header}>
          <h1>New Mexico</h1>
          <div className={styles.year}>2021–2022</div>

          <p className={styles.lead}>
            Enter Description
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.article}>
            <section>
              <h2>Overview</h2>
              <p>
               ...
              </p>
              <p>
                ...
              </p>
            </section>

            <section>
              <h2>Process</h2>
              <p>
                ...
              </p>
              <p>
                ...
              </p>
            </section>

            <section id="works">
              <h2>Works</h2>

              <figure className={styles.figure}>
                <img
                  // src="/art/shattered-sidewalks/01.jpg"
                  // alt="Ash stencil still"
                />
                <figcaption>
                  ...
                </figcaption>
              </figure>

              <figure className={styles.figure}>
                <img
                  // src="/art/shattered-sidewalks/02.jpg"
                  // alt="Erosion still"
                />
                <figcaption>
                  ...
                </figcaption>
              </figure>

              <div className={styles.videoWrapper}>
                <iframe
                  // src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  // title="Shattered Sidewalks video"
                  allowFullScreen
                />
              </div>
            </section>
          </article>

          <aside className={styles.infobox}>
            <img
              // src="/art/shattered-sidewalks/cover.jpg"
              // alt="Shattered Sidewalks cover"
            />

            <div className={styles.infoBlock}>
              <div><strong>Title:</strong> Image</div>
              <div><strong>Year:</strong> 2021–2022</div>
            </div>
          </aside>
        </div>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}