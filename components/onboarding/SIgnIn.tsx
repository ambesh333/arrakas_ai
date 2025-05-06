"use client";

import React, { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SignInProps {
  onJoinNow?: () => void;
}

const SignIn: FC<SignInProps> = ({ onJoinNow }) => {
  const [copied, setCopied] = useState(false);
  const referralCode = "ARRA-100X-YOU";

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
            <div className="rounded-xl shadow-lg p-6 bg-zinc-800 flex flex-col items-center mt-2">
              <h1 className="text-2xl font-extrabold text-white font-sans mb-2 text-center">Welcome to the Future of Web3</h1>
              <p className="text-zinc-200 font-mono text-center mb-4 text-sm">We're blending AI with Web3 to make decentralized tech seamless for everyone. No jargon, no complexity — just powerful tools wrapped in simplicity.</p>
              <ul className="w-full flex flex-col gap-2 mb-4">
                <li className="flex items-center gap-2 text-zinc-100 font-sans text-base">
                  <span className="text-green-400"><Check size={18} /></span>
                  AI-powered onboarding with zero friction
                </li>
                <li className="flex items-center gap-2 text-zinc-100 font-sans text-base">
                  <span className="text-green-400"><Check size={18} /></span>
                  Smart, secure sign-in — no seed phrases or passwords
                </li>
                <li className="flex items-center gap-2 text-zinc-100 font-sans text-base">
                  <span className="text-green-400"><Check size={18} /></span>
                  Personalized dashboard powered by your activity
                </li>
              </ul>
              <div className="w-full flex flex-col items-center gap-4">
                <span className="text-blue-400 font-semibold text-base font-sans text-center">Start your journey — it only takes a tap.</span>
                <Button className="w-full mt-2" size="lg" onClick={onJoinNow}>Join Now</Button>
              </div>
            </div>
          
          </div>
          {/* Footer */}
          <div className="w-full flex justify-between items-center text-xs text-zinc-400 bg-transparent px-8 py-4 border-t border-zinc-700/60">
            <span className="hover:underline cursor-pointer font-sans">Twitter</span>
            <span className="font-semibold text-white font-mono">arrakas</span>
            <span className="hover:underline cursor-pointer font-sans">Docs</span>
          </div>
        </div>

        {/* Right Panel (Image) */}
        <div className="hidden md:block w-[60%] h-full relative rounded-2xl overflow-hidden">
        <video
          src="/gold_arrakas.mp4"
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

export default SignIn;
