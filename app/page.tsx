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
        <p>
          Born under New Mexico's vast skies,<br />
          Goodymoog grew up immersed in<br />
          the quiet rhythms of the desert.
        </p>
      </section>
    </div>
  );
}