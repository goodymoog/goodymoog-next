import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Goodymoog Records",
  description:
    "Learn more about Goodymoog Records, the creative project of Théo, a producer and rapper from Los Angeles.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Goodymoog Records",
    description:
      "Learn more about Goodymoog Records, the creative project of Théo, a producer and rapper from Los Angeles.",
    url: "https://www.goodymoog.com/faq",
    siteName: "Goodymoog Records",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Goodymoog Records",
    description:
      "Learn more about Goodymoog Records, the creative project of Théo, a producer and rapper from Los Angeles.",
  },
};

export default function FAQPage() {
  return (
    <>
      <style>{`
        @keyframes sparkleShine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>

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
            marginTop: "-100px",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "56px",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(120deg, #111 0%, #111 46%, rgba(255,255,255,0.75) 50%, #111 54%, #111 100%)",
                backgroundSize: "220% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "sparkleShine 20s linear infinite",
                display: "inline-block",
              }}
            >
              What is Goodymoog?
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Goodymoog Records is the creative project of Théo, a producer and rapper
            from Los Angeles. His work blends experimental electronic music,
            ambient soundscapes, and beat-making into a distinct sonic world.
            His music is both chaotic and calming, flashy and political, and at
            times abrasive. His inspirations range from internet memes and long
            desert walks to birdsong, wind, and other unexpected sounds from
            the natural world.
          </p>
        </div>
      </main>
    </>
  );
}