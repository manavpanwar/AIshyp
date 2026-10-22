"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Layers,
  Building,
  Zap,
  Quote,
  ShieldCheck,
  Share2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Truck,
  Check,
  User,
  Star,
  MapPin,
  Flame,
  LayoutDashboard,
  Gift,
} from "lucide-react";

export default function SuccessStoryModal({ story, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("usage");
  const [copied, setCopied] = useState(false);

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !story) return null;

  const handleShare = () => {
    const url = `${window.location.origin}/success-stories/${story.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* ── 1. HEADER & CUSTOMER DETAILS ── */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#D8331F] to-[#b32312] text-white flex items-center justify-center font-mono font-extrabold text-sm sm:text-base shadow-md shadow-red-500/20 shrink-0">
              {story.brandLogoText || story.company.slice(0, 3).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                  {story.company}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Customer
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium flex items-center gap-2 mt-0.5">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <User className="w-3 h-3 text-[#D8331F]" />
                  {story.customerName} ({story.customerRole})
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              title="Copy Story Link"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── 1.1 CUSTOMER PROFILE STRIP ── */}
        <div className="px-5 py-2.5 sm:px-8 bg-[#FFF5F2]/80 border-b border-red-100 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <strong className="text-slate-950 font-bold">Customer:</strong> {story.customerName}
            </span>
            <span className="text-slate-700 font-medium hidden sm:inline flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D8331F]" /> {story.customerLocation}
            </span>
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-600" /> {story.customerScale}
            </span>
          </div>

          <span className="text-[10px] font-mono font-bold text-[#D8331F] bg-white px-2.5 py-0.5 rounded-full border border-red-200 uppercase">
            {story.badge}
          </span>
        </div>

        {/* ── KEY METRICS COCKPIT BAR (JetBrains Mono) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-4 sm:px-8 bg-slate-950 text-white shrink-0">
          {story.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80"
            >
              <span className="text-lg sm:text-2xl font-mono font-extrabold text-[#FF8A6E] block leading-tight">
                {m.value}
              </span>
              <span className="text-[11px] font-bold text-slate-300 block leading-tight mt-0.5 truncate">
                {m.label}
              </span>
              <span className="text-[9px] font-mono text-slate-500 block truncate mt-0.5">
                {m.subtext || "Audited Metric"}
              </span>
            </div>
          ))}
        </div>

        {/* ── INTERACTIVE 4-POINT TABS (100% ENGLISH) ── */}
        <div className="flex items-center gap-2 px-5 sm:px-8 pt-3 pb-1 border-b border-slate-200 bg-white shrink-0 overflow-x-auto scrollbar-none">
          {[
            {
              id: "usage",
              label: "🖥️ How They Use AI Shyp",
              badge: "Workflow",
            },
            {
              id: "benefits",
              label: "🎁 Key Benefits & ROI",
              badge: "ROI",
            },
            {
              id: "feedback",
              label: "💬 Customer Feedback",
              badge: "Rating 5.0",
            },
            {
              id: "impact",
              label: "📊 Before vs After & Tech",
              badge: "Matrix",
            },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#D8331F] text-white shadow-sm shadow-red-500/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── MODAL BODY CONTENT (Scrollable) ── */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-800 bg-slate-50/50">
          
          {/* ── TAB 1: HOW THE CUSTOMER USES THE AI SHYP PANEL ── */}
          {activeTab === "usage" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Daily AI Shyp Panel Operating Routine</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-950">
                  {story.company}'s Daily AI Shyp Operating Workflow
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  The step-by-step operational workflow used daily to process, allocate, and dispatch thousands of shipments:
                </p>
              </div>

              {/* Step by Step Timeline Cards */}
              <div className="space-y-3">
                {story.howTheyUsePanel?.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs flex items-start gap-3.5 hover:border-[#D8331F]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D8331F] font-mono font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{step.stepNumber}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Integrated Carriers Tag Strip */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 font-bold uppercase text-[10px]">
                    Direct Courier APIs Connected to Panel
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    ● Real-Time SLA Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.carriersUsed?.map((carrier, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5"
                    >
                      <Truck className="w-3.5 h-3.5 text-[#FF8A6E]" />
                      {carrier}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 2: MEASURABLE CUSTOMER BENEFITS ── */}
          {activeTab === "benefits" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    Primary Business Benefits
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                    Key Tangible Business Benefits Achieved by {story.company}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Verified quantitative results, freight cost reductions, and operational speed improvements.
                  </p>
                </div>
              </div>

              {/* Benefit Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {story.customerBenefits?.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-2 hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-extrabold bg-emerald-100 text-emerald-800">
                          {benefit.metric}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                        {benefit.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Checklist */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Additional Verified Outcomes
                </span>
                <div className="space-y-2">
                  {story.verifiedResults?.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="font-medium leading-relaxed">{res}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 3: CUSTOMER FEEDBACK ── */}
          {activeTab === "feedback" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {story.customerFeedback ? (
                <div className="space-y-5">
                  {/* Testimonial Hero Card */}
                  <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-mono font-bold text-white ml-2">
                          5.0 / 5.0 Rating
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Customer Feedback
                      </span>
                    </div>

                    <Quote className="w-8 h-8 text-[#FF8A6E] opacity-80" />

                    <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      "{story.customerFeedback.headline}"
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed italic">
                      "{story.customerFeedback.quote}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                      <div className="w-11 h-11 rounded-2xl bg-[#D8331F] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                        {story.customerFeedback.avatarText || "EX"}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-extrabold text-white">
                            {story.customerFeedback.author}
                          </p>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <p className="text-xs text-slate-400">
                          {story.customerFeedback.role} • {story.customerFeedback.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Endorsement Note */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 text-xs text-slate-600 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base shrink-0">
                      🤝
                    </span>
                    <p className="font-medium leading-relaxed">
                      <strong>Client Trust:</strong> {story.company} has been actively utilizing the AI Shyp courier aggregation infrastructure to automate booking, NDR handling, and remittance across Indian lanes.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500">
                    Client feedback pending final verification publish.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── TAB 4: BEFORE VS AFTER & TECH ── */}
          {activeTab === "impact" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Highlight Banner */}
              <div className="bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent border border-red-200/90 rounded-2xl p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#D8331F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D8331F]">
                    Primary Operational Breakthrough
                  </span>
                  <p className="text-sm sm:text-base font-extrabold text-slate-950 mt-0.5 leading-snug">
                    {story.keyOutcome}
                  </p>
                </div>
              </div>

              {/* Before vs After Comparison Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  // Before vs. After AI Shyp Deployment
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {story.beforeAfter?.map((row, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                    >
                      <div className="sm:col-span-4 font-bold text-xs text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                        {row.metric}
                      </div>

                      <div className="sm:col-span-4 text-xs bg-red-50/80 text-red-900 rounded-xl px-3 py-2 border border-red-100">
                        <span className="text-[10px] font-mono font-bold block text-red-600 uppercase">
                          Previous Workflow
                        </span>
                        <span className="font-medium">{row.before}</span>
                      </div>

                      <div className="sm:col-span-4 text-xs bg-emerald-50/80 text-emerald-950 rounded-xl px-3 py-2 border border-emerald-200/80">
                        <span className="text-[10px] font-mono font-bold block text-emerald-700 uppercase">
                          With AI Shyp
                        </span>
                        <span className="font-bold">{row.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── MODAL FOOTER ACTIONS ── */}
        <div className="px-5 py-4 sm:px-8 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <Link
            href={`/success-stories/${story.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-4 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 transition-all text-center"
          >
            <span>Open Dedicated Case Study Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-full px-6 py-2.5 text-xs font-extrabold shadow-md hover:scale-105 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Deploy This Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
