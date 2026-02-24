import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="page-bg bg-home">
      <Header />

      <div
        className="goodymoog-embed"
        style={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            overflowX: "hidden",
            padding: "40px 16px 0",
            boxSizing: "border-box",
          }}
        >
          <div className="content">
            {/* MAIN */}
            <div className="main-content">
              <h2>2024–2025: New Mexico II</h2>
              <div className="album-box">
                <p>
                  Searching for meditative music to help me study, I created
                  <i> New Mexico</i> as a way to re-experience the state's vivid
                  landscapes and vibrant wildlife. For me, New Mexico represents calm
                  and tranquility—feelings I’ve tried to capture throughout the album.{" "}
                  <a href="https://www.goodymoog.com/new-mexico" target="_blank" rel="noreferrer">
                    Read more
                  </a>
                </p>
              </div>

              <div className="video-row">
                <iframe
                  src="https://www.youtube.com/embed/R_CMnyW23f0"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
                <iframe
                  src="https://www.youtube.com/embed/JMSwQ9VrBBA"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
              </div>

              <h2>2025: Sickwiththeflow</h2>
              <div className="album-box">
                <p>
                  <i>Sickwiththeflow</i> is a raw and unfiltered account of all the
                  things that make me sick to my stomach—toxic friends, strained
                  relationships, excessive overthinking, low self esteem... but it’s
                  also about finding my rhythm in the middle of all that noise.{" "}
                  <a href="https://www.goodymoog.com/sickwiththeflow" target="_blank" rel="noreferrer">
                    Read more
                  </a>
                </p>
              </div>

              <div className="video-row">
                <iframe
                  src="https://www.youtube.com/embed/Cni0061G75M"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
                <iframe
                  src="https://www.youtube.com/embed/wZic1EBhgAI"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
              </div>

              <h2>2026: Warp Drive</h2>
              <div className="album-box">
                <p>
                  <i>Warp Drive</i> is a collection of songs that forced me to
                  destroy my worst nightmares. I now understand that under the veil of
                  anger is sadness. And, under all that sadness is a longing to change
                  our warped vision of the past.
                </p>
              </div>

              <div className="video-row">
                <iframe
                  src="https://www.youtube.com/embed/WHNrpnFbFqk"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
                <iframe
                  src="https://www.youtube.com/embed/W_HmBQmwcAw"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
                />
              </div>

              <h2>2026: Chasing Sunsets™</h2>
              <div className="album-box">
                <p>Chasing love and dreaming under a clearer sky.</p>
              </div>

              <h2>References</h2>
              {/* keep your existing references + sidebar below (unchanged) */}
            </div>

            {/* SIDEBAR */}
            <aside className="sidebar">
              <img src="https://i.imgur.com/RK4VttT.png" alt="Goodymoog" />
              {/* keep the rest of your sidebar exactly as you had it */}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}