"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ActualDashboardMockup from "./ActualDashboardMockup";

export default function HeroSection() {
  return (
    <section id="platform-overview" className="relative w-full min-h-[90vh] pt-20 sm:pt-24 pb-12 px-6 sm:px-10 lg:px-16 bg-[#FAFAFC] text-slate-900 overflow-hidden flex flex-col justify-between border-b border-slate-200/60">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-red-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto"
      >
        {/* ── LEFT COLUMN: HEADLINE & SAAS COPY ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 space-y-5 z-20"
        >
          <div className="space-y-2 pt-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
              <span>// 100% White-Label Courier Aggregator Software</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
              <span className="text-slate-900 block uppercase">YOUR BRAND.</span>
              <span className="text-[#D8331F] block uppercase">YOUR CUSTOMERS.</span>
              <span className="text-slate-900 block uppercase">YOUR SHIPPING PLATFORM.</span>
            </h2>
          </div>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans max-w-xl font-medium">
            You build the logistics brand — we power the technology. Deploy your custom domain shipping platform with 14+ direct courier APIs, 100% margin control, and unified B2C & B2B operations.
          </p>

          {/* Software Feature Badges */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-slate-800 font-bold shadow-2xs">
              🌐 Your Domain & Colors
            </span>
            <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-[#D8331F] font-bold shadow-2xs">
              ⚡ 100% Margin Control
            </span>
            <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-emerald-700 font-bold shadow-2xs">
              🔌 14+ Courier APIs
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#D8331F] shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all inline-block"
            >
              Launch Your Platform →
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-full text-sm font-extrabold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:border-[#D8331F] hover:text-[#D8331F] transition-all inline-block"
            >
              Explore SaaS Pricing
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: STATIC DASHBOARD PANEL (FLUID SCALE & FLOAT UP) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex justify-center lg:justify-end relative z-10 w-full"
        >
          <div className="w-full max-w-[580px] rounded-2xl shadow-2xl overflow-hidden border border-slate-300/80 bg-white relative transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <ActualDashboardMockup brandName="YourBrand Express" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── ENTERPRISE SYSTEM TELEMETRY STRIP ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto w-full pt-8 pb-2 border-t border-slate-200/70"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Coverage</p>
            <p className="text-sm font-extrabold text-slate-900 mt-0.5">29,000+ Pincodes</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Carrier Integrations</p>
            <p className="text-sm font-extrabold text-[#D8331F] mt-0.5">14+ Direct APIs</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Logistics Scope</p>
            <p className="text-sm font-extrabold text-emerald-600 mt-0.5">B2C Parcel + B2B Cargo</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Gross Margins</p>
            <p className="text-sm font-extrabold text-slate-900 mt-0.5">100% Retained (0% Cut)</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Infrastructure SLA</p>
            <p className="text-sm font-extrabold text-indigo-600 mt-0.5">99.99% Uptime</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}