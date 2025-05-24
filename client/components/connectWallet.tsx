// components/ConnectWallet.tsx
"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import type { WalletName } from "@solana/wallet-adapter-base";
import Image from "next/image";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export default function ConnectWallet() {
  const { publicKey, wallets, select, connect, signMessage, disconnect } =
    useWallet();
  const router = useRouter();

  // Redux-driven signed state
  const hasSigned = useSelector((s: RootState) => s.auth.auth);

  // Local UI state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletName | "">("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isConnected = Boolean(publicKey);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically trigger signing once connected for the first time
  useEffect(() => {
    if (isConnected && !hasSigned && selectedWallet) {
      handleSign();
    }
  }, [isConnected, hasSigned, selectedWallet]); // eslint-disable-line react-hooks/exhaustive-deps

  // Main button: connect (opens modal) or disconnect
  const handleButtonClick = () => {
    if (!isConnected) {
      setIsModalOpen(true);
    } else {
      handleDisconnect();
    }
  };

  // Wallet selection → connect
  const handleWalletSelect = useCallback(
    async (walletName: WalletName) => {
      setSelectedWallet(walletName);
      select(walletName);
      setIsModalOpen(false);

      setLoading(true);
      try {
        await connect();
      } catch (err) {
        console.error("Connection failed", err);
      } finally {
        setLoading(false);
      }
    },
    [select, connect]
  );

  // Sign off-chain message
  const handleSign = useCallback(async () => {
    if (!publicKey || !signMessage) return;
    setLoading(true);
    try {
      const msg = new TextEncoder().encode(
        "Sign to verify your identity on Arrakas AI"
      );
      const signedBuf = await signMessage(msg);
      if (signedBuf) {
        router.push("/chat");
      }

    } catch (err) {
      console.error("Signing failed", err);
    } finally {
      setLoading(false);
    }
  }, [publicKey, signMessage, router]);

  // Disconnect and reset auth
  const handleDisconnect = useCallback(async () => {
    setLoading(true);
    try {
      await disconnect();
      setSelectedWallet("");
    } catch (err) {
      console.error("Disconnect failed", err);
    } finally {
      setLoading(false);
    }
  }, [disconnect]);

  // Determine button label
  let label: string;
  if (loading) {
    label = "Processing...";
  } else if (!isConnected) {
    label = "Connect Wallet";
  } else if (isConnected && !hasSigned) {
    label = "Signing...";
  } else {
    label = "Disconnect Wallet";
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleButtonClick}
        disabled={loading}
        className={`
          relative px-6 py-3 rounded-lg font-medium text-white
          bg-blue-500/20 backdrop-blur-md border border-blue-400/30
          shadow-lg hover:bg-blue-500/30 transition-all duration-300
          flex items-center justify-center gap-2 min-w-[180px]
          ${isConnected && !hasSigned
            ? "bg-green-500/20 border-green-400/30 hover:bg-green-500/30"
            : ""}
          ${hasSigned
            ? "bg-red-500/20 border-red-400/30 hover:bg-red-500/30 animate-pulse"
            : ""}
        `}
      >
        {label}
      </button>

      {isModalOpen && mounted && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-64 rounded-lg
                     bg-white/10 backdrop-blur-lg border border-blue-400/30
                     shadow-xl overflow-hidden z-10"
        >
          <div className="flex items-center justify-between p-3 border-b border-blue-400/20">
            <h3 className="font-medium text-white">Select Wallet</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {wallets.map(({ adapter }) => (
              <button
                key={adapter.name}
                onClick={() =>
                  handleWalletSelect(adapter.name as WalletName)
                }
                className="w-full p-3 flex items-center gap-3 hover:bg-blue-500/20
                           transition-colors duration-200 text-white border-b border-blue-400/10
                           last:border-b-0"
              >
                {adapter.icon && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={adapter.icon}
                      alt={adapter.name}
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                <span>{adapter.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
