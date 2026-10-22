"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, RefreshCw, Truck, ArrowUpDown } from "lucide-react";
import SuccessStoryCard from "./SuccessStoryCard";
import SuccessStoryModal from "./SuccessStoryModal";
import { SUCCESS_STORY_CATEGORIES } from "../../data/successStories";

export default function SuccessStoriesFeed({ stories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCarrier, setSelectedCarrier] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [modalStory, setModalStory] = useState(null);

  // Available unique carriers from data
  const carrierOptions = useMemo(() => {
    const set = new Set();
    stories.forEach((s) => {
      s.carriersUsed?.forEach((c) => set.add(c.split(" ")[0]));
    });
    return ["All", ...Array.from(set)];
  }, [stories]);

  const filteredStories = useMemo(() => {
    let result = stories.filter((story) => {
      const matchesCategory =
        selectedCategory === "All" || story.category === selectedCategory;

      const matchesCarrier =
        selectedCarrier === "All" ||
        story.carriersUsed?.some((c) =>
          c.toLowerCase().includes(selectedCarrier.toLowerCase())
        );

      const matchesSearch =
        !searchQuery.trim() ||
        story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.keyOutcome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.carriersUsed?.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesCarrier && matchesSearch;
    });

    if (sortBy === "rto") {
      result.sort((a, b) => {
        const aVal = parseFloat(a.metrics?.[0]?.value) || 0;
        const bVal = parseFloat(b.metrics?.[0]?.value) || 0;
        return aVal - bVal;
      });
    } else if (sortBy === "company") {
      result.sort((a, b) => a.company.localeCompare(b.company));
    }

    return result;
  }, [stories, selectedCategory, selectedCarrier, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedCarrier !== "All" ||
    searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedCarrier("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="space-y-8">
      {/* ── SEARCH & FILTER CONTROLS ── */}
      <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-4 sm:p-6 space-y-4">
        
        {/* Top Row: Search + Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company, challenge, carrier (e.g. Delhivery, BlueDart)..."
              className="w-full pl-10 pr-12 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#D8331F] shadow-2xs cursor-pointer"
            >
              <option value="featured">Featured Transformations</option>
              <option value="rto">Highest Impact / RTO Drop</option>
              <option value="company">Company Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {SUCCESS_STORY_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? stories.length
                  : stories.filter((s) => s.category === cat).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#D8331F] text-white shadow-sm shadow-red-500/20"
                      : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carrier Quick Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 scrollbar-none border-t border-slate-200/60">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
            <Truck className="w-3.5 h-3.5" /> Carrier:
          </span>
          {carrierOptions.map((carrier) => {
            const isSelected = selectedCarrier === carrier;
            return (
              <button
                key={carrier}
                onClick={() => setSelectedCarrier(carrier)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {carrier === "All" ? "All Carriers" : carrier}
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-b border-slate-100 pb-2">
        <span>
          Showing <strong>{filteredStories.length}</strong> of {stories.length}{" "}
          client transformations
        </span>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 text-[#D8331F] hover:underline cursor-pointer font-bold"
          >
            <RefreshCw className="w-3 h-3" /> Reset Filters
          </button>
        )}
      </div>

      {/* ── STORIES GRID ── */}
      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story) => (
            <SuccessStoryCard
              key={story.slug}
              story={story}
              onOpenModal={(s) => setModalStory(s)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            🔍
          </div>
          <h3 className="font-extrabold text-slate-800 text-base">
            No success stories found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We couldn't find any stories matching your criteria. Try adjusting your
            search terms or resetting filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#D8331F] hover:bg-[#FF8A6E] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" /> Reset All Filters
          </button>
        </div>
      )}

      {/* ── INTERACTIVE MODAL / CASE STUDY INSPECTOR ── */}
      <SuccessStoryModal
        story={modalStory}
        isOpen={Boolean(modalStory)}
        onClose={() => setModalStory(null)}
      />
    </div>
  );
}
