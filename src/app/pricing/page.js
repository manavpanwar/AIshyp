"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FAQ from "../../components/FAQ";
import { buildFaqSchema, faqItems } from "../../data/faq";

// ── EXACT PRICING PLANS DATA FROM FLYER ──
const PRICING_PLANS = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹6,999",
    period: "monthly",
    shipments: "500 order/m",
    badge: "For New Launch",
    highlight: "Essential shipping features for emerging brands and new regional logistics partners.",
    featured: false,
    accentColor: "border-slate-200 text-slate-900",
    buttonBg: "bg-slate-900 text-white hover:bg-slate-800",
    features: [
      { name: "Courier Integration", included: true },
      { name: "Unified Tracking", included: true },
      { name: "Customer Rates", included: true },
      { name: "COD Remittance", included: false },
      { name: "Auto MIS", included: false },
      { name: "Invoices", included: false },
      { name: "API Integration", included: false },
      { name: "Shopify Integration", included: false },
      { name: "On Call Support", included: false },
      { name: "WhatsApp Alerts", included: false },
      { name: "Cash Collection", included: false },
    ],
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "₹11,999",
    period: "monthly",
    shipments: "2,000 order/m",
    badge: "MOST POPULAR",
    highlight: "Complete automation stack with Shopify, WhatsApp, and API integrations for scaling aggregators.",
    featured: true,
    accentColor: "border-[#D8331F] text-[#D8331F]",
    buttonBg: "bg-[#D8331F] text-white hover:bg-[#FF8A6E]",
    features: [
      { name: "Courier Integration", included: true },
      { name: "COD Remittance", included: true },
      { name: "Unified Tracking", included: true },
      { name: "Customer Rates", included: true },
      { name: "Auto MIS", included: true },
      { name: "Invoices", included: true },
      { name: "API Integration", included: true },
      { name: "Shopify Integration", included: true },
      { name: "On Call Support", included: true },
      { name: "WhatsApp Alerts", included: true },
      { name: "Cash Collection", included: false },
    ],
  },
  {
    id: "ultimate",
    name: "ULTIMATE",
    price: "₹19,999",
    period: "monthly",
    shipments: "Unlimited order/m",
    badge: "UNLIMITED VOLUME",
    highlight: "Enterprise operations with Cash Collection, unlimited order cap, and 100% full feature access.",
    featured: false,
    accentColor: "border-slate-800 text-slate-900",
    buttonBg: "bg-slate-900 text-white hover:bg-slate-800",
    features: [
      { name: "Courier Integration", included: true },
      { name: "COD Remittance", included: true },
      { name: "Unified Tracking", included: true },
      { name: "Customer Rates", included: true },
      { name: "Auto MIS", included: true },
      { name: "Invoices", included: true },
      { name: "API Integration", included: true },
      { name: "Shopify Integration", included: true },
      { name: "On Call Support", included: true },
      { name: "WhatsApp Alerts", included: true },
      { name: "Cash Collection", included: true },
    ],
  },
];

// ── EXACT 11 FEATURE MATRIX ITEMS FROM FLYER ──
const FEATURE_MATRIX = [
  { id: 1, name: "Courier Integration", icon: "🚚" },
  { id: 2, name: "COD Remittance", icon: "👛" },
  { id: 3, name: "Unified Tracking", icon: "🗺️" },
  { id: 4, name: "Customer Rates", icon: "🏷️" },
  { id: 5, name: "Auto MIS", icon: "📊" },
  { id: 6, name: "Invoices", icon: "📄" },
  { id: 7, name: "API Integration", icon: "🔌" },
  { id: 8, name: "Shopify Integration", icon: "🛍️" },
  { id: 9, name: "On Call Support", icon: "📞" },
  { id: 10, name: "WhatsApp Alerts", icon: "💬" },
  { id: 11, name: "Cash Collection", icon: "💵" },
];

export default function PricingPage() {
  const router = useRouter();

  const pricingFaqItems = faqItems
    .filter(
      (item) =>
        item.category === "Courier Franchise" ||
        item.category === "Shipping Aggregator" ||
        item.category === "RTO & NDR"
    )
    .slice(0, 8);
  const pricingFaqSchema = buildFaqSchema(pricingFaqItems);

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />

      {/* ── 1. CLEAN APPLE-STYLE HERO SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Transparent SaaS Pricing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Simple plans. <span className="text-[#D8331F]">Zero hidden fees.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed"
        >
          Deploy your white-label shipping aggregator portal. Choose the plan tailored for your monthly order volume. Upgrade or downgrade anytime.
        </motion.p>
      </section>

      {/* ── 2. 3 SLEEK PRICING CARDS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-300 ${
                plan.featured
                  ? "border-[#D8331F] shadow-[0_16px_40px_rgba(216,51,31,0.18)] scale-[1.02] z-20"
                  : "border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 z-10"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#D8331F] text-white px-4 py-1 text-[10px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                  ★ {plan.badge}
                </span>
              )}

              <div className="space-y-5">
                {/* Plan Title & Badge */}
                <div className="space-y-1">
                  {!plan.featured && (
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {plan.badge}
                    </span>
                  )}
                  <h2 className="text-2xl font-extrabold font-sans text-slate-950 tracking-tight">
                    {plan.name}
                  </h2>
                </div>

                {/* Price Display */}
                <div className="border-b border-slate-100 pb-5 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-950 font-sans tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      / month
                    </span>
                  </div>
                  <div className="inline-block mt-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-extrabold">
                    📦 Cap: <span className="text-[#D8331F]">{plan.shipments}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {plan.highlight}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-[11px] font-mono font-extrabold text-slate-400 uppercase tracking-wider">
                    Plan Benefits:
                  </p>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    {plan.features.map((ft) => (
                      <li key={ft.name} className="flex items-center gap-2.5">
                        {ft.included ? (
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                            ✓
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                            ✕
                          </span>
                        )}
                        <span className={ft.included ? "text-slate-900 font-bold" : "text-slate-400 line-through"}>
                          {ft.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => router.push("/contact")}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-extrabold shadow-md transition-all ${plan.buttonBg}`}
                >
                  Get Started with {plan.name} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. DETAILED FEATURE MATRIX COMPARISON TABLE (EXACT FROM FLYER) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
              // Official Plan Benefits Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight">
              Compare Feature Benefits Side-by-Side
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Detailed breakdown of all 11 core logistics capabilities across Starter, Growth, and Ultimate tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-sans border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6 font-extrabold w-16 text-center">ID</th>
                  <th className="py-4 px-6 font-extrabold">FEATURES (Plan Benefits)</th>
                  <th className="py-4 px-6 font-extrabold text-center bg-red-700 text-white min-w-[140px]">
                    <div>STARTER</div>
                    <div className="text-xs font-mono font-normal opacity-90">₹6,999 / mo</div>
                  </th>
                  <th className="py-4 px-6 font-extrabold text-center bg-red-800 text-white min-w-[140px]">
                    <div>GROWTH</div>
                    <div className="text-xs font-mono font-normal opacity-90">₹11,999 / mo</div>
                  </th>
                  <th className="py-4 px-6 font-extrabold text-center bg-red-900 text-white min-w-[140px]">
                    <div>ULTIMATE</div>
                    <div className="text-xs font-mono font-normal opacity-90">₹19,999 / mo</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {FEATURE_MATRIX.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-400 text-center">{row.id}</td>
                    <td className="py-3.5 px-6 font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="text-base">{row.icon}</span>
                      <span>{row.name}</span>
                    </td>
                    
                    {/* Starter */}
                    <td className="py-3.5 px-6 text-center">
                      {[1, 3, 4].includes(row.id) ? (
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center font-extrabold text-xs shadow-2xs">
                          ✓
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 inline-flex items-center justify-center font-extrabold text-xs shadow-2xs">
                          ✕
                        </span>
                      )}
                    </td>

                    {/* Growth */}
                    <td className="py-3.5 px-6 text-center bg-slate-50/50">
                      {row.id !== 11 ? (
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center font-extrabold text-xs shadow-2xs">
                          ✓
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 inline-flex items-center justify-center font-extrabold text-xs shadow-2xs">
                          ✕
                        </span>
                      )}
                    </td>

                    {/* Ultimate */}
                    <td className="py-3.5 px-6 text-center">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center font-extrabold text-xs shadow-2xs">
                        ✓
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Total Shipment Row */}
                <tr className="bg-slate-900 text-white font-sans">
                  <td className="py-4 px-6 text-center font-mono font-bold text-slate-400">-</td>
                  <td className="py-4 px-6 font-extrabold text-base">Total shipment cap</td>
                  <td className="py-4 px-6 text-center font-bold text-amber-300">500 order/m</td>
                  <td className="py-4 px-6 text-center font-bold text-amber-300">2000 order/m</td>
                  <td className="py-4 px-6 text-center font-extrabold text-emerald-400 text-base">unlimited order/m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ── 4. FAQS SECTION ── */}
      <section className="mt-20">
        <FAQ
          items={pricingFaqItems}
          title="Pricing and Franchise FAQs"
          subtitle="Detailed answers regarding white-label plans, order caps, and carrier APIs."
          maxItems={8}
          showSearch={true}
          showCategoryFilter={true}
          showCta={true}
        />
      </section>

      {/* ── 5. CLOSING CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 mt-16 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Need a Custom Enterprise SLA?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            We partner with large logistics networks, courier chains, and multi-region aggregators. Talk to our platform engineering team for custom volume pricing.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Contact Enterprise Sales →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}