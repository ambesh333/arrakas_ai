"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Referral() {
  const [copied, setCopied] = useState(false);
  const referralCode = "ARRA-100X-YOU";
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-4">
      <div className="flex max-w-5xl w-full h-[600px] rounded-3xl overflow-hidden shadow-xl gap-4 bg-transparent">
        {/* Left Panel */}
        <div className="flex flex-col items-center justify-between w-[40%] h-full bg-zinc-900/90 rounded-2xl p-0 relative ml-4">
          {/* Combined Logo/Thank You Card */}
          <div className="w-full px-6 mb-6 mt-3">
            <div className="rounded-xl shadow-lg p-6 bg-zinc-800 flex flex-col items-center mt-8">
              <h1 className="text-2xl font-extrabold text-white font-sans mb-2 text-center">Thank you for onboarding!</h1>
              <p className="text-zinc-200 font-mono text-center">You have been credited with <span className="text-blue-400 font-semibold">100 points</span> to use our app.</p>
            </div>
          </div>
          {/* Combined Refer/Copy Card */}
          <div className="w-full px-6 mb-8">
            <div className="rounded-xl shadow p-4 bg-zinc-800 flex flex-col gap-4">
              <div className="flex items-center">
                <span className="text-base text-white font-sans font-semibold">Get extra points by referring your friends</span>
            </div>
              <div className="border border-zinc-700 rounded-xl p-4 flex items-center justify-between">
              <div>
                  <p className="text-xs text-zinc-400 font-sans">Your referral link</p>
                <p className="text-lg font-mono text-white">{referralCode}</p>
              </div>
              <button
                onClick={handleCopy}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-sans transition"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
              </div>
            <Button className="w-full" size="lg" onClick={() => router.push("/chat")}>Explore App</Button>
            </div>
          </div>
          {/* Footer */}
          <div className="w-full flex flex-col gap-4 px-8 pb-4">
            <div className="w-full flex justify-between items-center text-xs text-zinc-400 bg-transparent border-t border-zinc-700/60 pt-4">
            <span className="hover:underline cursor-pointer font-sans">Twitter</span>
            <span className="font-semibold text-white font-mono">arrakas</span>
            <span className="hover:underline cursor-pointer font-sans">Docs</span>
            </div>
          </div>
        </div>

        {/* Right Panel (Image) */}
        <div className="hidden md:block w-[60%] h-full relative rounded-2xl overflow-hidden">
        <video
          src="/thunder_arrakas.mp4"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          />
        </div>

      </div>
    </div>
  );
}
