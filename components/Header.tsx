// components/Header.tsx
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
            width={140}
            height={60}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Music</Link>
          <Link href="/art">Art</Link>
          <Link href="/merch">Merch</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}