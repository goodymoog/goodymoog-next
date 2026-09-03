import Link from "next/link";
import styles from "./MeditativeSpaces.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / Meditative Spaces
        </div>

        <header className={styles.header}>
          <h1>Meditative Spaces</h1>
        </header>

        <article className={styles.article}>

          <figure className={styles.figure}>
            <img
              src="/images/art/meditative-spaces/IMG_0333.JPG"
              alt="Meditative Spaces photograph 1"
            />
          </figure>

          <figure className={styles.figure}>
            <img
              src="/images/art/meditative-spaces/IMG_0337.JPG"
              alt="Meditative Spaces photograph 2"
            />
          </figure>

          <figure className={styles.figure}>
            <img
              src="/images/art/meditative-spaces/IMG_0340.JPG"
              alt="Meditative Spaces photograph 3"
            />
          </figure>

          <figure className={styles.figure}>
            <img
              src="/images/art/meditative-spaces/IMG_0343.JPG"
              alt="Meditative Spaces photograph 4"
            />
          </figure>

        </article>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>

      </div>
    </main>
  );
}