"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const wallets = [
  { name: "Coinbase Wallet", icon: <X size={18} /> },
  { name: "MetaMask", icon: <X size={18} /> },
  { name: "Rabby", icon: <X size={18} /> },
  { name: "WalletConnect", icon: <X size={18} /> },
];

export default function ConnectWallet() {
  return (
    <div className="flex w-full h-full items-center justify-center  p-4">
      <div className="flex max-w-5xl w-full h-[600px] rounded-3xl overflow-hidden shadow-xl gap-4 bg-transparent">
        {/* Left Panel */}
        <div className="flex flex-col items-center justify-between w-[40%] h-full bg-zinc-800 rounded-2xl p-0 relative">
          {/* Top X Icon */}
          <div className="w-full flex flex-col items-center pt-8 ">
            <Image src="/arrakus_logo-transparent.png" alt="Site Logo" width={48} height={48} className="rounded-md" />
          </div>
          {/* Centered Content */}
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h1 className="text-3xl font-extrabold mb-2 text-white font-sans tracking-tight">Connect Wallet</h1>
            <p className="text-base text-zinc-200 mb-8 text-center max-w-xs font-light font-mono">Connect your web3 wallet to get started</p>
            <div className="flex flex-col gap-4 w-full px-8">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 font-normal font-mono transition"
                >
                  <span>{wallet.icon}</span> {wallet.name}
                </button>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="w-full flex justify-between items-center text-xs text-zinc-400 bg-transparent px-8 py-4 border-t border-zinc-700/60">
            <span className="hover:underline cursor-pointer font-sans">Twitter</span>
            <span className="font-semibold text-white font-mono">arrakas</span>
            <span className="hover:underline cursor-pointer font-sans">Docs</span>
          </div>
        </div>
        {/* Right Panel */}
        <div className="hidden md:block w-[60%] h-full relative rounded-2xl overflow-hidden">
          <Image
            src="/connect_walletbg.jpg"
            alt="Connect Wallet Background"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
