"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Point Your Custom Domain",
    subtitle: "5-Minute DNS Setup",
    desc: "Map your custom domain (yourbrand.com). Complete white-label deployment with your brand name, logo & tracking URLs.",
    icon: "🌐",
  },
  {
    step: "02",
    title: "Plug Direct Courier APIs",
    subtitle: "14+ LSPs Connected",
    desc: "Connect direct API accounts for Delhivery, Bluedart, DTDC, Xpressbees, Shadowfax with automated AWB label generation.",
    icon: "🔌",
  },
  {
    step: "03",
    title: "Configure Margin Slabs",
    subtitle: "Custom Rate Cards",
    desc: "Set tiered rate cards, zone pricing, and custom weight slabs per merchant. Retain 100% of your gross profit margins.",
    icon: "📈",
  },
  {
    step: "04",
    title: "Onboard Merchants & Scale",
    subtitle: "Automated Growth OS",
    desc: "Onboard e-commerce clients, manage sub-branch wallets, trigger automated WhatsApp NDRs, and scale recurring revenue.",
    icon: "🚀",
  },
];

export default function LaunchStepsSection() {
  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-6 sm:space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <p className="text-[11px] font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Simple 4-Step Onboarding Roadmap
          </p>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
            How to Launch Your Platform <span className="text-[#D8331F]">in 24 Hours</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Zero technical complexity. Follow these 4 straightforward steps to launch.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:border-[#D8331F] hover:shadow-md transition-all"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-[10px] font-mono font-extrabold text-[#D8331F] bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                    Step {s.step}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-mono text-emerald-700 uppercase font-bold">{s.subtitle}</p>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-sans mt-0.5">{s.title}</h3>
                </div>

                <p className="text-xs text-slate-600 font-sans leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              <div className="pt-1 text-right">
                <span className="text-[9.5px] font-mono text-slate-400">Step {s.step} of 04</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Call to Action */}
        <div className="text-center pt-1">
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full text-xs font-extrabold text-white bg-[#D8331F] shadow-md hover:bg-[#FF8A6E] transition-colors inline-block"
          >
            Launch Your Courier Platform Today →
          </Link>
        </div>

      </div>
    </section>
  );
}
