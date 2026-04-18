export default function FAQPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 190px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px 40px",
        color: "#111",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 820,
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          What is Goodymoog?
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          Goodymoog is the creative project of Théo, a producer and rapper from
          Los Angeles. His work blends experimental electronic music, ambient
          soundscapes, and beat-making into a distinct sonic world. The music
          is both chaotic and calming, flashy and political, and at times
          abrasive. His inspirations range from internet memes and long desert
          walks to birdsong, wind, and other unexpected sounds from the natural
          world.
        </p>
      </div>
    </main>
  );
}