"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.webp"
            alt="Goodymoog"
            width={110}
            height={40}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link className={pathname === "/" ? styles.active : ""} href="/">Music</Link>
          <Link className={pathname === "/art" ? styles.active : ""} href="/art">Art</Link>
          <Link className={pathname === "/merch" ? styles.active : ""} href="/merch">Items</Link>
          <Link className={pathname === "/contact" ? styles.active : ""} href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}