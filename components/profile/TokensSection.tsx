'use client'
import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { useWalletContext } from '@/lib/walletContext';
import TradingViewChart from '@/components/ui/TradingViewChart';
import { useTokenBalanceQuery } from '@/hooks/useTokenBalanceQuery';
import { Coins } from 'lucide-react';
import Image from 'next/image';

const TokensSection = () => {
  const { publicKey } = useWalletContext();
  let address: string | undefined = undefined;
  if (publicKey) {
    if (typeof publicKey === 'string') {
      address = publicKey;
    } else if (
      typeof publicKey === 'object' &&
      publicKey !== null &&
      'toBase58' in publicKey &&
      typeof (publicKey as { toBase58: () => string }).toBase58 === 'function'
    ) {
      address = (publicKey as { toBase58: () => string }).toBase58();
    }
  }
  const { data, isLoading, error } = useTokenBalanceQuery(address);
  // const data=
  // {
  //   tokens: [
  //     {
  //       mint: 'F8HoBia4ye1DqPPQQGp9uHXtybbfGwTFYsUGiDK6yp5f',
  //       amount: '167785.587603',
  //       decimals: 6,
  //       name: 'DeepCore AIㅤ',
  //       symbol: 'DPCORE ',
  //       logo: 'https://logo.moralis.io/solana-mainnet_F8HoBia4ye1DqPPQQGp9uHXtybbfGwTFYsUGiDK6yp5f_26a936a999abe78680c8b793e9c58781.webp',
  //       isVerifiedContract: false,
  //       possibleSpam: false
  //     }
  //   ]
    
  // }
  // const isLoading = false;
  // const error = null;
  const [selectedTokenMint, setSelectedTokenMint] = useState<string | null>(null);

  // Sort tokens by amount (descending)
  const sortedTokens = useMemo(() => {
    if (!data?.tokens) return [];
    return [...data.tokens].sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
  }, [data]);

  // Select the first token by default
  const selectedToken = useMemo(() => {
    if (!sortedTokens.length) return null;
    return (
      sortedTokens.find((t) => t.mint === selectedTokenMint) || sortedTokens[0]
    );
  }, [sortedTokens, selectedTokenMint]);

  // Set default selected token on load
  useMemo(() => {
    if (sortedTokens.length && !selectedTokenMint) {
      setSelectedTokenMint(sortedTokens[0].mint);
    }
  }, [sortedTokens, selectedTokenMint]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center mb-2 gap-2">
        <Coins className="w-8 h-8 text-green-400 drop-shadow" />
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans drop-shadow-sm">Your Tokens</h2>
      </div>
      
      <Card className="w-full bg-zinc-900/80 rounded-2xl shadow-xl p-4 flex flex-col gap-4">
        {/* Chart Section */}
        <div className="w-full flex flex-col gap-2">
          {selectedToken ? (
            <TradingViewChart symbol={`${selectedToken.symbol.replace(/\s/g, '')}USDT`} />
          ) : null}
        </div>
        {/* Tokens Table Section */}
        <div className="w-full">
          {isLoading ? (
            <div className="w-full h-96 relative">
              <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-xl z-10" />
            </div>
          ) : error ? (
            <div className="p-4 text-red-400">Failed to fetch tokens</div>
          ) : data && sortedTokens.length > 0 ? (
            <div className="overflow-y-auto max-h-[320px]">
              <table className="min-w-full text-left">
                <tbody>
                  {sortedTokens.map((token) => (
                    <tr
                      key={token.mint}
                      className={`cursor-pointer transition-colors hover:bg-zinc-800/60 ${selectedToken?.mint === token.mint ? 'bg-blue-900/60 border-l-4 border-blue-500' : ''}`}
                      onClick={() => setSelectedTokenMint(token.mint)}
                    >
                      <td className="p-3 flex items-center gap-3">
                        {token.logo ? (
                          <Image src={token.logo} alt={token.symbol} width={32} height={32} className="w-8 h-8 rounded-full bg-zinc-700" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-300">
                            {token.symbol?.slice(0, 2) || '?'}
                          </div>
                        )}
                        <span className="text-white font-semibold truncate">{token.name}</span>
                      </td>
                      <td className="p-3 text-zinc-400 text-xs truncate">{token.symbol}</td>
                      <td className="p-3 text-white font-mono text-base">{parseFloat(token.amount).toLocaleString(undefined, { maximumFractionDigits: token.decimals })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 w-full h-60 bg-zinc-800/40 rounded-xl animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-coins mb-4 text-zinc-400" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M15.5 8.5v7a7 7 0 1 1-7-7h7z"/><path d="M20 7v7a7 7 0 0 1-7 7"/></svg>
              <div className="text-zinc-400 text-lg font-medium">No tokens found</div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TokensSection; 
