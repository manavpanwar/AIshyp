"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AccordionGallery from "@/components/ui/AccordionGallery";

// ── 10 APPLE-STYLE MAJOR FEATURE SHOWCASE DATA (COMPACT & SLEEK) ──
const SHOWCASE_FEATURES = [
  {
    num: "01",
    tag: "WHITE-LABEL BRANDING & MULTI-TENANCY",
    title: "Your Logo. Your Domain.",
    subtitle: "Zero AIShyp watermarks. Ever.",
    desc: "Host on your custom domain (e.g. ship.yourbrand.com). Dedicated tenant portals with custom logos, favicons, corporate color themes, and multi-tenant sub-account onboarding.",
    stats: [
      { label: "Setup Time", val: "< 5 Mins" },
      { label: "Brand Autonomy", val: "100%" },
    ],
    features: [
      "Custom domain & SSL certificate mapping",
      "Your logo on thermal labels, packing slips & invoices",
      "Branded SMS & WhatsApp tracking notification URLs",
      "Granular role-based user permissions (Admin, Owner, Executor, Viewer)",
    ],
    video: "/video1.mp4",
    videoSlotName: "White-Label Portal Walkthrough",
    pillColor: "text-[#D8331F] bg-red-50 border-red-200/80",
  },
  {
    num: "02",
    tag: "MULTI-CARRIER CONSOLIDATION",
    title: "14+ Direct Courier APIs.",
    subtitle: "Zero engineering needed.",
    desc: "Consolidate B2C parcels & B2B heavy cargo across Delhivery, DTDC, Xpressbees, BlueDart, DP World, eKart, Trackon & CriticaLog with instant sub-120ms rate discovery.",
    stats: [
      { label: "Pre-Integrated LSPs", val: "14+ Carriers" },
      { label: "Pincode Coverage", val: "29,000+" },
    ],
    features: [
      "Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax & eKart",
      "B2C e-commerce parcels + DP World heavy B2B cargo",
      "Automatic API failover & least-cost smart routing",
      "Combined direct API integrations and automated web scrapers",
    ],
    video: "/video2.mp4",
    videoSlotName: "Multi-Carrier Gateway Demo",
    pillColor: "text-sky-700 bg-sky-50 border-sky-200/80",
  },
  {
    num: "03",
    tag: "AI VISION & OCR PIPELINE",
    title: "AI Reads Handwritten Labels.",
    subtitle: "Parsed in under 2 seconds.",
    desc: "Upload photos of handwritten or printed shipping addresses. Computer vision OCR extracts clean name, phone, address, and pincode while automatically mapping product HSN tax codes.",
    stats: [
      { label: "Parsing Speed", val: "< 2.0s" },
      { label: "Error Reduction", val: "99.4%" },
    ],
    features: [
      "Instant OCR for handwritten or printed parcel labels",
      "Automated HSN tax code & commodity categorization",
      "Smart pincode & destination zone validation before booking",
      "Eliminates manual entry errors that cause failed deliveries",
    ],
    video: "/video3.mp4",
    videoSlotName: "AI OCR Scanner Live Action",
    pillColor: "text-purple-700 bg-purple-50 border-purple-200/80",
  },
  {
    num: "04",
    tag: "NDR AUTOMATED RESCUE PANEL",
    title: "Automated NDR Order Rescue.",
    subtitle: "Recover up to 35% of failed deliveries.",
    desc: "Non-Delivery Reports (NDR) trigger instantly when a courier delivery fails. Our panel flags failures in real time and launches automated WhatsApp buyer workflows to re-schedule delivery.",
    stats: [
      { label: "RTO Recovery Rate", val: "Up to 35%" },
      { label: "WhatsApp Delivery", val: "Instant" },
    ],
    features: [
      "Real-time failure detection (Doorstep issue, Customer unavailable, Payment refusal)",
      "Automated WhatsApp interactive address & landmark update links",
      "Push reattempt instructions directly to courier driver devices",
      "Saves merchants from paying double forward + return freight fees",
    ],
    video: "/video4.mp4",
    videoSlotName: "Automated NDR Workflow Demo",
    pillColor: "text-rose-700 bg-rose-50 border-rose-200/80",
  },
  {
    num: "05",
    tag: "FINANCIAL WALLET & COD REMITTANCE",
    title: "Zero Missing COD Rupees.",
    subtitle: "Automated T+1 bank payouts.",
    desc: "Prepaid digital wallet tracking freight debits, COD collections, and Razorpay top-ups. Automated scrapers continuously reconcile courier payout sheets against delivered COD orders.",
    stats: [
      { label: "Payout Cadence", val: "T+1 Daily" },
      { label: "Audit Accuracy", val: "100%" },
    ],
    features: [
      "Prepaid digital wallet with instant UPI & NetBanking recharges",
      "Automated courier COD remittance sheet scraping & reconciliation",
      "Transparent ledger log with instant debit/credit tracking",
      "Automated itemized GST tax invoices and accounting exports",
    ],
    video: "/video5.mp4",
    videoSlotName: "COD Remittance Audit Ledger Preview",
    pillColor: "text-amber-700 bg-amber-50 border-amber-200/80",
  },
  {
    num: "06",
    tag: "DOCKET-BASED WEIGHT RECONCILIATION",
    title: "Docket-Based Weight Auditing.",
    subtitle: "Update actual weight & auto-charge wallet.",
    desc: "Admins update actual parcel weights directly against docket numbers when customer declared weight differs. Automatically debits or credits merchant wallets based on actual weight.",
    stats: [
      { label: "Audit Method", val: "By Docket No." },
      { label: "Wallet Settlement", val: "Auto Charge / Credit" },
    ],
    features: [
      "Update actual parcel weight against docket number (no image upload required)",
      "Automatic calculation if customer declared weight is less or more",
      "Instant automated debit or credit to customer's wallet balance",
      "Complete transparent log of docket weight updates and wallet ledger charges",
    ],
    video: "/video6.mp4",
    videoSlotName: "Docket Weight Adjustment Console",
    pillColor: "text-indigo-700 bg-indigo-50 border-indigo-200/80",
  },
  {
    num: "07",
    tag: "DYNAMIC RATE CALCULATOR & ROUTING",
    title: "Zone-Based Smart Rate Engine.",
    subtitle: "Compare rates side-by-side.",
    desc: "Calculate exact shipping cost before booking by comparing physical weight against volumetric weight (L x W x H / Divisor) across 6 zones with customizable markup margins.",
    stats: [
      { label: "Zone Coverage", val: "6 Indian Zones" },
      { label: "Rate Comparison", val: "Side-by-Side" },
    ],
    features: [
      "City, State, Metro, Regional, National & J&K/Northeast zones",
      "Automatic Volumetric CFT vs dead weight chargeable calculations",
      "Configurable COD collection fees (% or flat rate) & fuel surcharges",
      "Instant prepaid and COD pincode serviceability lookup",
    ],
    video: "/video7.mp4",
    videoSlotName: "Rate Engine & Margin Configuration Demo",
    pillColor: "text-[#D8331F] bg-red-50 border-red-200/80",
  },
  {
    num: "08",
    tag: "LABELS, INVOICES & MANIFESTS",
    title: "Instant Dispatch Documentation.",
    subtitle: "4x6 thermal, A4 & carrier layouts.",
    desc: "Generate professional dispatch documentation instantly. Supports thermal 4x6 labels, multi-label A4 formats, itemized packing slips, GST tax invoices, and rider manifests.",
    stats: [
      { label: "Label Formats", val: "4x6 Thermal & A4" },
      { label: "Compliance", val: "GST Invoice Ready" },
    ],
    features: [
      "Thermal 4x6 inch, A4 multi-grid, and carrier custom layouts with barcodes",
      "Itemized packing slips with product summaries & SKU bin locations",
      "GST-compliant B2C retail and commercial B2B tax PDF invoices",
      "Official handover manifests with courier rider digital signature capture",
    ],
    video: "/video8.mp4",
    videoSlotName: "Label & Document Customization Demo",
    pillColor: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
  },
  {
    num: "09",
    tag: "WMS & HEAVY FREIGHT CONSOLE",
    title: "100g Parcels to 5-Ton Cargo.",
    subtitle: "One unified operations stack.",
    desc: "Manage multiple warehouse pickup locations, assign user permissions, and dispatch heavy commercial B2B cargo with DP World.",
    stats: [
      { label: "Freight Scope", val: "B2C & B2B Cargo" },
      { label: "Warehouse Hubs", val: "Unlimited" },
    ],
    features: [
      "Multi-warehouse pickup mapping and facility return addresses",
      "Integrated with DP World & DTDC for heavy palletized B2B freight",
      "User-to-warehouse mapping for localized operational access",
    ],
    video: "/video9.mp4",
    videoSlotName: "Multi-Warehouse & B2B Cargo Console",
    pillColor: "text-teal-700 bg-teal-50 border-teal-200/80",
  },
  {
    num: "10",
    tag: "SCHEDULED REPORTS & ENTERPRISE MIS",
    title: "Automated Email Reports & MIS Exports.",
    subtitle: "Scheduled daily & weekly subscriptions.",
    desc: "Schedule automated daily or weekly Excel/CSV MIS email subscriptions directly to account owners, merchants, and auditors with 1-click exportable logs.",
    stats: [
      { label: "Report Delivery", val: "Daily / Weekly Auto-Email" },
      { label: "Export Formats", val: "Excel / CSV / PDF" },
    ],
    features: [
      "Scheduled recurring daily & weekly Excel/CSV report email delivery",
      "Ad-hoc 1-click exports of manifests, wallet ledgers, and order logs",
      "Comprehensive audit trail logs tracking status transitions & user actions",
      "Role-based permissions (Admin, TenantAdmin, Owner, Executor, Viewer)",
    ],
    video: "/video10.mp4",
    videoSlotName: "Executive MIS Analytics & Report Builder",
    pillColor: "text-blue-700 bg-blue-50 border-blue-200/80",
  },
];

// ── COMPREHENSIVE PLATFORM CAPABILITIES LIST DATA ──
const DETAILED_CAPABILITIES = [
  {
    category: "1. Executive Platform Architecture & Multi-Tenancy",
    summary: "White-labeled multi-tenant SaaS architecture designed for e-commerce brands, logistics aggregators, and enterprise shippers.",
    points: [
      "White-Labeled SaaS Branding: Dedicated domain (e.g. ship.yourbrand.com), custom logos, favicons, corporate color schemes, and custom contact details.",
      "Multi-Carrier Consolidation: Unifies shipments, weight disputes, COD payouts, and NDRs from 14+ providers into a single dashboard.",
      "Automated Backend Scrapers: Scrapes statuses, weights, and remittances from courier portals without manual intervention.",
      "AI-Driven Operations: Optical character recognition (OCR) address extraction and automatic HSN commodity classification.",
      "Role-Based Permission Controls: Configurable access controls for Admins, Account Managers, and Operational Staff.",
      "Granular Role-Based Access Control: Pre-configured roles including Super Admin, TenantAdmin, Owner, Executor, PickupBoy, and Viewer.",
    ],
  },
  {
    category: "2. Tenant Portal & Dynamic Analytics Dashboard",
    summary: "Real-time control center offering deep visibility into shipping volume, carrier health, and cash flows.",
    points: [
      "Real-Time Order Funnel: Tracks active orders across Created (draft), Pickup Scheduled, In Transit, NDR, Delivered, and RTO.",
      "Dynamic Date Range Picker: Seamless filtering across Today, Yesterday, Last 7 Days, Last 30 Days, Last 90 Days, or custom date ranges.",
      "COD Remittance Summary: Aggregates outstanding COD collected by couriers, processed payouts, next remittance dates, and historical cycles.",
      "Interactive Visual Analytics: Stacked bar charts for shipment volume trends and pie charts for courier partner distribution.",
      "Sub-Customer & Branch Filtering: Allows tenant admins to filter analytics across sub-accounts, merchant codes, or regional branches.",
    ],
  },
  {
    category: "3. Out-of-the-Box Carrier Integrations & Rate Engine",
    summary: "Pre-integrated with 14+ courier services and heavy freight networks with smart least-cost routing.",
    points: [
      "Delhivery (B2C & B2B): Direct API & scraper integration for real-time booking, tracking, manifests, and weight scraping.",
      "DTDC (API, Portal, EFR): Surface and air booking, AWB generation, and automated status synchronization.",
      "Xpressbees: Prepaid & COD order booking, real-time tracking, and automated remittance scraping.",
      "BlueDart: Express delivery routing and secure pincode serviceability validation.",
      "DP World: Heavy palletized B2B cargo transport booking and specialized commercial dispatch.",
      "eKart, Trackon & CriticaLog: Direct API integrations covering prepaid/COD retail parcel dispatch and regional cold-chain.",
      "Shipmozo (Aggregator): Aggregator API rate comparison and scraped status updates.",
      "6-Zone Rate Engine: City, State, Metro-to-Metro, Regional, National, and Special (J&K / Northeast) pricing rules.",
      "Volumetric Weight Calculation: Compares dead physical weight against volumetric weight (L x W x H / Carrier Divisor).",
      "Surcharge Engine: Configurable COD collection fees (% or flat rate), fuel surcharges, and RTO charges.",
      "Real-Time Pincode Lookup: Verifies prepaid and COD serviceability across 29,000+ Indian pincodes in <120ms.",
    ],
  },
  {
    category: "4. E-commerce Channels, AI Tools & Bulk Dispatch",
    summary: "Seamless channel synchronization and AI tools that automate shipping workflows.",
    points: [
      "Shopify & Channel Webhooks: Automatic order ingestion from storefronts and real-time AWB tracking pushback into Shopify.",
      "AI Address OCR Parser: Upload photo of handwritten/printed parcel label; AI converts it into Name, Phone, Address, City, State, Pincode in <2s.",
      "AI Commodity Classification: Auto-maps product descriptions to appropriate cargo categories and HSN/GST tax codes.",
      "Bulk Excel Dispatch: Import 5,000+ orders in a single click using custom Excel/CSV templates with automated error validation.",
      "Quick Order Clone: 1-click cloning of past orders for instant re-shipping of repeat customer orders.",
    ],
  },
  {
    category: "5. Dispatch Labels, Invoices & Documentation",
    summary: "Standardized, print-ready logistics documentation generated instantly for every shipment.",
    points: [
      "Multi-Format Label Generator: Thermal 4x6 inch labels, multi-label A4 grids, and carrier custom layouts (DTDC 3-inch, Delhivery) with barcodes.",
      "Itemized Packing Slips: Generates packing slips with product summaries, buyer instructions, and warehouse SKU bin locations.",
      "GST-Compliant Invoicing: Creates PDF tax invoices for both retail B2C orders and commercial B2B shipments with itemized tax breakdowns.",
      "Handover Manifests: Generates official pickup manifests detailing package counts with courier rider signature fields.",
    ],
  },
  {
    category: "6. Automated NDR (Non-Delivery Report) Rescue Panel",
    summary: "Real-time non-delivery resolution engine to recover failed orders and mitigate RTO shipping losses.",
    points: [
      "Real-Time NDR Ingestion: Pulls unsuccessful delivery logs from carrier APIs instantly upon failure (Customer unavailable, wrong address, door locked).",
      "Interactive Action Submission: Submit immediate instructions (Re-attempt delivery, Return to origin, Address/phone update, Hold at branch).",
      "Automated WhatsApp Buyer Workflows: Triggers interactive WhatsApp messages asking buyers to update address or confirm delivery slot.",
      "RTO Mitigation Engine: Recovers up to 35% of failed orders, saving merchants from paying double forward + return freight fees.",
      "Audit Trail & Log Timeline: Complete chronological record of NDR attempts, buyer responses, and carrier action confirmations.",
    ],
  },
  {
    category: "7. Financial Wallet, Billing & COD Remittance OS",
    summary: "Transparent financial management tracking shipping wallet transactions and cash-on-delivery payouts.",
    points: [
      "Prepaid Shipping Wallet: Digital wallet tracking balance, freight debits, COD adjustments, and weight dispute debits/credits.",
      "Razorpay Top-Up Gateway: Supports instant online wallet recharges via UPI, Credit/Debit cards, and NetBanking.",
      "COD Reconciliation Engine: Audits courier payout statements against delivered COD orders to eliminate missing cash.",
      "Automated Remittance Scrapers: Scrapes payout sheets from Delhivery, DTDC, and Xpressbees to verify T+1 daily payouts.",
      "Transparent Ledger Log: Complete transaction ledger with downloadable itemized GST tax invoices and accounting exports.",
    ],
  },
  {
    category: "8. Docket-Based Weight Dispute & Reconciliation",
    summary: "Streamlined weight auditing that eliminates overcharges through docket-level adjustments.",
    points: [
      "Docket-Level Weight Auditing: Admins input actual parcel weight directly against docket numbers when customer declared weight differs.",
      "No Photo Upload Required: Direct weight input against docket record simplifies admin workflow.",
      "Automated Wallet Adjustments: Automatically calculates weight variance and debits or credits customer wallet balance in real time.",
      "Audit Trail & Ledger Logs: Every weight adjustment and wallet debit/credit is logged transparently for merchant audit.",
    ],
  },
  {
    category: "9. WMS, Inventory & Administrative Controls",
    summary: "Warehouse management and admin controls for multi-location operations.",
    points: [
      "Multi-Warehouse Management: Configure multiple pickup hubs, contact profiles, and facility return addresses.",
      "User-to-Warehouse Mapping: Assign staff or sub-accounts to specific warehouse hubs for localized dispatch control.",
      "Stock Sync & WMS: Maintains SKU catalogs and automatically decrements inventory stock upon booking or replenishes stock during customer returns.",
      "Super-Admin Controls: Onboard new tenants, activate/deactivate panels, adjust credit limits, and set custom rate cards.",
      "Support Ticketing System: Custom sales lead management and support ticket resolution console.",
    ],
  },
  {
    category: "10. Scheduled Reports & Enterprise MIS",
    summary: "Automated recurring reporting and operational data exports.",
    points: [
      "Scheduled Email Subscriptions: Automatically emails recurring daily or weekly Excel/CSV report sheets to auditors, owners, or account managers.",
      "Ad-Hoc Data Exports: 1-click manual exporting of manifest databases, order logs, wallet ledgers, and COD remittance reports.",
      "Comprehensive Audit Logs: Full visibility into user actions, order status transitions, and financial ledger balance changes.",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 font-sans overflow-hidden">
      
      {/* ── 1. CLEAN APPLE HERO SECTION WITH FADE-IN MOTIONS ── */}
      <section className="relative w-full pt-28 sm:pt-32 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center justify-center border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-[11px] font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
            <span>// White-Label Logistics Platform OS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight"
          >
            Engineered for scale. <br />
            <span className="text-[#D8331F]">Built for speed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed"
          >
            Deploy your dedicated white-label shipping aggregator panel with 14+ carrier APIs, AI OCR parcel parsing, automated NDR recovery, and docket weight reconciliation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#FF8A6E] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Launch Platform →
            </Link>
            <a
              href="#master-capabilities"
              className="bg-slate-100 text-slate-700 hover:text-slate-950 rounded-full px-6 py-3 text-xs sm:text-sm font-bold border border-slate-200/90 transition-colors"
            >
              Explore Features ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. 10 SHOWCASE ROWS WITH APPLE SCROLL OVER FADE MOTIONS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {SHOWCASE_FEATURES.map((feat, idx) => (
          <motion.div
            key={feat.num}
            id={`feature-${feat.num}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-slate-200/60 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
          >
            {/* Content Column (Fades & Glides from side) */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-400 tracking-tight">
                  {feat.num}
                </span>
                <span className={`text-[10px] font-mono font-bold px-3 py-0.5 rounded-full border ${feat.pillColor} tracking-wider uppercase`}>
                  {feat.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-snug">
                  {feat.title}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#D8331F]">
                  {feat.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                {feat.desc}
              </p>

              {/* Key Metric Badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {feat.stats.map((st) => (
                  <div key={st.label} className="bg-slate-100/80 border border-slate-200/70 rounded-xl p-3 text-center">
                    <p className="text-base sm:text-lg font-extrabold text-slate-900 font-sans tracking-tight">
                      {st.val}
                    </p>
                    <p className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bullet List */}
              <ul className="space-y-2 pt-1">
                {feat.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Media Screen Column (Floats Up & Scales Slightly) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 max-w-lg mx-auto hover:scale-[1.01] transition-transform duration-500">
                {/* Browser Title Bar */}
                <div className="h-8 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    {feat.videoSlotName}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-1.5 py-0.5 rounded">
                    LIVE
                  </span>
                </div>

                {/* Display Canvas */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                  {feat.video ? (
                    <video
                      src={feat.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-top"
                    />
                  ) : feat.image ? (
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority={idx === 0}
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 space-y-2 bg-slate-950">
                      <div className="w-10 h-10 rounded-full bg-[#D8331F]/20 text-[#D8331F] flex items-center justify-center text-lg border border-[#D8331F]/40">
                        ▶
                      </div>
                      <p className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                        {feat.videoSlotName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* ── 3. MASTER CAPABILITIES DIRECTORY SECTION (LIGHT THEME) ── */}
      <section id="master-capabilities" className="w-full bg-[#FAFAFC] text-slate-900 py-16 sm:py-24 relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 text-center max-w-2xl mx-auto"
          >
            <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
              // Master Feature Directory & Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950">
              Exhaustive Platform Architecture
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Every system, module, and integration pre-built into the AIShyp white-label logistics SaaS suite.
            </p>
          </motion.div>

          {/* Interactive GSAP Accordion Feature Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-2 pb-4"
          >
            <AccordionGallery height={500} gap={12} radius={20} duration={0.15} />
          </motion.div>

          {/* Carrier Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-base font-extrabold font-sans text-slate-950 flex items-center gap-2">
              <span className="text-[#D8331F]">⚡</span> 14+ Out-of-the-Box Carrier Integrations Matrix
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-md">
              <table className="w-full text-left text-xs text-slate-800">
                <thead className="bg-slate-50 text-slate-900 font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-5">Carrier Partner</th>
                    <th className="py-3 px-5">Integration Type</th>
                    <th className="py-3 px-5">Key Features Supported</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">Delhivery (B2C & B2B)</td>
                    <td className="py-3 px-5 text-emerald-700 font-mono text-[11px]">Direct API & Scraping</td>
                    <td className="py-3 px-5 text-slate-700">Real-time Booking, Tracking, Manifests, Weight Scraping</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">DTDC (API, Portal, EFR)</td>
                    <td className="py-3 px-5 text-sky-700 font-mono text-[11px]">Direct API & Crawler Portal</td>
                    <td className="py-3 px-5 text-slate-700">Surface/Air Booking, AWB Generation, Auto-Status Sync</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">Xpressbees</td>
                    <td className="py-3 px-5 text-amber-700 font-mono text-[11px]">Direct API & Scraping</td>
                    <td className="py-3 px-5 text-slate-700">COD/Prepaid Booking, Real-time Tracking, Automated Remittances</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">BlueDart</td>
                    <td className="py-3 px-5 text-purple-700 font-mono text-[11px]">Direct API Integration</td>
                    <td className="py-3 px-5 text-slate-700">Express Delivery Routing, Secure Pincode Serviceability</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">DP World</td>
                    <td className="py-3 px-5 text-teal-700 font-mono text-[11px]">Direct API Integration</td>
                    <td className="py-3 px-5 text-slate-700">B2B Cargo Shipments, Heavy Load Transport Booking</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">eKart</td>
                    <td className="py-3 px-5 text-rose-700 font-mono text-[11px]">Direct API Integration</td>
                    <td className="py-3 px-5 text-slate-700">Prepaid & COD shipping, Retail pickup scheduling</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">Trackon & CriticaLog</td>
                    <td className="py-3 px-5 text-indigo-700 font-mono text-[11px]">Direct API Integration</td>
                    <td className="py-3 px-5 text-slate-700">Regional coverage and specialized cold-chain logistics</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-950">Shipmozo (Aggregator)</td>
                    <td className="py-3 px-5 text-sky-700 font-mono text-[11px]">Aggregator API & Scraper</td>
                    <td className="py-3 px-5 text-slate-700">Rate Comparison, Weight Disputes, Scraped Status Updates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>



        </div>
      </section>

      {/* ── 4. SUMMARY CHECKLIST WITH STAGGERED FADE ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white text-slate-900 rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-md grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full">
              // Summary Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans leading-tight tracking-tight text-slate-950">
              All 10 Modules. <br />
              <span className="text-[#D8331F]">Ready in 24 Hours.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Stop stitching together multiple software subscriptions. AIShyp bundles every single capability into one white-label SaaS suite.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-[#D8331F] shadow-md hover:bg-[#FF8A6E] transition-all inline-block"
              >
                Launch Your Platform Today →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            {[
              "01. 100% White-Label & Custom Domain",
              "02. 14+ Courier Direct APIs (B2C & B2B)",
              "03. AI OCR Address & HSN Scanner (< 2s)",
              "04. Automated NDR Rescue (35% RTO Recovered)",
              "05. COD Remittance Audit & Prepaid Wallet",
              "06. Docket Weight Reconciliation & Auto-Charge",
              "07. Zone-Based Rate Engine & Least-Cost Routing",
              "08. 4x6 Thermal Labels, Invoices & Manifests",
              "09. Multi-Warehouse WMS & DP World Cargo",
              "10. Scheduled Email Reports & Enterprise MIS",
            ].map((check, i) => (
              <motion.div
                key={check}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2.5"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 border border-emerald-300">
                  ✓
                </span>
                <span className="text-slate-800 text-[11px] font-sans font-bold leading-tight">{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 5. CLOSING CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
            You Build the Logistics Brand. <br />
            <span className="text-[#FF8A6E]">We Power the Technology.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            Deploy your dedicated white-label shipping aggregator platform on your custom domain in under 24 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Schedule Aggregator Demo →
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}