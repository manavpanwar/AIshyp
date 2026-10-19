"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ScanBarcode,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  const [scannerActive, setScannerActive] = useState(true);
  const [scannedAwbs, setScannedAwbs] = useState(284);

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F7FC] via-white to-[#F8FAFC]">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-900 font-mono text-xs font-bold tracking-wider uppercase">
                DIGITAL SOLUTIONS FOR COURIER FRANCHISES
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.12]"
            >
              Simplify Your Courier Operations with{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-[#D8331F] bg-clip-text ">
                Smart Technology
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed"
            >
              Aishyp brings your daily courier activities together through connected web and mobile apps designed to simplify booking, scanning, pickup coordination, and shipment management.
            </motion.p>

            {/* Primary Message Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-100 shadow-[0_10px_30px_rgba(37,99,235,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 to-[#D8331F]" />
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-950 font-extrabold text-base sm:text-lg tracking-tight">
                    Run Your Courier Business Smarter with Aishyp.
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Manage your courier operations with ease using Aishyp's integrated web and mobile applications. From quick shipment booking and smart docket scanning to pickup coordination and shipment management, our digital solutions help your team work faster, smarter, and more efficiently.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#solutions"
                id="hero-explore-btn"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full  text-white font-extrabold text-sm shadow-[0_10px_25px_rgba(37,99,235,0.35)] bg-[#D8331F] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Our Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                id="hero-how-it-works-btn"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white border border-slate-300/80 text-slate-800 font-bold text-sm shadow-xs hover:bg-slate-50 hover:border-slate-400 hover:text-slate-950 active:scale-[0.98] transition-all duration-200"
              >
                <span>How It Works</span>
              </a>
            </motion.div>

            {/* Feature Mini Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Web + Mobile Sync</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Camera Barcode Scan</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Operations</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: DUAL DEVICE MOCKUP (LAPTOP + PHONE) ── */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full"
            >

              {/* ── DESKTOP DASHBOARD MOCKUP (LAPTOP FRAME) ── */}
              <div className="w-full bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden transform lg:translate-x-2">

                {/* Laptop Window Header Bar */}
                <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <div className="bg-slate-900 px-3 py-0.5 rounded-md text-[10px] text-slate-400 font-mono flex items-center gap-1.5 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate max-w-[200px]">https://hub.aishyp.com/franchise-ops</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-bold border border-blue-700/50">
                      FRANCHISE OS
                    </span>
                  </div>
                </div>

                {/* Laptop Dashboard Screen Content */}
                <div className="p-3 sm:p-4 bg-[#F8FAFC] text-slate-800 font-sans space-y-3 select-none">

                  {/* Top Bar inside app */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                        AS
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold text-slate-900">Metro Express Courier Hub</div>
                        <div className="text-[9px] text-slate-500 font-medium">Franchise ID: AIS-MUM-402 • Counter 01</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Online &amp; Synced
                      </span>
                    </div>
                  </div>

                  {/* 4 Mini KPI Cards */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[9px] text-slate-500 font-semibold">Today Bookings</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">{scannedAwbs}</div>
                      <div className="text-[8px] text-emerald-600 font-bold mt-0.5">+18% vs yest.</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[9px] text-slate-500 font-semibold">Pending Pickups</div>
                      <div className="text-xs sm:text-sm font-extrabold text-amber-600 mt-0.5">32</div>
                      <div className="text-[8px] text-slate-500 font-medium mt-0.5">4 Boys active</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[9px] text-slate-500 font-semibold">Dockets Scanned</div>
                      <div className="text-xs sm:text-sm font-extrabold text-blue-600 mt-0.5">280</div>
                      <div className="text-[8px] text-blue-600 font-bold mt-0.5">99.1% verified</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[9px] text-slate-500 font-semibold">Manifest Ready</div>
                      <div className="text-xs sm:text-sm font-extrabold text-emerald-600 mt-0.5">14 Bags</div>
                      <div className="text-[8px] text-emerald-600 font-bold mt-0.5">Evening dispatch</div>
                    </div>
                  </div>

                  {/* Operations Table */}
                  <div className="rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden">
                    <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[10px] font-bold text-slate-700">
                      <span>Live Consignment Registry</span>
                      <span className="text-[9px] text-blue-600 font-mono">Auto-Updating</span>
                    </div>
                    <div className="divide-y divide-slate-100 text-[9px]">
                      <div className="px-3 py-1.5 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="font-mono font-bold text-slate-800">AWB-DEL-984210</span>
                          <span className="text-slate-400">|</span>
                          <span className="text-slate-600 font-medium">BOM → DEL (Express)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[8px] border border-emerald-200">
                            Scanned &amp; Verified
                          </span>
                          <span className="text-slate-400 font-mono">1.2 kg</span>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="font-mono font-bold text-slate-800">AWB-BLU-440192</span>
                          <span className="text-slate-400">|</span>
                          <span className="text-slate-600 font-medium">BOM → BLR (Air Cargo)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[8px] border border-blue-200">
                            Manifested
                          </span>
                          <span className="text-slate-400 font-mono">4.5 kg</span>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="font-mono font-bold text-slate-800">AWB-DTD-771803</span>
                          <span className="text-slate-400">|</span>
                          <span className="text-slate-600 font-medium">BOM → PNQ (Surface)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[8px] border border-amber-200">
                            Pickup Scheduled
                          </span>
                          <span className="text-slate-400 font-mono">0.5 kg</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar indicator */}
                  <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3 h-3 text-blue-600" /> Central Franchise Web Terminal
                    </span>
                    <span className="font-mono text-[8px] text-slate-400">
                      Demonstration UI — Illustrative Workflow
                    </span>
                  </div>

                </div>
              </div>

              {/* ── SMARTPHONE MOCKUP (OVERLAPPING ON RIGHT) ── */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute -bottom-10 -right-2 sm:-right-6 w-56 sm:w-64 bg-slate-950 p-2 sm:p-2.5 rounded-[34px] shadow-[0_20px_50px_rgba(15,23,42,0.5)] border-4 border-slate-800"
              >
                {/* Speaker notch / dynamic island */}
                <div className="relative mx-auto w-20 h-4 bg-slate-900 rounded-full mb-1 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/60 border border-slate-700" />
                </div>

                {/* Phone screen container */}
                <div className="bg-slate-900 rounded-[26px] overflow-hidden text-white font-sans select-none border border-slate-800">

                  {/* Phone App Header */}
                  <div className="px-3 py-2 bg-slate-950/90 backdrop-blur-md flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center text-[8px] font-bold text-white">
                        AS
                      </div>
                      <span className="text-[10px] font-bold tracking-tight">AIShyp Mobile Companion</span>
                    </div>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                      CAM ON
                    </span>
                  </div>

                  {/* Camera Viewfinder Mockup */}
                  <div className="relative h-44 sm:h-48 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-2 overflow-hidden">

                    {/* Camera grid background simulation */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />

                    {/* Laser Targeting Box */}
                    <div className="relative w-36 h-28 sm:w-44 sm:h-32 border-2 border-emerald-400/80 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)] bg-emerald-950/20">

                      {/* Laser scanning line animation */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />

                      {/* Barcode Graphic Inside Viewfinder */}
                      <div className="flex flex-col items-center space-y-1">
                        <ScanBarcode className="w-10 h-10 text-emerald-400 animate-pulse" />
                        <span className="font-mono text-[9px] font-extrabold text-emerald-300 tracking-wider bg-black/60 px-2 py-0.5 rounded">
                          AWB-9842103829
                        </span>
                      </div>

                      {/* Targeting Corners */}
                      <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white" />
                      <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white" />
                      <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white" />
                      <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white" />
                    </div>

                    {/* Quick controls bar */}
                    <div className="absolute bottom-2 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] text-slate-300">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Zap className="w-2.5 h-2.5" /> Torch On
                      </span>
                      <span>•</span>
                      <span>Auto-Focus</span>
                    </div>
                  </div>

                  {/* Scanned Card Popup in phone */}
                  <div className="p-2.5 bg-slate-950 border-t border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Docket Identified
                      </span>
                      <span className="text-slate-400 font-mono">0.14s match</span>
                    </div>

                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-[9px] space-y-0.5">
                      <div className="text-slate-200 font-bold">Consignee: Rajesh Sharma</div>
                      <div className="text-slate-400 text-[8px] truncate">Andheri East, Mumbai 400069</div>
                      <div className="flex items-center justify-between text-[8px] text-slate-400 pt-0.5">
                        <span>Carrier: Delhivery Surface</span>
                        <span className="text-emerald-400 font-bold">Wt: 1.50 kg</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setScannedAwbs((prev) => prev + 1)}
                      className="w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-[9px] text-center shadow-md active:scale-95 transition-all flex items-center justify-center gap-1"
                    >
                      <span>Confirm &amp; Sync to Dashboard</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
