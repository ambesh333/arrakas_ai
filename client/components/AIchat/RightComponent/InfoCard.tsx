"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const InfoCard: React.FC = () => {    
    return (
            <Card className="bg-transparent backdrop-blur-sm p-4 w-full">
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                            src="/sendToken.png"
                            alt="Send Token"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                            src="/swapToken.png"
                            alt="Swap Token"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                            src="/marketAnalysis.png"
                            alt="market analysis"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Card>
    );
};

export default InfoCard;
