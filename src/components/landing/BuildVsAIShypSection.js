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
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-white text-slate-900 border-t border-slate-200/80">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F]  text-xs font-bold shadow-2xs">
            <span>✨</span>
            <span className="uppercase tracking-wider">Build vs. Launch Decision</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 leading-tight tracking-tight">
            Why Build From Scratch When You Can{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#D8331F] bg-clip-text text-transparent">
              Launch Today?
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Building custom aggregator software takes months and millions in engineering costs. AI Shyp gives you an enterprise platform instantly.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg">
          <div className="grid grid-cols-12 bg-slate-950 text-white p-4 sm:p-5 text-xs  font-bold uppercase tracking-wider items-center">
            <div className="col-span-4 sm:col-span-4 text-slate-300">Feature / Capability</div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Custom Engineering</div>
            <div className="col-span-4 sm:col-span-4 text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI Shyp White-Label SaaS</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-3.5 sm:p-4 text-xs font-sans items-center transition-colors ${
                  row.highlight ? "bg-red-50/30 font-medium" : "hover:bg-slate-50/60"
                }`}
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-900 pr-3">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-500 font-normal flex items-center gap-2 pr-3">
                  <span className="text-red-500 font-extrabold text-xs shrink-0">✕</span>
                  <span className="leading-snug">{row.build}</span>
                </div>

                <div className="col-span-4 sm:col-span-4 font-bold flex items-center gap-2">
                  <span className="text-emerald-600 font-extrabold text-xs shrink-0">✓</span>
                  <span className={row.highlight ? "text-[#D8331F] font-extrabold leading-snug" : "text-slate-900 leading-snug"}>
                    {row.aishyp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs ">
            <div className="flex items-center gap-2.5 text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>
                <strong className="font-bold text-slate-900">Ready-to-deploy SaaS infrastructure</strong> — scale your shipping aggregator business instantly.
              </span>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-[#c02816] shadow-sm hover:shadow-md transition-all shrink-0 font-sans flex items-center gap-1.5"
            >
              <span>Get Started in 24 Hours</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

