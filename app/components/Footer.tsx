export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 16px",
        background: "#8a8a8a",
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
          color: "#f2efe8",
          letterSpacing: "0.03em",
        }}
      >
        <span>© {new Date().getFullYear()} Goodymoog</span>
      </div>
    </footer>
  );
}