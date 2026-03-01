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
        paddingTop: "30px",   // 👈 slight move down (not huge)
        paddingBottom: "70px",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 500,
            marginBottom: 36,
            letterSpacing: "-0.02em",
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
                  fontSize: 19,
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