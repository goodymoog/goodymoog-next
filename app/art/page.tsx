import Link from "next/link";
import { ART } from "../../lib/art";

export default function ArtIndexPage() {
  return (
    <main
      style={{
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 500,
            marginBottom: "48px",
            letterSpacing: "-0.02em",
          }}
        >
          Art
        </h1>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {ART.map((project: any) => (
            <li
              key={project.slug}
              style={{
                marginBottom: "22px",
              }}
            >
              <Link
                href={`/art/${project.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: "18px",
                  fontWeight: 400,
                }}
              >
                {project.title}
                {project.year ? `, ${project.year}` : ""}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}