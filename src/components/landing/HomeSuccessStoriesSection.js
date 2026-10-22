"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SuccessStoryCard from "../stories/SuccessStoryCard";
import { getFeaturedSuccessStories } from "../../data/successStories";

export default function HomeSuccessStoriesSection() {
  const featuredStories = getFeaturedSuccessStories(3);

  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#D8331F] bg-red-50 border border-red-200/80">
              <Sparkles className="w-3 h-3 text-[#D8331F]" />
              <span>// Customer Success Stories</span>
            </div>
            <h2 className="font-sans font-extrabold text-slate-950 text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Real Businesses. <span className="text-[#D8331F]">Smarter Shipping.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              See how modern D2C brands, enterprise retailers, and courier franchise networks transform fulfillment throughput and unit economics with AI Shyp.
            </p>
          </div>

          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 hover:border-[#D8331F] hover:text-[#D8331F] hover:bg-red-50/40 transition-all shadow-2xs whitespace-nowrap group"
          >
            <span>View All Success Stories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredStories.map((story) => (
            <SuccessStoryCard key={story.slug} story={story} />
          ))}
        </div>

        {/* Bottom Mobile Button */}
        <div className="text-center pt-2 md:hidden">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-[#FF8A6E] transition-all shadow-md"
          >
            <span>Explore All Success Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
