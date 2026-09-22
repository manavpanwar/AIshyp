"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const FRANCHISE_FAQS = [
  {
    id: "cf-1",
    category: "Courier Franchise",
    question: "How does AI Shyp help me start a tech-enabled courier franchise in India?",
    answer:
      "AI Shyp provides a turn-key digital shipping portal on your custom domain. You can onboard local sellers, connect direct courier APIs (Delhivery, BlueDart, DTDC, Xpressbees), set custom buy/sell margin slabs, and manage cash collection and bookings from a single panel.",
  },
  {
    id: "cf-2",
    category: "Courier Franchise",
    question: "Can I onboard sub-agents and regional franchise branches on AI Shyp?",
    answer:
      "Yes. AI Shyp includes multi-tenant sub-account onboarding with role-based permissions, allowing you to set up sub-agents, regional branches, and counter staff with customized rate cards and wallet limits.",
  },
  {
    id: "cf-3",
    category: "Courier Franchise",
    question: "How does cash collection work for walk-in courier booking hubs?",
    answer:
      "AI Shyp features a dedicated Cash Collection module that logs cash received at booking counters, credits merchant wallets, and reconciles cash balances against daily courier dispatch manifests.",
  },
  {
    id: "cf-4",
    category: "Courier Franchise",
    question: "Do I need physical warehouses to run a digital courier franchise?",
    answer:
      "No. Digital courier franchises run lean by aggregating local e-commerce merchants and utilizing direct carrier doorstep pickup fleets, minimizing overhead costs.",
  },
];

export default function CourierFranchiseSoftwarePage() {
  const faqSchema = buildFaqSchema(FRANCHISE_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions/courier-franchise-software" },
    { name: "Courier Franchise Software", item: "/solutions/courier-franchise-software" },
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
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D8331F]  text-xs font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Courier Franchise Tech OS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Launch Your <span className="text-[#D8331F]">Courier Franchise Software</span> &amp; Digital Logistics Portal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Empower your regional shipping network with centralized multi-courier booking, cash collection controls, automated WhatsApp NDR recovery, and sub-agent management across 29,000+ Indian pincodes.
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
            Launch Franchise Portal →
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 rounded-full text-sm font-extrabold text-slate-800 bg-white border border-slate-200 shadow-md hover:bg-slate-50 transition-all"
          >
            Explore Franchise Plans
          </Link>
        </motion.div>
      </section>

      {/* ── FRANCHISE CAPABILITIES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Designed for Regional Courier Operators &amp; Logistics Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Everything you need to digitize your local courier operations and scale nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                🏢
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">Sub-Agent &amp; Branch Onboarding</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Set up sub-branches, booking agents, and regional franchise partners with customized buy/sell rate slabs and wallet controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                💵
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">Counter Cash Collection</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Reconcile offline cash payments collected at booking counters against daily carrier manifests and digital merchant wallets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-lg border border-red-200">
                🚚
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">14+ Direct Carrier APIs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Route shipments to Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, and DP World with instant least-cost carrier allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="mt-20">
        <FAQ
          items={FRANCHISE_FAQS}
          title="Courier Franchise Software FAQs"
          subtitle="Answers on starting a tech-enabled courier franchise in India."
          showSearch={false}
          showCategoryFilter={false}
          showCta={true}
        />
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 mt-16 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans">Start Your Courier Franchise Portal</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Talk to our platform onboarding specialists to deploy your custom domain shipping portal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Contact Franchise Onboarding →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
