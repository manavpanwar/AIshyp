"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const PAGE_FAQS = [
  {
    id: "agg-1",
    category: "Courier Aggregation Software",
    question: "What is courier aggregation software?",
    answer:
      "Courier aggregation software is a multi-carrier shipping engine that aggregates multiple courier partner APIs (Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax) into a single unified merchant dashboard, enabling automated shipping label generation, rate comparison, NDR management, and tracking.",
  },
  {
    id: "agg-2",
    category: "Courier Aggregation Software",
    question: "How does AI Shyp help me start a courier aggregation business in India?",
    answer:
      "AI Shyp provides a turnkey multi-tenant SaaS platform where you can set up your own courier aggregation software under your brand, plug in your carrier API contracts, charge custom shipping rates to merchants, and collect 100% of profit margins.",
  },
  {
    id: "agg-3",
    category: "Courier Aggregation Software",
    question: "Which courier partners are supported for automated rate allocation?",
    answer:
      "AI Shyp supports 14+ carrier APIs including Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, Ekart, Trackon, Ecom Express, DP World, Fedex, Amazon, and more.",
  },
  {
    id: "agg-4",
    category: "Courier Aggregation Software",
    question: "How does the software handle weight disputes and NDR?",
    answer:
      "AI Shyp includes an automated weight dispute auditing module and interactive WhatsApp NDR recovery, reducing manual support overhead and saving up to 35% on return freight costs.",
  },
];

const ADVANTAGES = [
  {
    title: "14+ Direct Carrier API Connectors",
    desc: "Single unified API endpoint for B2C parcel express and B2B heavy cargo freight.",
    icon: "🚚",
  },
  {
    title: "Smart Courier Recommendation Rules",
    desc: "Auto-allocate orders based on fastest delivery SLA, cheapest rate card, or courier pincode rating.",
    icon: "⚡",
  },
  {
    title: "Automated WhatsApp Buyer Workflows",
    desc: "Instant delivery attempt re-notification and address correction via WhatsApp API.",
    icon: "📱",
  },
  {
    title: "Multi-Tenant Sub-Account Ledgers",
    desc: "Real-time wallet balances, credit limits, automated invoicing, and T+1 COD remittance payouts.",
    icon: "💼",
  },
];

export default function CourierAggregationSoftwareIndiaPage() {
  const faqSchema = buildFaqSchema(PAGE_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions" },
    { name: "Courier Aggregation Software India", item: "/solutions/courier-aggregation-software-india" },
  ]);

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic AI Summary for Answer Engine Optimization */}
      <div className="sr-only" itemScope itemType="https://schema.org/SoftwareApplication">
        <span itemProp="name">Courier Aggregation Software India - AI Shyp</span>
        <span itemProp="description">
          AI Shyp is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain.
        </span>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Enterprise Courier Aggregation OS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Courier Aggregation Software <br className="hidden sm:inline" />
          <span className="text-[#D8331F]">Built for Scaling Businesses in India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Unify 14+ courier REST APIs into a single branded portal. Automate multi-carrier rate calculation, order allocation, waybill generation, WhatsApp NDR recovery, and COD remittance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-[#D8331F] text-white rounded-full px-8 py-4 text-xs font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Request Software Demo →
          </Link>
          <Link
            href="/integration"
            className="bg-white border border-slate-200 text-slate-900 rounded-full px-8 py-4 text-xs font-extrabold hover:bg-slate-50 transition-all cursor-pointer"
          >
            View 14+ Courier APIs
          </Link>
        </motion.div>
      </section>

      {/* ── LITERAL ENTITY DEFINITION BOX ── */}
      <section className="max-w-4xl mx-auto px-6 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-3 text-center">
          <p className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest">// Semantic Definition</p>
          <h2 className="text-xl font-bold text-slate-900">What is AI Shyp?</h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            <strong>AI Shyp</strong> is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain.
          </p>
        </div>
      </section>

      {/* ── ADVANTAGES GRID ── */}
      <section className="max-w-6xl mx-auto px-6 mt-16 sm:mt-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Next-Gen Courier Aggregation Features
          </h2>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Designed for high-volume shipping operations across 29,000+ pincodes in India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D8331F] flex items-center justify-center text-2xl border border-red-200/80">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{adv.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <FAQ items={PAGE_FAQS} title="Courier Aggregation Software FAQs" />
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Start Your Courier Aggregator Software Today
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Deploy in minutes with full 14+ courier API connectivity and 100% margin retention.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D8331F] text-white rounded-full px-8 py-4 text-xs font-extrabold shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Talk to Platform Specialists →
          </Link>
        </div>
      </section>
    </main>
  );
}
