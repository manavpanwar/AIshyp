"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ScanBarcode,
  Search,
  Package,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Truck,
  ArrowRight,
  Filter,
  Download,
  Plus,
  RefreshCw,
  Sparkles,
  ChevronRight,
  User,
  Phone,
  FileText,
  Zap,
} from "lucide-react";

const SAMPLE_SCREENS = [
  {
    id: "dashboard",
    label: "Franchise Dashboard",
    icon: Laptop,
    subtitle: "Centralized overview of bookings, scans, linehauls & revenue",
    device: "dual", // Laptop dominant with phone preview
  },
  {
    id: "booking-form",
    label: "Shipment Booking Form",
    icon: Plus,
    subtitle: "Counter shipment entry with automatic pincode & rate slab lookup",
    device: "desktop",
  },
  {
    id: "scanner",
    label: "Docket Barcode Scanner",
    icon: ScanBarcode,
    subtitle: "Mobile camera viewfinder with instant barcode extraction & carrier verification",
    device: "mobile",
  },
  {
    id: "pickup-list",
    label: "Pickup Request List",
    icon: Truck,
    subtitle: "Real-time coordination queue for assigned field pickup runners",
    device: "desktop",
  },
  {
    id: "shipment-records",
    label: "Shipment Records",
    icon: FileText,
    subtitle: "Searchable master consignment ledger with tracking filters & manifest export",
    device: "desktop",
  },
  {
    id: "status-timeline",
    label: "Shipment Status Timeline",
    icon: Clock,
    subtitle: "End-to-end milestone journey from counter acceptance to final delivery",
    device: "dual",
  },
];

export default function ConnectedExperienceSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="connected-experience" className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Connected Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Platform. Two Powerful Ways to Work.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Franchise partners can use the web application for centralized operations, accounting, and master records, and the mobile app for camera scanning, field pickups, and on-the-go activities.
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-mono">
            Demonstration UI — Illustrative Sample Interfaces
          </div>
        </div>

        {/* ── INTERACTIVE TABS SELECTOR ── */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SAMPLE_SCREENS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
                    : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── TAB ACTIVE DESCRIPTION SUBTITLE ── */}
        <div className="text-center text-slate-400 text-xs font-medium mb-6">
          {SAMPLE_SCREENS.find((s) => s.id === activeTab)?.subtitle}
        </div>

        {/* ── MOCKUP DISPLAY VIEWPORT ── */}
        <div className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
          
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 hidden sm:inline text-slate-500">AIShyp Franchise OS 2.4</span>
            </div>

            <div className="bg-slate-900 px-4 py-1 rounded-full border border-slate-800 text-slate-300 flex items-center gap-2 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>https://franchise.aishyp.com/{activeTab}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-bold border border-emerald-800 text-[10px]">
                LIVE SYNC
              </span>
            </div>
          </div>

          {/* ── DYNAMIC SCREEN CONTENTS ACCORDING TO TAB ── */}
          <AnimatePresence mode="wait">
            
            {/* 1. FRANCHISE DASHBOARD */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 text-xs font-semibold">Today's Bookings</div>
                    <div className="text-2xl font-extrabold text-white mt-1">348</div>
                    <div className="text-[11px] text-emerald-400 font-bold mt-1">↑ 14% vs yesterday</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 text-xs font-semibold">Dockets Scanned</div>
                    <div className="text-2xl font-extrabold text-blue-400 mt-1">342 / 348</div>
                    <div className="text-[11px] text-blue-400 font-bold mt-1">98.2% verified</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 text-xs font-semibold">Pickups Completed</div>
                    <div className="text-2xl font-extrabold text-amber-400 mt-1">46 / 52</div>
                    <div className="text-[11px] text-amber-400 font-bold mt-1">6 in progress</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 text-xs font-semibold">Dispatched Bags</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">18 Bags</div>
                    <div className="text-[11px] text-emerald-400 font-bold mt-1">Manifest sealed</div>
                  </div>
                </div>

                {/* Main panel layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Active dockets table */}
                  <div className="lg:col-span-8 rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-blue-400" />
                        <h4 className="font-bold text-sm text-white">Recent Counter Dockets</h4>
                      </div>
                      <span className="text-xs text-blue-400 font-mono font-semibold">Auto-Sync ON</span>
                    </div>

                    <div className="divide-y divide-slate-800/80 text-xs">
                      {[
                        { awb: "AWB-DEL-984210", dest: "Mumbai → Delhi", carrier: "Delhivery Air", wt: "1.2 kg", status: "Scanned", statusCol: "bg-emerald-950 text-emerald-400 border-emerald-800" },
                        { awb: "AWB-BLU-772911", dest: "Mumbai → Bangalore", carrier: "BlueDart Apex", wt: "3.5 kg", status: "Bagged", statusCol: "bg-blue-950 text-blue-400 border-blue-800" },
                        { awb: "AWB-DTD-440219", dest: "Mumbai → Kolkata", carrier: "DTDC Plus", wt: "0.8 kg", status: "Scanned", statusCol: "bg-emerald-950 text-emerald-400 border-emerald-800" },
                        { awb: "AWB-XPR-119280", dest: "Mumbai → Hyderabad", carrier: "Xpressbees", wt: "2.1 kg", status: "Pending Scan", statusCol: "bg-amber-950 text-amber-400 border-amber-800" },
                      ].map((row, i) => (
                        <div key={i} className="py-2.5 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-mono font-bold text-white flex items-center gap-2">
                              <span>{row.awb}</span>
                              <span className="text-slate-500">•</span>
                              <span className="text-slate-300 text-[11px]">{row.dest}</span>
                            </div>
                            <div className="text-[10px] text-slate-400">{row.carrier} ({row.wt})</div>
                          </div>
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${row.statusCol}`}>
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Courier Distribution & Mobile Companion status */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
                      <h4 className="font-bold text-sm text-white flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-emerald-400" />
                        <span>Connected Mobile Units</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-white">Counter Scanner 01</div>
                            <div className="text-[10px] text-slate-400">Rohan S. • App v2.4</div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">ACTIVE</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-white">Pickup Rider 02</div>
                            <div className="text-[10px] text-slate-400">Deepak M. • Field Zone 3</div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">ON ROUTE</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-800/40 p-4 text-xs space-y-1.5">
                      <div className="font-bold text-blue-300">Carrier Manifest Cut-off</div>
                      <div className="text-slate-300">Evening pickup by Delhivery scheduled at 19:30 IST. 12 dockets remaining to seal.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. SHIPMENT BOOKING FORM */}
            {activeTab === "booking-form" && (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Form fields */}
                  <div className="lg:col-span-8 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <h4 className="font-bold text-sm text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-blue-400" />
                        <span>Counter Shipment Intake Form</span>
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">Consignment #AIS-4910</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1.5">
                        <label className="text-slate-400 font-medium">Sender Mobile Number</label>
                        <input
                          readOnly
                          value="+91 98201 44820"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-mono"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-400 font-medium">Sender Name / Business</label>
                        <input
                          readOnly
                          value="Pooja Enterprises (Ghatkopar)"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-medium"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-400 font-medium">Recipient Name</label>
                        <input
                          readOnly
                          value="Sandeep Nair"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-medium"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-400 font-medium">Destination Pincode</label>
                        <input
                          readOnly
                          value="560001 — Bangalore Urban"
                          className="w-full bg-slate-950 border border-emerald-800 text-emerald-400 font-mono font-bold rounded-xl px-3.5 py-2"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-slate-400 font-medium">Delivery Address</label>
                        <input
                          readOnly
                          value="#42, Brigade Road, Ashok Nagar, Bengaluru, Karnataka"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">Weight (kg)</div>
                        <div className="text-sm font-bold text-white mt-0.5">1.50 kg</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">Dimensions</div>
                        <div className="text-sm font-bold text-white mt-0.5">20x15x10 cm</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">Package Type</div>
                        <div className="text-sm font-bold text-white mt-0.5">Flyer Box</div>
                      </div>
                    </div>
                  </div>

                  {/* Right summary / rate comparison */}
                  <div className="lg:col-span-4 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
                    <h4 className="font-bold text-sm text-white">Rate Discovery &amp; Allocation</h4>
                    
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-600/60 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">Delhivery Surface</div>
                          <div className="text-[10px] text-slate-300">Est. 2-3 Days</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400 text-sm">₹110.00</div>
                          <div className="text-[9px] text-blue-300">Recommended</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between opacity-75">
                        <div>
                          <div className="font-bold text-white">BlueDart Air</div>
                          <div className="text-[10px] text-slate-400">Est. 1 Day Express</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white text-sm">₹225.00</div>
                          <div className="text-[9px] text-slate-400">Air Priority</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-400">
                        <span>Franchise Margin:</span>
                        <span className="text-emerald-400 font-bold">+ ₹45.00</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>GST (18%):</span>
                        <span className="text-slate-300">₹19.80</span>
                      </div>
                      <div className="flex justify-between font-bold text-white border-t border-slate-800 pt-1.5">
                        <span>Total Customer Charge:</span>
                        <span className="text-blue-400">₹129.80</span>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs text-white transition-all shadow-md">
                      Generate Docket &amp; Print Label
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. DOCKET BARCODE SCANNER */}
            {activeTab === "scanner" && (
              <motion.div
                key="scanner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-md mx-auto space-y-4"
              >
                <div className="rounded-3xl bg-slate-900 border-2 border-slate-800 p-4 shadow-xl space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-slate-200 flex items-center gap-1.5">
                      <ScanBarcode className="w-4 h-4 text-emerald-400" />
                      Mobile Docket Scanner
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      LASER ON
                    </span>
                  </div>

                  {/* Viewport mockup */}
                  <div className="relative h-60 rounded-2xl bg-slate-950 overflow-hidden flex flex-col items-center justify-center border border-slate-800">
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                    
                    {/* Reticle */}
                    <div className="relative w-56 h-36 border-2 border-emerald-400 rounded-xl flex flex-col items-center justify-center bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.35)]">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
                      
                      <ScanBarcode className="w-14 h-14 text-emerald-400" />
                      <div className="mt-2 px-3 py-1 bg-black/80 rounded-md border border-emerald-800 text-xs font-mono font-bold text-emerald-300">
                        9842103829-DEL
                      </div>
                    </div>

                    <div className="absolute bottom-2 text-[10px] font-mono text-slate-400">
                      Hold camera steady over docket barcode
                    </div>
                  </div>

                  {/* Verification card */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Barcode Validated
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Delhivery Express</span>
                    </div>
                    <div className="text-slate-300 text-xs font-medium">
                      Matched to Booking #AIS-9014 (Rajesh S., Delhi)
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      Weight: 1.2 kg • Bag: DEL-HUB-BAG-04
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all text-center">
                      Rescan
                    </button>
                    <button className="py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all text-center shadow-md">
                      Add to Manifest
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. PICKUP REQUEST LIST */}
            {activeTab === "pickup-list" && (
              <motion.div
                key="pickup-list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-2">
                        <Truck className="w-4 h-4 text-amber-400" />
                        <span>Daily Pickup Coordination Queue</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Schedule and track doorstep parcel collections from local merchants and online sellers.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700">
                        <Filter className="w-3.5 h-3.5" /> Filter Zone
                      </button>
                      <button className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5">
                        <Plus className="w-3.5 h-3.5" /> New Pickup
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 text-[11px] font-mono">
                          <th className="py-2.5 px-3">PICKUP ID</th>
                          <th className="py-2.5 px-3">MERCHANT / SELLER</th>
                          <th className="py-2.5 px-3">LOCATION</th>
                          <th className="py-2.5 px-3">PARCEL QTY</th>
                          <th className="py-2.5 px-3">ASSIGNED RIDER</th>
                          <th className="py-2.5 px-3">STATUS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {[
                          { id: "PKP-8910", name: "Anand Garments", loc: "Sector 14, Vashi", qty: "18 Boxes", rider: "Deepak M. (Rider 02)", status: "Completed", stCol: "bg-emerald-950 text-emerald-400 border-emerald-800" },
                          { id: "PKP-8911", name: "Kiran Electronics", loc: "APMC Market, Phase 2", qty: "6 Cartons", rider: "Rohan S. (Rider 01)", status: "In Transit", stCol: "bg-blue-950 text-blue-400 border-blue-800" },
                          { id: "PKP-8912", name: "Style Hub Boutique", loc: "Palm Beach Road", qty: "12 Flyers", rider: "Manoj K. (Rider 03)", status: "Assigned", stCol: "bg-amber-950 text-amber-400 border-amber-800" },
                          { id: "PKP-8913", name: "Mehta Auto Spares", loc: "MIDC Rabale", qty: "4 Heavy Pkgs", rider: "Unassigned", status: "Pending", stCol: "bg-red-950 text-red-400 border-red-800" },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-white">{row.id}</td>
                            <td className="py-3 px-3 font-semibold text-slate-200">{row.name}</td>
                            <td className="py-3 px-3 text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              <span>{row.loc}</span>
                            </td>
                            <td className="py-3 px-3 font-mono text-slate-300">{row.qty}</td>
                            <td className="py-3 px-3 text-slate-300">{row.rider}</td>
                            <td className="py-3 px-3">
                              <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${row.stCol}`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. SHIPMENT RECORDS */}
            {activeTab === "shipment-records" && (
              <motion.div
                key="shipment-records"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        readOnly
                        placeholder="Search docket, customer phone, receiver pincode..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700">
                        <Download className="w-3.5 h-3.5" /> Export CSV
                      </button>
                      <button className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" /> Manifest PDF
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 text-[11px] font-mono">
                          <th className="py-2.5 px-3">DOCKET #</th>
                          <th className="py-2.5 px-3">BOOKED DATE</th>
                          <th className="py-2.5 px-3">CONSIGNEE</th>
                          <th className="py-2.5 px-3">DESTINATION</th>
                          <th className="py-2.5 px-3">CARRIER</th>
                          <th className="py-2.5 px-3">WEIGHT</th>
                          <th className="py-2.5 px-3">AMOUNT</th>
                          <th className="py-2.5 px-3">STATUS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {[
                          { doc: "9842103829", date: "19 Oct, 10:14", name: "Suresh Patil", city: "Pune 411001", carrier: "Delhivery Air", wt: "0.5 kg", amt: "₹95.00", status: "In Transit", col: "text-blue-400 bg-blue-950 border-blue-800" },
                          { doc: "4401928371", date: "19 Oct, 09:48", name: "Anita Sharma", city: "Delhi 110001", carrier: "BlueDart Apex", wt: "1.2 kg", amt: "₹240.00", status: "Linehaul", col: "text-indigo-400 bg-indigo-950 border-indigo-800" },
                          { doc: "7718039281", date: "19 Oct, 09:20", name: "Vikas Reddy", city: "Hyderabad 500001", carrier: "DTDC Plus", wt: "2.0 kg", amt: "₹180.00", status: "Bagged", col: "text-amber-400 bg-amber-950 border-amber-800" },
                          { doc: "6619028374", date: "18 Oct, 18:30", name: "Pooja Verma", city: "Ahmedabad 380001", carrier: "Xpressbees", wt: "0.8 kg", amt: "₹115.00", status: "Delivered", col: "text-emerald-400 bg-emerald-950 border-emerald-800" },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-white">{row.doc}</td>
                            <td className="py-3 px-3 text-slate-400">{row.date}</td>
                            <td className="py-3 px-3 font-medium text-slate-200">{row.name}</td>
                            <td className="py-3 px-3 text-slate-300">{row.city}</td>
                            <td className="py-3 px-3 text-slate-300">{row.carrier}</td>
                            <td className="py-3 px-3 font-mono text-slate-400">{row.wt}</td>
                            <td className="py-3 px-3 font-mono font-bold text-emerald-400">{row.amt}</td>
                            <td className="py-3 px-3">
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${row.col}`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 6. SHIPMENT STATUS TIMELINE */}
            {activeTab === "status-timeline" && (
              <motion.div
                key="status-timeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto space-y-4"
              >
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">TRACKING DOCKET</div>
                      <div className="text-base font-mono font-bold text-white">AWB-DEL-9842103829</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono text-xs font-bold">
                      IN TRANSIT
                    </span>
                  </div>

                  {/* Shipment header metadata */}
                  <div className="grid grid-cols-3 gap-2 text-xs p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">Origin</div>
                      <div className="font-bold text-white mt-0.5">Mumbai (BOM)</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Destination</div>
                      <div className="font-bold text-white mt-0.5">Delhi NCR (DEL)</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Est. Delivery</div>
                      <div className="font-bold text-emerald-400 mt-0.5">21 Oct, 14:00</div>
                    </div>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6 pt-2">
                    {[
                      { time: "19 Oct, 11:20 IST", title: "Departed Hub on Linehaul", desc: "Consignment sealed in Bag #BOM-DEL-102 and dispatched to Airport Sorting Centre.", active: true },
                      { time: "19 Oct, 10:45 IST", title: "Docket Scanned & Verified", desc: "Scanned via Aishyp Mobile Scanner by Counter Staff Rohan S. Bagged into manifest.", active: true },
                      { time: "19 Oct, 10:14 IST", title: "Shipment Booked at Franchise Counter", desc: "Customer walk-in consignment accepted and thermal label printed.", active: true },
                      { time: "19 Oct, 09:30 IST", title: "Pickup Request Received", desc: "Scheduled online intake from Pooja Enterprises.", active: true },
                    ].map((step, idx) => (
                      <div key={idx} className="relative">
                        <span
                          className={`absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 ${
                            idx === 0
                              ? "bg-emerald-500 border-white ring-4 ring-emerald-500/20"
                              : "bg-slate-700 border-slate-900"
                          }`}
                        />
                        <div className="text-[10px] font-mono text-slate-400">{step.time}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{step.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{step.desc}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
