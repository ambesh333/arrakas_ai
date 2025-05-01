"use client";
import React, { useState } from "react";
import { MenuBar } from "./navbar";

export function NavDock() {
  const [expandedNav, setExpandedNav] = useState(false);

  const toggleNav = () => {
    setExpandedNav(!expandedNav);
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
              onClick={toggleNav}
              className="text-[#7ecff5] hover:text-[#7ecff5] transition-colors text-2xl font-bold"
            >
              A
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
              onClick={toggleNav}
              className="text-[#7ecff5] hover:text-[#7ecff5] transition-colors text-2xl font-bold"
            >
              A
            </button>
            <MenuBar />
          </div>
        </div>
      )}
    </header>
  );
}
