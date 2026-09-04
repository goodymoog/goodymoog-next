"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const images = [
  "/images/art/shattered-sidewalks/1.png",
  "/images/art/shattered-sidewalks/2.png",
  "/images/art/shattered-sidewalks/3.png",
];

const START_TIME = 19 * 60 * 60 + 45 * 60;
const MIDNIGHT = 24 * 60 * 60;
const TIME_RANGE = MIDNIGHT - START_TIME;
const CYCLE_DURATION = 60000;

function pad(value: number) {
  return Math.floor(value).toString().padStart(2, "0");
}

function formatClock(totalSeconds: number) {
  if (totalSeconds >= MIDNIGHT - 0.5) {
    return "12:00:00 AM";
  }

  const whole = Math.floor(totalSeconds);

  let hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const seconds = whole % 60;

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${pad(minutes)}:${pad(seconds)} ${period}`;
}

export default function Page() {
  const [clockTime, setClockTime] = useState(START_TIME);

  useEffect(() => {
    const startedAt = performance.now();
    let frame: number;

    const update = () => {
      const elapsed = performance.now() - startedAt;
      const phase = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;

      const progress =
        phase <= 0.5
          ? phase * 2
          : (1 - phase) * 2;

      const current =
        START_TIME + TIME_RANGE * progress;

      setClockTime(current);

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/art">Art</Link> / Shattered Sidewalks
        </div>

        <header className={styles.header}>
          <h1>Shattered Sidewalks</h1>
        </header>

        <div className={styles.slideshow}>
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Photograph ${index + 1} from the Shattered Sidewalks series by Goodymoog`}
              fill
              unoptimized
              priority
              className={`${styles.image} ${styles[`image${index + 1}`]}`}
              sizes="(max-width: 700px) 86vw, 700px"
            />
          ))}
        </div>

        <section className={styles.timeSection}>
          <div className={styles.date}>Aug 27, 2021</div>
          <div className={styles.clock}>
            {formatClock(clockTime)}
          </div>
        </section>

        <div className={styles.back}>
          <Link href="/art">← Back to Art</Link>
        </div>
      </div>
    </main>
  );
}
