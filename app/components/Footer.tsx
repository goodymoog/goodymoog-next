import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 16px",
        background: "#E4E4E4",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 11,
          color: "#000000",
          letterSpacing: "0.03em",
          gap: "4px",
        }}
      >
        <span>© {new Date().getFullYear()} Goodymoog Records</span>

        <Link
          href="/faq"
          style={{
            color: "#000000",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          FAQ
        </Link>
      </div>
    </footer>
  );
}