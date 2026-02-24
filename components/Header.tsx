import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.webp"
            alt="Goodymoog"
            width={200}
            height={80}
            priority
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Music</Link>
          <Link href="/art">Art</Link>
          <Link href="/merch">Items</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}