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
        display: "flex",
        justifyContent: "center",
        paddingTop: "70px",   // 👈 moved higher
        paddingBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: 40,
          }}
        >
          Art
        </h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projects.map((p) => (
            <li key={p.slug} style={{ marginBottom: 18 }}>
              <Link
                href={`/art/${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: 18,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
                {p.year ? `, ${p.year}` : ""}
              </Link>
            </li>
          ))}
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