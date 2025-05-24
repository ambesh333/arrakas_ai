"use client";

export default function PortfolioPage() {
  return (
    <main className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-0 border border-orange-300 rounded-none overflow-hidden">

        {/* Daily tokens deployed - Full Width */}
        <div className="col-span-full p-6 border-b border-orange-300">
          <h2 className="text-lg font-semibold text-orange-100 mb-3">Daily Tokens Deployed</h2>
          <iframe
            src="https://dune.com/embeds/4010816/6752517?darkMode=true"
            className="w-full h-[400px]"
            allowFullScreen
          />
        </div>

        {/* Top Tokens 24h */}
        <div className="p-6 border-r border-orange-300 border-b">
          <h2 className="text-lg font-semibold text-orange-100 mb-3">Top Tokens - 24h</h2>
          <iframe
            src="https://dune.com/embeds/5137851/8467612?darkMode=true"
            className="w-full h-[300px]"
            allowFullScreen
          />
        </div>

        {/* Top Tokens 7d */}
        <div className="p-6 border-b border-orange-300">
          <h2 className="text-lg font-semibold text-orange-100 mb-3">Top Tokens - 7 Days</h2>
          <iframe
            src="https://dune.com/embeds/5138002/8467798?darkMode=true"
            className="w-full h-[300px]"
            allowFullScreen
          />
        </div>

        {/* Top 100 Profitable Wallets - Full Width */}
        <div className="col-span-full p-6">
          <h2 className="text-lg font-semibold text-orange-100 mb-3">
            Top 100 Profitable Wallets (7 Days) - Pump.fun
          </h2>
          <iframe
            src="https://dune.com/embeds/5183138/8531098?darkMode=true"
            className="w-full h-[400px]"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
