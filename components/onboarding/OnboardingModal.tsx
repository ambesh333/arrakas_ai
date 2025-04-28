// components/OnboardingModal.tsx
"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { DotPattern } from "@/components/magicui/dot-pattern";
import JoinNowCard from "./JoinNowCard";

import { cn } from "@/lib/utils";
import ConnectWalletModal from "./ConnectWalletModal";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState<"join" | "connect">("join");

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xl">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-[700px] h-[700px] rounded-2xl border bg-background shadow-xl overflow-hidden">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="relative z-20 flex h-full items-center justify-center">
          {step === "join" ? (
            <JoinNowCard
              onClose={onClose}
              onJoinClick={() => setStep("connect")}
            />
          ) : (
            <ConnectWalletModal onClose={onClose} />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
