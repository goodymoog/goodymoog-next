export default function Home() {
  return (
    <div className="homePage">
      <section className="homeHero">
        <div className="playerFrame">
          <iframe
            src="https://goodymoog.github.io/goodymoog-player5/"
            title="Goodymoog Player"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <section className="homeIntro">
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily:
                "AVAntiversLatence-Regular, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: "normal",
              fontSize: "100%",
              color: "#F0EFEA",
            }}
          >
            Born under New Mexico’s vast skies, Goodymoog grew up immersed in the
            quiet rhythms of the desert. Rooted in patience and exploration,
            Goodymoog often wanders the desert at dawn, attuning himself to the
            distant hum of mustard coyotes.
          </p>

          <a href="https://www.goodymoog.com/learn-more">Read more</a>
        </div>
      </section>
    </div>
  );
}