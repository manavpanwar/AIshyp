"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const PAGE_FAQS = [
  {
    id: "portal-1",
    category: "White-Label Logistics Portal",
    question: "What is a White Label Logistics Portal in India?",
    answer:
      "A white label logistics portal is a turnkey shipping software platform hosted on your custom domain (e.g., ship.yourcompany.com). AI Shyp enables logistics businesses, regional courier franchises, and entrepreneurs in India to launch their own branded shipping portal with zero vendor watermarks and 100% margin control.",
  },
  {
    id: "portal-2",
    category: "White-Label Logistics Portal",
    question: "How long does it take to deploy a white-label logistics portal on AI Shyp?",
    answer:
      "Deployment takes less than 5 minutes. You map your custom CNAME record to your domain, upload your logo, configure your carrier API keys (Delhivery, BlueDart, DTDC, Xpressbees), and start onboarding merchants immediately.",
  },
  {
    id: "portal-3",
    category: "White-Label Logistics Portal",
    question: "Can I set custom profit margin rate slabs for my clients?",
    answer:
      "Yes! AI Shyp provides a multi-tier rate slab manager. You buy shipping labels at discounted carrier rates and define custom sell rate cards per merchant or franchise tier. You keep 100% of the margin spread.",
  },
  {
    id: "portal-4",
    category: "White-Label Logistics Portal",
    question: "Does the portal support automated COD remittance and WhatsApp NDR?",
    answer:
      "Yes. The portal includes automated T+1 COD remittance tracking, wallet recharge gateways, and automated WhatsApp NDR buyer workflows to recover up to 35% of failed doorstep deliveries.",
  },
];

const FEATURES_LIST = [
  {
    title: "100% Custom Domain & Branding",
    desc: "Host on ship.yourbrand.com with your custom logo, favicon, color palette, and white-labeled email notifications.",
    icon: "🌐",
  },
  {
    title: "14+ Direct Courier REST APIs",
    desc: "Pre-built integrations with Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, Ekart, and DP World.",
    icon: "🔌",
  },
  {
    title: "Multi-Tier Client & Wallet System",
    desc: "Manage sub-merchants, franchise counters, prepaid wallet recharges, and automated billing ledgers.",
    icon: "💳",
  },
  {
    title: "Automated WhatsApp NDR Engine",
    desc: "Interactive buyer communication via WhatsApp for failed delivery attempts, reducing RTO by up to 35%.",
    icon: "💬",
  },
  {
    title: "Dynamic Rate Card Engine",
    desc: "Define zone-wise (Intracity, Regional, Metro, Rest of India) buy/sell rate slabs and keep 100% margin.",
    icon: "📊",
  },
  {
    title: "Shopify & E-Commerce Sync",
    desc: "1-click order import and automated waybill/AWB tracking number push to Shopify stores.",
    icon: "🛍️",
  },
];

export default function WhiteLabelLogisticsPortalIndiaPage() {
  const faqSchema = buildFaqSchema(PAGE_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions" },
    { name: "White Label Logistics Portal India", item: "/solutions/white-label-logistics-portal-india" },
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
        <span itemProp="name">White Label Logistics Portal India - AI Shyp</span>
        <span itemProp="description">
          AI Shyp is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain with 14+ courier APIs, automated WhatsApp NDR, and 100% margin retention.
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
          <span>// Turnkey Logistics Portal SaaS in India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          White Label Logistics Portal <br className="hidden sm:inline" />
          <span className="text-[#D8331F]">for Shipping Businesses in India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Launch your branded shipping aggregator portal on your custom domain in 5 minutes. Connect 14+ direct courier APIs (Delhivery, BlueDart, DTDC, Xpressbees), automate WhatsApp NDR recovery, and retain 100% gross profit margins with 0% commission split.
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
            Launch Your Portal Now →
          </Link>
          <Link
            href="/pricing"
            className="bg-white border border-slate-200 text-slate-900 rounded-full px-8 py-4 text-xs font-extrabold hover:bg-slate-50 transition-all cursor-pointer"
          >
            Explore SaaS Plans
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

      {/* ── CORE CAPABILITIES GRID ── */}
      <section className="max-w-6xl mx-auto px-6 mt-16 sm:mt-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Built for Indian Logistics Aggregators &amp; Franchises
          </h2>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Everything you need to operate an enterprise-grade multi-courier shipping portal under your own brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_LIST.map((feat) => (
            <div
              key={feat.title}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D8331F] flex items-center justify-center text-2xl border border-red-200/80">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{feat.title}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <FAQ items={PAGE_FAQS} title="White Label Logistics Portal FAQs" />
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Launch Your White Label Logistics Portal?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Get your domain configured in 5 minutes with full 14+ courier API access and 100% profit margin control.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D8331F] text-white rounded-full px-8 py-4 text-xs font-extrabold shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Contact Platform Engineering →
          </Link>
        </div>
      </section>
    </main>
  );
}
