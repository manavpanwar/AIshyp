"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "../../../components/FAQ";
import { buildFaqSchema } from "../../../data/faq";
import { getSoftwareApplicationSchema, getBreadcrumbSchema } from "../../../lib/seo";

const PAGE_FAQS = [
  {
    id: "mt-1",
    category: "Multi-Tenant Shipping SaaS",
    question: "What is Multi-Tenant Shipping SaaS?",
    answer:
      "Multi-Tenant Shipping SaaS is a cloud platform architecture that allows a master logistics operator to provision isolated sub-accounts (tenants) for different merchants, regional franchises, or sub-vendors. Each tenant has isolated rate cards, wallet ledgers, branding, and role-based permissions.",
  },
  {
    id: "mt-2",
    category: "Multi-Tenant Shipping SaaS",
    question: "How does AI Shyp isolate merchant data and wallet balances?",
    answer:
      "AI Shyp enforces strict database-level tenancy separation. Each merchant or sub-vendor operates within their designated wallet ledger, order repository, and custom rate slab without access to master carrier contracts or other tenant data.",
  },
  {
    id: "mt-3",
    category: "Multi-Tenant Shipping SaaS",
    question: "Can I manage sub-vendor markup rates dynamically?",
    answer:
      "Yes! Master platform admins can create unlimited custom rate tiers (e.g. VIP Merchant, Starter Franchise, Enterprise Retailer) with automated margin markups applied over base carrier buy rates.",
  },
  {
    id: "mt-4",
    category: "Multi-Tenant Shipping SaaS",
    question: "Is there a limit on how many tenants or sub-accounts I can onboard?",
    answer:
      "No. AI Shyp's cloud architecture is built to support unlimited sub-merchants, franchise counters, and API client keys under your custom domain.",
  },
];

const MULTI_TENANT_FEATURES = [
  {
    title: "Database Tenancy & Data Isolation",
    desc: "Complete security boundary per sub-merchant, ensuring order, customer, and financial data privacy.",
    icon: "🛡️",
  },
  {
    title: "Sub-Vendor Wallet & Credit Limits",
    desc: "Prepaid wallet recharges, automated COD balance deduction, and configurable credit terms.",
    icon: "💰",
  },
  {
    title: "Granular Role-Based Access (RBAC)",
    desc: "Define admin, billing, counter agent, warehouse operator, and merchant permissions.",
    icon: "🔑",
  },
  {
    title: "Automated Carrier Rate Markup Engine",
    desc: "Apply flat or percentage profit markups per zone, courier service, or client account tier.",
    icon: "📈",
  },
];

export default function MultiTenantShippingSaaSPage() {
  const faqSchema = buildFaqSchema(PAGE_FAQS);
  const softwareSchema = getSoftwareApplicationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/solutions" },
    { name: "Multi-Tenant Shipping SaaS", item: "/solutions/multi-tenant-shipping-saas" },
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
        <span itemProp="name">Multi-Tenant Shipping SaaS - AI Shyp</span>
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F]  text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Multi-Tenant Logistics SaaS Architecture</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Multi-Tenant Shipping SaaS <br className="hidden sm:inline" />
          <span className="text-[#D8331F]">for Enterprise Logistics Platforms</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Scale your logistics network with true multi-tenant sub-account management. Provision isolated merchant portals, manage sub-vendor wallet ledgers, set dynamic carrier rate markups, and maintain 100% margin retention.
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
            Request Architecture Demo →
          </Link>
          <Link
            href="/features"
            className="bg-white border border-slate-200 text-slate-900 rounded-full px-8 py-4 text-xs font-extrabold hover:bg-slate-50 transition-all cursor-pointer"
          >
            Explore Platform Features
          </Link>
        </motion.div>
      </section>

      {/* ── LITERAL ENTITY DEFINITION BOX ── */}
      <section className="max-w-4xl mx-auto px-6 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-3 text-center">
          <p className="text-xs  font-bold text-[#D8331F] uppercase tracking-widest">// Semantic Definition</p>
          <h2 className="text-xl font-bold text-slate-900">What is AI Shyp?</h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            <strong>AI Shyp</strong> is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain.
          </p>
        </div>
      </section>

      {/* ── MULTI-TENANT ARCHITECTURE FEATURES ── */}
      <section className="max-w-6xl mx-auto px-6 mt-16 sm:mt-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Multi-Tenant SaaS Core Capabilities
          </h2>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Architected for security, scale, and high-margin B2B SaaS operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {MULTI_TENANT_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D8331F] flex items-center justify-center text-2xl border border-red-200/80">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <FAQ items={PAGE_FAQS} title="Multi-Tenant Shipping SaaS FAQs" />
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Deploy Multi-Tenant Shipping SaaS Today
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Onboard unlimited sub-merchants on your custom domain with 100% profit margin retention.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D8331F] text-white rounded-full px-8 py-4 text-xs font-extrabold shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Get Onboarded Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
