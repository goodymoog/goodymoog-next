import Link from "next/link";
import { ART } from "../../lib/art";

type ArtProject = {
  slug: string;
  title: string;
  year?: string | number;
  description?: string;
};

export default function ArtIndexPage() {
  return (
    <main
      style={{
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
        padding: "88px 24px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        {/* Top header */}
        <header style={{ marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <h1
              style={{
                fontSize: 34,
                fontWeight: 650,
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Art
            </h1>

            <span
              style={{
                fontSize: 12,
                color: "#6b7280",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Selected work
            </span>
          </div>

          <p
            style={{
              margin: "10px 0 0",
              color: "#6b7280",
              fontSize: 14,
              lineHeight: 1.6,
              maxWidth: 62 * 10, // ~620px
            }}
          >
            Minimal index. Click a project to view the full page.
          </p>
        </header>

        {/* List */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {(ART as ArtProject[]).map((project) => (
            <li key={project.slug} style={{ margin: 0 }}>
              <Link
                href={`/art/${project.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "16px 6px",
                  borderTop: "1px solid rgba(17, 17, 17, 0.08)",
                  transition: "background 120ms ease, transform 120ms ease",
                  borderRadius: 10,
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(17, 17, 17, 0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.25)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 520,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {project.title}
                  </div>

                  {project.year ? (
                    <div
                      style={{
                        fontSize: 13,
                        color: "#6b7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.year}
                    </div>
                  ) : null}
                </div>

                {project.description ? (
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      color: "#6b7280",
                      lineHeight: 1.5,
                      maxWidth: 680,
                    }}
                  >
                    {project.description}
                  </div>
                ) : null}
              </Link>
            </li>
          ))}

          {/* bottom divider */}
          <li style={{ borderTop: "1px solid rgba(17, 17, 17, 0.08)" }} />
        </ul>

        {/* Footer */}
        <footer style={{ marginTop: 26, color: "#9ca3af", fontSize: 12 }}>
          {Array.isArray(ART) ? ART.length : 0} projects
        </footer>
      </div>
    </main>
  );
}