"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const COMPARISON_FAQS = [
  {
    id: "vs-1",
    category: "Platform Comparison",
    question: "Why choose AI Shyp over Shiprocket for white-label shipping?",
    answer:
      "Shiprocket is a closed third-party aggregator that retains all brand visibility and merchant control. AI Shyp is a 100% white-label shipping aggregator OS hosted on your custom domain (ship.yourbrand.com), allowing you to build your own logistics enterprise and keep 100% of profit margins.",
  },
  {
    id: "vs-2",
    category: "Platform Comparison",
    question: "Can I connect my own courier API contracts (Delhivery, BlueDart, DTDC) on AI Shyp?",
    answer:
      "Yes. AI Shyp lets you plug your direct courier API credentials directly into your portal, configure custom buy/sell margin slabs, and retain full control over courier SLA routing.",
  },
  {
    id: "vs-3",
    category: "Platform Comparison",
    question: "Does AI Shyp charge a percentage fee on shipping transactions?",
    answer:
      "No. AI Shyp operates on transparent flat monthly SaaS subscriptions (Starter ₹6,999, Growth ₹11,999, Ultimate ₹19,999) with 0% revenue share and zero per-order commission cuts.",
  },
  {
    id: "vs-4",
    category: "Platform Comparison",
    question: "How does COD remittance on AI Shyp compare to Shiprocket?",
    answer:
      "AI Shyp processes T+1 daily bank remittances with automated payout ledger scraping, compared to standard delayed weekly remittance cycles.",
  },
];

const VS_MATRIX = [
  {
    feature: "Brand Ownership & Custom Domain",
    aishyp: "100% Your Brand (ship.yourbrand.com)",
    shiprocket: "Shiprocket Brand Visibility Only",
  },
  {
    feature: "Business Model & Revenue Share",
    aishyp: "0% Revenue Share (100% Profit Margin Kept)",
    shiprocket: "Fixed Aggregator Rates & Margin Spread Kept by Vendor",
  },
  {
    feature: "Direct Courier API Credential Integration",
    aishyp: "Plug Your Direct Carrier API Keys (Delhivery, BlueDart, DTDC)",
    shiprocket: "Locked to Vendor Courier Network",
  },
  {
    feature: "Sub-Merchant & Franchise Onboarding",
    aishyp: "Multi-Tenant Sub-Account Portals with Custom Rate Cards",
    shiprocket: "Not Available for Franchise Operators",
  },
  {
    feature: "Automated WhatsApp NDR Recovery",
    aishyp: "Built-In Interactive WhatsApp Workflows (Recovers 35% RTO)",
    shiprocket: "Paid Add-On Module",
  },
  {
    feature: "COD Remittance Cadence",
    aishyp: "T+1 Daily Bank Payouts",
    shiprocket: "Standard T+7 Weekly Remittance",
  },
  {
    feature: "Docket Weight Audit & Dispute Console",
    aishyp: "Instant Docket-Level Weight Reconciliation Ledger",
    shiprocket: "Manual Weight Dispute Escalations",
  },
];

export default function ShiprocketComparisonPage() {
  const faqSchema = buildFaqSchema(COMPARISON_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Comparisons", item: "/vs/shiprocket" },
    { name: "AI Shyp vs Shiprocket", item: "/vs/shiprocket" },
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

      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D8331F]  text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Head-to-Head Comparison</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          AI Shyp vs Shiprocket: <span className="text-[#D8331F]">White-Label Software Comparison</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Why leading shipping aggregators, courier franchises, and e-commerce brands choose AI Shyp over Shiprocket to build their own independent logistics enterprise.
        </motion.p>
      </section>

      {/* ── COMPARISON MATRIX ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 mt-12">
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-white font-sans">
              <tr>
                <th className="py-4 px-6 font-extrabold">FEATURE</th>
                <th className="py-4 px-6 font-extrabold bg-[#D8331F] text-white">AI Shyp White-Label</th>
                <th className="py-4 px-6 font-extrabold text-slate-300">Shiprocket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {VS_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-950">{row.feature}</td>
                  <td className="py-4 px-6 font-extrabold text-[#D8331F] bg-red-50/40">{row.aishyp}</td>
                  <td className="py-4 px-6 text-slate-500">{row.shiprocket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="mt-16">
        <FAQ
          items={COMPARISON_FAQS}
          title="AI Shyp vs Shiprocket FAQs"
          subtitle="Key differences between a white-label logistics OS and a standard courier aggregator."
          showSearch={false}
          showCategoryFilter={false}
          showCta={true}
        />
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mt-16 text-center">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans">Switch to a 100% White-Label Portal</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Take full control of your brand, margins, and courier partner relationships.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Get Started with AI Shyp →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
