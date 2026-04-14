export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "14px 16px",
        background: "#efefef",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12,
          color: "rgba(0,0,0,0.55)",
          letterSpacing: "0.03em",
        }}
      >
        <span>© {new Date().getFullYear()} Goodymoog</span>
      </div>
    </footer>
  );
}