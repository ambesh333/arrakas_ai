"use client";

import WalletConnection from "@/components/connectWallet";
import React from "react";

export default function Parent() {
  return (
    <section className="min-h-[calc(100vh-16rem)] text-white flex items-center justify-center text-center px-4">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight  bg-clip-text text-transparent animate-gradient">
          Unleash Web3 with <br />
          <span className="text-white">Arrakas AI</span>
        </h1>

        <p className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
          Arrakas AI is your ultimate super app, simplifying Web3 with seamless user abstraction. From DeFi to NFTs, manage all on-chain actions in one powerful, intuitive platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WalletConnection/>
        </div>
      </div>
    </section>
  );
}