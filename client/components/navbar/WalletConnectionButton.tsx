// WalletConnection.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronDown, LogInIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Jazzicon from "react-jazzicon";
import { useWalletContext } from "@/lib/walletContext"
import axios from "axios";

import { BACKEND_URL } from '@/utils'
import { WalletName } from "@solana/wallet-adapter-base";

const WalletConnection = () => {
  const {
    connected,
    publicKey,
    balance,
    disconnectWallet,
    select,
    wallets,
    connecting,
    signMessage,
  } = useWalletContext();

  const [open, setOpen] = useState<boolean>(false);

  console.log("connected", connected);
  console.log("wallets", wallets);

  const handleWalletSelect = async (walletName: string) => {
    if (walletName) {
      try {
        select(walletName as WalletName);
        setOpen(false);
      } catch (error) {
        console.log("wallet connection err : ", error);
      }
    }
  };

  useEffect(() => {
    async function signAndSend() {
      if (!publicKey || !signMessage) {
        return;
      }

      try {
        const message = new TextEncoder().encode("Sign into VoteChain");
        const signature = await signMessage(message);
        console.log(signature);
        console.log(publicKey);

        const response = await axios.post(`${BACKEND_URL}/v1/user/signin`, {
          signature,
          publicKey: publicKey.toString(),
        });

        console.log("token", response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("signedIn", "true");
      } catch (error) {
        console.error("Error signing message:", error);
      }
    }

    if (connected) {
      signAndSend();
    }
  }, [publicKey, signMessage, connected]);

  const handleDisconnect = async () => {
    disconnectWallet();
    localStorage.setItem("token", "asd");
  };

  return (
    <div className="text-white">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex gap-2 items-center">
          {!connected ? (
            <>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-none border-blue-500"
                >
                  <LogInIcon className="mr-2 h-4 w-4" />
                  {connecting ? "connecting..." : "Connect Wallet"}
                </Button>
              </DialogTrigger>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-none border-[#98ECFF]"
                >
                  <div className="flex items-center gap-2">
                    <Jazzicon
                      diameter={25}
                      seed={Math.round(Math.random() * 10000000)}
                    />
                    <div className="truncate md:w-[150px] w-[100px]">
                      {publicKey}
                    </div>

                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-[240px] rounded-none border-white"
              >
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">SOL Balance</div>

                    {balance ? (
                      <div className="text-lg font-semibold">
                        {balance.toFixed(2)}
                      </div>
                    ) : (
                      <div className="text-lg font-semibold">0</div>
                    )}
                  </div>
                  <Separator />
                  <Button
                    variant="destructive"
                    onClick={handleDisconnect}
                    className="rounded-none"
                  >
                    Disconnect
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <DialogContent className="max-w-[450px] bg-black rounded-none border-[#98ECFF]">
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col justify-start items-center space-y-5 w-[300px] md:w-[400px] overflow-y-auto  p-4 rounded-none">
                {wallets.map((wallet) => (
                  <div
                    key={wallet.adapter.name}
                    className="bg-transparent border border-white p-2 mb-2 w-full"
                  >
                    <Button
                      onClick={() => handleWalletSelect(wallet.adapter.name)}
                      variant={"ghost"}
                      className="h-[60px] hover:bg-transparent hover:text-white text-[20px] text-white font-slackey flex w-full justify-between items-center px-4"
                    >
                      <div className="flex items-center">
                        <Image
                          src={wallet.adapter.icon}
                          alt={wallet.adapter.name}
                          height={30}
                          width={30}
                          className="mr-4"
                        />
                        <div className="font-slackey text-white wallet-name text-[20px] truncate">
                          {wallet.adapter.name}
                        </div>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default WalletConnection;