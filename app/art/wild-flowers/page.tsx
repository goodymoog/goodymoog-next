import Image from "next/image";
import styles from "./WildFlowers.module.css";

const GALLERY = [
  { src: "/images/art/wild-flowers/bw-01.jpg", alt: "Darkroom print — wild flowers (1)" },
  { src: "/images/art/wild-flowers/bw-02.jpg", alt: "Darkroom print — wild flowers (2)" },
  { src: "/images/art/wild-flowers/bw-03.jpg", alt: "Darkroom print — wild flowers (3)" },
  { src: "/images/art/wild-flowers/bw-04.jpg", alt: "Darkroom print — wild flowers (4)" },
  { src: "/images/art/wild-flowers/bw-05.jpg", alt: "Darkroom print — wild flowers (5)" },
];

const PROCESS = [
  { src: "/images/art/wild-flowers/process-01.jpg", alt: "Process — found family photos / inspiration" },
  { src: "/images/art/wild-flowers/process-02.jpg", alt: "Process — darkroom tools / setup" },
  { src: "/images/art/wild-flowers/process-03.jpg", alt: "Process — contact sheet / selection" },
];

export default function WildFlowersPage() {
  return (
    <main className={styles.wrap}>
      <article className={styles.article}>
        {/* TOP */}
        <header className={styles.top}>
          <div className={styles.kicker}>Art project</div>
          <h1 className={styles.h1}>Les fleurs sauvages</h1>
          <p className={styles.sub}>
            Darkroom B/W prints of flowers on the property, installed as a vertical column —
            paired with vivid petals placed at the base.
          </p>

          <div className={styles.meta}>
            <span className={styles.pill}>2022</span>
            <span className={styles.pill}>Darkroom print</span>
            <span className={styles.pill}>Installation</span>
          </div>
        </header>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src="/images/art/wild-flowers/hero-install.jpg"
              alt="Installation view: vertical column of black-and-white flower prints on a wall"
              fill
              sizes="(max-width: 900px) 92vw, 900px"
              className={styles.img}
              priority
            />
          </div>
          <div className={styles.heroCaption}>
            Installed as a column on the wall, with a collection of colorful flowers placed at the base.
          </div>
        </section>

        {/* BODY GRID */}
        <section className={styles.grid}>
          <div className={styles.main}>
            <h2 className={styles.h2}>Concept</h2>
            <p className={styles.p}>
              I used darkroom photography to print black-and-white images of flowers growing on my new home’s property.
              The installation contrasts the somber absence of color in the prints with bright petals on the floor —
              an homage to life continuing from seeds planted by Carrie Washington.
            </p>

            <h2 className={styles.h2}>Connection: Brett Weston</h2>
            <p className={styles.p}>
              Inspired by Brett Weston’s close attention to natural texture and form, where nature fills the frame and
              negative space becomes expressive. I chose flowers to show beauty and fragility: short-lived, vivid,
              and impossible to hold onto.
            </p>
          </div>

          <aside className={styles.side}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Details</div>
              <dl className={styles.dl}>
                <div className={styles.dlRow}>
                  <dt>Medium</dt>
                  <dd>35mm → darkroom prints</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt>Display</dt>
                  <dd>Vertical wall column + petals at base</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt>Theme</dt>
                  <dd>Nostalgia, fragility, living memory</dd>
                </div>
              </dl>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Reference</div>
              <p className={styles.small}>
                Brett Weston, <em>Leaf Cluster</em> (1979)
              </p>
            </div>
          </aside>
        </section>

        {/* GALLERY */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Selected prints</h2>
            <p className={styles.muted}>A tight grid that feels “contact-sheet clean.”</p>
          </div>

          <div className={styles.gallery}>
            {GALLERY.map((it) => (
              <figure key={it.src} className={styles.tile}>
                <div className={styles.tileMedia}>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 900px) 45vw, 260px"
                    className={styles.img}
                  />
                </div>
              </figure>
            ))}
          </div>

          <div className={styles.split}>
            <div className={styles.splitMedia}>
              <Image
                src="/images/art/wild-flowers/petals-base.jpg"
                alt="Colorful flowers and petals placed on the floor at the base of the installation"
                fill
                sizes="(max-width: 900px) 92vw, 900px"
                className={styles.img}
              />
            </div>
            <div className={styles.splitText}>
              <div className={styles.splitTitle}>Color as a counterweight</div>
              <p className={styles.p}>
                The prints hold texture and shadow; the petals reintroduce celebration — and underline how quickly
                beauty disappears.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Process</h2>
            <p className={styles.muted}>Short, numbered, and visual.</p>
          </div>

          <ol className={styles.steps}>
            <li>
              <div className={styles.stepTitle}>Shoot</div>
              <p className={styles.p}>Explore the house + garden with B/W film (Pentax K1000).</p>
            </li>
            <li>
              <div className={styles.stepTitle}>Print</div>
              <p className={styles.p}>Darkroom tests (strips) to lock exposure and preserve detail.</p>
            </li>
            <li>
              <div className={styles.stepTitle}>Install</div>
              <p className={styles.p}>Select five prints, stack as a wall column, then place real flowers at the base.</p>
            </li>
          </ol>

          <div className={styles.processGrid}>
            {PROCESS.map((it) => (
              <figure key={it.src} className={styles.processTile}>
                <div className={styles.processMedia}>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 900px) 92vw, 320px"
                    className={styles.img}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* FOOT */}
        <footer className={styles.foot}>
          <div className={styles.rule} />
          <p className={styles.smallMuted}>
            If you want, I can also match this page’s typography + spacing to the rest of your site so it feels like one system.
          </p>
        </footer>
      </article>
    </main>
  );
}