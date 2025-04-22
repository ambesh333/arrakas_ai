"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CircleUser, Wallet } from "lucide-react"
import WalletConnection from "./WalletConnectionButton";

export function NavDock() {
  const [expandedNav, setExpandedNav] = useState(false)

  const toggleNav = () => {
    setExpandedNav(!expandedNav)
  }
  return (
    <>
      <header
        className={`container mx-auto py-6 flex items-center ${expandedNav ? "justify-between" : "justify-center"} transition-all duration-300`}
      >
        {expandedNav ? (
          <div className="flex items-center justify-between w-full">
            <nav className="bg-black/80 border border-gray-800/50 rounded-full px-6 py-3">
              <ul className="flex items-center space-x-8">
                <li className="mr-2">
                  <button onClick={toggleNav} className="text-[#7ecff5] hover:text-[#7ecff5] transition-colors">
                    <span className="text-2xl font-bold">A</span>
                  </button>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-[#7ecff5] bg-gray-900/70 px-3 py-1 rounded-md hover-bounce transition-all"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/launches" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                    Launches
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                    Company
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="bg-black/80 border border-gray-800/50 rounded-full px-4 py-2 flex items-center">
                <Wallet className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-white">$25</span>
              </div>

              <div className="bg-black/80 border border-gray-800/50 rounded-full px-4 py-2 flex items-center">
                <div className="h-4 w-4 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-white">1,581 BNB</span>
              </div>

              <div className="bg-black/80 border border-gray-800/50 rounded-full px-4 py-2">
                <span className="text-gray-400">0xBBB...6nn9</span>
              </div>

              <div className="bg-black/80 border border-gray-800/50 rounded-full p-2">
                <CircleUser className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        ) : (
          <nav className="bg-black/80 border border-gray-800/50 rounded-full px-6 py-3">
            <ul className="flex items-center space-x-8">
              <li className="mr-2">
                <button onClick={toggleNav} className="text-[#7ecff5] hover:text-[#7ecff5] transition-colors">
                  <span className="text-2xl font-bold">A</span>
                </button>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#7ecff5] bg-gray-900/70 px-3 py-1 rounded-md hover-bounce transition-all"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/launches" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                  Launches
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-white hover:text-[#7ecff5] hover-bounce transition-all">
                  Company
                </Link>
              </li>
                <WalletConnection/>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
