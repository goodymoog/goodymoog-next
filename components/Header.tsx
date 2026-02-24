import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* top row */}
      <div className={styles.top}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="Goodymoog home">
            <Image
              src="/images/logo.webp"
              alt="Goodymoog"
              width={180}
              height={60}
              priority
              className={styles.logo}
            />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <Link className={styles.navLink} href="/">
              Music
            </Link>
            <Link className={styles.navLink} href="/art">
              Art
            </Link>
            <Link className={styles.navLink} href="/items">
              Items
            </Link>
            <Link className={styles.navLink} href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* bottom hairline like Wikipedia */}
      <div className={styles.rule} />
    </header>
  );
}