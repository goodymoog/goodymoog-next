"use client";

import Header from "@/components/Header";
import Image from "next/image";
import styles from "./MerchPage.module.css";

type MerchItem = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  status?: "In stock" | "Preorder" | "Sold out" | "Unavailable";
  description: string;
  details: { label: string; value: string }[];
  image?: string;
};

const MERCH: MerchItem[] = [
  {
    id: "warp-drive-cd",
    title: "Warp Drive — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "Unavailable",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/Warp Drive.png",
  },
  {
    id: "sickwiththeflow-cd",
    title: "Sickwiththeflow — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "In stock",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/swtf.jpg",
  },
  {
    id: "new-mexico-cd",
    title: "New Mexico — CD (Jewel Case)",
    subtitle: "Physical release",
    price: "$10",
    status: "In stock",
    description:
      "Official physical CD in a standard jewel case. Includes full tracklist and artwork insert.",
    details: [
      { label: "Format", value: "CD (jewel case)" },
      { label: "Includes", value: "Artwork insert + disc" },
      { label: "Ships from", value: "USA" },
    ],
    image: "/images/merch/new_mexico.webp",
  },
  {
    id: "poster",
    title: "Goodymoog — Poster",
    subtitle: "Print",
    price: "$20",
    status: "Sold out",
    description: "High-quality poster print of the album artwork.",
    details: [
      { label: "Size", value: "18×24 in" },
      { label: "Paper", value: "Matte" },
      { label: "Edition", value: "Limited" },
    ],
    image: "/images/merch/poster.webp",
  },
];

export default function MerchPage() {
  async function handleCheckout(itemId: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });

      // If your API returns plain text errors, read them safely
      if (!res.ok) {
        const msg = await res.text();
        alert(msg || "Checkout failed");
        return;
      }

      const data: { url?: string; error?: string } = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Checkout failed (no URL returned)");
      }
    } catch (e) {
      alert("Checkout failed (network error)");
    }
  }

  return (
    <>
      <Header />

      <main className={styles.wrap}>
        <div className={styles.grid}>
          {MERCH.map((item) => {
            const disabled =
              item.status === "Sold out" || item.status === "Unavailable";

            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={160}
                      height={160}
                      // if you have CSS sizing, keep it:
                      className={(styles as any).img}
                    />
                  ) : null}
                </div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <div className={styles.price}>{item.price}</div>
                  <p>{item.description}</p>

                  <button
                    type="button"
                    className={styles.buyBtn}
                    onClick={() => handleCheckout(item.id)}
                    disabled={disabled}
                    title={disabled ? item.status : "Buy"}
                  >
                    {disabled ? item.status : "Buy"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}