import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="homePage">
      <Header />

      {/* HERO SECTION */}
      <section className="homeHero">
        <div className="playerFrame">
          <iframe
            src="https://goodymoog.github.io/goodymoog-player5/"
            title="Goodymoog Player"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="homeIntro">
        <p>
          Born under New Mexico's vast skies,<br />
          Goodymoog grew up immersed in<br />
          the quiet rhythms of the desert.
        </p>
      </section>
    </div>
  );
}