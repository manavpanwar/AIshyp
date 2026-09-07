"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const NDR_FAQS = [
  {
    id: "ndr-1",
    category: "NDR & RTO",
    question: "How does automated WhatsApp NDR reduce RTO by up to 35%?",
    answer:
      "When a courier logs a delivery attempt failure (e.g. buyer unavailable or wrong address), AI Shyp instantly sends an interactive WhatsApp message to the buyer. The buyer can update their address, select a new delivery date, or confirm COD cash. Instructions are pushed directly to courier rider devices within seconds.",
  },
  {
    id: "ndr-2",
    category: "NDR & RTO",
    question: "Which courier partners support real-time NDR webhooks on AI Shyp?",
    answer:
      "AI Shyp ingests real-time NDR exception webhooks from Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, Ekart, Trackon, and Ecom Express.",
  },
  {
    id: "ndr-3",
    category: "NDR & RTO",
    question: "Can I customize the WhatsApp message templates for NDR recovery?",
    answer:
      "Yes. You can customize your brand name, message wording, call-to-action buttons, and response options inside your white-label admin panel.",
  },
];

export default function RtoNdrAutomationPage() {
  const faqSchema = buildFaqSchema(NDR_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions/rto-ndr-automation" },
    { name: "Automated WhatsApp NDR & RTO Reduction", item: "/solutions/rto-ndr-automation" },
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D8331F] font-mono text-xs font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Automated WhatsApp NDR Engine</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Reduce E-Commerce RTO by Up to <span className="text-[#D8331F]">35%</span> with Automated WhatsApp NDR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Stop losing profit to double freight charges. AIShyp ingests delivery exception logs in under 10 seconds and triggers interactive WhatsApp workflows to recover failed orders before they turn into returns.
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
            Enable WhatsApp NDR Engine →
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 rounded-full text-sm font-extrabold text-slate-800 bg-white border border-slate-200 shadow-md hover:bg-slate-50 transition-all"
          >
            Explore NDR Workflows
          </Link>
        </motion.div>
      </section>

      {/* ── NDR WORKFLOW STEPS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              4-Step Automated NDR Recovery Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              How real-time automation transforms delivery exceptions into successful doorstep deliveries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D8331F]">STEP 01</span>
              <h3 className="text-base font-extrabold text-slate-950">Webhook Exception Ingest</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Courier rider marks &quot;Customer Unavailable&quot; or &quot;Wrong Address&quot;. Webhook reaches AIShyp in &lt; 10 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D8331F]">STEP 02</span>
              <h3 className="text-base font-extrabold text-slate-950">Interactive WhatsApp Prompt</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Automated WhatsApp message sent to buyer with buttons to fix address, reschedule date, or confirm COD cash.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D8331F]">STEP 03</span>
              <h3 className="text-base font-extrabold text-slate-950">Direct Courier Re-Attempt Push</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Updated delivery instructions pushed directly to courier rider handheld devices for next morning re-attempt.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D8331F]">STEP 04</span>
              <h3 className="text-base font-extrabold text-slate-950">RTO Avoided &amp; Margin Saved</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Package delivered successfully, avoiding double freight return charges and protecting merchant profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="mt-20">
        <FAQ
          items={NDR_FAQS}
          title="RTO Reduction & NDR Automation FAQs"
          subtitle="Learn how automated buyer communication prevents failed deliveries."
          showSearch={false}
          showCategoryFilter={false}
          showCta={true}
        />
      </section>
    </main>
  );
}
