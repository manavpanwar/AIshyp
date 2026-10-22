"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Building,
  AlertTriangle,
  Scale,
  Zap,
  Layers,
  CheckSquare,
  TrendingUp,
  Lightbulb,
  Share2,
  Check,
  ArrowUp,
  Bookmark,
  Sparkles,
  PhoneCall,
  ChevronDown,
} from "lucide-react";

export default function CaseStudyInteractiveView({ caseStudy, children }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Executive Summary", icon: FileText, num: "01" },
    { id: "customer", label: "Customer Profile", icon: Building, num: "02" },
    { id: "challenges", label: "Core Bottlenecks", icon: AlertTriangle, num: "03" },
    { id: "comparison", label: "Legacy vs Automated", icon: Scale, num: "04" },
    { id: "solution", label: "Platform Solution", icon: Zap, num: "05" },
    { id: "features", label: "Panel Features Leveraged", icon: Layers, num: "06" },
    { id: "implementation", label: "Implementation Process", icon: CheckSquare, num: "07" },
    { id: "results", label: "Results & ROI", icon: TrendingUp, num: "08" },
    { id: "takeaways", label: "Key Takeaways", icon: Lightbulb, num: "09" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Track active section
      const sectionElements = sections.map((sec) =>
        document.getElementById(sec.id)
      );

      const scrollPosition = window.scrollY + 240;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      setMobileTocOpen(false);
    }
  };

  return (
    <>
      {/* ── TOP READING PROGRESS BAR ── */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#FF8A6E] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ── MOBILE QUICK NAV TRIGGER ── */}
      <div className="lg:hidden sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
        <button
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
        >
          <span>Jump to Section</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
              mobileTocOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="p-1.5 text-slate-500 hover:text-[#D8331F] bg-slate-100 hover:bg-red-50 rounded-full transition-colors"
            title="Share Case Study"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>
          <span className="text-[11px] font-mono font-bold text-slate-400">
            {Math.round(readingProgress)}% Read
          </span>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileTocOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 z-40 bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Table of Contents
              </span>
              <button
                onClick={() => setMobileTocOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Close ✕
              </button>
            </div>
            <nav className="space-y-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    activeSection === sec.id
                      ? "bg-red-50 text-[#D8331F]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] opacity-60">
                      {sec.num}.
                    </span>
                    {sec.label}
                  </span>
                  {activeSection === sec.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── DESKTOP SPLIT LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── LEFT COLUMN: STICKY DESKTOP TOC & AT-A-GLANCE WIDGETS (4 Cols) ── */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-[100px] space-y-6">
            {/* Table of Contents Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-[#D8331F]" />
                  <span>On This Page</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {Math.round(readingProgress)}% completed
                </span>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all group ${
                        isActive
                          ? "bg-red-50 text-[#D8331F] font-bold shadow-2xs translate-x-1"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive
                              ? "text-[#D8331F]"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                        <span className="truncate">{sec.label}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono ml-2 shrink-0 ${
                          isActive ? "text-[#D8331F]" : "text-slate-300"
                        }`}
                      >
                        {sec.num}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Action Buttons: Share & Top */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3 h-3 text-slate-500" />
                      <span>Share Study</span>
                    </>
                  )}
                </button>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <ArrowUp className="w-3 h-3" /> Back to Top
                </button>
              </div>
            </div>

            {/* Panel Highlights Widget */}
            {caseStudy.panelHighlights &&
              caseStudy.panelHighlights.length > 0 && (
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D8331F]" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Panel Capabilities Used
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {caseStudy.panelHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white/5 border border-white/10 rounded-2xl space-y-1 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-white">
                            {hl.title}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                            {hl.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {hl.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Quick Demo CTA Card */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 rounded-3xl p-6 text-center space-y-3 shadow-2xs">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-white border border-red-200">
                Live Deployment
              </span>
              <h4 className="font-extrabold text-slate-900 text-sm leading-tight">
                Want to enable this in your shipping panel?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect your direct carrier keys and test this automated workflow on your custom domain.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-full py-2.5 text-xs font-extrabold shadow-sm hover:scale-[1.02] transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Book a Panel Walkthrough
              </Link>
            </div>
          </aside>

          {/* ── RIGHT COLUMN: DEEP CASE STUDY CONTENT (8 Cols) ── */}
          <div className="lg:col-span-8 space-y-12">{children}</div>
        </div>
      </div>
    </>
  );
}
