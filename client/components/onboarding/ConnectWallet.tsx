"use client";

import React, { useEffect, useState, useCallback } from "react";
import type { FC } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletName } from "@solana/wallet-adapter-base";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setSigned } from '@/store/authSlice';
import { useRouter } from 'next/navigation';


interface ConnectWalletProps {
  onConnect?: () => void;
}

const ConnectWallet: FC<ConnectWalletProps> = ({ onConnect }) => {
  const {
    wallets,     
    publicKey,
    connect,
    select,
    signMessage,
  } = useWallet();

  const hasSigned = useSelector((s: RootState) => s.auth.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletName | null>(null);
  const [mounted, setMounted] = useState(false);

  const isConnected = Boolean(publicKey);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWalletSelect = useCallback(
    async (walletName: WalletName) => {
      setLoading(true);
      try {
        setSelectedWallet(walletName);
        select(walletName);
        await connect(); 
      } catch (err) {
        console.error("Wallet connection failed:", err);
      } finally {
        setLoading(false);
      }
    },
    [select, connect]
  );

  const handleSign = useCallback(async () => {
    if (!publicKey || !signMessage) return;
    setLoading(true);
    try {
      const message = "Sign in to Arrakas AI";
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await signMessage(encodedMessage);
      const signature = Buffer.from(signedMessage).toString("hex");

      const baseEndpoint = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseEndpoint}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
          signature,
        }),
      });
      const data = await res.json();
      if (data.user) {
        dispatch(setSigned());
        if (onConnect) onConnect();
        router.push("/chat");
      } else {
        // Handle sign-up failure
      }
    } catch (err) {
      console.error("Sign in failed", err);
    } finally {
      setLoading(false);
    }
  }, [publicKey, signMessage, dispatch, router, onConnect]);

  // const handleDisconnect = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     await disconnect();
  //     dispatch(resetSigned());
  //     setSelectedWallet(null);
  //   } catch (err) {
  //     console.error("Disconnect failed", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [disconnect, dispatch]);

  useEffect(() => {
    if (isConnected && !hasSigned && selectedWallet) {
      handleSign();
    }
  }, [isConnected, hasSigned, selectedWallet, handleSign]); 

  if (!mounted) return null;

  return (
    <div className="flex w-full h-full items-center justify-center p-4">
      <div className="flex max-w-5xl w-full h-[600px] rounded-3xl overflow-hidden shadow-xl gap-4 bg-transparent">
        {/* Left Panel */}
        <div className="flex flex-col items-center justify-between w-[40%] h-full bg-zinc-800 rounded-2xl p-0 relative">
          <div className="w-full flex flex-col items-center pt-8 ">
            <Image src="/arrakus_logo-transparent.png" alt="Site Logo" width={48} height={48} className="rounded-md" />
          </div>

          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h1 className="text-3xl font-extrabold mb-2 text-white font-sans tracking-tight">Connect Wallet</h1>
            <p className="text-base text-zinc-200 mb-8 text-center max-w-xs font-light font-mono">Connect your web3 wallet to get started</p>

            <div className="flex flex-col gap-4 w-full px-8">
              {wallets.map((wallet) => (
                <button
                  key={wallet.adapter.name}
                  disabled={loading}
                  onClick={() => handleWalletSelect(wallet.adapter.name)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 font-normal font-mono transition"
                >
                  <span>{wallet.adapter.icon ? <Image src={wallet.adapter.icon} alt="icon" width={18} height={18} /> : <X size={18} />}</span>
                  {wallet.adapter.name}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-xs text-zinc-400 bg-transparent px-8 py-4 border-t border-zinc-700/60">
            <span className="hover:underline cursor-pointer font-sans">Twitter</span>
            <span className="font-semibold text-white font-mono">arrakas</span>
            <span className="hover:underline cursor-pointer font-sans">Docs</span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="hidden md:block w-[60%] h-full relative rounded-2xl overflow-hidden">
          <Image
            src="/connect_walletbg.jpg"
            alt="Connect Wallet Background"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
