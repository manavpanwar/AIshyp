"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CleanHeroSection() {
  const carrierLogos = [
    { name: "Delhivery", src: "/delhivery.png", height: "h-7 sm:h-8" },
    { name: "DTDC", src: "/dtdc.png", height: "h-7 sm:h-8" },
    { name: "Xpressbees", src: "/xpressbees.png", height: "h-6 sm:h-7" },
    { name: "BlueDart", src: "/bluedart.png", height: "h-6 sm:h-7" },
    { name: "DP World", src: "/dpworldlogo.png", height: "h-7 sm:h-8" },
    { name: "eKart", src: "/ekart.png", height: "h-6 sm:h-7" },
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 bg-[#FAFAFC] text-slate-900 overflow-hidden border-b border-slate-200/60 flex flex-col items-center justify-center text-center">
      {/* Sleek Mesh Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 z-10 flex flex-col items-center">
        
        {/* Top Minimal Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>White-Label Logistics OS</span>
        </motion.div>

        {/* Clean High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-950 tracking-tight leading-[1.08]"
        >
          Launch your own <br className="hidden sm:inline" />
          <span className="text-[#D8331F]">shipping aggregator platform.</span>
        </motion.h1>

        {/* Concise Subheadline (Less Text, High Impact) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-xl font-medium max-w-2xl leading-relaxed"
        >
          You build the logistics brand — we power the tech. Deploy your custom domain portal with 14+ direct courier APIs in 5 minutes.
        </motion.p>

        {/* Clean Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/contact"
            className="bg-[#D8331F] text-white rounded-full px-8 py-4 text-sm sm:text-base font-extrabold shadow-[0_8px_25px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_30px_rgba(216,51,31,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            Launch Your Platform →
          </Link>
          <a
            href="#platform-overview"
            className="bg-white text-slate-800 hover:text-slate-950 rounded-full px-8 py-4 text-sm sm:text-base font-bold border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            See Platform Preview ↓
          </a>
        </motion.div>

        {/* Minimal Carrier Integration Trust Bar with Official Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 space-y-4 w-full"
        >
          <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            Pre-Integrated With 14+ Top Carrier Networks
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 flex-nowrap overflow-hidden py-1 opacity-85 hover:opacity-100 transition-opacity duration-300">
            {carrierLogos.map((logo) => (
              <div key={logo.name} className="relative flex items-center justify-center shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-4 sm:h-5 md:h-6 max-h-6 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
