// components/ConnectWalletModal.tsx
"use client";

import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ConnectWalletModalProps {
  onClose: () => void;
}

export default function ConnectWalletModal({  onClose }: ConnectWalletModalProps) {

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xl">
      {/* Close on background click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal box */}
      <div className="relative z-10 w-[350px] rounded-2xl bg-[#0e0e0e] border border-[#222] p-6 shadow-2xl">
        {/* Beams/Grid Background */}
        <div className="absolute inset-0 z-0 bg-[url('/beams-grid.svg')] bg-cover opacity-10 rounded-2xl" />

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white/60 hover:text-white z-10"
          onClick={onClose}
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Wallet Logos */}
          <div className="flex items-center gap-3">
            <div className="bg-[#1c1c1c] p-2 rounded-xl">
              <Image src="/arrakus_logo.png" alt="Arrakus" width={32} height={32} />
            </div>
            <span className="text-white text-lg font-bold">↔</span>
            <div className="bg-[#1c1c1c] p-2 rounded-xl">
              <Image src="/wallet_icon.png" alt="Wallet" width={32} height={32} />
            </div>
          </div>

          {/* Text */}
          <h2 className="text-white text-xl font-semibold">Connect Wallet</h2>
          <p className="text-sm text-gray-400">
            Signing in with your wallet is required to get the best experience.
          </p>

          {/* CTA Buttons */}
          <button className="mt-4 w-full py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition">
            Sign in with Ethereum
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-700 text-gray-400 rounded-full hover:text-white transition"
          >
            Do it later
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
