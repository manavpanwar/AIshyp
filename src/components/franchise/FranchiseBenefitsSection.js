"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap, Users, Search, ArrowRight, } from "lucide-react";

const FRANCHISE_CARDS = [
  {
    id: "simplify-tasks",
    title: "Simplify Daily Tasks",
    description:
      "Reduce repetitive manual data entry and organize routine courier activities.",
    icon: Zap,
    badge: "Operational Speed",
    color: "from-blue-600 to-indigo-600",
    bgPill: "bg-blue-50 text-blue-700 border-blue-200",
    impact: "Save 4+ hours daily on manual paperwork",
    points: [
      "Eliminate repetitive manual consignment logbooks",
      "Instant address autofill from captured label photos",
      "Camera docket barcode scan stops mistyped tracking numbers",
      "Pre-configured rate slabs for fast freight quotes",
    ],
  },
  {
    id: "team-coordination",
    title: "Improve Team Coordination",
    description:
      "Connect relevant booking, pickup, and processing workflows through a shared platform.",
    icon: Users,
    badge: "Connected Staff",
    color: "from-emerald-600 to-teal-600",
    bgPill: "bg-emerald-50 text-emerald-700 border-emerald-200",
    impact: "100% sync between counter & pickup riders",
    points: [
      "Counter operators and pickup boys share real-time updates",
      "Assign scheduled pickup tasks to nearest field rider",
      "Instant status push notifications upon parcel handover",
      "Role-based access for counter executives, managers, and riders",
    ],
  },
  {
    id: "access-information",
    title: "Access Information Easily",
    description:
      "View shipment records and operational information using the available web and mobile tools.",
    icon: Search,
    badge: "Instant Visibility",
    color: "from-indigo-600 to-violet-600",
    bgPill: "bg-indigo-50 text-indigo-700 border-indigo-200",
    impact: "Find any parcel record in under 2 seconds",
    points: [
      "Search by customer phone, docket barcode, or recipient city",
      "Live status timeline from counter booking to delivery",
      "Complete historical archive of past dispatches and receipts",
      "Available across desktop browsers and mobile companion app",
    ],
  },
];

export default function FranchiseBenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Designed for Franchise Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Technology That Works for Your Business
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Courier franchises face high footfall, hectic dispatch cut-offs, and multiple phone calls daily. Aishyp provides the digital backbone to streamline everyday courier hustle.
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FRANCHISE_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-[#D8331F] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${card.bgPill}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    {card.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[11px] font-mono font-bold text-blue-700 uppercase">
                      Operational Impact
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                      {card.impact}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-2">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Learn how it works</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
