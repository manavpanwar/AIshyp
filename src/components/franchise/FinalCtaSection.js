"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-[#F4F7FC] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto"
        >
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D8331F]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>START WORKING SMARTER</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Simplify Your Courier Operations?
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-5">
            Discover how Aishyp's web and mobile applications can help your courier franchise team manage daily activities with greater convenience and efficiency.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              id="cta-contact-btn"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-[0_10px_25px_rgba(37,99,235,0.45)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Contact Aishyp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/account-create"
              id="cta-launch-btn"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-md active:scale-95 transition-all duration-200"
            >
              <span>Launch Platform</span>
            </Link>
          </div>

          {/* Trust points underneath */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-10 mt-8 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Expensive Scanner Hardware</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Connected Web &amp; Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Franchise Onboarding</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
