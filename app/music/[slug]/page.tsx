export default function MusicSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // If galaga, show the HTML game from /public
  if (slug === "galaga") {
    return (
      <main style={{ width: "100%", height: "calc(100vh - 80px)" }}>
        <iframe
          src="/games/galaga/"
          title="Galaga"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </main>
    );
  }

  // Otherwise normal music pages
  return (
    <main style={{ padding: 40 }}>
      <h1>{slug}</h1>
      <p>Coming soon.</p>
    </main>
  );
}