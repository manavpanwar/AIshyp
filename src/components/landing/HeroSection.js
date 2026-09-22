"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ActualDashboardMockup from "./ActualDashboardMockup";

export default function HeroSection() {
  return (
    <section id="platform-overview" className="relative w-full py-16 sm:py-20 md:py-24 px-6 sm:px-10 lg:px-16 bg-white text-slate-900 overflow-hidden flex flex-col justify-between">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-red-500/8 via-amber-500/4 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-500/8 via-emerald-500/4 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto"
      >
        {/* ── LEFT COLUMN: HEADLINE & SAAS COPY ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 space-y-6 z-20"
        >
          <div className="space-y-3 pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
              <span>100% White-Label Shipping Technology</span>
            </div>

            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
              <span className="text-slate-900 block">Build your brand.</span>
              <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#D8331F] bg-clip-text text-transparent block">
                Own your customers.
              </span>
              <span className="text-slate-900 block">Scale your shipping business.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-xl font-normal">
            You build the <strong className="font-bold text-slate-900">logistics brand</strong> — we power the technology. Deploy your custom domain shipping platform with <strong className="font-bold text-slate-900">14+ direct courier APIs</strong>, 100% margin control, and unified B2C & B2B operations.
          </p>

          {/* Software Feature Badges */}
          <div className="flex flex-wrap gap-2.5  text-xs">
            <span className="bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-xl text-slate-800 font-bold shadow-2xs hover:bg-white transition-colors">
              🌐 Your Domain & Colors
            </span>
            <span className="bg-red-50/60 border border-red-200/70 px-3.5 py-1.5 rounded-xl text-[#D8331F] font-bold shadow-2xs hover:bg-red-50 transition-colors">
              ⚡ 100% Margin Control
            </span>
            <span className="bg-emerald-50/60 border border-emerald-200/70 px-3.5 py-1.5 rounded-xl text-emerald-700 font-bold shadow-2xs hover:bg-emerald-50 transition-colors">
              🔌 14+ Courier APIs
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#D8331F] hover:bg-[#c02816] shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2"
            >
              <span>Launch Your Platform</span>
              <span>→</span>
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:bg-slate-50/80 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-block"
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
          <div className="relative w-full max-w-[580px]">
            {/* Ambient Back Glow for Dashboard */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-red-500/10 via-amber-500/5 to-indigo-500/10 rounded-3xl blur-2xl opacity-70 -z-10" />
            <div className="w-full rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden border border-slate-200/90 bg-white relative transition-all duration-300 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.16)]">
              <ActualDashboardMockup brandName="YourBrand Express" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── ENTERPRISE SYSTEM TELEMETRY STRIP ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto w-full pt-12 sm:pt-14 pb-2 border-t border-slate-200/70 mt-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5  text-xs">
          <div className="bg-slate-50/70 hover:bg-white backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Coverage</p>
            <p className="text-sm font-extrabold text-slate-900 mt-1">29,000+ Pincodes</p>
          </div>
          <div className="bg-slate-50/70 hover:bg-white backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Carrier Integrations</p>
            <p className="text-sm font-extrabold text-[#D8331F] mt-1">14+ Direct APIs</p>
          </div>
          <div className="bg-slate-50/70 hover:bg-white backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Logistics Scope</p>
            <p className="text-sm font-extrabold text-emerald-600 mt-1">B2C Parcel + B2B Cargo</p>
          </div>
          <div className="bg-slate-50/70 hover:bg-white backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Gross Margins</p>
            <p className="text-sm font-extrabold text-slate-900 mt-1">100% Retained (0% Cut)</p>
          </div>
          <div className="bg-slate-50/70 hover:bg-white backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all col-span-2 sm:col-span-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Infrastructure SLA</p>
            <p className="text-sm font-extrabold text-indigo-600 mt-1">99.99% Uptime</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}