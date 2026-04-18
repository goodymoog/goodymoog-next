export default function FAQPage() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "60px 20px",
        color: "#111",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "24px" }}>FAQ</h1>

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

        <section>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
            What does Goodymoog Records release?
          </h2>
          <p>
            Goodymoog Records focuses on music releases, visual art, and
            selected creative projects connected to the Goodymoog universe.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
            Is this an official label?
          </h2>
          <p>
            Yes. Goodymoog Records is the official label identity behind the
            Goodymoog project.
          </p>
        </section>
      </div>
    </main>
  );
}