import Link from "next/link";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
} as const;

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "14px 16px",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          fontSize: 12,
          color: "rgba(0,0,0,0.55)",
          letterSpacing: "0.03em",
        }}
      >
        <span>© {new Date().getFullYear()} Goodymoog</span>
        <span style={{ opacity: 0.25 }}>·</span>
        <Link href="/music" style={linkStyle}>Music</Link>
        <Link href="/art" style={linkStyle}>Art</Link>
        <Link href="/merch" style={linkStyle}>Merch</Link>
        <Link href="/contact" style={linkStyle}>Contact</Link>
      </div>
    </footer>
  );
}