import Link from "next/link";
import styles from "./MeditativeSpaces.module.css";

export const metadata = {
  title: "Meditative Spaces",
  description: "Meditative Spaces — visual art by Théo Heron.",
  openGraph: {
    title: "Meditative Spaces",
    description: "Meditative Spaces — visual art by Théo Heron.",
    url: "https://goodymoog.com/art/meditative-spaces",
    images: [
      {
        url: "https://goodymoog.com/images/art/meditative-spaces/IMG_0337.JPG",
        alt: "Meditative Spaces by Théo Heron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://goodymoog.com/images/art/meditative-spaces/IMG_0337.JPG"
    ],
  },
};


const images = [
  "IMG_0332.JPG",
  "IMG_0333.JPG",
  "IMG_0337.JPG",
  "IMG_0340.JPG",
  "IMG_0343.JPG",
  "IMG_0355.JPG",
  "IMG_0357.JPG",
  "IMG_0360.JPG",
  "IMG_0362.JPG",
  "IMG_0351.JPG",
  "IMG_0352.JPG",
  "IMG_0354.JPG",
];

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
          {images.map((image, index) => (
            <figure className={styles.figure} key={image}>
              <img
                src={`/images/art/meditative-spaces/${image}`}
                alt={`Meditative Spaces ${index + 1}`}
              />
            </figure>
          ))}
        </article>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}
