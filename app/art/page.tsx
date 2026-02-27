import Link from "next/link";
import { ART } from "../../lib/art";

type ArtProject = {
  slug: string;
  title: string;
  year?: string | number;
};

export default function ArtIndexPage() {
  const projects = ART as ArtProject[];

  return (
    <main
      style={{
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
        padding: "0 24px 60px", // ✅ no extra top padding
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 500,
            margin: "0 0 24px 0", // ✅ ensure no top margin
            paddingBottom: 8,
            borderBottom: "1px solid #ccc",
          }}
        >
          Art
        </h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projects.map((p) => (
            <li key={p.slug} style={{ marginBottom: 20 }}>
              <Link
                href={`/art/${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: 18,
                }}
              >
                {p.title}
                {p.year ? `, ${p.year}` : ""}
              </Link>
            </li>
          ))}
        </ul>

        <style>{`
          a:hover { text-decoration: underline; }
        `}</style>
      </div>
    </main>
  );
}