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
        padding: "84px 24px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <header style={{ marginBottom: 36 }}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Art
          </h1>

          <div
            style={{
              marginTop: 10,
              fontSize: 13,
              color: "#666",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Index. Click a project title.
          </div>
        </header>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {projects.map((p) => (
              <li
                key={p.slug}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <Link
                  href={`/art/${p.slug}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "14px 0",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {p.title}
                  </span>

                  {p.year ? (
                    <span
                      style={{
                        fontSize: 13,
                        color: "#666",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.year}
                    </span>
                  ) : (
                    <span />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <style>{`
          a:hover span:first-child { text-decoration: underline; }
          a:focus-visible { outline: 2px solid rgba(0,0,0,0.45); outline-offset: 4px; }
        `}</style>

        <footer style={{ marginTop: 18, fontSize: 12, color: "#777" }}>
          {projects.length} projects
        </footer>
      </div>
    </main>
  );
}