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
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F]  text-xs font-bold shadow-2xs">
            <span>✨</span>
            <span className="uppercase tracking-wider">Simple 4-Step Onboarding Roadmap</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 leading-tight tracking-tight">
            How to Launch Your Platform{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#D8331F] bg-clip-text text-transparent">
              in 24 Hours
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Zero technical complexity. Follow these 4 straightforward steps to launch.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 space-y-4 flex flex-col justify-between hover:border-[#D8331F]/60 shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[11px]  font-extrabold text-[#D8331F] bg-red-50/80 px-2.5 py-1 rounded-full border border-red-200/70">
                    Step {s.step}
                  </span>
                </div>

                <div>
                  <p className="text-[11px]  text-emerald-700 uppercase font-bold tracking-wide">{s.subtitle}</p>
                  <h3 className="text-base font-extrabold text-slate-950 font-sans mt-0.5 leading-snug">{s.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-right">
                <span className="text-[10px]  text-slate-400 font-bold uppercase tracking-wider">Step {s.step} of 04</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Call to Action */}
        <div className="text-center pt-2">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D8331F] hover:bg-[#c02816] shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Launch Your Courier Platform Today</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
