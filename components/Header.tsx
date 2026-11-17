
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Goodymoog homepage"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.webp"
            alt="Goodymoog"
            width={320}
            height={120}
            priority
            className={styles.logoImg}
          />
          <span className={styles.mobileLogo}>G</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="goodymoog-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close ×" : "Menu ☰"}
        </button>

        <nav
          id="goodymoog-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/merch" onClick={() => setMenuOpen(false)}>Items</Link>
          <Link href="/art" onClick={() => setMenuOpen(false)}>Art</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/newsletter" onClick={() => setMenuOpen(false)}>News</Link>
        </nav>
      </div>
    </header>
  );
}
