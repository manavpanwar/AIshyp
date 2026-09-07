"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const SOLUTION_FAQS = [
  {
    id: "wl-1",
    category: "White-Label Software",
    question: "What is white-label shipping software?",
    answer:
      "White-label shipping software is a customizable logistics SaaS platform that allows you to launch a shipping portal on your own domain (e.g. ship.yourbrand.com) with your own logos, pricing, and carrier APIs with zero vendor watermarks.",
  },
  {
    id: "wl-2",
    category: "White-Label Software",
    question: "How much profit can I earn with a white-label shipping aggregator portal?",
    answer:
      "You retain 100% of the margin spread between your buy rates (negotiated with couriers like Delhivery or BlueDart) and your sell rates (charged to merchants). AI Shyp takes 0% revenue split.",
  },
  {
    id: "wl-3",
    category: "White-Label Software",
    question: "How long does it take to deploy AI Shyp white-label shipping software?",
    answer:
      "Deployment takes less than 5 minutes. You map your custom domain, upload your corporate logo, connect courier API credentials, and start onboarding sub-merchants immediately.",
  },
  {
    id: "wl-4",
    category: "White-Label Software",
    question: "Which courier partner APIs are pre-integrated into AI Shyp?",
    answer:
      "AI Shyp comes pre-integrated with 14+ direct carrier APIs including Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, Ekart, Trackon, Ecom Express, DP World, Fedex, Amazon, Shopify, and WooCommerce.",
  },
  {
    id: "wl-5",
    category: "White-Label Software",
    question: "Does AI Shyp support automated WhatsApp NDR and RTO reduction?",
    answer:
      "Yes. AI Shyp includes an automated WhatsApp NDR engine that contacts buyers immediately upon delivery attempt failure, allowing them to update addresses or confirm COD cash to recover up to 35% of failed orders.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Brand Ownership & Custom Domain",
    aishyp: "100% Custom Domain (ship.yourbrand.com)",
    generic: "Subdomain or Vendor Branding",
    customDev: "Requires months of coding",
  },
  {
    feature: "Revenue & Profit Margin Split",
    aishyp: "100% Margin Retention (0% Revenue Share)",
    generic: "10-25% Revenue Cut",
    customDev: "0% (High Maintenance Overhead)",
  },
  {
    feature: "Deployment Time",
    aishyp: "< 5 Minutes",
    generic: "2-4 Weeks",
    customDev: "6-12 Months",
  },
  {
    feature: "Direct Carrier API Access",
    aishyp: "14+ Direct Courier APIs Pre-Integrated",
    generic: "Limited Couriers",
    customDev: "Manual Integration per Courier API",
  },
  {
    feature: "Automated WhatsApp NDR Engine",
    aishyp: "Built-In Interactive WhatsApp Workflows",
    generic: "Expensive Add-On",
    customDev: "Requires WhatsApp Business API Setup",
  },
  {
    feature: "COD Bank Remittance",
    aishyp: "T+1 Daily Bank Remittance",
    generic: "T+7 Weekly Cycle",
    customDev: "Manual Payout Sheet Processing",
  },
];

export default function WhiteLabelShippingSoftwarePage() {
  const faqSchema = buildFaqSchema(SOLUTION_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions/white-label-shipping-software" },
    { name: "White-Label Shipping Software", item: "/solutions/white-label-shipping-software" },
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

      {/* ── HERO SECTION ── */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D8331F] font-mono text-xs font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// White-Label Logistics SaaS OS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Deploy Your <span className="text-[#D8331F]">White-Label Shipping Aggregator</span> Platform in 5 Minutes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Launch your own branded courier aggregator portal on your custom domain (<code className="bg-slate-100 px-2 py-0.5 rounded text-slate-900 font-mono text-sm">ship.yourbrand.com</code>). Connect 14+ direct courier APIs (Delhivery, BlueDart, DTDC, Xpressbees), automate WhatsApp NDR recovery, and keep 100% of your gross profit margins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#D8331F] shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 transition-all"
          >
            Deploy White-Label Portal →
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 rounded-full text-sm font-extrabold text-slate-800 bg-white border border-slate-200 shadow-md hover:bg-slate-50 transition-all"
          >
            View SaaS Pricing Plans
          </Link>
        </motion.div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-4xl mx-auto font-mono text-xs text-slate-700">
          <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm text-center">
            <span className="block font-extrabold text-[#D8331F] text-base">100%</span>
            <span className="text-[11px]">Custom Domain</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm text-center">
            <span className="block font-extrabold text-[#D8331F] text-base">0%</span>
            <span className="text-[11px]">Revenue Split</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm text-center">
            <span className="block font-extrabold text-[#D8331F] text-base">14+</span>
            <span className="text-[11px]">Courier APIs</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm text-center">
            <span className="block font-extrabold text-[#D8331F] text-base">T+1</span>
            <span className="text-[11px]">Daily COD Remittance</span>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE WHITE-LABEL SAAS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full">
              // Why White-Label Software?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Build Your Brand Identity, Not Someone Else&apos;s
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Legacy aggregators force you to promote their brand and take a cut of your revenues. AIShyp gives you complete technical independence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                🏷️
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">100% Brand Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Your logos appear on shipping labels, invoices, tracking links, and SMS/WhatsApp notifications with zero AIShyp watermarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                💰
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">Set Custom Rate Slabs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Define your buy rates with Delhivery, BlueDart, or DTDC and configure custom sell rates for merchants. Keep 100% of the margin spread.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                ⚡
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">Turnkey Multi-Tenancy</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Onboard sub-merchants, regional franchise partners, and enterprise sub-accounts with role-based permissions in one centralized control tower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full">
            // Solution Benchmarking
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            AIShyp vs Traditional Aggregators vs Custom Dev
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-white font-sans">
              <tr>
                <th className="py-4 px-6 font-extrabold">FEATURES</th>
                <th className="py-4 px-6 font-extrabold bg-[#D8331F] text-white">AIShyp White-Label</th>
                <th className="py-4 px-6 font-extrabold">Generic Aggregators</th>
                <th className="py-4 px-6 font-extrabold">In-House Custom Dev</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-950">{row.feature}</td>
                  <td className="py-4 px-6 font-extrabold text-[#D8331F] bg-red-50/40">{row.aishyp}</td>
                  <td className="py-4 px-6 text-slate-500">{row.generic}</td>
                  <td className="py-4 px-6 text-slate-500">{row.customDev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="mt-20">
        <FAQ
          items={SOLUTION_FAQS}
          title="White-Label Shipping Software FAQs"
          subtitle="Clear answers on custom domain setup, profit margins, courier APIs, and automated NDR."
          showSearch={false}
          showCategoryFilter={false}
          showCta={true}
        />
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 mt-16 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans">Ready to Deploy Your Branded Shipping Portal?</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Launch your white-label shipping aggregator portal on your custom domain in under 5 minutes.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Contact Engineering Squad →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
