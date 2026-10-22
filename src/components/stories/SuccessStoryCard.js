"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Truck,
  Sparkles,
  Maximize2,
  User,
  Star,
} from "lucide-react";

export default function SuccessStoryCard({ story, onOpenModal, compact = false }) {
  if (!story) return null;

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 overflow-hidden relative">

      {/* ── CARD TOP HEADER WITH THEME BACKGROUND & BADGES ── */}
      <div className="relative w-full h-44 sm:h-48 bg-gradient-to-br from-[#101B3D] via-[#16225A] to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800">
        {/* Subtle Ambient Red Theme Glow & Grid Accents */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D8331F]/20 rounded-full blur-2xl group-hover:bg-[#D8331F]/30 transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <Sparkles className="absolute -bottom-4 -right-3 w-20 h-20 text-white/[0.04] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase bg-white/95 text-slate-900 shadow-xs">
            {story.industry}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold bg-[#D8331F] text-white shadow-md shadow-red-600/30">
            {story.badge || "Verified ROI"}
          </span>
        </div>

        {/* Brand Monogram & Company Name Overlay */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/95 text-slate-950 font-mono font-extrabold text-xs flex items-center justify-center shadow-md">
              {story.brandLogoText || story.company.slice(0, 3).toUpperCase()}
            </div>
            <div>
              <p className="text-white font-extrabold text-sm sm:text-base leading-tight drop-shadow-sm flex items-center gap-1.5">
                {story.company}
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </p>
              <span className="text-[10px] text-slate-300 font-medium block">
                {story.category}
              </span>
            </div>
          </div>

      
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">

        <div className="space-y-3.5">
          {/* Customer Name & Designation Bar */}
          <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 truncate">
              <User className="w-3.5 h-3.5 text-[#D8331F] shrink-0" />
              <span>{story.customerName}</span>
              {/* <span className="text-slate-400 font-normal truncate">({story.customerRole.split("&")[0]})</span> */}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500 font-mono text-[11px] font-bold shrink-0">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>5.0</span>
            </div>
          </div>

          {/* Punchy Transformation Headline */}
          <p className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
            {story.tagline || story.summary}
          </p>

          {/* Key Metrics Strip (2 Key KPIs) */}
          <div className="grid grid-cols-2 gap-2 p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
            {story.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] font-mono text-slate-500 block truncate">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-mono font-extrabold text-[#D8331F] block leading-tight">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Customer Benefit Highlight */}
          {story.customerBenefits && story.customerBenefits.length > 0 && (
            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100/80 text-[11px] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700">
                  Key Benefit
                </span>
                <span className="font-mono font-bold text-emerald-800 text-[10px]">
                  {story.customerBenefits[0].metric}
                </span>
              </div>
              <p className="font-bold text-slate-800 line-clamp-1">
                {story.customerBenefits[0].title}
              </p>
            </div>
          )}

          {/* Integrated Carriers Pills */}
          {story.carriersUsed && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold mr-1">
                Carriers:
              </span>
              {story.carriersUsed.slice(0, 3).map((carrier, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                >
                  {carrier}
                </span>
              ))}
              {story.carriersUsed.length > 3 && (
                <span className="text-[9px] font-mono text-slate-400">
                  +{story.carriersUsed.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* ── ACTION FOOTER ── */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* {onOpenModal ? (
            <button
              onClick={() => onOpenModal(story)}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D8331F] hover:text-[#b32312] transition-colors cursor-pointer py-1"
            >
              <span>Explore Case Study</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href={`/success-stories/${story.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D8331F] hover:text-[#b32312] transition-colors py-1"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )} */}

          <Link
            href={`/success-stories/${story.slug}`}
            className="text-[11px] font-mono font-bold text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-1"
          >
            <span>Full View</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </article>
  );
}
