import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="page-bg bg-home">
      <Header />

      {/* Fixed, clickable player */}
      <div className="playerFixed">
        <iframe
          src="https://goodymoog.github.io/goodymoog-player5/"
          title="Goodymoog Player"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>

      {/* Your normal homepage content (starts below player) */}
      <main className="homeContent">
        <div className="goodymoog-embed">
          {/* paste your existing homepage JSX here */}
        </div>
      </main>
    </div>
  );
}