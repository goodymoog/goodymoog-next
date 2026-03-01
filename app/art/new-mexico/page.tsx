import Link from "next/link";
import styles from "./Mexico.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / Shattered Sidewalks
        </div>

        <header className={styles.header}>
          <h1>Shattered Sidewalks</h1>
          <div className={styles.year}>2021–2022</div>

          <p className={styles.lead}>
            Shattered Sidewalks is a site-specific stencil-and-ash work created
            at the former location of a church that burned down. Using ash from
            the site, a stencil image of the church was formed on the sidewalk
            and filmed as it gradually disappeared.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.article}>
            <section>
              <h2>Overview</h2>
              <p>
                The project began after witnessing the church fire and reflecting
                on how structures that feel permanent can vanish overnight.
              </p>
              <p>
                Rather than producing a permanent memorial, the work embraces
                ephemerality. The ash-based stencil was designed to disappear,
                with video documentation serving as the lasting record.
              </p>
            </section>

            <section>
              <h2>Process</h2>
              <p>
                A stencil of the church was created and placed at the original
                site. Ash from the burned structure was brushed through the
                stencil rather than using spray paint.
              </p>
              <p>
                Wind alone was not enough to remove the ash, so brushing
                techniques—similar to sand animation—were used to erase the
                image gradually on camera.
              </p>
            </section>

            <section id="works">
              <h2>Works</h2>

              <figure className={styles.figure}>
                <img
                  src="/art/shattered-sidewalks/01.jpg"
                  alt="Ash stencil still"
                />
                <figcaption>
                  Stencil filled with ash at the original site.
                </figcaption>
              </figure>

              <figure className={styles.figure}>
                <img
                  src="/art/shattered-sidewalks/02.jpg"
                  alt="Erosion still"
                />
                <figcaption>
                  Image dissolving as ash disperses.
                </figcaption>
              </figure>

              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Shattered Sidewalks video"
                  allowFullScreen
                />
              </div>
            </section>
          </article>

          <aside className={styles.infobox}>
            <img
              src="/art/shattered-sidewalks/cover.jpg"
              alt="Shattered Sidewalks cover"
            />

            <div className={styles.infoBlock}>
              <div><strong>Year:</strong> 2021–2022</div>
              <div><strong>Medium:</strong> Stencil + ash + video</div>
              <div><strong>Theme:</strong> Ephemerality</div>
              <div><strong>Influences:</strong> Banksy; sand animation</div>
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