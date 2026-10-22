"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Target, CheckCircle2, BookOpen } from "lucide-react";

export default function CaseStudyCard({ caseStudy }) {
  if (!caseStudy) return null;

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden">
      {/* Top Banner with Theme Background */}
      <div className="relative w-full h-40 sm:h-44 bg-gradient-to-br from-[#101B3D] via-[#16225A] to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800">
        {/* Subtle Ambient Red Theme Glow & Grid Accents */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D8331F]/20 rounded-full blur-2xl group-hover:bg-[#D8331F]/30 transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <BookOpen className="absolute -bottom-4 -right-3 w-20 h-20 text-white/[0.04] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

        {/* Top Indicators */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase bg-[#D8331F] text-white shadow-sm">
            Topic {caseStudy.topicNumber} • {caseStudy.topicCategory}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
            Demo Case
          </span>
        </div>

        {/* Read Time on Header */}
        <div className="relative z-10 flex items-center justify-between text-slate-300 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF8A6E]" />
            <span>{caseStudy.readTime}</span>
          </div>
          <span className="text-[10px] text-slate-400 font-sans font-medium">
            AI Shyp Case Study
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl group-hover:text-[#D8331F] transition-colors leading-tight">
            <Link href={`/case-studies/${caseStudy.slug}`}>
              {caseStudy.title}
            </Link>
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
            {caseStudy.subtitle}
          </p>

          {/* Quick Metrics Pills */}
          {caseStudy.metricsSummary && caseStudy.metricsSummary.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {caseStudy.metricsSummary.slice(0, 2).map((m, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left"
                >
                  <p className="text-xs font-mono font-extrabold text-[#D8331F]">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium truncate">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Core Framework Tag */}
          <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
            <Target className="w-3.5 h-3.5 text-[#D8331F] shrink-0" />
            <span className="truncate">
              <strong>Focus:</strong> {caseStudy.targetAudience}
            </span>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Problem → Result</span>
          </div>
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D8331F] group-hover:text-[#FF8A6E] transition-colors"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
