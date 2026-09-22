"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAboutPageSchema, getBreadcrumbSchema } from "../../lib/seo";

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

// ── 5 "WHAT IF?" NARRATIVE MILESTONES (MATCHING USER REFERENCE UI) ──
const WHAT_IF_SECTIONS = [
  {
    stepId: "STEP 01",
    badgeLabel: "01 • PLATFORM CREATION & AUTONOMY",
    subTag: "Turnkey Architecture",
    questionLead: "WHAT IF YOU COULD",
    questionHighlight: "BUILD YOUR OWN",
    questionTail: "COURIER PLATFORM?",
    leadText:
      "Traditional logistics software engineering requires ₹20L+ in upfront capital, 9+ months of grueling development, and unending bug patches. AI Shyp eliminates this barrier entirely, delivering an enterprise-ready multi-tenant shipping aggregator platform hosted on your custom domain in under 24 hours.",
    cards: [
      {
        icon: "🏢",
        title: "100% White-Label Ownership",
        desc: "Deploy on your domain (ship.yourbrand.com). Dedicated tenant portals with custom logos, favicons, corporate color schemes, and sub-account onboarding.",
        tag: "Impact: Zero AI Shyp watermarks",
        linkText: "Learn about branding →",
        linkHref: "/features",
      },
      {
        icon: "⚙️",
        title: "Pre-Built Operational Core",
        desc: "Equipped with automatic sub-120ms rate calculators, thermal label generators, live tracking webhooks, and multi-warehouse pickup allocation.",
        tag: "Impact: 9 months of engineering saved",
        linkText: "View core modules →",
        linkHref: "/features",
      },
      {
        icon: "⚡",
        title: "Instant Cloud Deployment",
        desc: "Battle-tested cloud infrastructure with dedicated database schemas, enterprise security, and 99.99% carrier API availability from day one.",
        tag: "Impact: Launch in < 24 hours",
        linkText: "Check setup guide →",
        linkHref: "/contact",
      },
    ],
  },
  {
    stepId: "STEP 02",
    badgeLabel: "02 • MULTI-CARRIER CONSOLIDATION",
    subTag: "Direct API Mesh",
    questionLead: "WHAT IF YOU COULD",
    questionHighlight: "CONNECT MULTIPLE",
    questionTail: "COURIER PARTNERS?",
    leadText:
      "Managing separate courier portals, multiple logins, and fragmented rate sheets paralyzes dispatch teams. AI Shyp aggregates 14+ direct courier APIs and B2B freight networks into a single dashboard with automated least-cost allocation.",
    cards: [
      {
        icon: "📦",
        title: "Delhivery, BlueDart & DTDC",
        desc: "Surface and express air parcel booking, 3-inch DTDC barcode printing, real-time AWB generation, and automated crawler status synchronization.",
        tag: "Coverage: 29,000+ Indian pincodes",
        linkText: "View carrier matrix →",
        linkHref: "/integration",
      },
      {
        icon: "🚀",
        title: "Xpressbees & eKart Logistics",
        desc: "High-volume B2C e-commerce parcel routing, deep Tier-2/Tier-3 coverage, and automated COD remittance collection auditing.",
        tag: "Latency: Sub-100ms API calls",
        linkText: "Explore B2C carriers →",
        linkHref: "/integration",
      },
      {
        icon: "🚛",
        title: "DP World Commercial Cargo",
        desc: "Heavy 100kg to 5-ton palletized freight dispatch, multi-box master docket printing, and full commercial e-Way bill compliance.",
        tag: "Scope: B2C parcels to B2B cargo",
        linkText: "B2B cargo specs →",
        linkHref: "/integration",
      },
      {
        icon: "⚡",
        title: "Shadowfax, Trackon & FedEx",
        desc: "Same-day hyperlocal urban deliveries, regional surface transport networks, and global cross-border express export documentation.",
        tag: "Uptime: 99.99% API failover",
        linkText: "Check integrations →",
        linkHref: "/integration",
      },
    ],
  },
  {
    stepId: "STEP 03",
    badgeLabel: "03 • BRAND SOVEREIGNTY & TOUCHPOINTS",
    subTag: "Customer Relationship Retention",
    questionLead: "WHAT IF EVERYTHING WORKED",
    questionHighlight: "UNDER YOUR OWN",
    questionTail: "BRAND?",
    leadText:
      "Legacy shipping aggregators hijack customer relationships by plastering their own vendor names across thermal shipping labels, buyer SMS updates, and tracking portals. With AI Shyp, your brand identity remains 100% sovereign.",
    cards: [
      {
        icon: "🏷️",
        title: "Branded Thermal Labels & Invoices",
        desc: "Your company logo, GST details, and warehouse return addresses on all 4x6 thermal dispatch labels, A4 layouts, and itemized packing slips.",
        tag: "Format: 4x6 Thermal, A4 & 3-Inch",
        linkText: "Label layout specs →",
        linkHref: "/features",
      },
      {
        icon: "📱",
        title: "White-Label Tracking Portals",
        desc: "Buyers view live courier milestones on your dedicated domain (track.yourbrand.com) with your support contacts and zero vendor watermarks.",
        tag: "Domain: 100% custom SSL URL",
        linkText: "See tracking demo →",
        linkHref: "/features",
      },
      {
        icon: "💬",
        title: "Branded WhatsApp & SMS Alerts",
        desc: "Transactional dispatch alerts, out-for-delivery notifications, and doorstep OTP verification sent under your registered brand sender ID.",
        tag: "Channel: Verified WhatsApp & SMS",
        linkText: "Communication suite →",
        linkHref: "/features",
      },
    ],
  },
  {
    stepId: "STEP 04",
    badgeLabel: "04 • AI-FIRST LOGISTICS AUTOMATION",
    subTag: "Autonomous Problem Resolution",
    questionLead: "WHAT IF TECHNOLOGY HANDLED",
    questionHighlight: "ALL THE COMPLEXITY",
    questionTail: "AUTOMATICALLY?",
    leadText:
      "Manual address entry errors, doorstep delivery failures, weight dispute reconciliations, and missing cash-on-delivery (COD) funds destroy logistics profit margins. AI Shyp deploys automated AI workflows and scrapers that resolve exceptions autonomously.",
    cards: [
      {
        icon: "👁️",
        title: "AI OCR Label & Address Parser",
        desc: "Upload photos of handwritten or printed shipping labels. Computer vision OCR extracts clean buyer names, phones, addresses, and pincodes in < 2 seconds.",
        tag: "Speed: < 2.0s parsing latency",
        linkText: "AI Vision details →",
        linkHref: "/features",
      },
      {
        icon: "🔄",
        title: "Automated NDR Order Rescue",
        desc: "Direct carrier webhook ingestion triggers instant interactive WhatsApp workflows to buyers during delivery failures, rescuing up to 35% of RTO returns.",
        tag: "Recovery: Up to 35% RTO saved",
        linkText: "NDR workflow demo →",
        linkHref: "/features",
      },
      {
        icon: "⚖️",
        title: "Docket Weight Reconciliation",
        desc: "Admins update actual parcel weights directly against docket numbers. Automatically calculates variances and auto-charges or credits customer wallets.",
        tag: "Settlement: Real-time ledger debit",
        linkText: "Weight dispute audit →",
        linkHref: "/features",
      },
      {
        icon: "💰",
        title: "Daily T+1 COD Remittance OS",
        desc: "Automated scrapers audit courier payout statements against delivered COD orders, eliminating missing cash with daily automated bank payouts.",
        tag: "Remittance: Daily T+1 reconciliation",
        linkText: "Wallet & COD OS →",
        linkHref: "/features",
      },
    ],
  },
  {
    stepId: "STEP 05",
    badgeLabel: "05 • COMMERCIAL FREEDOM & SCALABILITY",
    subTag: "Zero Middleman Commission",
    questionLead: "WHAT IF YOU COULD",
    questionHighlight: "START TODAY",
    questionTail: "WITH ZERO COMMISSIONS?",
    leadText:
      "Stop signing predatory contracts that deduct 5% to 15% of your gross shipping turnover. AI Shyp operates on a pure, transparent SaaS model: pay a predictable flat monthly subscription and retain 100% of your shipping margins.",
    cards: [
      {
        icon: "💎",
        title: "0% Revenue Share Split",
        desc: "Keep every single rupee of profit you generate. We charge a transparent monthly subscription and never take a cut of your freight turnover.",
        tag: "Terms: 0% gross margin split",
        linkText: "View transparent plans →",
        linkHref: "/pricing",
      },
      {
        icon: "🤝",
        title: "Bring Your Own Courier Accounts",
        desc: "Plug in your direct contracted courier rates (Delhivery, DTDC, BlueDart) or utilize integrated pre-negotiated commercial discount slabs.",
        tag: "Flexibility: Hybrid API credentials",
        linkText: "Carrier integration guide →",
        linkHref: "/integration",
      },
      {
        icon: "📈",
        title: "Infinite Multi-Tenant Scale",
        desc: "Onboard unlimited sub-merchants, franchise counters, and corporate accounts with customizable rate markups and localized wallet credit limits.",
        tag: "Scale: 100 to 100,000+ daily orders",
        linkText: "Franchise architecture →",
        linkHref: "/features",
      },
    ],
  },
];

// Step Connector Component matching user reference image
function StepConnector({ stepNumber }) {
  return (
    <div className="flex flex-col items-center my-6 sm:my-8 relative select-none">
      <div className="w-0.5 h-10 sm:h-12 bg-gradient-to-b from-slate-200 via-[#D8331F]/50 to-slate-200" />
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-red-200/90 shadow-md flex items-center justify-center text-[#D8331F] text-xs sm:text-sm font-bold my-1 z-10">
        ↓
      </div>
      <span className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[10px]  font-bold text-slate-600 uppercase tracking-widest shadow-2xs mt-1 z-10">
        {stepNumber}
      </span>
      <div className="w-0.5 h-10 sm:h-12 bg-gradient-to-b from-slate-200 via-[#D8331F]/50 to-slate-200" />
    </div>
  );
}

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const aboutBreadcrumbs = getBreadcrumbSchema([
    { name: "About Us", item: "/about" },
  ]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbs) }}
      />

      {/* Semantic AI Summary for Answer Engine Extraction (AEO) */}
      <div className="sr-only" itemScope itemType="https://schema.org/AboutPage">
        <span itemProp="name">About AI Shyp - India&apos;s Flagship White-Label Logistics OS</span>
        <span itemProp="description">
          AI Shyp empowers shipping businesses, courier franchises, and e-commerce enterprises across India to launch their own branded multi-carrier aggregation software on a custom domain with 14+ direct carrier APIs, automated WhatsApp NDR, and 0% commission split.
        </span>
      </div>

      {/* ── 1. HERO SECTION STARTING DIRECTLY BELOW HEADER ── */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Ambient Radial Glow starting below header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.14)_0%,rgba(255,138,110,0.06)_40%,rgba(16,27,61,0.08)_70%,transparent_80%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs  text-slate-400 mb-6">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#D8331F] font-bold">About Us</li>
            </ol>
          </nav>

          {/* Top Pill Badge matching user reference screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>AI Shyp White-Label Logistics OS Platform</span>
          </motion.div>

          {/* Big Bold Headline matching image layout */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight uppercase leading-none"
          >
            WHAT IF?
          </motion.h1>

          {/* Subtitle with vibrant gradient accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-lg sm:text-2xl font-black font-sans bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent"
          >
            Build. Connect. Scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-1 text-xs sm:text-sm font-bold text-slate-700  tracking-wide"
          >
            India&apos;s First 100% White-Label Multi-Carrier Aggregator OS
          </motion.p>
        </div>
      </section>

      {/* ── 2. EXECUTIVE FAST-TRACK OVERVIEW CONSOLE CARD (MATCHING USER REFERENCE) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xl space-y-5"
        >
          {/* Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 text-xs ">
            <span className="flex items-center gap-2 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PLATFORM ARCHITECTURE • PRODUCTION READY OS</span>
            </span>
            <span className="text-slate-500 font-medium text-[11px]">
              Model: Pure SaaS / 0% Revenue Split
            </span>
          </div>

          {/* 4 Stat Boxes (Matching Top Card in Image) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#D8331F]">29K+</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Indian Pincodes</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-slate-900">14+</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Direct Courier APIs</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-700">35%</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">NDR RTO Recovered</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-slate-900">&lt; 120ms</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Rate Engine Speed</p>
            </div>
          </div>

          {/* Action Row Inside Console */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5"
              >
                <span>Schedule Aggregator Demo</span>
                <span>→</span>
              </Link>
              <Link
                href="/pricing"
                className="border border-slate-300 text-slate-800 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-bold transition-all"
              >
                Explore SaaS Plans
              </Link>
            </div>
            <span className=" text-[11px] text-slate-500">
              ⚡ Deployment: &lt; 24 Hours
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── 3. THE 5-STEP "WHAT IF?" PROGRESSION FLOW (EXACT UI FROM USER SCREENSHOT) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-2">
        {WHAT_IF_SECTIONS.map((section, idx) => (
          <React.Fragment key={section.stepId}>
            {/* Step Node with Down Arrow Connector */}
            <StepConnector stepNumber={section.stepId} />

            {/* Main Section Card matching user reference layout */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-lg space-y-6 hover:shadow-xl hover:border-slate-300 transition-all"
            >
              {/* Header Row: Left Pill Badge & Right Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[10px]  font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                  <span>{section.badgeLabel}</span>
                </span>
                <span className="text-[11px]  font-semibold text-slate-400">
                  {section.subTag}
                </span>
              </div>

              {/* Card Question Title */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-sans text-slate-950 tracking-tight leading-snug">
                  {section.questionLead}{" "}
                  <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
                    {section.questionHighlight}
                  </span>{" "}
                  {section.questionTail}
                </h2>
              </div>

              {/* Lead Paragraph with Key Highlights */}
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                {section.leadText}
              </p>

              {/* Inner Sub-Cards Grid (Matching 3-col or 2x2 cards from screenshot) */}
              <div
                className={`grid gap-4 pt-1 ${
                  section.cards.length === 4
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.cards.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-base shadow-2xs group-hover:scale-105 transition-transform">
                        {card.icon}
                      </div>
                      <h3 className="text-sm font-extrabold font-sans text-slate-950 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]  font-bold">
                      <span className="text-emerald-700">{card.tag}</span>
                      <Link
                        href={card.linkHref}
                        className="text-[#D8331F] hover:text-[#c02816] transition-colors"
                      >
                        {card.linkText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </React.Fragment>
        ))}

        {/* ── CENTRAL AFFIRMATION BANNER ("AISHYP MAKES IT POSSIBLE") ── */}
        <div className="pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl text-center space-y-6 relative overflow-hidden"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-40 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.25)_0%,transparent_70%)] pointer-events-none" />

            <span className="text-[11px]  font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full inline-block">
              // The Affirmation
            </span>

            <h3 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
              AI Shyp Makes It Possible.
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1  text-base sm:text-2xl font-extrabold text-transparent bg-gradient-to-r from-white via-slate-200 to-[#FF8A6E] bg-clip-text">
              <span>Build.</span>
              <span className="text-[#D8331F]">•</span>
              <span>Connect.</span>
              <span className="text-[#D8331F]">•</span>
              <span>Scale.</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed">
              Everything you need to launch, aggregate, and scale a sovereign logistics platform across India under your own brand.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-[#D8331F] hover:bg-[#c02816] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Launch Your Platform Today</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. INTERNAL SOLUTIONS CROSS-LINKING MATRIX ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-sm  font-bold text-[#D8331F] uppercase tracking-wider">
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
            <Link
              href="/about/team"
              className="px-4 py-2.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#D8331F] hover:bg-red-100 hover:border-[#D8331F] transition-all"
            >
              👥 Leadership &amp; Team (Founder Mohit Panwar) →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. HIGH-IMPACT CLOSING CTA BANNER ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl">
          <span className="text-[10.5px]  font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
            // Your Logistics Brand
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
            Stop Building Someone Else&apos;s Logistics Empire. <br />
            <span className="text-[#FF8A6E]">Launch Your Own Platform Today.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            Deploy on your domain with 14+ courier partners, automated WhatsApp NDR, and 0% revenue split in under 24 hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Schedule Platform Demo →
            </Link>
            <Link
              href="/pricing"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold inline-block transition-colors"
            >
              Explore SaaS Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
