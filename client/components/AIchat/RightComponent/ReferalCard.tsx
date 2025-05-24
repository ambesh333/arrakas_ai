"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const ReferCard: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://arrakas-ai.vercel.app";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card className="relative w-full h-48 rounded-xl overflow-hidden text-green-100 shadow-lg">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/refer.png"
                    alt="Refer background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-3 h-full flex flex-col items-center text-center">
                <div className="flex-1 flex flex-col justify-center space-y-3">
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">Refer & Earn</h2>
                    <p className="text-base text-white drop-shadow-md max-w-sm">
                        Invite your friends and earn <span className="font-semibold text-green-400">100 points</span> when they join.
                    </p>
                </div>

                <div className="flex-1 flex items-start justify-center pt-2">
                    <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="text-white border-white/50 hover:bg-white/20 backdrop-blur-sm"
                    >
                        {copied ? (
                            <>
                                <Check className="mr-2 h-4 w-4" /> Copied
                            </>
                        ) : (
                            <>
                                <Copy className="mr-2 h-4 w-4" /> Copy Link
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ReferCard;