"use client";

import Image from "next/image";
import styles from "./MerchPage.module.css";

type MerchItem = {
  id: string;
  title: string;
  price: string;
  status: "In stock" | "Preorder" | "Sold out" | "Unavailable";
  image: string;
  specs: string;
};

const MERCH: MerchItem[] = [
  {
    id: "sickwiththeflow-cd",
    title: "Sickwiththeflow",
    price: "$10",
    status: "In stock",
    image: "/images/merch/swtf.jpg",
    specs: "Jewel case · Artwork insert + disc · Ships from USA",
  },
  {
    id: "new-mexico-cd",
    title: "New Mexico",
    price: "$10",
    status: "In stock",
    image: "/images/merch/new_mexico.webp",
    specs: "Jewel case · Artwork insert + disc · Ships from USA",
  },
];

export default function MerchPage() {
  async function handleCheckout(itemId: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });

      if (!res.ok) {
        const msg = await res.text();
        alert(msg || "Checkout failed");
        return;
      }

      const data: {
        url?: string;
        error?: string;
      } = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Checkout failed");
      }
    } catch {
      alert("Checkout failed (network error)");
    }
  }

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1>Items</h1>
        <p>Physical editions and limited releases.</p>
      </header>

      <section className={styles.products}>
        {MERCH.map((item) => {
          const disabled =
            item.status === "Sold out" ||
            item.status === "Unavailable";

          return (
            <article
              key={item.id}
              className={styles.product}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.productInfo}>
                <div className={styles.titleRow}>
                  <h2>{item.title}</h2>
                  <span className={styles.price}>
                    {item.price}
                  </span>
                </div>

                <div className={styles.meta}>
                  <span>PHYSICAL CD</span>
                  <span>·</span>
                  <span>
                    {item.status === "In stock"
                      ? "AVAILABLE"
                      : item.status.toUpperCase()}
                  </span>
                </div>

                <div className={styles.specs}>
                  {item.specs}
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.buy}
                    disabled={disabled}
                    onClick={() =>
                      handleCheckout(item.id)
                    }
                  >
                    {disabled ? item.status : "Buy"}
                  </button>

                  <a
                    href="/contact"
                    className={styles.questions}
                  >
                    Questions
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className={styles.bottom}>
        <div className={styles.shipping}>
          <h2>Shipping</h2>
          <p>
            Orders usually ship within 1–5 business days.
            Tracking provided when available.
          </p>
        </div>

        <div className={styles.shipping}>
          <h2>International</h2>
          <p>
            Contact me for international shipping options.
          </p>
        </div>
      </section>
    </main>
  );
}