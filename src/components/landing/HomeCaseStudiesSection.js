"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import CaseStudyCard from "../stories/CaseStudyCard";
import { getFeaturedCaseStudies } from "../../data/caseStudies";

export default function HomeCaseStudiesSection() {
  const featuredCaseStudies = getFeaturedCaseStudies(3);

  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-12 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#D8331F] bg-red-50 border border-red-200/80">
              <BookOpen className="w-3 h-3 text-[#D8331F]" />
              <span> In-Depth Case Studies</span>
            </div>
            <h2 className="font-sans font-extrabold text-slate-950 text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Real Challenges. <span className="text-[#D8331F]">Smarter Logistics Solutions.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Explore how courier aggregation technology simplifies bulk order manifests, rate card markups, T+1 COD reconciliations, and WhatsApp NDR automation.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-[#D8331F] transition-all shadow-sm whitespace-nowrap group"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>

        {/* Bottom Mobile Button */}
        <div className="text-center pt-2 md:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-slate-950 hover:bg-[#D8331F] transition-all shadow-md"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
