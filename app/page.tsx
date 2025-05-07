"use client";

import WalletConnection from "@/components/connectWallet";
import React from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Onboarding from "@/components/onboarding";
import SignInButton from "@/components/SignInButton";

export default function Parent() {
  return (
    <section className="min-h-[calc(100vh-16rem)] text-white flex items-center justify-center text-center px-4">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </section>
  );
}

const Hero = () => {
  return (
    <section id="#Hero">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent animate-gradient mb-6">
              Unleash Web3 with <br />
              <span className="text-white">Arrakas AI</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 px-4 sm:px-0 text-center">
              Arrakas AI is your ultimate Web3 super app — simplifying on-chain interactions with seamless abstraction. From DeFi to NFTs, manage everything in one intuitive, powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WalletConnection />
              <SignInButton/>
              <Onboarding />
            </div>
          </div>
        </div>
        <RetroGrid />
      </div>
    </section>
  );
};
