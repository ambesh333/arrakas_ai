"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface JoinNowCardProps {
  onNext: () => void;
  onClose: () => void;
}

export default function JoinNowCard({ onNext }: JoinNowCardProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl p-4 space-y-4">
      {/* Top Card */}
      <div className="flex items-center justify-between h-20 rounded-xl bg-[#1a1a1a] p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl overflow-hidden">
            <Image
              src="/arrakus_logo.png"
              alt="Arrakas AI"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Arrakas AI</h3>
            <p className="text-xs text-gray-400">Powered by Solana</p>
          </div>
        </div>

        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center p-1">
          <Image
            src="/solana.png"
            alt="Solana"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Card */}
      <div className="rounded-xl bg-[#1a1a1a] p-6 flex flex-col items-center space-y-6">
        <div className="text-center">
          <p className="text-lg font-medium">The Web3 Super App</p>
          <p className="text-sm text-gray-400 mt-1">All-in-one DeFi Platform</p>
        </div>
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-black font-semibold transition-all"
        >
          Join Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
