"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Customer Shipping Tools",
    tagline: "Enterprise-Grade Tools for Your Merchants",
    desc: "Give your e-commerce clients instant rate comparisons, 1-click booking, branded tracking URLs, thermal barcode labels, and automated NDR workflows.",
    badge: "Merchant Portal",
    icon: "📦",
    stats: "End-to-End Suite",
    features: ["Branded tracking pages", "Thermal AWB barcode labels", "Automated WhatsApp NDR"],
  },
  {
    title: "Wallet & COD Financial Engine",
    tagline: "The Financial Operating System for Aggregators",
    desc: "Manage prepaid merchant wallet recharges, automated debit/credits, transparent transaction ledgers, itemized GST invoicing, and daily COD settlements.",
    badge: "Financial Engine",
    icon: "💳",
    stats: "T+1 COD Payouts",
    features: ["Instant UPI & NetBanking top-ups", "Daily COD reconciliation & audit", "Automated GST tax breakdown"],
  },
  {
    title: "Smart Address OCR & HSN Mapping",
    tagline: "Speed & Accuracy Advantage",
    desc: "Empower your clients with smart address image/invoice OCR scanning, automatic HSN code tax mapping, and automated pincode validation to prevent NDRs.",
    badge: "Smart Automation",
    icon: "⚡",
    stats: "Instant Scanning",
    features: ["Invoice image address extraction", "Automated HSN tax code lookup", "Pincode zone auto-detection"],
  },
  {
    title: "Aggregator Admin Control",
    tagline: "Run Your Entire Network From One Panel",
    desc: "Manage all your clients, sub-franchise branches, warehouses, team permissions, shipping operations, and centralized financial analytics in one place.",
    badge: "Master Control",
    icon: "🛡️",
    stats: "Role-Based Access",
    features: ["Merchant & branch account controls", "Multi-warehouse management", "Centralized dispatch reporting"],
  },
  {
    title: "B2C Parcel + B2B Freight",
    tagline: "One Platform. Multiple Logistics Businesses.",
    desc: "Support both high-velocity e-commerce parcel shipping and B2B heavy freight operations with volumetric CFT calculation and multi-box manifests.",
    badge: "Unified Logistics",
    icon: "🚚",
    stats: "B2C + B2B Unified",
    features: ["E-commerce parcel allocation", "B2B heavy cargo & LTL/FTL", "Volumetric CFT calculation"],
  },
  {
    title: "Rate & Margin Management",
    tagline: "You Control the Rates. You Build the Business.",
    desc: "Configure customized buy & sell rate cards per client tier. Keep 100% of your gross profit markups on every shipment with zero commission splits.",
    badge: "100% Profit",
    icon: "📈",
    stats: "0% Revenue Share",
    features: ["Tiered merchant rate cards", "Zone-based markup rules", "Keep 100% gross profits"],
  },
];

export default function BusinessAdvantageSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F]  text-xs font-bold shadow-2xs">
            <span>✨</span>
            <span className="uppercase tracking-wider">Core Aggregator Capabilities</span>
          </div>
          <h2 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Built to Power Your{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#D8331F] bg-clip-text text-transparent">
              Courier Aggregator Empire
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Everything your shipping business needs to serve customers, automate operations, and scale profit margins.
          </p>
        </div>

        {/* 6 Capabilities Grid (3 cols on desktop, 2 on tablet) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#D8331F]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                    {cap.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px]  font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 shrink-0">
                    {cap.stats}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-sans leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-[11px]  text-[#D8331F] font-bold mt-0.5">{cap.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cap.desc}
                </p>

                {/* Feature checklist */}
                <div className="space-y-1.5 pt-1  text-xs">
                  {cap.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-slate-700">
                      <span className="w-4 h-4 rounded-md bg-red-50 text-[#D8331F] flex items-center justify-center font-extrabold text-[10px] shrink-0">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs ">
                <span className="text-slate-400 font-bold">Module 0{index + 1}</span>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-[#D8331F] font-bold font-sans transition-colors inline-flex items-center gap-1.5 group-hover:translate-x-0.5 duration-200"
                >
                  <span>Explore Details</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Bottom CTA Banner */}
        <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs  font-bold text-[#D8331F] uppercase tracking-wider">
              Ready to Launch Your Platform?
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold font-sans text-slate-950">
              Set Up Your Software on Custom Domain Today
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl">
              Get full white-label setup, 14+ direct carrier API keys, and complete rate matrix control in 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D8331F] hover:bg-[#c02816] shadow-sm hover:shadow-md transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Schedule Partner Onboarding</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
