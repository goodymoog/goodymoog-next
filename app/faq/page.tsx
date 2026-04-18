export default function FAQPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 220px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
        color: "#111",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 800,
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "24px" }}>
          What is Goodymoog?
        </h1>

        <div style={{ display: "grid", gap: "20px", lineHeight: 1.6 }}>
          <section>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
              What is Goodymoog?
            </h2>
            <p>
              Goodymoog is a creative music project and record label identity
              centered around original releases, visuals, and world-building.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}