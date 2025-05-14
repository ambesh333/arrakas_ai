"use client";

import React from "react";
import Hero from "@/components/LandingPage/Hero";

export default function Parent() {
  return (
    <section className="min-h-[calc(100vh-16rem)] text-white flex items-center justify-center text-center ">
      <div className="w-full h-full">
        <Hero />
      </div>
    </section>
  );
}
