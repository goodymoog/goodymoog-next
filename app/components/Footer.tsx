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
          justifyContent: "center",
          alignItems: "center",
          fontSize: 11,
          color: "#000000",
          letterSpacing: "0.03em",
        }}
      >
        <span>© {new Date().getFullYear()} Goodymoog</span>
      </div>
    </footer>
  );
}