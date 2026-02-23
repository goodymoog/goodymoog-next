import Header from "@/components/Header";

export default function ArtPortfolio() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="border-b border-gray-300 bg-white px-6 py-12">
          <h1 className="text-3xl tracking-tight font-semibold">
            Art Portfolio
          </h1>
          <p className="text-gray-600 mt-2">
            Selected visual works by Théo Heron
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

          <div className="flex justify-between border-b border-gray-200 pb-4">
            <a href="/artportfolio/desert-series" className="font-medium hover:opacity-60 transition">
              Desert Series
            </a>
            <span className="text-sm text-gray-500">
              Photography — 2026
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-4">
            <a href="/artportfolio/warp-visuals" className="font-medium hover:opacity-60 transition">
              Warp Visuals
            </a>
            <span className="text-sm text-gray-500">
              Digital Art — 2026
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-4">
            <a href="/artportfolio/new-mexico-study" className="font-medium hover:opacity-60 transition">
              New Mexico Study
            </a>
            <span className="text-sm text-gray-500">
              Mixed Media — 2025
            </span>
          </div>

        </div>
      </main>
    </>
  );
}