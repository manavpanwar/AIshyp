"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const INTEGRATION_CATEGORIES = [
  { id: "all", label: "All Integrations (14+)" },
  { id: "storefront", label: "Storefront Channels" },
  { id: "courier", label: "Courier Carriers" },
  { id: "wms", label: "B2B & WMS Systems" },
];

const INTEGRATIONS_LIST = [
  // Storefront Channels
  {
    name: "Shopify Storefront",
    category: "storefront",
    type: "1-Click App & Webhook",
    logo: "/shopify.jpeg",
    status: "Auto-Sync Ready",
    desc: "Real-time 2-way order ingestion from Shopify, auto-fulfill orders upon booking, and push AWB tracking URLs back.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Amazon Marketplace",
    category: "storefront",
    type: "SP-API Integration",
    logo: "/Amazon.jpg",
    status: "Auto-Sync Ready",
    desc: "Ingest self-ship MFN orders automatically, generate compliant dispatch labels, and mark orders dispatched.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },

  // Courier Carriers
  {
    name: "Delhivery",
    category: "courier",
    type: "Direct API & Scraper",
    logo: "/delhivery.png",
    status: "Pre-Integrated",
    desc: "Real-time order creation, surface & express air waybill generation, live tracking, and NDR automated webhooks.",
    badgeColor: "bg-red-50 text-[#D8331F] border-red-200",
  },
  {
    name: "BlueDart",
    category: "courier",
    type: "Direct API",
    logo: "/bluedart.png",
    status: "Pre-Integrated",
    desc: "Priority domestic air freight, apex express booking, pincode serviceability lookup, and automated manifest generation.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "DTDC",
    category: "courier",
    type: "Direct API & 3-Inch Label",
    logo: "/dtdc.png",
    status: "Pre-Integrated",
    desc: "Express parcel, B2B cargo freight, custom 3-inch barcode printing, and docket weight reconciliation scraping.",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    name: "Xpressbees",
    category: "courier",
    type: "Direct API",
    logo: "/xpressbees.png",
    status: "Pre-Integrated",
    desc: "High-volume B2C e-commerce fulfillment, COD remittance tracking, and instant door-to-door pickup dispatch.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "DP World",
    category: "courier",
    type: "B2B Cargo & LTL Freight",
    logo: "/dpworldlogo.png",
    status: "Pre-Integrated",
    desc: "Heavy commercial 100kg to 5-ton cargo dispatch, palletized freight tracking, and multi-box manifest printing.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "eKart Logistics",
    category: "courier",
    type: "Direct API",
    logo: "/ekart.png",
    status: "Pre-Integrated",
    desc: "Pan-India retail parcel delivery, tier-2/3 city pincode coverage, and instant NDR buyer confirmation links.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Shadowfax",
    category: "courier",
    type: "Hyperlocal & Express",
    logo: "/shadowfax.png",
    status: "Pre-Integrated",
    desc: "Same-day hyperlocal delivery, 2-hour doorstep pickup dispatch, and real-time rider GPS tracking webhooks.",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    name: "Trackon Couriers",
    category: "courier",
    type: "Direct API",
    logo: "/trackon_logo.png",
    status: "Pre-Integrated",
    desc: "Prime regional surface transport, heavy document dispatch, and automated pod tracking ingestion.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "FedEx Express",
    category: "courier",
    type: "Cross-Border & Global",
    logo: "/fedex.png",
    status: "Pre-Integrated",
    desc: "International express parcel export, customs invoice generation, and global priority tracking pushback.",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    name: "Amazon Shipping",
    category: "courier",
    type: "Direct API",
    logo: "/amazon.png",
    status: "Pre-Integrated",
    desc: "Reliable ground delivery network with automated AWB booking and weekend pickup support.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },

  // WMS & Open APIs
  {
    name: "AIShyp Open REST API",
    category: "wms",
    type: "Developer REST API & Webhooks",
    logo: "/aishiplogo.png",
    status: "Developer Ready",
    desc: "Comprehensive REST endpoints for order creation, pincode serviceability, rate comparison, and real-time event webhooks.",
    badgeColor: "bg-[#D8331F]/10 text-[#D8331F] border-red-200",
  },
];

const SHOPIFY_STEPS = [
  {
    step: "01",
    icon: "🔑",
    title: "1-Click OAuth Connect",
    desc: "Enter your store URL (yourstore.myshopify.com) in your AIShyp portal and authorize instant 2-way sync.",
  },
  {
    step: "02",
    icon: "📦",
    title: "Automated Order Ingestion",
    desc: "New customer orders on your Shopify store instantly flow into your shipping dashboard within 500ms.",
  },
  {
    step: "03",
    icon: "🏷️",
    title: "Bulk Dispatch & Labeling",
    desc: "Select orders, compare courier rates side-by-side, generate thermal 4x6 labels, and schedule pickups.",
  },
  {
    step: "04",
    icon: "🔄",
    title: "Live Tracking Pushback",
    desc: "AIShyp automatically updates order fulfillment status on Shopify and emails branded tracking links to buyers.",
  },
];

export default function IntegrationPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredIntegrations = INTEGRATIONS_LIST.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      
      {/* ── 1. PROMINENT SHOPIFY LOGO HERO HIGHLIGHT SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Left Column: Shopify Copy & Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* PROMINENT SHOPIFY BRAND LOGO BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-md"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 p-1 flex items-center justify-center shrink-0 border border-emerald-200">
                <img src="/shopify.jpeg" alt="Shopify Logo" className="object-contain max-h-full max-w-full" />
              </div>
              <div className="text-left font-mono">
                <p className="text-[11px] font-extrabold text-slate-900 leading-none">SHOPIFY DIRECT INTEGRATION</p>
                <p className="text-[9.5px] font-bold text-emerald-700 mt-0.5">● 1-Click Auto Sync Enabled</p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.1]"
            >
              Connect your Shopify store <br />
              <span className="text-[#D8331F]">in 1-click & start shipping.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed"
            >
              Seamless 2-way sync between your Shopify storefront and 14+ courier partners. Auto-ingest orders, generate thermal labels, and push live tracking links back to buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D8331F] shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all"
              >
                Connect Shopify Store →
              </Link>
              <a
                href="#shopify-flow"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-slate-800 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all"
              >
                See How It Works ↓
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 font-mono text-xs">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Sync Speed</p>
                <p className="text-sm font-extrabold text-slate-900 mt-0.5">&lt; 500ms</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Couriers</p>
                <p className="text-sm font-extrabold text-[#D8331F] mt-0.5">14+ Connected</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Setup Time</p>
                <p className="text-sm font-extrabold text-emerald-700 mt-0.5">1 Click</p>
              </div>
            </div>
          </div>

          {/* Right Column: PROMINENT VISUAL LOGO CONNECTION FLOW GRAPHIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative space-y-6 flex flex-col items-center justify-center text-center"
          >
            {/* Visual Node 1: Large Shopify Logo */}
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-xl border-2 border-emerald-400 relative">
                <img src="/shopify.jpeg" alt="Shopify Logo" className="object-contain max-h-full max-w-full" />
                <span className="absolute -bottom-2.5 bg-emerald-500 text-slate-950 font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Storefront
                </span>
              </div>
              <p className="text-xs font-extrabold font-sans text-white pt-1">Shopify Store</p>
            </div>

            {/* Connecting Arrow & Real-Time Sync Indicator */}
            <div className="w-full flex flex-col items-center space-y-1 py-1">
              <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-[#D8331F] animate-pulse" />
              <div className="px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-mono text-[10px] font-bold shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>⚡ &lt; 500ms Automated Order & AWB Sync</span>
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#D8331F] to-emerald-400 animate-pulse" />
            </div>

            {/* Visual Node 2: 14+ Courier Partner Network */}
            <div className="w-full bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Dispatches To 14+ Courier Partner APIs
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <div className="bg-white p-1.5 rounded-lg w-16 h-8 flex items-center justify-center">
                  <img src="/delhivery.png" alt="Delhivery" className="max-h-full object-contain" />
                </div>
                <div className="bg-white p-1.5 rounded-lg w-16 h-8 flex items-center justify-center">
                  <img src="/bluedart.png" alt="BlueDart" className="max-h-full object-contain" />
                </div>
                <div className="bg-white p-1.5 rounded-lg w-16 h-8 flex items-center justify-center">
                  <img src="/dtdc.png" alt="DTDC" className="max-h-full object-contain" />
                </div>
                <div className="bg-white p-1.5 rounded-lg w-16 h-8 flex items-center justify-center">
                  <img src="/xpressbees.png" alt="Xpressbees" className="max-h-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. SHOPIFY STEP-BY-STEP FLOW SECTION ── */}
      <section id="shopify-flow" className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-16 sm:mt-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
              // Guided Integration Setup
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">
              How AIShyp + Shopify Integration Works
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              Zero code required. Follow these 4 simple steps to automate your shipping workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SHOPIFY_STEPS.map((st) => (
              <div
                key={st.step}
                className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3 hover:border-amber-400/60 transition-colors"
              >
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
                  <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 14+ COURIER CARRIER & ALL INTEGRATIONS DIRECTORY ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20 sm:mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
            // Full Integrations Directory
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight">
            14+ Pre-Integrated Courier Partners & Channels
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Plug in your direct contracted courier accounts or use integrated API keys with zero revenue share.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
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

        {/* Integration Cards Grid */}
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
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.badgeColor}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold font-sans text-slate-950 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                      {item.desc}
                    </p>
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
      </section>

      {/* ── 4. DEVELOPER OPEN REST API STUDIO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
              // Developer API & Webhooks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight leading-tight">
              Custom ERP & Open API Integration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Building custom ERP workflows? Our developer REST API gives you full programmatic access to pincode serviceability, volumetric rate comparisons, order creation, and AWB label generation.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>REST API with JSON Payloads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Real-Time Event Webhooks (NDR, Delivery, RTO)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Sandbox Test Environment & API Keys</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl text-slate-200 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-[11px]">
              <span className="text-slate-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                POST /api/v1/shipments/create
              </span>
              <span className="text-emerald-400 font-bold">200 OK (142ms)</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto leading-relaxed text-[11.5px]">
{`{
  "api_key": "aishyp_live_8f92k01a...",
  "shipment": {
    "order_id": "ORD-98421",
    "carrier_code": "delhivery_surface",
    "payment_mode": "COD",
    "cod_amount": 1499.00,
    "consignee": {
      "name": "Manav Sharma",
      "pincode": "110001",
      "city": "New Delhi"
    }
  }
}

// ── Response Payload ──
{
  "status": "success",
  "awb_code": "78491204812",
  "courier_name": "Delhivery Express",
  "label_url": "https://ship.yourbrand.com/labels/AWB-78491204812.pdf"
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 mt-20 text-center">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight">
            Need a Custom Carrier or ERP Connector?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            Our platform engineering squad builds custom API connectors for enterprise shippers and regional courier networks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Request Custom Connector →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
