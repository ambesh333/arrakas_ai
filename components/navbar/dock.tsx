"use client";

import React from "react";
import { useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { MenuBar } from "./navbar";
import { RootState } from "@/store/store";
import Image from "next/image";

export function NavDock() {
  const expandedNav = useSelector((state: RootState) => state.nav.expanded);
  const router = useRouter();

  const handleLogoClick = async () => {
    try {
      router.push("/");
    } catch (err) {
      console.error("Logo click failed", err);
    }
  };

  return (
    <header className="w-full">
      {expandedNav ? (
        <div className="grid grid-cols-10 gap-x-4 py-8 items-center">
          {/* Spacer */}
          <div className="col-span-1" />

          {/* Main navbar */}
          <div className="col-span-4 flex items-center space-x-4">
            <button
              onClick={handleLogoClick}
              className="transition-colors text-2xl font-bold"
            >
              <div className="p-3 bg-slate-900/30 backdrop-blur-md rounded-xl border border-slate-500/20 shadow-lg">
                <Image
                  src="/arrakus_logo-transparent.png"
                  alt="Arrakus Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </button>
            <MenuBar />
          </div>

          {/* Spacer */}
          <div className="col-span-1" />

          {/* Secondary navbar */}
          <div className="col-span-3">
            <MenuBar />
          </div>

          {/* Spacer */}
          <div className="col-span-1" />
        </div>
      ) : (
        <div className="flex justify-center py-8">
          <div className="w-2/3 flex items-center space-x-4 justify-center">
            <button
              onClick={handleLogoClick}
              className="text-[#7ecff5] hover:text-[#7ecff5] transition-colors text-2xl font-bold"
            >
              <div className="p-3 bg-slate-900/30 backdrop-blur-md rounded-xl border border-slate-500/20 shadow-lg">
                <Image
                  src="/arrakus_logo-transparent.png"
                  alt="Arrakus Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </button>
            <MenuBar />
          </div>
        </div>
      )}
    </header>
  );
}
