"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const { publicKey, signMessage } = useWallet();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!publicKey || !signMessage) return;
    setLoading(true);
    try {
      const message = "Sign in to Arrakas AI";
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await signMessage(encodedMessage);
      const signature = Buffer.from(signedMessage).toString("hex");

      const res = await fetch("http://localhost:8000/auth/signin", {
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
          router.push("/chat");
        } else {
          console.error("Sign in failed", res.status);
        }
      } else {
        // If 401 or 404, treat as not signed up
        console.error("Sign in failed", res.status);
      }
    } catch (err) {
      console.error("Sign in failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleSignIn} disabled={loading }>
      {loading ? "Signing In..." : "Sign In"}
    </Button>
  );
}


