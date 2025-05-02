// app/portfolio/page.tsx (or pages/portfolio.tsx)
"use client";

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store/store';


export default function PortfolioPage() {
  const router = useRouter();
  const signed = useSelector((state: RootState) => state.auth.signed);

  useEffect(() => {
    if (!signed) {
      router.replace('/');
    }
  }, [signed, router]);

  // Prevent rendering while redirecting
  if (!signed) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-xl border border-gray-700 rounded-2xl bg-slate-900/80 p-10 text-center shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
        <p className="text-lg text-gray-300 mt-4">
          Our portfolio page is under construction. Stay tuned!
        </p>
      </div>
    </main>
  );
}
