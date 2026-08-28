"use client";

import React from "react";

const CARD_THEMES = {
  "reduce-rto-ecommerce-india": {
    badge: "RTO & NDR AUTOMATION",
    icon: "⚡",
    bgGradient: "from-rose-500/15 via-red-500/10 to-[#D8331F]/20",
    accentColor: "#D8331F",
    pillBg: "bg-red-50 border-red-200 text-[#D8331F]",
  },
  "delivery-failure-reasons-india": {
    badge: "LAST-MILE LOGISTICS",
    icon: "📌",
    bgGradient: "from-amber-500/15 via-orange-500/10 to-amber-600/20",
    accentColor: "#D97706",
    pillBg: "bg-amber-50 border-amber-200 text-amber-800",
  },
  "best-shipping-aggregator-india": {
    badge: "CARRIER API MATRIX",
    icon: "🚚",
    bgGradient: "from-blue-500/15 via-indigo-500/10 to-blue-600/20",
    accentColor: "#2563EB",
    pillBg: "bg-blue-50 border-blue-200 text-blue-800",
  },
  "how-shipping-aggregators-work": {
    badge: "LOGISTICS SAAS OS",
    icon: "📦",
    bgGradient: "from-emerald-500/15 via-teal-500/10 to-emerald-600/20",
    accentColor: "#059669",
    pillBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  "courier-franchise-business-india": {
    badge: "SAAS FRANCHISE PLAYBOOK",
    icon: "📈",
    bgGradient: "from-[#D8331F]/15 via-red-500/10 to-amber-500/20",
    accentColor: "#D8331F",
    pillBg: "bg-red-50 border-red-200 text-[#D8331F]",
  },
  "ndr-in-courier-explained": {
    badge: "WHATSAPP NDR WORKFLOW",
    icon: "💬",
    bgGradient: "from-purple-500/15 via-indigo-500/10 to-purple-600/20",
    accentColor: "#7C3AED",
    pillBg: "bg-purple-50 border-purple-200 text-purple-800",
  },
  "courier-api-integration-guide": {
    badge: "REST API & WEBHOOKS",
    icon: "🔌",
    bgGradient: "from-sky-500/15 via-blue-500/10 to-sky-600/20",
    accentColor: "#0284C7",
    pillBg: "bg-sky-50 border-sky-200 text-sky-800",
  },
  "best-shipping-api-india": {
    badge: "CARRIER BENCHMARKING",
    icon: "📊",
    bgGradient: "from-indigo-500/15 via-blue-500/10 to-indigo-600/20",
    accentColor: "#4F46E5",
    pillBg: "bg-indigo-50 border-indigo-200 text-indigo-800",
  },
  "shopify-courier-shipping-automation-india": {
    badge: "SHOPIFY 1-CLICK SYNC",
    icon: "🛍️",
    bgGradient: "from-emerald-500/15 via-teal-500/10 to-emerald-600/20",
    accentColor: "#059669",
    pillBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  "reduce-logistics-cost-franchise-model": {
    badge: "FINANCIAL WALLET OS",
    icon: "👛",
    bgGradient: "from-emerald-600/15 via-green-500/10 to-emerald-700/20",
    accentColor: "#059669",
    pillBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  "ecommerce-shipping-problems-india": {
    badge: "WEIGHT AUDIT & DISPUTES",
    icon: "⚖️",
    bgGradient: "from-rose-500/15 via-pink-500/10 to-rose-600/20",
    accentColor: "#E11D48",
    pillBg: "bg-rose-50 border-rose-200 text-rose-800",
  },
  "build-logistics-network-franchise": {
    badge: "B2B HEAVY CARGO & LTL",
    icon: "🚛",
    bgGradient: "from-teal-500/15 via-cyan-500/10 to-teal-600/20",
    accentColor: "#0D9488",
    pillBg: "bg-teal-50 border-teal-200 text-teal-800",
  },
};

const DEFAULT_THEME = {
  badge: "LOGISTICS INSIGHTS",
  icon: "🌐",
  bgGradient: "from-slate-200/50 via-slate-100 to-slate-200/60",
  accentColor: "#D8331F",
  pillBg: "bg-slate-100 border-slate-200 text-slate-800",
};

export default function BlogCardBanner({ slug, title, className = "h-48 sm:h-52" }) {
  const theme = CARD_THEMES[slug] || DEFAULT_THEME;

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br ${theme.bgGradient} p-6 flex flex-col justify-between border-b border-slate-200/60 select-none ${className}`}
    >
      {/* Background Graphic Elements */}
      <div
        className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-20 blur-xl pointer-events-none"
        style={{ backgroundColor: theme.accentColor }}
      />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between z-10">
        <span
          className={`text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase border shadow-2xs ${theme.pillBg}`}
        >
          {theme.badge}
        </span>
        <span className="text-xs font-mono font-bold text-slate-400">
          AIShyp OS
        </span>
      </div>

      {/* Center Icon & Graphic Title */}
      <div className="z-10 space-y-1 my-auto pt-2">
        <span className="text-3xl sm:text-4xl block drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {theme.icon}
        </span>
        <p className="text-xs font-mono font-bold text-slate-800/80 truncate max-w-[90%]">
          {title}
        </p>
      </div>

      {/* Bottom Status Bar */}
      <div className="z-10 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 pt-1 border-t border-slate-900/5">
        <span className="flex items-center gap-1.5 text-slate-700">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: theme.accentColor }}
          />
          VERIFIED GUIDE
        </span>
        <span style={{ color: theme.accentColor }} className="font-extrabold">
          AIShyp Insights →
        </span>
      </div>
    </div>
  );
}
