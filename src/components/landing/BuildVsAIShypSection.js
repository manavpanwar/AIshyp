"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const COMPARISON_ROWS = [
  {
    feature: "Time to Market",
    build: "6 to 12 Months of custom engineering",
    aishyp: "Ready to launch in under 24 Hours",
    highlight: true,
  },
  {
    feature: "Upfront Capital",
    build: "₹15,00,000 - ₹30,00,000+ in dev costs",
    aishyp: "Zero upfront development capital",
    highlight: true,
  },
  {
    feature: "Courier Integrations",
    build: "Integrate & certify 14+ LSPs one by one",
    aishyp: "14+ Direct Carrier APIs pre-integrated",
    highlight: false,
  },
  {
    feature: "Carrier API Maintenance",
    build: "Constant engineer overhead for breaking changes",
    aishyp: "100% managed & updated automatically",
    highlight: false,
  },
  {
    feature: "Financial & COD OS",
    build: "Build custom wallet, GST ledger & COD reconciliation",
    aishyp: "Built-in prepaid wallet, GST invoicing & T+1 COD payouts",
    highlight: false,
  },
  {
    feature: "B2C & B2B Heavy Freight",
    build: "Separate architectures for parcel & freight",
    aishyp: "Unified parcel + heavy B2B cargo in one panel",
    highlight: false,
  },
  {
    feature: "Brand Ownership",
    build: "100% your brand",
    aishyp: "100% White-label (Your Logo, Your Domain, Your Colors)",
    highlight: true,
  },
];

export default function BuildVsAIShypSection() {
  return (
    <section className="relative w-full py-12 sm:py-14 px-6 sm:px-10 lg:px-12 bg-white text-slate-900 border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto space-y-5 sm:space-y-6"
      >
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Build vs. Launch Decision
          </p>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
            Why Build From Scratch When You Can <span className="text-[#D8331F]">Launch Today?</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Building custom aggregator software takes months and millions in engineering costs. AIShyp gives you an enterprise platform instantly.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-3.5 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3">Feature / Capability</div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Custom Engineering</div>
            <div className="col-span-4 sm:col-span-5 text-emerald-400">AIShyp White-Label SaaS</div>
          </div>

          <div className="divide-y divide-slate-200/80">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-3 sm:p-3.5 text-xs font-sans items-center transition-colors ${
                  row.highlight ? "bg-red-50/40 font-medium" : "hover:bg-slate-100/60"
                }`}
              >
                <div className="col-span-4 sm:col-span-3 font-extrabold text-slate-900 pr-2">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-500 font-medium flex items-center gap-1.5 pr-2">
                  <span className="text-red-500 text-xs shrink-0">✕</span>
                  <span className="leading-snug">{row.build}</span>
                </div>

                <div className="col-span-4 sm:col-span-5 text-slate-900 font-bold flex items-center gap-1.5">
                  <span className="text-emerald-600 text-xs shrink-0 font-extrabold">✓</span>
                  <span className={row.highlight ? "text-[#D8331F] font-extrabold leading-snug" : "text-slate-900 leading-snug"}>
                    {row.aishyp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-3.5 sm:p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span><strong>Ready-to-deploy SaaS infrastructure</strong> — scale your shipping aggregator business instantly.</span>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-xs font-extrabold text-white bg-[#D8331F] shadow-sm hover:bg-[#FF8A6E] transition-colors shrink-0 font-sans"
            >
              Get Started in 24 Hours →
            </Link>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
