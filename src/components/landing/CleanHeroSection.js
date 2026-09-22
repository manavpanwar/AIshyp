"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Inline Sparkles Icon matching modern Lucide spec from features page
function SparklesIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

export default function CleanHeroSection() {
  const carrierLogos = [
    { name: "Delhivery", src: "/delhivery.png" },
    { name: "BlueDart", src: "/bluedart.png" },
    { name: "DTDC", src: "/dtdc.png" },
    { name: "Xpressbees", src: "/xpressbees.png" },
    { name: "DP World", src: "/dpworldlogo.png" },
    { name: "eKart", src: "/ekart.png" },
    { name: "Shadowfax", src: "/shadowfax.png" },
    { name: "Trackon", src: "/trackon_logo.png" },
    { name: "Shopify", src: "/shopify.jpeg" },
  ];

  const quickStats = [
    { value: "< 5 Mins", label: "Custom Domain Setup" },
    { value: "14+ APIs", label: "Pre-Integrated Couriers" },
    { value: "29,000+", label: "Pan-India Pincodes" },
    { value: "0% Split", label: "Revenue Share Taken" },
  ];

  return (
    <section className="relative pt-[116px] sm:pt-[128px] lg:pt-[136px] pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden bg-white text-slate-900">
      {/* Ambient Color Theme radiating directly from below the fixed header */}
      <div className="absolute top-[96px] sm:top-[104px] lg:top-[108px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[440px] bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.18)_0%,rgba(255,138,110,0.10)_35%,rgba(16,27,61,0.06)_65%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-[96px] sm:top-[104px] lg:top-[108px] left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-20 bg-gradient-to-b from-[#D8331F]/12 via-[#FF8A6E]/6 to-transparent blur-xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Top Minimal Pill Badge with Sparkle Icon (Exact features page style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
        >
          <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
          <span>White-Label Logistics OS • Production Deployments</span>
        </motion.div>

        {/* Clean High-Impact Headline with Gradient Accent (Exact features page typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
        >
          Launch Your Own:
          <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
            Multi-Tenant Shipping Aggregator Platform
          </span>
        </motion.h1>

        {/* Concise Subheadline with Bold Keywords (Exact features page style) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          You build the logistics brand — we power the technology. Deploy your custom domain portal with 14+ direct courier APIs, automated WhatsApp NDR recovery, and 1-click Shopify sync in under 5 minutes.
        </motion.p>

        {/* Action Button Group (Exact features page button pill styles) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 pt-10"
        >
          <Link
            href="/contact"
            className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
          >
            <span>Launch Your Platform</span>
            <span>→</span>
          </Link>
          <a
            href="#platform-overview"
            className="border border-[#D8331F]/40 text-[#D8331F] bg-white hover:bg-red-50/80 hover:border-[#D8331F] px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
          >
            <span>Platform Preview ↓</span>
          </a>
          <Link
            href="/integration"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
          >
            <span>14+ Courier APIs &amp; Shopify →</span>
          </Link>
        </motion.div>



        {/* Carrier Integration Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 space-y-3"
        >
          <p className="text-[10px]  font-bold text-slate-400 uppercase tracking-widest pt-10">
            Pre-Integrated With 14+ Courier Partner APIs &amp; Channels
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3 flex items-center justify-center gap-3 sm:gap-6 md:gap-7 flex-wrap shadow-2xs">
            {carrierLogos.map((logo) => (
              <div
                key={logo.name}
                className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-3.5 sm:h-4.5 max-h-5 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
