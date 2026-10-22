"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, RefreshCw, Layers } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesFeed({ caseStudies = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    caseStudies.forEach((cs) => {
      if (cs.topicCategory) set.add(cs.topicCategory);
    });
    return Array.from(set);
  }, [caseStudies]);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesCategory =
        selectedCategory === "All" || cs.topicCategory === selectedCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.topicCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [caseStudies, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* ── DEMO TRANSPARENCY NOTICE BANNER ── */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 flex items-start sm:items-center justify-between gap-3 text-xs text-amber-900">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <p>
            <strong className="font-semibold">Demonstration Case Studies:</strong> Each topic represents real-world courier aggregator workflows, carrier API integration architectures, and verifiable operational mechanisms ready for client data mapping.
          </p>
        </div>
      </div>

      {/* ── SEARCH & FILTER CONTROLS ── */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search case studies by topic, feature, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Topic:
          </span>
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? caseStudies.length
                : caseStudies.filter((cs) => cs.topicCategory === cat).length;

            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#D8331F] text-white shadow-sm shadow-red-500/20"
                    : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/50"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-b border-slate-100 pb-3">
        <span>
          Showing <strong>{filteredCaseStudies.length}</strong> of {caseStudies.length} Case Studies
        </span>
        {(selectedCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="flex items-center gap-1 text-[#D8331F] hover:underline cursor-pointer font-bold"
          >
            <RefreshCw className="w-3 h-3" /> Reset Filter
          </button>
        )}
      </div>

      {/* ── CASE STUDIES GRID ── */}
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            📄
          </div>
          <h3 className="font-extrabold text-slate-800 text-base">
            No case studies found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or picking another topic filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#D8331F] hover:bg-[#FF8A6E] transition-colors"
          >
            <RefreshCw className="w-3 h-3" /> Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
