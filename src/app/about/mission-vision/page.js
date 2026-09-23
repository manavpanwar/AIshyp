"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { getBreadcrumbSchema } from "../../../lib/seo";

// ── SVG ICONS ──
function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function RocketIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CpuIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function NetworkIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function ChartTrendingUpIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function GlobeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function CopyIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LayersIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// ── DATA FOR "WHAT WE BELIEVE" ──
const BELIEFS = [
  {
    num: "01",
    title: "Freedom to Build",
    headline: "Your Brand, Your Domain, Your Customers, Your Business.",
    desc: "We believe true business value comes from owning your customer relationships, your domain, and your corporate reputation. You shouldn't be locked into someone else's platform or surrender your customer data to a vendor.",
    highlight: "100% Brand Sovereignty",
    icon: ShieldCheckIcon,
    accent: "from-red-500/10 to-orange-500/10",
    borderHover: "group-hover:border-[#D8331F]/50",
  },
  {
    num: "02",
    title: "Technology First",
    headline: "Powerful logistics technology without the complexity of building it from scratch.",
    desc: "Engineering high-throughput multi-carrier routing, sub-120ms rate calculators, and automated label engines takes millions and months. We take that burden off your shoulders through ready-to-run microservices.",
    highlight: "Zero Engineering Overhead",
    icon: CpuIcon,
    accent: "from-blue-500/10 to-indigo-500/10",
    borderHover: "group-hover:border-blue-500/50",
  },
  {
    num: "03",
    title: "Connected Logistics",
    headline: "Connect with multiple courier partners through a single platform.",
    desc: "Logistics shouldn't be fragmented into 14 different portal logins, isolated rate contracts, and scattered tracking links. We believe in unified data, direct APIs, and seamless carrier interoperability.",
    highlight: "14+ Direct Carrier Mesh",
    icon: NetworkIcon,
    accent: "from-emerald-500/10 to-teal-500/10",
    borderHover: "group-hover:border-emerald-500/50",
  },
  {
    num: "04",
    title: "Built to Scale",
    headline: "Start small and scale your shipping business as your customer base grows.",
    desc: "Whether you ship 50 parcels a day from a local courier counter or route 50,000 orders across nationwide e-commerce brands, our cloud architecture scales dynamically with zero downtime.",
    highlight: "Infinite Multi-Tenant Scale",
    icon: ChartTrendingUpIcon,
    accent: "from-purple-500/10 to-pink-500/10",
    borderHover: "group-hover:border-purple-500/50",
  },
];

// ── DATA FOR "HOW AishypENABLES YOUR BUSINESS" ──
const ENABLERS = [
  {
    step: "01",
    title: "Launch in Minutes",
    desc: "Deploy your branded shipping aggregator platform without spending months developing complex logistics infrastructure or hiring engineering teams.",
    tag: "Deployment: < 24 Hours",
    icon: RocketIcon,
  },
  {
    step: "02",
    title: "Your Own Brand",
    desc: "Operate under your own registered business name, custom domain (ship.yourbrand.com), and custom branding with zero Aishypwatermarks.",
    tag: "Domain: 100% White-Label",
    icon: GlobeIcon,
  },
  {
    step: "03",
    title: "14+ Courier Integrations",
    desc: "Connect directly with India's leading carriers — Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, Ekart, Trackon & DP World via unified APIs.",
    tag: "Coverage: 29,000+ Pincodes",
    icon: NetworkIcon,
  },
  {
    step: "04",
    title: "Centralized Shipping",
    desc: "Manage orders, multi-box shipments, real-time tracking, 4x6 thermal dispatch labels, manifesting, and courier operations from one single pane of glass.",
    tag: "Operations: Unified Hub",
    icon: LayersIcon,
  },
  {
    step: "05",
    title: "White-Label Experience",
    desc: "Give your customers and sub-merchants a shipping experience that reflects your brand: branded tracking portals, custom SMS, and WhatsApp alerts.",
    tag: "Experience: Branded Touchpoints",
    icon: ShieldCheckIcon,
  },
  {
    step: "06",
    title: "Technology & Infrastructure",
    desc: "We handle the entire technology layer, cloud scalability, carrier API upgrades, and 99.99% uptime so you can focus 100% on sales and business growth.",
    tag: "Infrastructure: 99.99% Uptime",
    icon: CpuIcon,
  },
];

export default function MissionVisionPage() {
  const [copiedMission, setCopiedMission] = useState(false);
  const [copiedVision, setCopiedVision] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "About Us", item: "/about" },
    { name: "Mission & Vision", item: "/about/mission-vision" },
  ]);

  const missionText =
    "Our mission is to empower entrepreneurs to launch and grow their own logistics brands through powerful, accessible, and scalable shipping technology.";

  const visionText =
    "Our vision is to become the technology backbone for independent logistics businesses, making multi-carrier shipping simple, connected, and scalable.";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "mission") {
      setCopiedMission(true);
      toast.success("Mission statement copied to clipboard!");
      setTimeout(() => setCopiedMission(false), 2000);
    } else {
      setCopiedVision(true);
      toast.success("Vision statement copied to clipboard!");
      setTimeout(() => setCopiedVision(false), 2000);
    }
  };

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD BREADCRUMBS SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* ── AMBIENT BACKGROUND GLOW ── */}
      <div className="relative">
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.12)_0%,rgba(255,138,110,0.05)_40%,rgba(16,27,61,0.06)_70%,transparent_80%)] pointer-events-none" /> */}

        {/* ── 1. HERO SECTION ── */}
        <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">


          <div className="text-center max-w-4xl mx-auto">
            {/* Top Badge: Launch Your Own Shipping Aggregator Platform */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/90 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
            >
              <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
              <span>Launch Your Own Shipping Aggregator Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight sm:leading-none uppercase"
            >
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
                Independent Logistics
              </span>{" "}
              Businesses
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Launch your own shipping aggregator platform with your brand, your domain, and your business identity.
              Aishypprovides the technology, courier integrations, and infrastructure you need to build and scale your logistics business.
            </motion.p>

            {/* Core Value Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-4 inline-block px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <span className="text-slate-900 font-bold">Your Brand.</span>{" "}
              <span className="text-[#D8331F] font-bold">Your Domain.</span>{" "}
              <span className="text-slate-900 font-bold">Your Logistics Business.</span>{" "}
              <span className="text-slate-500 font-normal">Powered by Aishy.</span>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/account-create"
                className="bg-[#D8331F] hover:bg-[#c02816] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Launch Your Platform</span>
                <span>→</span>
              </Link>
              <a
                href="#how-aishy-enables"
                className="border border-slate-300 text-slate-800 hover:bg-slate-50 px-6 py-3.5 rounded-xl font-bold text-sm transition-all inline-flex items-center gap-2"
              >
                <span>Explore Our Technology</span>
                <span className="text-xs">↓</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 text-center hover:border-slate-300 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-[#D8331F]">14+</p>
                <p className="text-xs font-bold text-slate-600 uppercase mt-0.5">Courier APIs</p>
                <p className="text-[10px] text-slate-400 mt-1">Delhivery, BlueDart, DTDC &amp; more</p>
              </div>
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 text-center hover:border-slate-300 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                <p className="text-xs font-bold text-slate-600 uppercase mt-0.5">White-Label</p>
                <p className="text-[10px] text-slate-400 mt-1">Your domain &amp; zero watermarks</p>
              </div>
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 text-center hover:border-slate-300 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-emerald-700">0%</p>
                <p className="text-xs font-bold text-slate-600 uppercase mt-0.5">Commission Split</p>
                <p className="text-[10px] text-slate-400 mt-1">Keep 100% of your shipping margins</p>
              </div>
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 text-center hover:border-slate-300 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-[#101B3D]">29K+</p>
                <p className="text-xs font-bold text-slate-600 uppercase mt-0.5">Indian Pincodes</p>
                <p className="text-[10px] text-slate-400 mt-1">Pan-India air &amp; surface reach</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── POSITIONING CALLOUT BANNER (IMPORTANT POINT FROM USER) ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#101B3D] via-[#16225A] to-slate-950 p-6 sm:p-9 text-white shadow-xl overflow-hidden"
          >
            {/* Ambient Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#D8331F_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-[#FF8A6E] text-[11px] font-extrabold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Strategic Positioning</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  Aishyp is the technology platform{" "}
                  <span className="text-[#FF8A6E]">behind your logistics business.</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  <strong className="text-white">We are not a retail courier company</strong> competing for your clients.
                  We provide the turnkey software, courier API mesh, automated label generation, and rate calculation engine so you can launch, operate, and scale your independent logistics brand with 100% confidence.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#D8331F] hover:bg-[#c02816] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all text-center"
                >
                  <span>Book Architecture Demo</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── 2. OUR MISSION & 3. OUR VISION (DUAL COLUMNS) ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* OUR MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200 text-xs font-bold uppercase tracking-wider">
                    <RocketIcon className="w-3.5 h-3.5" />
                    <span>01 • Purpose</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Democratizing Logistics
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Our Mission
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Our mission is to make logistics technology accessible to every entrepreneur, business owner, and logistics professional who wants to build their own shipping brand.
                  </p>
                  <p>
                    We simplify the complexity behind courier aggregation by providing a ready-to-deploy technology platform, direct courier API integrations, automated shipping workflows, and customizable business tools.
                  </p>
                  <p>
                    Instead of spending months building logistics infrastructure, our partners can focus on building their brand, acquiring customers, and growing their business.
                  </p>
                </div>
              </div>

              {/* Short Highlight Quote Card */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50/90 to-orange-50/60 border border-red-200/80">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl sm:text-3xl text-[#D8331F] font-serif leading-none">&ldquo;</span>
                    <div>
                      <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                        You build the brand. We power the technology.
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        The core mission driving every system we engineer at Aishy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OUR VISION CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-sky-700 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                    <GlobeIcon className="w-3.5 h-3.5" />
                    <span>02 • Future Horizon</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Next-Gen Infrastructure
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Our Vision
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    We envision a world where starting a logistics business is no longer limited by technology, infrastructure, or complex courier integrations.
                  </p>
                  <p>
                    Our vision is to create a connected ecosystem where entrepreneurs can launch their own branded shipping platforms, connect with multiple courier partners, manage shipments from one place, and deliver a seamless shipping experience to their customers.
                  </p>
                  <p>
                    We aim to become the technology backbone behind the next generation of independent logistics and shipping businesses.
                  </p>
                </div>
              </div>

              {/* Vision Highlight Card */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#101B3D] text-white border border-slate-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl sm:text-3xl text-[#FF8A6E] font-serif leading-none">&ldquo;</span>
                    <div>
                      <p className="text-base sm:text-lg font-black text-white tracking-tight">
                        The technology backbone for independent shipping businesses.
                      </p>
                      <p className="text-xs text-slate-300 mt-1 font-normal">
                        Enabling seamless multi-carrier shipping, connectivity, and infinite scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 4. WHAT WE BELIEVE (4 CARDS) ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
              <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
              <span>Core Philosophy</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase">
              What We Believe
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              Four fundamental convictions shaping our platform engineering, our partner relationships, and our roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BELIEFS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all ${item.borderHover}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-[#D8331F]/90 font-mono tracking-tighter">
                      {item.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 group-hover:bg-[#D8331F] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base font-bold text-[#D8331F] mb-3 leading-snug">
                    {item.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                      Pillar Impact
                    </span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md text-[11px]">
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── 5. HOW AishypENABLES YOUR BUSINESS (6 PILLARS) ── */}
        <section id="how-aishy-enables" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200 text-xs font-bold uppercase tracking-wider mb-3">
              <CpuIcon className="w-3.5 h-3.5" />
              <span>Turnkey Logistics Capabilities</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase">
              How Aishyp Enables Your Business
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              We provide the complete technical infrastructure so you can focus entirely on customer acquisition and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENABLERS.map((enabler, idx) => {
              const Icon = enabler.icon;
              return (
                <motion.div
                  key={enabler.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D8331F] group-hover:bg-[#D8331F] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-slate-300 font-mono">
                        {enabler.step}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-[#D8331F] transition-colors">
                      {enabler.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {enabler.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-block text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
                      {enabler.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── 6 & 7. MISSION & VISION STATEMENTS (SHORT VERSION / EXECUTIVE MANIFESTO) ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200 text-[11px] font-bold uppercase tracking-wider mb-2">
                <span>Executive Summary</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Our Mission &amp; Vision at a Glance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Concise executive statements defining our commitment to India&apos;s independent logistics ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Statement Short */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D8331F] uppercase tracking-wider">
                      Mission Statement
                    </span>
                    <button
                      onClick={() => handleCopy(missionText, "mission")}
                      title="Copy Mission Statement"
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                      aria-label="Copy mission statement"
                    >
                      {copiedMission ? (
                        <CheckIcon className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <blockquote className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed italic border-l-3 border-[#D8331F] pl-3.5">
                    &ldquo;{missionText}&rdquo;
                  </blockquote>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                  <span>Designed for entrepreneurs &amp; courier franchises</span>
                </div>
              </div>

              {/* Vision Statement Short */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      Vision Statement
                    </span>
                    <button
                      onClick={() => handleCopy(visionText, "vision")}
                      title="Copy Vision Statement"
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                      aria-label="Copy vision statement"
                    >
                      {copiedVision ? (
                        <CheckIcon className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <blockquote className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed italic border-l-3 border-sky-600 pl-3.5">
                    &ldquo;{visionText}&rdquo;
                  </blockquote>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <span>The connected technology backbone of modern shipping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. HIGH-CONVERTING FINAL CTA BLOCK ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden text-center shadow-2xl border border-slate-800"
          >
            {/* Ambient Red Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[radial-gradient(ellipse_at_center,rgba(216,51,31,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-[#FF8A6E] text-xs font-bold uppercase tracking-wider">
                <SparklesIcon className="w-3.5 h-3.5 text-[#FF8A6E]" />
                <span>Launch Your Shipping Brand Today</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                Ready to Build Your Logistics Business?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Stop waiting months and burning capital on custom software. Deploy your own branded shipping aggregator with 14+ direct courier APIs in under 24 hours.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/account-create"
                  className="bg-[#D8331F] hover:bg-[#c02816] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <span>Launch Your Platform</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  Schedule 1-on-1 Demo
                </Link>
                <Link
                  href="/integration"
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4 font-semibold px-2 py-1"
                >
                  View Carrier APIs
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  0% Commission / Keep 100% Margin
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Custom Domain &amp; 100% White-Label
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  14+ Pre-Integrated Couriers
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}