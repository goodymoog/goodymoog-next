export default function FAQPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 160px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        color: "#111",
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