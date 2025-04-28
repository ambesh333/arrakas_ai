"use client";
import React, { useState } from 'react';
import OnboardingModal from '@/components/onboarding/OnboardingModal';

export default function Parent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        Connect Wallet
      </button>
      <OnboardingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}