import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="goodymoog-embed"
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden", // prevents sideways overflow from iframes/sidebar etc.
      }}
    >
      {/* PAGE CONTENT */}
      <div
        className="container"
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px", // prevents content from touching edges
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
                <a
                  href="https://www.goodymoog.com/new-mexico"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <a
                  href="https://www.goodymoog.com/sickwiththeflow"
                  target="_blank"
                  rel="noreferrer"
                >
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

            {/* REFERENCES */}
            <h2>References</h2>
            <ol className="references">
              <li>
                “New Mexico.” <i>Wikipedia</i>.{" "}
                <a href="https://en.wikipedia.org/wiki/New_Mexico" target="_blank" rel="noreferrer">
                  https://en.wikipedia.org/wiki/New_Mexico
                </a>
              </li>
              <li>
                Théo. “Galactic Dreams (audio).” <i>YouTube</i>, March 18, 2024.{" "}
                <a href="https://www.youtube.com/watch?v=R_CMnyW23f0" target="_blank" rel="noreferrer">
                  https://www.youtube.com/watch?v=R_CMnyW23f0
                </a>
              </li>
              <li>
                Ladisco. “Giorgio Moroder In The Studio (1977).” <i>YouTube</i>, April 19, 2021.{" "}
                <a href="https://www.youtube.com/watch?v=O0TdCwq7q88" target="_blank" rel="noreferrer">
                  https://www.youtube.com/watch?v=O0TdCwq7q88
                </a>
              </li>
              <li>
                “Ambient 1: Music for Airports.” <i>Wikipedia</i>.{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ambient_1:_Music_for_Airports"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://en.wikipedia.org/wiki/Ambient_1:_Music_for_Airports
                </a>
              </li>
              <li>
                “Moog Synthesizer.” <i>YouTube</i>.{" "}
                <a href="https://www.youtube.com/watch?v=Cni0061G75M" target="_blank" rel="noreferrer">
                  https://www.youtube.com/watch?v=Cni0061G75M
                </a>
              </li>
              <li>
                “Mac Miller.” <i>Wikipedia</i>.{" "}
                <a href="https://en.wikipedia.org/wiki/Mac_Miller" target="_blank" rel="noreferrer">
                  https://en.wikipedia.org/wiki/Mac_Miller
                </a>
              </li>
            </ol>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <img src="https://i.imgur.com/RK4VttT.png" alt="Goodymoog" />

            <div className="logo-row">
              <a
                href="https://open.spotify.com/artist/0uplUm0m3nTzTrfj6aLRoS?si=OVTFkGFrSEedy7Hu4vqnYw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  alt="Spotify"
                />
              </a>
              <a
                href="https://music.apple.com/us/artist/th%C3%A9o/1726085364"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/256px-Apple_Music_icon.svg.png"
                  alt="Apple Music"
                />
              </a>
              <a
                href="https://music.amazon.com/artists/B001HWRJEK/th%C3%A9o"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Stacked_Amazon_Music_WhiteOnCharcoal_Circle_RGB.png/512px-Stacked_Amazon_Music_WhiteOnCharcoal_Circle_RGB.png"
                  alt="Amazon Music"
                />
              </a>
              <a href="https://goodymoog.bandcamp.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bandcamp-button-bc-circle-aqua.svg/512px-Bandcamp-button-bc-circle-aqua.svg.png"
                  alt="Bandcamp"
                />
              </a>
              <a href="https://bsky.app/profile/goodymoog.bsky.social" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/512px-Bluesky_Logo.svg.png?20240211144739"
                  alt="Bluesky"
                />
              </a>
              <a href="https://instagram.com/goodymoog" target="_blank" rel="noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
              </a>
            </div>

            <p><strong>Genres:</strong> Electronic &amp; Rap</p>
            <p><strong>Occupation:</strong> Rapper</p>
            <p><strong>Years Active:</strong> 2004 – Present</p>

            <h3>External links</h3>
            <ul className="sidebar-list">
              <li><a href="https://music.apple.com/us/artist/th%C3%A9o/1726085364" target="_blank" rel="noreferrer">Apple Music</a></li>
              <li><a href="https://open.spotify.com/artist/0uplUm0m3nTzTrfj6aLRoS" target="_blank" rel="noreferrer">Spotify</a></li>
              <li><a href="https://www.youtube.com/@goodymoog/featured" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://soundcloud.com/goodymoog" target="_blank" rel="noreferrer">SoundCloud</a></li>
              <li><a href="https://goodymoog.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a></li>
            </ul>

            <h3>More Art</h3>
            <ul className="sidebar-list">
              <li><a href="https://www.goodymoog.com/artportfolio" target="_blank" rel="noreferrer">Art Portfolio</a></li>
              <li><a href="https://www.goodymoog.com/remixes" target="_blank" rel="noreferrer">Remix/Unreleased</a></li>
              <li><a href="https://www.goodymoog.com/press" target="_blank" rel="noreferrer">Photos</a></li>
            </ul>

            <h3>Interesting</h3>
            <ul className="sidebar-list">
              <li><a href="https://www.youtube.com/watch?v=6u3v1DK6UF4" target="_blank" rel="noreferrer">Video 1</a></li>
              <li><a href="https://www.youtube.com/watch?v=teBQMlNX-3I" target="_blank" rel="noreferrer">Video 2</a></li>
              <li><a href="https://www.goodymoog.com/game" target="_blank" rel="noreferrer">Galaga</a></li>
              <li><a href="https://www.goodymoog.com/coolmaps" target="_blank" rel="noreferrer">Cool Maps</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}