export default function Home() {
  return (
    <div className="homePage">
      {/* NO <Header /> HERE */}

      <section className="homeHero">
        <div className="playerFrame">
          <iframe
            src="https://goodymoog.github.io/goodymoog-player5/"
            title="Goodymoog Player"
          />
        </div>
      </section>

      <section className="homeIntro">
        <p style={{ color: "white" }}>
          Born under New Mexico’s vast skies, Goodymoog grew up immersed in the quiet rhythms of the desert. Rooted in patience and exploration, Goodymoog often wanders the desert at dawn, attuning himself to the distant hum of mustard coyotes.
        </p>
      </section>
    </div>
  );
}