"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import GlowButton from "./ui/glowButton";
import OnboardingModal, { OnboardingModalRef } from "./onboarding/OnboardingModal";
import { useDispatch } from 'react-redux';
import { setSigned } from '@/store/authSlice';

export default function SignInButton() {
  const modalRef = useRef<OnboardingModalRef>(null);
  const { publicKey, signMessage } = useWallet();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      if (!publicKey || !signMessage) {
        modalRef.current?.open();
        return;
      }
      const message = "Sign in to Arrakas AI";
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await signMessage(encodedMessage);
      const signature = Buffer.from(signedMessage).toString("hex");

      const baseEndpoint = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseEndpoint}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
          signature,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          dispatch(setSigned());
          router.push("/chat");
        } else {
          modalRef.current?.open();
        }
      } else {
        modalRef.current?.open();
      }
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "name" in err &&
        (err as { name?: string }).name === "WalletNotSelectedError"
      ) {
        modalRef.current?.open();
      } else {
        console.error("Sign in failed", err);
        modalRef.current?.open();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div
      onClick={!loading ? handleSignIn : undefined}
      className={loading ? 'pointer-events-none opacity-60' : ''}
      style={{ display: 'inline-block' }}
    >
      <GlowButton className="w-full px-10 text-lg" variant={"blue"}>
        {loading ? "Signing In..." : "Sign In"}
      </GlowButton>
    </div>
    <OnboardingModal ref={modalRef} />
    </>
  );
}


