"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  ScanBarcode,
  Truck,
  FolderArchive,
  Smartphone,
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Streamlined shipment booking",
    description:
      "Accelerate walk-in bookings with pre-populated customer records, instant rate comparisons across carriers, and rapid single-click label printing.",
    icon: Zap,
    color: "from-blue-600 to-indigo-600",
    pill: "Fast Counter Booking",
  },
  {
    title: "Less repetitive data entry",
    description:
      "Cut down double entries and typing errors with computer vision address parsing that extracts names, addresses, and pincodes directly from photos.",
    icon: FileSpreadsheet,
    color: "from-indigo-600 to-violet-600",
    pill: "Zero Typo Risk",
  },
  {
    title: "Convenient docket scanning",
    description:
      "Transform any everyday smartphone into a high-precision barcode scanner. Read physical dockets in sub-second speed with zero specialized scanner hardware.",
    icon: ScanBarcode,
    color: "from-amber-600 to-orange-600",
    pill: "Sub-Second Barcode AI",
  },
  {
    title: "Simplified pickup coordination",
    description:
      "Assign collection requests to available field riders with live route views, digital pickup confirmations, and real-time counter notifications.",
    icon: Truck,
    color: "from-emerald-600 to-teal-600",
    pill: "Rider Alignment",
  },
  {
    title: "Organized shipment information",
    description:
      "Store all consignments, proof of deliveries, customer details, and carrier manifests in an instantly searchable, cloud-backed digital archive.",
    icon: FolderArchive,
    color: "from-cyan-600 to-blue-600",
    pill: "Instant Audit & Search",
  },
  {
    title: "Connected web and mobile workflows",
    description:
      "Bridge your counter desk computers with field rider smartphones in real time, so every scan, pickup, and dispatch update is instantly synchronized.",
    icon: Smartphone,
    color: "from-rose-600 to-red-600",
    pill: "Real-Time Cloud Sync",
  },
];

export default function KeyBenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFC] relative overflow-hidden">
      {/* Background radial dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Operational Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Make Every Shipment Easier to Manage
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Eliminate operational bottlenecks, reduce customer wait times, and empower your franchise crew with tools built specifically for modern logistics.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.pill}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ready for Courier Franchises</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
