"use client";

import React, { useState } from "react";

const DEFAULT_ITEMS = [
  {
    badge: "01. ARCHITECTURE",
    category: "1. Executive Platform Architecture & Multi-Tenancy",
    summary: "White-labeled multi-tenant SaaS architecture designed for e-commerce brands, logistics aggregators, and enterprise shippers.",
    points: [
      "White-Labeled SaaS Branding: Dedicated domain (e.g. ship.yourbrand.com), custom logos, favicons, corporate color schemes, and contact details.",
      "Multi-Carrier Consolidation: Unifies shipments, weight disputes, COD payouts, and NDRs from 14+ providers into a single dashboard.",
      "Automated Backend Scrapers: Scrapes statuses, weights, and remittances from courier portals without manual intervention.",
      "AI-Driven Operations: Optical character recognition (OCR) address extraction and automatic HSN commodity classification.",
      "Role-Based Access Control: Granular access permissions for Admins, Account Managers, and Operational Staff.",
      "Granular Role-Based Access Control: Super Admin, TenantAdmin, Owner, Executor, PickupBoy, and Viewer.",
    ],
    accentColor: "#D8331F",
  },
  {
    badge: "02. ANALYTICS",
    category: "2. Tenant Portal & Dynamic Analytics Dashboard",
    summary: "Real-time control center offering deep visibility into shipping volume, carrier health, and cash flows.",
    points: [
      "Real-Time Order Funnel: Tracks active orders across Created (draft), Pickup Scheduled, In Transit, NDR, Delivered, and RTO.",
      "Dynamic Date Range Picker: Seamless filtering across Today, Yesterday, Last 7 Days, Last 30 Days, Last 90 Days, or custom date ranges.",
      "COD Remittance Summary: Aggregates outstanding COD collected by couriers, processed payouts, next remittance dates, and historical cycles.",
      "Interactive Visual Analytics: Stacked bar charts for shipment volume trends and pie charts for courier partner distribution.",
      "Sub-Customer & Branch Filtering: Allows tenant admins to filter analytics across sub-accounts, merchant codes, or regional branches.",
    ],
    accentColor: "#0284C7",
  },
  {
    badge: "03. RATE ENGINE",
    category: "3. Out-of-the-Box Carrier Integrations & Rate Engine",
    summary: "Pre-integrated with 14+ courier services and heavy freight networks with smart least-cost routing.",
    points: [
      "Delhivery, DTDC, Xpressbees & BlueDart: Direct API & scraper integration for real-time booking, tracking, manifests, and weight scraping.",
      "DP World & eKart: Heavy B2B cargo transport booking and retail parcel pickup scheduling.",
      "Trackon, CriticaLog & Shipmozo: Regional coverage, cold-chain logistics, and aggregator API rate comparison.",
      "6-Zone Rate Engine: City, State, Metro, Regional, National, and Special (J&K / Northeast) pricing rules.",
      "Volumetric Weight Calculation: Compares dead physical weight against volumetric weight (L x W x H / Carrier Divisor).",
      "Real-Time Pincode Lookup: Verifies prepaid and COD serviceability across 29,000+ Indian pincodes in <120ms.",
    ],
    accentColor: "#D97706",
  },
  {
    badge: "04. AI & CHANNELS",
    category: "4. E-commerce Channels, AI Tools & Bulk Dispatch",
    summary: "Seamless channel synchronization and AI tools that automate shipping workflows.",
    points: [
      "Shopify & Channel Webhooks: Automatic order ingestion from storefronts and real-time AWB tracking pushback into Shopify.",
      "AI Address OCR Parser: Upload photo of handwritten/printed parcel label; AI converts it into Name, Phone, Address, City, State, Pincode in <2s.",
      "AI Commodity Classification: Auto-maps product descriptions to appropriate cargo categories and HSN/GST tax codes.",
      "Bulk Excel Dispatch: Import 5,000+ orders in a single click using custom Excel/CSV templates with automated error validation.",
      "Quick Order Clone: 1-click cloning of past orders for instant re-shipping of repeat customer orders.",
    ],
    accentColor: "#7C3AED",
  },
  {
    badge: "05. NDR RESCUE",
    category: "5. Automated NDR Rescue Panel",
    summary: "Real-time non-delivery resolution engine to recover failed orders and mitigate RTO shipping losses.",
    points: [
      "Real-Time NDR Ingestion: Pulls unsuccessful delivery logs from carrier APIs instantly upon failure (Customer unavailable, wrong address, door locked).",
      "Interactive Action Submission: Submit immediate instructions (Re-attempt delivery, Return to origin, Address/phone update, Hold at branch).",
      "Automated WhatsApp Buyer Workflows: Triggers interactive WhatsApp messages asking buyers to update address or confirm delivery slot.",
      "RTO Mitigation Engine: Recovers up to 35% of failed orders, saving merchants from paying double forward + return freight fees.",
      "Audit Trail & Log Timeline: Complete chronological record of NDR attempts, buyer responses, and carrier action confirmations.",
    ],
    accentColor: "#E11D48",
  },
  {
    badge: "06. WALLET & COD",
    category: "6. Financial Wallet, Billing & COD Remittance OS",
    summary: "Transparent financial management tracking shipping wallet transactions and cash-on-delivery payouts.",
    points: [
      "Prepaid Shipping Wallet: Digital wallet tracking balance, freight debits, COD adjustments, and weight dispute debits/credits.",
      "Razorpay Top-Up Gateway: Supports instant online wallet recharges via UPI, Credit/Debit cards, and NetBanking.",
      "COD Reconciliation Engine: Audits courier payout statements against delivered COD orders to eliminate missing cash.",
      "Automated Remittance Scrapers: Scrapes payout sheets from Delhivery, DTDC, and Xpressbees to verify T+1 daily payouts.",
      "Transparent Ledger Log: Complete transaction ledger with downloadable itemized GST tax invoices and accounting exports.",
    ],
    accentColor: "#059669",
  },
  {
    badge: "07. WEIGHT AUDIT",
    category: "7. Docket-Based Weight Dispute & Reconciliation",
    summary: "Streamlined weight auditing that eliminates overcharges through docket-level adjustments.",
    points: [
      "Docket-Level Weight Auditing: Admins input actual parcel weight directly against docket numbers when customer declared weight differs.",
      "No Photo Upload Required: Direct weight input against docket record simplifies admin workflow.",
      "Automated Wallet Adjustments: Automatically calculates weight variance and debits or credits customer wallet balance in real time.",
      "Audit Trail & Ledger Logs: Every weight adjustment and wallet debit/credit is logged transparently for merchant audit.",
    ],
    accentColor: "#4F46E5",
  },
  {
    badge: "08. DOCUMENTATION",
    category: "8. Dispatch Labels, Invoices & Documentation",
    summary: "Standardized, print-ready logistics documentation generated instantly for every shipment.",
    points: [
      "Multi-Format Label Generator: Thermal 4x6 inch labels, multi-label A4 grids, and carrier custom layouts (DTDC 3-inch, Delhivery) with barcodes.",
      "Itemized Packing Slips: Generates packing slips with product summaries, buyer instructions, and warehouse SKU bin locations.",
      "GST-Compliant Invoicing: Creates PDF tax invoices for both retail B2C orders and commercial B2B shipments with itemized tax breakdowns.",
      "Handover Manifests: Generates official pickup manifests detailing package counts with courier rider signature fields.",
    ],
    accentColor: "#0D9488",
  },
  {
    badge: "09. WMS & FREIGHT",
    category: "9. WMS, Inventory & Administrative Controls",
    summary: "Warehouse management and admin controls for multi-location operations.",
    points: [
      "Multi-Warehouse Management: Configure multiple pickup hubs, contact profiles, and facility return addresses.",
      "User-to-Warehouse Mapping: Assign staff or sub-accounts to specific warehouse hubs for localized dispatch control.",
      "Super-Admin Controls: Onboard new tenants, activate/deactivate panels, adjust credit limits, and set custom rate cards.",
    ],
    accentColor: "#DB2777",
  },
  {
    badge: "10. REPORTS",
    category: "10. Scheduled Reports & Enterprise MIS",
    summary: "Automated recurring reporting and operational data exports.",
    points: [
      "Scheduled Email Subscriptions: Automatically emails recurring daily or weekly Excel/CSV report sheets to auditors, owners, or account managers.",
      "Ad-Hoc Data Exports: 1-click manual exporting of manifest databases, order logs, wallet ledgers, and COD remittance reports.",
      "Comprehensive Audit Logs: Full visibility into user actions, order status transitions, and financial ledger balance changes.",
    ],
    accentColor: "#2563EB",
  },
];

export default function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  height = 520,
  gap = 10,
  radius = 20,
  trigger = "hover",
  className = "",
}) {
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const handleEnter = (i) => {
    if (trigger === "hover" && i !== active) {
      setActive(i);
    }
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row w-full max-w-full md:h-[520px] max-md:h-auto ${className}`}
      style={{ gap: `${gap}px` }}
      role="list"
      aria-label="Interactive platform feature directory"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const accent = item.accentColor || "#D8331F";

        return (
          <div
            key={i}
            className={`group relative block min-w-0 min-h-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isActive
                ? "bg-white border-slate-300 shadow-xl z-20 max-md:h-auto max-md:min-h-[340px]"
                : "bg-slate-100 border-slate-200/90 hover:bg-slate-200/70 shadow-xs z-10 max-md:h-[64px] max-md:min-h-[64px]"
            } max-md:!flex-grow-0 max-md:w-full`}
            style={{
              flexGrow: isActive ? 6 : 1,
              flexShrink: 1,
              flexBasis: "0%",
              willChange: "flex-grow",
            }}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={item.category}
          >
            {/* 1. EXPANDED ACTIVE CONTENT CARD */}
            <div
              className={`relative z-30 p-5 sm:p-7 h-full w-full flex flex-col justify-between overflow-y-auto bg-white text-slate-950 transition-opacity duration-200 ${
                isActive ? "opacity-100 pointer-events-auto block" : "opacity-0 pointer-events-none hidden md:flex"
              }`}
            >
              <div className="space-y-3.5">
                {/* Badge & Category Header */}
                <div className="space-y-1.5 border-b border-slate-200 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[10.5px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase border shadow-2xs"
                      style={{
                        color: accent,
                        backgroundColor: `color-mix(in srgb, ${accent} 12%, white)`,
                        borderColor: `color-mix(in srgb, ${accent} 35%, transparent)`,
                      }}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono font-extrabold text-slate-900">
                      Module 0{i + 1} / 10
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold font-sans text-slate-950 tracking-tight leading-snug">
                    {item.category}
                  </h3>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Bullet Points with Crisp Dark Text */}
                <ul className="space-y-2 text-xs text-slate-900 font-semibold pt-0.5">
                  {item.points?.map((pt, pIdx) => {
                    const [title, text] = pt.split(": ");
                    return (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 shadow-2xs"
                          style={{
                            color: accent,
                            backgroundColor: `color-mix(in srgb, ${accent} 15%, white)`,
                          }}
                        >
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          <strong className="text-slate-950 font-extrabold">{title}:</strong>{" "}
                          <span className="text-slate-800 font-medium">{text}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-200 text-[10.5px] font-mono font-extrabold text-slate-700 mt-4">
                <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  PRE-INTEGRATED MODULE
                </span>
                <span style={{ color: accent }} className="font-bold">
                  Instant Switch →
                </span>
              </div>
            </div>

            {/* 2. COLLAPSED INACTIVE VERTICAL/HORIZONTAL BAR */}
            <div
              className={`pointer-events-none absolute inset-0 z-10 p-4 flex flex-row items-center justify-between md:flex-col md:justify-between bg-slate-100/95 transition-opacity duration-200 ${
                !isActive ? "opacity-100" : "opacity-0 hidden md:flex"
              }`}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-4 w-1 md:h-6 md:w-1 rounded-full"
                  style={{
                    backgroundColor: accent,
                    boxShadow: `0 0 8px ${accent}`,
                  }}
                />
                <span className="text-[12px] font-mono font-extrabold text-slate-900">
                  0{i + 1}
                </span>
              </div>

              {/* Label: Horizontal on mobile, Rotated Vertical on desktop */}
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-950 whitespace-nowrap max-md:normal-case md:[writing-mode:vertical-rl] md:rotate-180">
                {item.badge}
              </span>

              <span className="text-xs font-mono font-bold text-slate-400 md:hidden">
                Tap to expand ↓
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
