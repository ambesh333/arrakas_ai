"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import JoinNowCard from "./JoinNowCard";
import ConnectWalletModal from "./ConnectWalletModal";

import { cn } from "@/lib/utils";

type Step = {
  key: string;
  component: React.ComponentType<{ onNext: () => void; onClose: () => void }>;
};

const steps: Step[] = [
  { key: "join", component: JoinNowCard },
  { key: "connect", component: ConnectWalletModal },
];

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const StepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xl">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal container */}
      <div className="relative z-10 w-[700px] h-[700px] rounded-2xl border bg-background shadow-xl overflow-hidden">
        {/* Background */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
          )}
        />

        {/* Step Content */}
        <div className="relative z-20 flex h-full items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[currentStep].key}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              <StepComponent onNext={handleNext} onClose={onClose} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>,
    document.body
  );
}
