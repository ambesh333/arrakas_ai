// components/ConnectWalletModal.tsx
"use client";

import { X } from "lucide-react";

export default function ConnectWalletModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="relative w-[360px] rounded-2xl bg-[#0e0e0e] p-6 text-center shadow-xl border border-white/10">
        {/* Close button */}
        <button className="absolute top-3 right-3 p-1 text-white/60 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {/* Icons */}
        <div className="mb-6 flex justify-center items-center gap-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="text-white/40 text-2xl">⇄</div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold mb-2">Connect Wallet</h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm mb-6">
          Signing in with your wallet is required to get the best experience.
        </p>

        {/* Connect Button */}
        <button className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 transition-all">
          Sign in with Ethereum
        </button>

        {/* Later Option */}
        <button className="mt-3 w-full rounded-full border border-white/10 text-white/80 hover:bg-white/5 py-2 transition-all">
          Do it later
        </button>
      </div>
    </div>
  );
}
