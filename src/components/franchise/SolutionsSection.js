"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ScanBarcode,
  Camera,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  FileText,
  Boxes,
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "web-app",
    title: "Web Application",
    description:
      "Manage bookings, shipment records, operational information, and franchise activities through a centralized dashboard.",
    icon: Laptop,
    badge: "Central Operations",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600 to-indigo-600",
    highlights: [
      "Centralized booking counter management",
      "Real-time shipment records & status tracking",
      "Role-based multi-user franchise access",
      "Daily dispatch manifests & cash summaries",
    ],
    sampleSnippet: {
      type: "Web Portal",
      metric: "500+ Dockets/hr capacity",
      status: "Multi-User Ready",
    },
  },
  {
    id: "mobile-app",
    title: "Mobile Application",
    description:
      "Handle courier activities on the go with mobile tools for shipment entry, docket scanning, and pickup operations.",
    icon: Smartphone,
    badge: "Field Companion",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-600 to-teal-600",
    highlights: [
      "On-the-go shipment entry & quick intake",
      "Field pickup coordinator assignment",
      "Works with standard Android & iOS smartphones",
      "Instant offline-first synchronization",
    ],
    sampleSnippet: {
      type: "Mobile Companion",
      metric: "Zero extra scanner hardware",
      status: "Field Staff Enabled",
    },
  },
  {
    id: "docket-scanning",
    title: "Smart Docket Scanning",
    description:
      "Scan supported shipping docket barcodes using a mobile camera to retrieve or verify shipment information and reduce manual entry.",
    icon: ScanBarcode,
    badge: "Camera Barcode AI",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    gradient: "from-amber-600 to-orange-600",
    highlights: [
      "Sub-second camera barcode acquisition",
      "Auto-detects Delhivery, DTDC, BlueDart & more",
      "Verifies docket numbers against booking database",
      "Eliminates manual typing errors & lost parcels",
    ],
    sampleSnippet: {
      type: "Barcode Engine",
      metric: "0.2s camera detection",
      status: "Multi-Barcode Support",
    },
  },
  {
    id: "address-capture",
    title: "Smart Address Capture",
    description:
      "Capture or upload address label photos and extract available address details to help simplify shipment booking.",
    icon: Camera,
    badge: "Vision OCR",
    badgeColor: "bg-red-50 text-[#D8331F] border-red-200",
    gradient: "from-red-600 to-rose-600",
    highlights: [
      "Capture handwritten or printed parcel labels",
      "Intelligent extraction of name, phone & address",
      "Automatic 6-digit Indian pincode resolution",
      "Speeds up walk-in counter booking queue",
    ],
    sampleSnippet: {
      type: "Label Extraction",
      metric: "Under 2-second parsing",
      status: "OCR Assisted",
    },
  },
];

export default function SolutionsSection() {
  const [activeCard, setActiveCard] = useState("web-app");

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Integrated Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Everything Your Courier Franchise Needs
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Purpose-built digital tools engineered to eliminate paperwork, accelerate processing, and connect counter staff with field delivery personnel.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isHovered
                    ? "bg-slate-50/80 border-blue-300 shadow-[0_16px_36px_rgba(37,99,235,0.08)] -translate-y-1.5"
                    : "bg-white border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                {/* Top Badge & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-950 tracking-tight pt-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Snippet Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-500 font-semibold">{item.sampleSnippet.metric}</span>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{item.sampleSnippet.status}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Turn any Android or iOS smartphone into an operational hub
              </h4>
              <p className="text-xs text-slate-600">
                Zero specialized handheld barcode terminal purchases required. Use existing staff mobile phones.
              </p>
            </div>
          </div>
          <a
            href="#connected-experience"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 hover:border-slate-400 transition-all shrink-0 inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span>See Live Screen Mockups</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
