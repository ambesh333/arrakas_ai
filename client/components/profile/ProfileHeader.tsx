'use client'
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import GlowButton from '@/components/ui/glowButton';
import { useWalletContext } from '@/lib/walletContext';
import { useEffect, useState } from 'react';
import NoiseWrapper from '../ui/noise-wrapper';
import LightMorphWrapper from '../ui/lightmorph-wrapper';

const getMorphColors = (lastChar: string) => {
  if (/[0-7a-g]/i.test(lastChar)) {
    return { gardient1: 'bg-green-300', gradient2: 'bg-green-400' };
  } else if (/[8-fh-n]/i.test(lastChar)) {
    return { gardient1: 'bg-blue-300', gradient2: 'bg-purple-400' };
  } else {
    return { gardient1: 'bg-orange-300', gradient2: 'bg-yellow-200' };
  }
};

const ProfileHeader = () => {
  const { publicKey, balance, disconnectWallet } = useWalletContext();
  const [solPrice, setSolPrice] = useState<number | null>(null);
  const [loadingPrice, setLoadingPrice] = useState(false);

  useEffect(() => {
    setLoadingPrice(true);
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
      .then((res) => res.json())
      .then((data) => {
        setSolPrice(data?.solana?.usd ?? null);
      })
      .catch(() => setSolPrice(null))
      .finally(() => setLoadingPrice(false));
  }, []);

  const profilePic = '/profile-placeholder.png';
  const address = publicKey ? `${publicKey.slice(0, 6)}...${publicKey.slice(-6)}` : 'Not Connected';
  const solBalance = balance !== null ? balance : 0;
  const usdBalance = solPrice !== null ? (solBalance * solPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }) : null;
  const lastChar = publicKey ? publicKey.slice(-1).toLowerCase() : '0';
  const morphColors = getMorphColors(lastChar);

  return (
    <NoiseWrapper 
      className='rounded-2xl'
      opacity={0.27}
    >
      <Card className="relative p-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br">
        {/* Top Glow (darker, more purple, less white) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-purple-900/40 via-purple-700/30 to-purple-900/40 blur-2xl opacity-50 pointer-events-none z-10" />
        <div className="flex items-center w-full relative z-20 gap-4">
          {/* Profile Pic */}
          <LightMorphWrapper
            gardient1={morphColors.gardient1}
            gradient2={morphColors.gradient2}
            inerContainerClass="h-[100px] w-[100px]"
          >
            <Avatar className="w-12 h-12 rounded-xl">
              <AvatarImage src={profilePic} alt="Profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </LightMorphWrapper>
          {/* Address + Balance */}
          <div className="flex flex-col justify-center min-w-[120px]">
            <div className="text-xs text-zinc-400 font-mono truncate">{address}</div>
            <span className="text-3xl font-bold text-white mt-1">{solBalance.toFixed(2)} SOL</span>
            <span className="text-base text-zinc-400 mt-1">
              {loadingPrice ? 'Loading USD...' : usdBalance ? usdBalance : '--'}
            </span>
          </div>
          <div className="flex-1" />
          <GlowButton
            variant="red"
            className="px-8 py-3 text-base font-semibold"
            onClick={() => disconnectWallet()}
          >
            Disconnect Wallet
          </GlowButton>
        </div>
      </Card>
    </NoiseWrapper>
  );
};

export default ProfileHeader; 