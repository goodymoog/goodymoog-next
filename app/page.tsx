import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* Fixed animated background */}
      <div className="fixedHero" aria-hidden="true">
        <iframe
          src="https://goodymoog.github.io/goodymoog-player5/"
          title="Goodymoog Player Background"
        />
        <div className="fixedHeroOverlay" />
      </div>

      {/* Real page content */}
      <div className="pageOnTop">
        <Header />

        <div className="goodymoog-embed">
          {/* KEEP your entire homepage content here unchanged */}
        </div>
      </div>
    </>
  );
}