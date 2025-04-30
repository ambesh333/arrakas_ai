// components/ConnectWalletModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useWalletContext } from "@/lib/walletContext";
import { WalletName } from "@solana/wallet-adapter-base";

interface ConnectWalletModalProps {
  onNext: () => void;
  onClose: () => void;
}

export default function ConnectWalletModal({
  onNext,
  onClose,
}: ConnectWalletModalProps) {
  const {
    connected,
    publicKey,
    select,
    wallets,
    signMessage,
  } = useWalletContext();

  // Local state: have we clicked “Sign with Solana”?
  const [showWalletList, setShowWalletList] = useState(false);

  const handleSignWithSolana = () => {
    setShowWalletList(true);
  };

  const handleWalletSelect = async (name: string) => {
    try {
      await select(name as WalletName);
      // wait for `connected` → useEffect will fire
    } catch (err) {
      console.error("wallet connection err:", err);
    }
  };

  // As soon as `connected` flips true, sign the message, call backend, then advance
  useEffect(() => {
    if (!connected || !publicKey || !signMessage) return;
    (async () => {
      try {
        onNext();
      } catch (err) {
        console.error("Error signing message:", err);
      }
    })();
  }, [connected, publicKey, signMessage, onNext]);

  return (
    <div className="w-full max-w-sm rounded-2xl p-4 space-y-4">
      {/* Modal Container */}
      <div className="relative z-10 w-full rounded-2xl bg-[#0e0e0e] border border-[#222] p-6 shadow-2xl flex flex-col items-center space-y-6">
        {/* Header */}
        <h2 className="text-white text-xl font-semibold">Connect Wallet</h2>
        <p className="text-sm text-gray-400 text-center">
          Signing in with your wallet is required to get the best experience.
        </p>

        {/* Step 1: Custom Blue Button */}
        {!showWalletList ? (
          <button
            onClick={handleSignWithSolana}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition"
          >
            Sign with Solana
          </button>
        ) : (
          /* Step 2: List of Wallet Adapters */
          <div className="w-full flex flex-col gap-3 overflow-y-auto">
            {wallets.map((wallet) => (
              <button
                key={wallet.adapter.name}
                onClick={() => handleWalletSelect(wallet.adapter.name)}
                className="w-full py-2 flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
              >
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  width={24}
                  height={24}
                />
                <span className="flex-1 text-left">{wallet.adapter.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Fallback Close */}
        <button
          onClick={onClose}
          className="w-full py-3 border border-gray-700 text-gray-400 rounded-full hover:text-white transition"
        >
          Do it later
        </button>
      </div>
    </div>
  );
}
