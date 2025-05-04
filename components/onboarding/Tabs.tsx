"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ConnectWallet from "./ConnectWallet";
import Referral_Earn from "./ReferalProgram";
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface OnboardingTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "Sign In",
    label: "Sign In",
    content: (
        <div className="w-full h-full flex items-center justify-center"><ConnectWallet /></div>
      ),
  },
  {
    id: "Connect Wallet",
    label: "Connect Wallet",
    content: (
      <div className="w-full h-full flex items-center justify-center"><ConnectWallet /></div>
    ),
  },
  {
    id: "Referral",
    label: "Referral",
    content: (
        <div className="w-full h-full flex items-center justify-center"><Referral_Earn /></div>
      ),
  },
];


const OnboardingTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: OnboardingTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-[90%] h-[90%] flex flex-col gap-y-1", className)}>
      <div className="flex gap-2 flex-wrap justify-center bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium rounded-lg outline-none transition-colors",
              activeTab === tab.id
                ? "bg-white text-black shadow-lg"
                : "text-white hover:bg-[#222]/60"
            )}
            style={{ minWidth: 90 }}
          >
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default OnboardingTabs;