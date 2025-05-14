import { useEffect, useState } from 'react';

interface Token {
  associatedTokenAddress: string;
  mint: string;
  amountRaw: string;
  amount: string;
  decimals: number;
  name: string;
  symbol: string;
  logo: string | null;
  isVerifiedContract: boolean;
  possibleSpam: boolean;
}

interface TokenBalanceData {
  nativeBalance?: {
    lamports: string;
    solana: string;
  };
  tokens: Token[];
}

export function useTokenBalanceQuery(address?: string) {
  const [data, setData] = useState<TokenBalanceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!address) {
      setData(null);
      setError(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    setData(null);

    const fetchData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
        if (!apiKey) throw new Error('Moralis API key not set');
        const url = `https://solana-gateway.moralis.io/account/mainnet/${address}/portfolio?nftMetadata=true`;
        const res = await fetch(url, {
          headers: {
            'accept': 'application/json',
            'X-API-Key': apiKey,
          },
        });
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [address]);

  return { data, isLoading, error };
} 