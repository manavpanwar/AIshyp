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
    <section className="relative w-full py-12 sm:py-14 px-6 sm:px-10 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Core Aggregator Capabilities
          </p>
          <h2 className="font-sans font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight">
            Built to Power Your <span className="text-[#D8331F]">Courier Aggregator Empire</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Everything your shipping business needs to serve customers, automate operations, and scale profit margins.
          </p>
        </div>

        {/* 6 Capabilities Grid (3 cols on desktop, 2 on tablet) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-lg hover:border-[#D8331F]/80 transition-all border-t-3 border-t-[#D8331F] flex flex-col justify-between space-y-3.5 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9.5px] font-mono font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 shrink-0">
                    {cap.stats}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-sans leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[10.5px] font-mono text-[#D8331F] font-bold mt-0.5">{cap.tagline}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {cap.desc}
                </p>

                {/* Feature checklist */}
                <div className="space-y-1 pt-0.5 font-mono text-[11px]">
                  {cap.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-3.5 h-3.5 rounded bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-[9px] shrink-0">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 font-bold">Module 0{index + 1}</span>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-[#D8331F] font-bold font-sans transition-colors inline-flex items-center gap-1"
                >
                  Explore Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Bottom CTA Banner */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10.5px] font-mono font-bold text-[#D8331F] uppercase tracking-wider">
              Ready to Launch Your Platform?
            </span>
            <h3 className="text-base sm:text-lg font-extrabold font-sans text-slate-900">
              Set Up Your Software on Custom Domain Today
            </h3>
            <p className="text-slate-600 text-xs font-medium max-w-xl">
              Get full white-label setup, 14+ direct carrier API keys, and complete rate matrix control in 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] shadow-sm hover:bg-[#FF8A6E] transition-colors shrink-0"
          >
            Schedule Partner Onboarding →
          </Link>
        </div>

      </div>
    </section>
  );
}
