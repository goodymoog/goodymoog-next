"use client";

import { useState } from "react";
import Link from "next/link";
import { ART } from "../../lib/art";

type ArtProject = {
  slug: string;
  title: string;
  year?: string | number;
  image?: string; // e.g. "/images/art/wild-flowers-bg.jpg"
};

const DEFAULT_IMAGE = "/images/art/default-bg.jpg";

export default function ArtIndexPage() {
  const projects = ART as ArtProject[];
  const [activeImage, setActiveImage] = useState(DEFAULT_IMAGE);

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {[{ slug: "__default", image: DEFAULT_IMAGE }, ...projects].map((p) => {
        const img = p.image ?? `/images/art/${p.slug}-bg.jpg`;
        return (
          <div
            key={p.slug}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.4s ease",
              opacity: activeImage === img ? 1 : 0,
            }}
          />
        );
      })}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#fff",
          width: 300,
          height: 400,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px 28px",
          overflow: "auto",
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <h1
          style={{
            fontSize: 18,
            fontWeight: 500,
            margin: "0 0 14px",
            letterSpacing: "-0.02em",
          }}
        >
          Prior Works
        </h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projects.map((p) => {
            const img = p.image ?? `/images/art/${p.slug}-bg.jpg`;
            return (
              <li key={p.slug} style={{ marginBottom: 8 }}>
                <Link
                  href={`/art/${p.slug}`}
                  onMouseEnter={() => setActiveImage(img)}
                  onMouseLeave={() => setActiveImage(DEFAULT_IMAGE)}
                  style={{
                    textDecoration: "none",
                    color: "#111",
                    fontSize: 13,
                  }}
                >
                  {p.title}
                  {p.year ? `, ${p.year}` : ""}
                </Link>
              </li>
            );
          })}
        </ul>

        <style>{`
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </main>
  );
}
