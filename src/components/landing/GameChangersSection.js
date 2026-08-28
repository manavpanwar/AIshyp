"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    id: "01",
    num: "01",
    badge: "100% White-Label",
    badgeColor: "bg-red-50 text-[#D8331F] border-red-200",
    title: "Your Logo. Your Domain. Your Colors.",
    tagline: "Customers see your brand on every screen, invoice, and label — never AIShyp.",
    highlights: [
      {
        title: "Custom Domain & Branding",
        desc: "Host on your own domain (yourbrand.com) with custom logos & colors.",
      },
      {
        title: "Instant AWB & Multi-Carrier Labels",
        desc: "Generate carrier labels with your brand and 0% AIShyp watermark.",
      },
      {
        title: "Branded Tracking Pages",
        desc: "Live tracking links route merchants & buyers strictly to your domain.",
      },
    ],
  },
  {
    id: "02",
    num: "02",
    badge: "Rate & Margin Control",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "You Control Rates. You Build the Business.",
    tagline: "Configure custom buy & sell rate slabs per merchant and keep 100% of your gross margins.",
    highlights: [
      {
        title: "14+ Top Courier Networks",
        desc: "Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax in one panel.",
      },
      {
        title: "Custom Margin Spread",
        desc: "Set tiered buy & sell rate markups per merchant group.",
      },
      {
        title: "0% Commission Split",
        desc: "Keep 100% of your gross profit margins on every single order.",
      },
    ],
  },
  {
    id: "03",
    num: "03",
    badge: "Network Hierarchy",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "One Platform. Hundreds of Customers.",
    tagline: "Manage your entire network: Aggregator ➔ Clients ➔ Sub-Branches ➔ Users.",
    highlights: [
      {
        title: "Multi-Tier Account Controls",
        desc: "Organize clients, franchise branches, and agent users with custom roles.",
      },
      {
        title: "Prepaid Client Wallets",
        desc: "Automated wallet balances, instant UPI recharges, and credit limits.",
      },
      {
        title: "Daily COD Reconciliation",
        desc: "Automated daily COD payouts and itemized GST tax invoices.",
      },
    ],
  },
];

const SAMPLE_COURIERS = [
  { name: "Delhivery Air", rate: 38, speed: "Express Air", sla: "99.4%" },
  { name: "Bluedart Surface", rate: 45, speed: "Express Surface", sla: "99.1%" },
  { name: "Xpressbees Direct", rate: 35, speed: "Standard Surface", sla: "98.7%" },
  { name: "DTDC Premium", rate: 42, speed: "Express Surface", sla: "98.9%" },
];

const BRAND_THEMES = [
  {
    id: "red",
    name: "Flame Red",
    primary: "#D8331F",
    hex: "#D8331F",
  },
  {
    id: "blue",
    name: "Royal Blue",
    primary: "#2563EB",
    hex: "#2563EB",
  },
  {
    id: "emerald",
    name: "Forest Emerald",
    primary: "#059669",
    hex: "#059669",
  },
  {
    id: "purple",
    name: "Electric Violet",
    primary: "#7C3AED",
    hex: "#7C3AED",
  },
  {
    id: "amber",
    name: "Sunset Amber",
    primary: "#D97706",
    hex: "#D97706",
  },
  {
    id: "cyan",
    name: "Cyber Cyan",
    primary: "#0891B2",
    hex: "#0891B2",
  },
];

export default function GameChangersSection() {
  const [activePillar, setActivePillar] = useState("01");
  const [weightKg, setWeightKg] = useState(1);
  const [customDomain, setCustomDomain] = useState("aishyp.com");
  const [selectedTheme, setSelectedTheme] = useState(BRAND_THEMES[0]);

  const cleanDomain = customDomain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\s+/g, "") || "yourdomain.com";
  const brandSlug = cleanDomain.split(".")[0] || "yourbrand";
  const brandDisplayName = brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);

  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#FAFAFC] text-slate-900 border-t border-slate-200/80 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full space-y-6 sm:space-y-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Personal Courier Aggregator Panel
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            One Platform. <span className="text-[#D8331F]">Three Game-Changers.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            AIShyp gives shipping partners the tools, rates, and leads to scale overnight.
          </p>
        </div>

        {/* 3 Main Pillar Navigation Tab Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 group cursor-pointer ${
                  isActive
                    ? "bg-white border-[#D8331F] shadow-lg border-l-4 border-l-[#D8331F]"
                    : "bg-slate-50/90 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-md border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-sans truncate">{pillar.title}</h3>
                </div>
                <span className={`text-lg font-mono font-extrabold shrink-0 ${isActive ? "text-[#D8331F]" : "text-slate-400"}`}>
                  0{pillar.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Studio Card */}
        <AnimatePresence mode="wait">
          {activePillar === "01" && (
            <motion.div
              key="pillar-01"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xl grid lg:grid-cols-12 gap-5 lg:gap-6 items-center border-t-4 border-t-[#D8331F]"
            >
              {/* Left Column (5 cols): Highlights & Interactive Controls */}
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <span className="text-[10px] font-mono text-[#D8331F] uppercase font-bold tracking-wider">
                    Game-Changer #01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans leading-tight">
                    Go Digital Instantly
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Deploy your digital shipping portal with your custom domain & brand colors.
                  </p>
                </div>

                {/* 3 Compact Highlights */}
                <div className="space-y-2">
                  {PILLARS[0].highlights.map((h, i) => (
                    <div key={h.title} className="flex gap-2.5 items-start">
                      <span
                        style={{ borderColor: selectedTheme.primary, color: selectedTheme.primary }}
                        className="w-4 h-4 rounded-full bg-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono border"
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 font-sans leading-tight">{h.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium leading-snug">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compact Customizer Controls */}
                <div className="space-y-2.5 font-mono pt-2 border-t border-slate-100">
                  {/* Domain Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-700 block font-bold">
                      1. Test Custom Domain URL:
                    </label>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200 shrink-0 font-bold">
                        https://
                      </span>
                      <input
                        type="text"
                        value={customDomain}
                        onChange={(e) => setCustomDomain(e.target.value)}
                        className="bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-[#D8331F] w-full font-bold shadow-2xs transition-colors"
                        placeholder="yourdomain.com or ship.brand.in"
                      />
                    </div>
                  </div>

                  {/* Brand Color Swatches */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="font-bold text-slate-700">2. Brand Accent Color:</span>
                      <span className="font-bold" style={{ color: selectedTheme.primary }}>
                        {selectedTheme.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {BRAND_THEMES.map((t) => {
                        const isSelected = selectedTheme.id === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setSelectedTheme(t)}
                            title={t.name}
                            style={{ backgroundColor: t.primary }}
                            className={`w-6 h-6 rounded-full transition-all transform flex items-center justify-center cursor-pointer ${
                              isSelected
                                ? "ring-2 ring-offset-1 ring-slate-900 scale-110 shadow-sm"
                                : "hover:scale-105 opacity-85 hover:opacity-100"
                            }`}
                          >
                            {isSelected && (
                              <span className="text-white text-[10px] font-extrabold">✓</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): Zoomed-In URL Bar & Portal Preview */}
              <div className="lg:col-span-7 space-y-2">
                <div className="rounded-xl overflow-hidden border border-slate-300 shadow-md bg-white">
                  
                  {/* Top Zoomed-In Browser Window Bar */}
                  <div className="bg-slate-900 text-slate-300 px-3.5 py-2 border-b border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[9px]">
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          SSL ACTIVE
                        </span>
                        <span className="text-slate-400 font-bold">100% White-Label</span>
                      </div>
                    </div>

                    {/* Magnified Zoomed-in URL Address Bar */}
                    <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono shadow-inner">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-emerald-400 text-xs shrink-0">🔒</span>
                        <span className="text-slate-500 shrink-0">https://</span>
                        <span
                          style={{ color: selectedTheme.primary }}
                          className="font-extrabold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700/80 truncate"
                        >
                          {cleanDomain}
                        </span>
                        <span className="text-slate-500 shrink-0">/dashboard</span>
                      </div>

                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold hidden sm:inline shrink-0 pl-1.5">
                        TLS 1.3
                      </span>
                    </div>
                  </div>

                  {/* Zoomed-in Brand Portal Header in Selected Brand Color */}
                  <div className="p-3 sm:p-3.5 bg-white border-b border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between gap-3">
                      {/* Branded Logo & Portal Title */}
                      <div className="flex items-center gap-2">
                        <div
                          style={{ backgroundColor: selectedTheme.primary }}
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-white font-extrabold text-xs font-sans shadow-xs shrink-0"
                        >
                          {brandDisplayName.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm font-sans tracking-tight leading-tight">
                            {brandDisplayName} Logistics
                          </h4>
                          <p className="text-[9px] font-mono text-slate-400 font-semibold">
                            Enterprise Shipping Console
                          </p>
                        </div>
                      </div>

                      {/* Brand Colored Primary Action CTA */}
                      <button
                        type="button"
                        style={{ backgroundColor: selectedTheme.primary }}
                        className="text-white px-2.5 py-1 rounded-lg font-bold font-sans text-[11px] shadow-xs hover:opacity-90 transition-opacity shrink-0 flex items-center gap-1"
                      >
                        <span>+</span>
                        <span>New Shipment</span>
                      </button>
                    </div>

                    {/* Navigation Tabs with Active Brand Highlight */}
                    <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100 font-mono text-[10px]">
                      <span
                        style={{
                          backgroundColor: `${selectedTheme.primary}15`,
                          color: selectedTheme.primary,
                          borderColor: `${selectedTheme.primary}40`,
                        }}
                        className="px-2.5 py-0.5 rounded-md font-bold border flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedTheme.primary }} />
                        Dashboard
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-slate-600 font-medium hover:bg-slate-100 cursor-pointer">
                        Orders
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-slate-600 font-medium hover:bg-slate-100 cursor-pointer">
                        Rate Calculator
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-slate-600 font-medium hover:bg-slate-100 cursor-pointer hidden sm:inline">
                        Tracking
                      </span>
                    </div>
                  </div>

                  {/* Compact DNS & White-Label Connection Details */}
                  <div className="p-2.5 sm:p-3 bg-slate-50 space-y-1.5 font-mono text-[9.5px]">
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                        <p className="text-[8px] text-slate-400 font-bold uppercase">CNAME Record</p>
                        <p className="text-slate-900 font-extrabold truncate">{cleanDomain}</p>
                        <p className="text-[8.5px] text-slate-500 truncate">points to: <span className="text-slate-700 font-bold">cname.aishyp.com</span></p>
                      </div>

                      <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                        <p className="text-[8px] text-slate-400 font-bold uppercase">Customer Tracking URL</p>
                        <p className="text-slate-900 font-extrabold truncate">{cleanDomain}/track</p>
                        <p className="text-[8.5px] text-emerald-600 font-bold">0% AIShyp branding</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Color Summary Note */}
                <div className="flex items-center justify-between text-[10.5px] font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedTheme.primary }} />
                    Active Accent: <strong className="text-slate-900 font-bold">{selectedTheme.name}</strong> ({selectedTheme.hex})
                  </span>
                  <span className="text-slate-500 hidden sm:inline">Customizable per branch & client portal</span>
                </div>
              </div>
            </motion.div>
          )}

          {activePillar === "02" && (
            <motion.div
              key="pillar-02"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xl grid lg:grid-cols-12 gap-5 lg:gap-6 items-center border-t-4 border-t-amber-500"
            >
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <span className="text-[10px] font-mono text-amber-600 uppercase font-bold tracking-wider">
                    Game-Changer #02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans leading-tight">
                    Aggregate & Unlock Rates
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Pool shipping volume across 29,000+ pincodes to unlock enterprise rates.
                  </p>
                </div>

                <div className="space-y-2">
                  {PILLARS[1].highlights.map((h, i) => (
                    <div key={h.title} className="flex gap-2.5 items-start">
                      <span className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono border border-amber-500/30">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 font-sans leading-tight">{h.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium leading-snug">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Multi-Carrier Rate Calculator */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-sm space-y-3 font-mono">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-[11px] text-slate-700 font-bold uppercase">Rate Card Preview ({weightKg} kg shipment)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">Weight:</span>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={weightKg}
                      onChange={(e) => setWeightKg(parseFloat(e.target.value))}
                      className="w-20 accent-[#D8331F]"
                    />
                    <span className="text-[11px] font-bold text-[#D8331F]">{weightKg} kg</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SAMPLE_COURIERS.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200/80 hover:border-amber-400 transition-all text-xs"
                    >
                      <div>
                        <span className="font-bold text-slate-900 font-sans block text-xs">{c.name}</span>
                        <span className="text-[9.5px] text-slate-500">{c.speed} • SLA {c.sla}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#D8331F]">
                          ₹{(c.rate * weightKg).toFixed(2)}
                        </span>
                        <span className="text-[8.5px] text-slate-400 block">excl. GST</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activePillar === "03" && (
            <motion.div
              key="pillar-03"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xl grid lg:grid-cols-12 gap-5 lg:gap-6 items-center border-t-4 border-t-emerald-600"
            >
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold tracking-wider">
                    Game-Changer #03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans leading-tight">
                    Grow Partner Revenue
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Receive pre-vetted, high-volume merchant leads directly into your dashboard.
                  </p>
                </div>

                <div className="space-y-2">
                  {PILLARS[2].highlights.map((h, i) => (
                    <div key={h.title} className="flex gap-2.5 items-start">
                      <span className="w-4 h-4 rounded-full bg-emerald-600/10 text-emerald-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono border border-emerald-600/30">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 font-sans leading-tight">{h.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium leading-snug">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Revenue Lead Cards */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-sm space-y-2.5 font-mono">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-[11px] text-slate-700 font-bold uppercase">Pre-Vetted Merchant Lead Feed</span>
                  <span className="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    Live Feed
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900 font-sans block text-xs">UrbanAttire D2C Brand</span>
                      <span className="text-[9.5px] text-slate-500">Surat, Gujarat • 1,200 orders/mo</span>
                    </div>
                    <span className="bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-md shadow-2xs">
                      Claim Lead →
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900 font-sans block text-xs">Aura Wellness Products</span>
                      <span className="text-[9.5px] text-slate-500">Bengaluru, KA • 2,800 orders/mo</span>
                    </div>
                    <span className="bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-md shadow-2xs">
                      Claim Lead →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
