import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Kinetic Sculptures",
  description: "Kinetic Sculptures — visual art by Théo Heron.",
};

const works = [
  {
    title: "Wrench",
    image: "/images/art/kinetic-sculptures/Wrench.png",
  },
  {
    title: "Wrench 2",
    image: "/images/art/kinetic-sculptures/Wrench 2.png",
  },
  {
    title: "Door",
    image: "/images/art/kinetic-sculptures/door.png",
  },
  {
    title: "Tree",
    image: "/images/art/kinetic-sculptures/Tree.png",
  },
  {
    title: "Tree 2",
    image: "/images/art/kinetic-sculptures/Tree 2.png",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / Kinetic Sculptures
        </div>

        <header className={styles.header}>
          <h1>Kinetic Sculptures</h1>
        </header>

        <section className={styles.gallery}>
          {works.map((work) => (
            <figure className={styles.work} key={work.title}>
              <img
                src={work.image}
                alt={`${work.title} by Théo Heron`}
              />

              <figcaption>
                <strong>{work.title}</strong>, 2021, Digital Print, 18&quot; X 24&quot;
              </figcaption>
            </figure>
          ))}
        </section>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}
