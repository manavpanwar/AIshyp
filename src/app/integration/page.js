"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getCarrierIntegrationsSchema, getBreadcrumbSchema } from "../../lib/seo";

// ── INTEGRATION CATEGORIES ──
const INTEGRATION_CATEGORIES = [
  { id: "all", label: "All Integrations (14+)" },
  { id: "storefront", label: "Storefront & Marketplaces" },
  { id: "courier", label: "B2C Express Couriers" },
  { id: "b2b", label: "B2B Freight & Cargo" },
  { id: "developer", label: "Developer APIs & WMS" },
];

// ── COMPREHENSIVE INTEGRATIONS DIRECTORY ──
const INTEGRATIONS_LIST = [
  // Storefront Channels & Marketplaces
  {
    name: "Shopify Storefront",
    category: "storefront",
    type: "1-Click App & Webhooks",
    logo: "/shopify.jpeg",
    status: "Auto-Sync Ready",
    latency: "< 500ms",
    desc: "Real-time 2-way order ingestion from Shopify. Automatically fulfills orders upon booking and pushes live branded AWB tracking URLs back.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    features: ["Auto order ingestion", "1-Click AWB pushback", "Inventory stock decrement"],
  },
  {
    name: "Amazon Marketplace (SP-API)",
    category: "storefront",
    type: "Selling Partner API",
    logo: "/Amazon.jpg",
    status: "Auto-Sync Ready",
    latency: "< 1.2s",
    desc: "Ingest Amazon Merchant Fulfilled Network (MFN) self-ship orders automatically, generate compliant dispatch labels, and mark orders dispatched.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    features: ["Self-ship MFN sync", "Automated dispatch notify", "SLA order sorting"],
  },

  // B2C Express Courier Carriers
  {
    name: "Delhivery Express & Surface",
    category: "courier",
    type: "Direct API & Crawler",
    logo: "/delhivery.png",
    status: "Pre-Integrated",
    latency: "< 95ms",
    desc: "Real-time order creation, surface & express air waybill generation, live GPS milestone tracking, automated NDR webhooks, and weight scraping.",
    badgeColor: "bg-red-50 text-[#D8331F] border-red-200",
    features: ["Surface & Express Air", "Automated NDR Webhooks", "COD Remittance Scraping"],
  },
  {
    name: "BlueDart Aviation",
    category: "courier",
    type: "Direct API Integration",
    logo: "/bluedart.png",
    status: "Pre-Integrated",
    latency: "< 110ms",
    desc: "Priority domestic air freight, apex express booking, 29,000+ pincode serviceability lookup, and automated PDF manifest handover generation.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    features: ["Priority Air Network", "Pincode Serviceability", "Instant Manifest Sign-off"],
  },
  {
    name: "DTDC Express & Cargo",
    category: "courier",
    type: "Direct API & 3-Inch Barcode",
    logo: "/dtdc.png",
    status: "Pre-Integrated",
    latency: "< 125ms",
    desc: "Express parcel, B2B commercial cargo freight, custom 3-inch barcode label printing, and automated docket weight reconciliation scraping.",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    features: ["3-Inch Barcode Labels", "Docket Weight Auditing", "Pan-India Surface & Air"],
  },
  {
    name: "Xpressbees Logistics",
    category: "courier",
    type: "Direct REST API",
    logo: "/xpressbees.png",
    status: "Pre-Integrated",
    latency: "< 100ms",
    desc: "High-volume B2C e-commerce fulfillment, COD remittance tracking, instant door-to-door pickup dispatch, and proactive delivery exception notices.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    features: ["High-Volume B2C", "Fast COD Remittance", "Automated Pickup Requests"],
  },
  {
    name: "eKart Logistics",
    category: "courier",
    type: "Direct API Integration",
    logo: "/ekart.png",
    status: "Pre-Integrated",
    latency: "< 130ms",
    desc: "Pan-India retail parcel delivery with deep Tier-2 and Tier-3 city pincode coverage, fast doorstep attempts, and instant NDR confirmation links.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    features: ["Tier-2 & Tier-3 Reach", "Prepaid & COD Parcels", "Automated Re-attempts"],
  },
  {
    name: "Shadowfax On-Demand",
    category: "courier",
    type: "Hyperlocal & Express",
    logo: "/shadowfax.png",
    status: "Pre-Integrated",
    latency: "< 85ms",
    desc: "Same-day hyperlocal delivery, 2-hour doorstep pickup dispatch, rider GPS tracking webhooks, and optimized quick-commerce micro-fulfillment.",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    features: ["Same-Day Delivery", "Rider Live Telemetry", "2-Hour Pickup Dispatch"],
  },
  {
    name: "Trackon Couriers",
    category: "courier",
    type: "Direct REST API",
    logo: "/trackon_logo.png",
    status: "Pre-Integrated",
    latency: "< 140ms",
    desc: "Prime regional surface transport, heavy document dispatch, and automated proof of delivery (POD) tracking telemetry ingestion.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    features: ["Regional Surface Lines", "Automated POD Ingestion", "Secure Document Transit"],
  },
  {
    name: "FedEx International Express",
    category: "courier",
    type: "Cross-Border & Global API",
    logo: "/fedex.png",
    status: "Pre-Integrated",
    latency: "< 160ms",
    desc: "Cross-border international express export, automated commercial customs invoice generation, and global priority tracking pushback.",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    features: ["Global Export Shipping", "Customs Commercial Invoice", "Worldwide Milestone Sync"],
  },
  {
    name: "Amazon Shipping",
    category: "courier",
    type: "Direct Carrier API",
    logo: "/amazon.png",
    status: "Pre-Integrated",
    latency: "< 115ms",
    desc: "Reliable ground delivery network with automated AWB booking, weekend pickup support, and high first-attempt delivery rates.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    features: ["Weekend Pickups", "High First-Attempt Rate", "Automated AWB Booking"],
  },

  // B2B Cargo & Freight
  {
    name: "DP World Freight",
    category: "b2b",
    type: "B2B Cargo & LTL Freight",
    logo: "/dpworldlogo.png",
    status: "Pre-Integrated",
    latency: "< 150ms",
    desc: "Heavy commercial 100kg to 5-ton cargo dispatch, palletized freight tracking, multi-box master manifest printing, and door-to-hub transit.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    features: ["100kg to 5-Ton Cargo", "Pallet & Multi-Box", "Heavy Commercial Manifests"],
  },

  // Developer APIs & WMS
  {
    name: "AI Shyp Universal REST API",
    category: "developer",
    type: "REST API & Webhooks",
    iconType: "terminal",
    status: "Production API Ready",
    latency: "< 45ms",
    desc: "Developer-first unified logistics API. Integrate custom ERPs, SAP, Zoho, Magento, or in-house Python/Node microservices in hours.",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    features: ["Unified Carrier Schema", "Real-Time Event Webhooks", "Sandbox Test Keys"],
  },
];

// ── 4 APPLE-STYLE SHOWCASE FEATURE MODULES ──
const SHOWCASE_INTEGRATIONS = [
  {
    num: "01",
    tag: "UNIVERSAL MULTI-CARRIER GATEWAY",
    title: "14+ Courier Partner APIs.",
    subtitle: "Consolidated into one unified endpoint.",
    desc: "Eliminate the nightmare of maintaining individual courier APIs. AI Shyp unifies Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, and eKart into a single JSON schema with sub-120ms rate discovery and automatic failover.",
    stats: [
      { label: "Pre-Integrated LSPs", val: "14+ Carriers" },
      { label: "Rate Lookup Speed", val: "< 120ms" },
    ],
    features: [
      "Zero per-courier engineering maintenance or custom SDK updates",
      "Dynamic least-cost carrier routing based on zone, weight, and SLA",
      "Automatic API failover if a carrier gateway experiences downtime",
      "Plug in your own contracted courier accounts or use default discounted rates",
    ],
    visualType: "carrier-mesh",
    pillColor: "text-[#D8331F] bg-red-50 border-red-200/80",
  },
  {
    num: "02",
    tag: "1-CLICK STOREFRONT SYNCHRONIZATION",
    title: "Shopify & Marketplace Auto-Sync.",
    subtitle: "Zero code. 2-way real-time data flow.",
    desc: "Authorize your Shopify store or Amazon SP-API in one click. Orders stream into your dispatch dashboard in under 500ms, while AWB numbers, carrier names, and live tracking URLs automatically push back to fulfill buyer orders.",
    stats: [
      { label: "Sync Latency", val: "< 500ms" },
      { label: "Setup Time", val: "1 Click (< 3 mins)" },
    ],
    features: [
      "Instant 2-way order sync with unfulfilled status filtering",
      "Automated Shopify fulfillment status update with branded tracking URL",
      "SKU-level dead weight and dimension mapping for volumetric accuracy",
      "Automated stock decrement on order booking and return restock",
    ],
    visualType: "shopify-flow",
    pillColor: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
  },
  {
    num: "03",
    tag: "B2B FREIGHT & COMMERCIAL CARGO",
    title: "100g Parcels to 5-Ton Cargo.",
    subtitle: "Integrated heavy freight with DP World & DTDC.",
    desc: "Stop separating retail e-commerce parcels from bulk commercial freight. Dispatch palletized goods, multi-box shipments, and containerized cargo with DP World and DTDC Cargo directly from your unified portal.",
    stats: [
      { label: "Weight Range", val: "100g – 5,000kg" },
      { label: "Documentation", val: "Multi-Box Manifests" },
    ],
    features: [
      "Palletized freight dispatch with master docket and child AWB labels",
      "Commercial B2B GST tax invoice generation and e-Way bill compliance",
      "Door-to-hub and door-to-door surface freight tracking telemetry",
      "Unified billing ledger covering both retail courier and bulk cargo",
    ],
    visualType: "b2b-freight",
    pillColor: "text-teal-700 bg-teal-50 border-teal-200/80",
  },
  {
    num: "04",
    tag: "REAL-TIME TELEMETRY & WEBHOOKS",
    title: "Instant Carrier Telemetry & NDR Rescue.",
    subtitle: "Recover up to 35% of failed deliveries automatically.",
    desc: "When a courier flags a delivery failure (door locked, customer unavailable, incorrect address), our webhook ingestion engine triggers automated WhatsApp buyer re-scheduling workflows within seconds.",
    stats: [
      { label: "NDR Ingestion", val: "Instant Webhooks" },
      { label: "RTO Recovery Rate", val: "Up to 35%" },
    ],
    features: [
      "Direct carrier webhook listeners for Delhivery, Xpressbees, and DTDC",
      "Automated WhatsApp interactive delivery re-scheduling links",
      "Real-time courier rider reattempt instruction pushback",
      "Saves merchants double freight charges on preventable RTO returns",
    ],
    visualType: "ndr-telemetry",
    pillColor: "text-purple-700 bg-purple-50 border-purple-200/80",
  },
];

// ── 4-STEP HOW IT WORKS DATA ──
const INTEGRATION_STEPS = [
  {
    step: "01",
    title: "Connect Storefront or API Credentials",
    desc: "Authenticate your Shopify store in 1-click or input your contracted carrier API credentials (Delhivery, BlueDart, DTDC). Zero engineering required.",
    icon: "🔌",
    badge: "1-Click Auth",
  },
  {
    step: "02",
    title: "Automated Ingestion & AI Address Validation",
    desc: "Orders stream into your portal in real time. AI OCR validates pincodes, fixes formatting errors, and ensures 100% address deliverability.",
    icon: "⚡",
    badge: "< 500ms Sync",
  },
  {
    step: "03",
    title: "Least-Cost Rate Discovery & Label Print",
    desc: "Compare courier rates side-by-side across all 14+ partners. Generate compliant 4x6 thermal or A4 labels and handover manifests in 1-click.",
    icon: "🏷️",
    badge: "Zone Engine",
  },
  {
    step: "04",
    title: "Live Milestone Push & Automated COD Settlement",
    desc: "Tracking URLs push back to buyers via WhatsApp and SMS. Delivered COD funds are reconciled automatically and settled via daily T+1 bank payouts.",
    icon: "💰",
    badge: "T+1 Payouts",
  },
];

// ── CARRIER CAPABILITIES MATRIX TABLE DATA ──
const CARRIER_MATRIX = [
  {
    carrier: "Delhivery (B2C & B2B)",
    type: "Direct REST API & Scraper",
    coverage: "29,000+ Pincodes (Air & Surface)",
    formats: "4x6 Thermal, A4, GST Invoices",
    ndr: "Real-Time Webhooks + WhatsApp",
    remittance: "T+1 Daily Automated Scraper",
  },
  {
    carrier: "BlueDart Aviation",
    coverage: "Express Domestic Air Hubs",
    type: "Direct Carrier API",
    formats: "4x6 Thermal, Apex Air Manifests",
    ndr: "Carrier Telemetry Ingestion",
    remittance: "Direct Bank Reconciliation",
  },
  {
    carrier: "DTDC Express & Cargo",
    type: "Direct API & Crawler Portal",
    coverage: "Pan-India Surface & Express",
    formats: "3-Inch Barcode, 4x6 Thermal, A4",
    ndr: "Automated Status Sync",
    remittance: "Docket-Level Weight & COD Audit",
  },
  {
    carrier: "Xpressbees",
    type: "Direct REST API & Scraper",
    coverage: "E-Commerce Regional & National",
    formats: "4x6 Thermal Barcode Labels",
    ndr: "Instant Webhook Failure Alerts",
    remittance: "T+1 Daily Scraped Ledger",
  },
  {
    carrier: "DP World Freight",
    type: "Direct Freight API",
    coverage: "Commercial B2B Palletized Lines",
    formats: "Multi-Box Master Docket Manifests",
    ndr: "Hub Transit Telemetry",
    remittance: "Commercial Credit Terms",
  },
  {
    carrier: "eKart Logistics",
    type: "Direct Retail API",
    coverage: "Tier-1, Tier-2, Tier-3 Coverage",
    formats: "Standard 4x6 Thermal",
    ndr: "Automated Buyer Re-attempt",
    remittance: "Weekly / Bi-Weekly Settlements",
  },
  {
    carrier: "Shadowfax",
    type: "Hyperlocal & Express API",
    coverage: "Same-Day Urban Metro Grid",
    formats: "Instant Digital Label & QR Code",
    ndr: "Rider Live GPS Tracking",
    remittance: "Direct Wallet Settlement",
  },
];

// Inline Sparkles Icon
function SparklesIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

export default function IntegrationPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCodeTab, setActiveCodeTab] = useState("createShipment");

  const filteredIntegrations = INTEGRATIONS_LIST.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  const integrationCarrierSchema = getCarrierIntegrationsSchema();
  const integrationBreadcrumbSchema = getBreadcrumbSchema([
    { name: "14+ Integrations & Carrier APIs", item: "/integration" },
  ]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── SEO JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationCarrierSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationBreadcrumbSchema) }}
      />

      {/* Semantic AI Summary for Answer Engine Extraction (AEO) */}
      <div className="sr-only" itemScope itemType="https://schema.org/ItemList">
        <span itemProp="name">AI Shyp 14+ Courier Partner APIs &amp; Storefront Integrations</span>
        <span itemProp="description">
          AI Shyp delivers pre-integrated logistics connectivity across India: direct carrier APIs for Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, eKart, Trackon, FedEx, and DP World B2B Freight, plus 1-click Shopify storefront auto-sync, Amazon SP-API, and open developer REST APIs with real-time NDR webhooks.
        </span>
      </div>

      {/* ── 1. UNIFIED HERO SECTION (MATCHING FEATURES STANDARD) ── */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.12)_0%,rgba(255,138,110,0.06)_40%,rgba(16,27,61,0.08)_70%,transparent_80%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>Unified Logistics Ecosystem • 14+ Carrier APIs &amp; Storefronts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Connect Once. Ship Anywhere:{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
              14+ Direct Courier APIs &amp; 1-Click Storefront Sync
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Plug in your direct contracted courier accounts or use integrated API keys with zero engineering overhead. Unify B2C parcels, B2B heavy freight, and Shopify storefronts through one resilient platform.
          </motion.p>

          {/* Quick Jump Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#showcase-01"
              className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              1. 14+ Courier Gateway
            </a>
            <a
              href="#showcase-02"
              className="border border-[#D8331F]/40 text-[#D8331F] bg-white hover:bg-red-50/80 hover:border-[#D8331F] px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              2. Shopify 1-Click Sync
            </a>
            <a
              href="#integrations-directory"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Integrations Directory ↓
            </a>
            <a
              href="#carrier-matrix"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Capabilities Matrix ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. APPLE-STYLE 4 SHOWCASE MODULES WITH DYNAMIC VISUAL CARDS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {SHOWCASE_INTEGRATIONS.map((feat, idx) => (
          <motion.div
            key={feat.num}
            id={`showcase-${feat.num}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-slate-200/60 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
          >
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-400 tracking-tight">
                  {feat.num}
                </span>
                <span className={`text-[10px] font-mono font-bold px-3 py-0.5 rounded-full border ${feat.pillColor} tracking-wider uppercase`}>
                  {feat.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-snug">
                  {feat.title}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#D8331F]">
                  {feat.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                {feat.desc}
              </p>

              {/* Key Metric Badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {feat.stats.map((st) => (
                  <div key={st.label} className="bg-slate-100/80 border border-slate-200/70 rounded-xl p-3 text-center">
                    <p className="text-base sm:text-lg font-extrabold text-slate-900 font-sans tracking-tight">
                      {st.val}
                    </p>
                    <p className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bullet List */}
              <ul className="space-y-2 pt-1">
                {feat.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Media & Interactive Visual Display Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 max-w-lg mx-auto hover:scale-[1.01] transition-transform duration-500">
                {/* Browser Title Bar */}
                <div className="h-8 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    {feat.tag}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-1.5 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                {/* Display Canvas with Custom High-Fidelity UI Node */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-950 to-slate-900 min-h-[300px] flex flex-col justify-center">
                  {feat.visualType === "carrier-mesh" && (
                    <div className="space-y-4 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Unified Least-Cost Allocation Engine</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 pt-2">
                        {[
                          { name: "Delhivery", logo: "/delhivery.png", ping: "92ms" },
                          { name: "BlueDart", logo: "/bluedart.png", ping: "105ms" },
                          { name: "DTDC", logo: "/dtdc.png", ping: "118ms" },
                          { name: "Xpressbees", logo: "/xpressbees.png", ping: "98ms" },
                          { name: "Shadowfax", logo: "/shadowfax.png", ping: "84ms" },
                          { name: "eKart", logo: "/ekart.png", ping: "112ms" },
                        ].map((c) => (
                          <div key={c.name} className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col items-center justify-center gap-1.5 hover:border-slate-700 transition-colors">
                            <div className="w-12 h-6 bg-white rounded-md p-1 flex items-center justify-center">
                              <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[9px] font-mono text-slate-400 font-bold">{c.ping}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 pt-1">
                        ⚡ 14+ LSPs evaluated side-by-side in &lt; 120ms
                      </p>
                    </div>
                  )}

                  {feat.visualType === "shopify-flow" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center">
                            <img src="/shopify.jpeg" alt="Shopify" className="object-contain max-h-full" />
                          </div>
                          <div className="text-left font-mono">
                            <p className="text-xs font-bold text-white">YourBrand.myshopify.com</p>
                            <p className="text-[10px] text-emerald-400">Order #SH-4091 Ingested</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                          Auto-Sync
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-slate-500 font-mono text-xs">
                        <span className="h-px w-8 bg-slate-800" />
                        <span className="text-amber-400 text-[11px]">⚡ Bi-Directional Webhooks</span>
                        <span className="h-px w-8 bg-slate-800" />
                      </div>

                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2 text-left font-mono text-xs">
                        <div className="flex justify-between items-center text-[10.5px]">
                          <span className="text-slate-400">Courier Allocated:</span>
                          <span className="text-white font-bold">Delhivery Express Surface</span>
                        </div>
                        <div className="flex justify-between items-center text-[10.5px]">
                          <span className="text-slate-400">AWB Generated:</span>
                          <span className="text-emerald-400 font-bold">78491204812</span>
                        </div>
                        <div className="flex justify-between items-center text-[10.5px]">
                          <span className="text-slate-400">Shopify Status:</span>
                          <span className="text-amber-400 font-bold">Marked Fulfilled + Tracking URL</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {feat.visualType === "b2b-freight" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-8 bg-white rounded-md p-1 flex items-center justify-center">
                            <img src="/dpworldlogo.png" alt="DP World" className="max-h-full object-contain" />
                          </div>
                          <div className="text-left font-mono">
                            <p className="text-xs font-bold text-white">DP World Cargo Gateway</p>
                            <p className="text-[10px] text-teal-400">Heavy LTL &amp; FTL Logistics</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-teal-400 bg-teal-950 border border-teal-800 px-2 py-0.5 rounded">
                          100kg – 5,000kg
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left font-mono text-xs">
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-[10px] text-slate-400 uppercase">Docket Type</p>
                          <p className="text-xs font-bold text-white mt-0.5">Palletized 8-Box Master</p>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-[10px] text-slate-400 uppercase">Tax Compliance</p>
                          <p className="text-xs font-bold text-emerald-400 mt-0.5">e-Way Bill Attached</p>
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-left font-mono text-[11px] text-slate-300">
                        <span>📦 Multi-box manifests with automated volumetric calculation</span>
                      </div>
                    </div>
                  )}

                  {feat.visualType === "ndr-telemetry" && (
                    <div className="space-y-3 font-mono text-xs text-left">
                      <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-red-400 font-bold uppercase">Carrier Failure Webhook</p>
                          <p className="text-xs font-bold text-white mt-0.5">Customer Doorstep Unavailable</p>
                        </div>
                        <span className="text-[10px] bg-red-900 text-red-200 px-2 py-0.5 rounded font-bold">
                          NDR Flagged
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[10px]">
                        <span>↓</span>
                        <span>Automated WhatsApp Bot Dispatched (Instant)</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-emerald-400 font-bold">Buyer WhatsApp Response:</span>
                          <span className="text-slate-400">14:22 IST</span>
                        </div>
                        <p className="text-[11px] text-slate-200">
                          &quot;Please deliver tomorrow after 5 PM at alternate address.&quot;
                        </p>
                        <p className="text-[10px] text-emerald-400 font-bold pt-1">
                          ✓ Courier Re-attempt pushed to rider console
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* ── 3. INTERACTIVE 14+ INTEGRATIONS DIRECTORY ── */}
      <section id="integrations-directory" className="w-full bg-[#FAFAFC] text-slate-900 py-16 sm:py-24 relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
              // Pre-Built Ecosystem Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950">
              14+ Certified Carrier &amp; Channel Connectors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Every integration comes battle-tested for high-concurrency dispatch, automated tracking ingestion, and zero-loss COD remittances.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {INTEGRATION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredIntegrations.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        {item.iconType === "terminal" ? (
                          <div className="w-full h-full rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                            &lt;/&gt;
                          </div>
                        ) : (
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-2xs ${item.badgeColor}`}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold font-sans text-slate-950 tracking-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          {item.latency}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-1 pt-1">
                      {item.features?.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-extrabold text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      {item.status}
                    </span>
                    <span className="text-[#D8331F] opacity-0 group-hover:opacity-100 transition-opacity">
                      API Active →
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CARRIER CAPABILITIES & COMPLIANCE MATRIX TABLE ── */}
      <section id="carrier-matrix" className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-4">
          <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
            // Technical Specifications
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight">
            Carrier Integration Capabilities Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Side-by-side comparison of dispatch capabilities, label standards, and financial remittance automation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-md">
          <table className="w-full text-left text-xs text-slate-800">
            <thead className="bg-slate-50 text-slate-900 font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-5">Carrier Partner</th>
                <th className="py-3.5 px-5">Integration Protocol</th>
                <th className="py-3.5 px-5">Network &amp; Coverage</th>
                <th className="py-3.5 px-5">Supported Labels</th>
                <th className="py-3.5 px-5">NDR Telemetry</th>
                <th className="py-3.5 px-5">COD Remittance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white font-medium">
              {CARRIER_MATRIX.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-950">{c.carrier}</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-mono text-[11px]">{c.type}</td>
                  <td className="py-3.5 px-5 text-slate-700">{c.coverage}</td>
                  <td className="py-3.5 px-5 text-slate-700">{c.formats}</td>
                  <td className="py-3.5 px-5 text-indigo-700 font-mono text-[10.5px]">{c.ndr}</td>
                  <td className="py-3.5 px-5 text-amber-700 font-mono text-[10.5px]">{c.remittance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. 4-STEP GUIDED CONNECTION FLOW SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
              // Setup Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">
              How AI Shyp Unifies Integrations in 4 Steps
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              Zero complicated engineering. Follow these 4 steps to launch high-volume shipping.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTEGRATION_STEPS.map((st) => (
              <div
                key={st.step}
                className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-amber-400/60 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{st.icon}</span>
                    <span className="text-[10px] font-mono font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      Step {st.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold font-sans text-white">
                      {st.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
                  ● {st.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DEVELOPER OPEN REST API STUDIO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
              // Developer API Studio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight leading-tight">
              Enterprise REST API &amp; Webhook Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Integrating custom in-house ERPs, SAP, Zoho, or proprietary logistics apps? Our clean REST endpoints give you programmatic control over order booking, rates, thermal labels, and live status webhooks.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-800 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>REST API with standard JSON payloads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Real-time webhook events (NDR, In-Transit, Delivered, RTO)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Instant Sandbox test environment &amp; live API keys</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D8331F] hover:text-[#c02816]"
              >
                <span>Request API Docs &amp; Developer Sandbox Access</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Interactive Code Terminal */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl text-slate-200 font-mono text-xs overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-slate-900/80">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("createShipment")}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${
                    activeCodeTab === "createShipment"
                      ? "bg-slate-800 text-emerald-400 border border-slate-700"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  POST /api/v1/shipments
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("webhookEvent")}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${
                    activeCodeTab === "webhookEvent"
                      ? "bg-slate-800 text-emerald-400 border border-slate-700"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  EVENT: shipment.ndr.raised
                </button>
              </div>
              <span className="text-[10px] text-slate-400">Response: 200 OK (84ms)</span>
            </div>

            {/* Code Body */}
            <div className="p-5 overflow-x-auto text-[11.5px] leading-relaxed">
              {activeCodeTab === "createShipment" ? (
                <pre className="text-slate-300">
{`// ── Request: Book Shipment with Least-Cost Routing ──
POST https://api.aishyp.com/v1/shipments/create
Authorization: Bearer aishyp_live_9f82k01b...

{
  "order_id": "ORD-98421",
  "carrier_mode": "auto_least_cost",  // Or "delhivery", "bluedart", "dtdc"
  "payment_type": "COD",
  "cod_amount": 1499.00,
  "weight_grams": 450,
  "pickup_hub_id": "HUB-BLR-01",
  "consignee": {
    "name": "Manav Sharma",
    "phone": "+919876543210",
    "address": "Flat 402, Lotus Towers, Indiranagar",
    "city": "Bengaluru",
    "state": "Karnataka",
    "pincode": "560038"
  }
}

// ── Response (HTTP 200 OK - 84ms) ──
{
  "status": "success",
  "awb_code": "78491204812",
  "allocated_carrier": "Delhivery Express Surface",
  "freight_charge": 48.50,
  "label_url": "https://ship.yourbrand.com/labels/78491204812.pdf",
  "tracking_url": "https://track.yourbrand.com/78491204812"
}`}
                </pre>
              ) : (
                <pre className="text-slate-300">
{`// ── Incoming Real-Time Webhook Payload ──
POST https://yourdomain.com/webhooks/aishyp
X-AI-Shyp-Signature: sha256=4f8b912c49a0...

{
  "event": "shipment.ndr.raised",
  "timestamp": "2026-09-21T17:45:00Z",
  "data": {
    "awb_code": "78491204812",
    "order_id": "ORD-98421",
    "carrier": "delhivery",
    "failure_reason": "Customer door locked / unreachable",
    "attempt_count": 1,
    "buyer": {
      "name": "Manav Sharma",
      "phone": "+919876543210"
    },
    "automated_action_triggered": "WHATSAPP_REATTEMPT_FLOW_SENT"
  }
}`}
                </pre>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INTERNAL SOLUTIONS CROSS-LINKING MATRIX ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-sm font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            // Dedicated Solution Portals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/solutions/white-label-logistics-portal-india"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              White Label Logistics Portal India →
            </Link>
            <Link
              href="/solutions/courier-aggregation-software-india"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              Courier Aggregation Software India →
            </Link>
            <Link
              href="/solutions/multi-tenant-shipping-saas"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              Multi-Tenant Shipping SaaS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. HIGH-IMPACT CLOSING CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl"
        >
          <span className="text-[10.5px] font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
            // Ready To Ship
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
            Connect Your Storefront &amp; Couriers <br />
            <span className="text-[#FF8A6E]">in Under 15 Minutes.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            Eliminate manual label typing and multi-portal chaos. Launch your consolidated shipping platform today with zero long-term lock-in.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Schedule Integration Demo →
            </Link>
            <Link
              href="/pricing"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold inline-block transition-colors"
            >
              Explore Commercial Plans
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
