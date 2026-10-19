"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Camera,
  ScanBarcode,
  Layers,
  Truck,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,

} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Customer Booking",
    tagline: "Receive or create shipment bookings",
    description:
      "Receive or create shipment bookings through the supported Aishyp workflow.",
    icon: UserPlus,
    color: "from-red-600 to-red-600",
    bgPill: "bg-red-50 text-blue-700 border-blue-200",
    details: [
      "Counter walk-in customer entry",
      "Auto-fill repeat sender & receiver profiles",
      "Select courier carrier & delivery speed",
    ],
    sampleOutput: {
      label: "Order Created",
      value: "ORD-2026-90412",
      badge: "Pending Verification",
    },
  },
  {
    step: "02",
    title: "Address Capture",
    tagline: "Vision OCR from label image",
    description:
      "Capture address details from an image and review the extracted information.",
    icon: Camera,
    color: "from-indigo-600 to-violet-600",
    bgPill: "bg-indigo-50 text-indigo-700 border-indigo-200",
    details: [
      "Snap parcel shipping label with phone",
      "Instant OCR parses recipient name & street",
      "Pincode auto-validated against carrier network",
    ],
    sampleOutput: {
      label: "Address Extracted",
      value: "Mumbai, MH 400069",
      badge: "Verified Pincode",
    },
  },
  {
    step: "03",
    title: "Docket Scanning",
    tagline: "Mobile camera barcode verification",
    description:
      "Use the mobile app camera to scan supported docket barcodes and verify shipment information.",
    icon: ScanBarcode,
    color: "from-amber-600 to-orange-600",
    bgPill: "bg-amber-50 text-amber-700 border-amber-200",
    details: [
      "Align camera with pre-printed docket barcode",
      "Sub-second verification against order data",
      "Audible beep confirms successful scan",
    ],
    sampleOutput: {
      label: "Barcode Matched",
      value: "AWB-DEL-98421038",
      badge: "Docket Linked",
    },
  },
  {
    step: "04",
    title: "Shipment Processing",
    tagline: "Update records across web & mobile",
    description:
      "Review shipment details and update records through the web or mobile application.",
    icon: Layers,
    color: "from-teal-600 to-emerald-600",
    bgPill: "bg-teal-50 text-teal-700 border-teal-200",
    details: [
      "Cross-check dead weight vs volumetric weight",
      "Auto-calculate final freight tariff & margins",
      "Print standardized thermal bag tag or slip",
    ],
    sampleOutput: {
      label: "Consignment Status",
      value: "Processed & Bagged",
      badge: "1.45 kg Verified",
    },
  },
  {
    step: "05",
    title: "Pickup Coordination",
    tagline: "Organize requests & assign staff",
    description:
      "Organize pickup requests and coordinate assigned activities with the relevant team.",
    icon: Truck,
    color: "from-blue-600 to-sky-600",
    bgPill: "bg-sky-50 text-sky-700 border-sky-200",
    details: [
      "Assign scheduled pickups to field riders",
      "Mobile rider app displays pickup route & stops",
      "Digital OTP confirmation upon parcel handover",
    ],
    sampleOutput: {
      label: "Rider Assignment",
      value: "Assigned to Manoj K. (Zone 2)",
      badge: "En Route",
    },
  },
  {
    step: "06",
    title: "Dispatch and Tracking",
    tagline: "Process dispatches & live tracking",
    description:
      "Process shipments for dispatch and access available shipment status and tracking updates.",
    icon: Compass,
    color: "from-emerald-600 to-green-600",
    bgPill: "bg-emerald-50 text-emerald-700 border-emerald-200",
    details: [
      "Generate unified carrier manifest sheet",
      "Handover bags to mainline courier linehauls",
      "Real-time milestone tracking for franchise & customer",
    ],
    sampleOutput: {
      label: "Dispatch Ready",
      value: "Manifest MAN-9412 Generated",
      badge: "In Transit",
    },
  },
];

export default function WorkflowSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAFAFC] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Operational Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            A Simpler Workflow for Your Entire Team
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            From customer walk-in bookings to linehaul dispatch, experience an integrated, error-free operational flow that keeps counter staff and field runners completely aligned.
          </p>
        </div>

        {/* ── DESKTOP HORIZONTAL TIMELINE (Visible on lg screens) ── */}
        <div className="hidden lg:block mb-12">
          {/* Connecting Line Container */}
          <div className="relative">
            {/* Background Line */}
            <div className="absolute top-7 left-12 right-12 h-1 bg-slate-200 -z-0" />
            {/* Active Highlight Line */}
            <div
              className="absolute top-7 left-12 h-1 bg-gradient-to-r from-red-600 bg-[#D8331F] transition-all duration-500 -z-0"
              style={{
                width: `${(activeStepIndex / (WORKFLOW_STEPS.length - 1)) * 100}%`,
              }}
            />

            {/* Steps Row */}
            <div className="grid grid-cols-6 gap-3 relative z-10">
              {WORKFLOW_STEPS.map((s, idx) => {
                const Icon = s.icon;
                const isCurrent = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-hidden"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 shadow-md ${
                        isCurrent
                          ? "bg-blue-600 text-white ring-4 ring-blue-100 scale-110"
                          : isPassed
                          ? "bg-emerald-600 text-white"
                          : "bg-white border-2 border-slate-300 text-slate-500 group-hover:border-blue-400 group-hover:text-blue-600"
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>

                    {/* Step label */}
                    <div className="mt-3 space-y-0.5">
                      <span className="font-mono text-[11px] font-extrabold text-blue-600 uppercase">
                        Step {s.step}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {s.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── ACTIVE STEP DETAIL SHOWCASE (Interactive Card) ── */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  STEP {currentStep.step} OF 06
                </span>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${currentStep.bgPill}`}>
                  {currentStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-slate-600 text-base font-normal leading-relaxed">
                {currentStep.description}
              </p>

              {/* Bullet Points */}
              <div className="pt-2 space-y-2.5">
                {currentStep.details.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Quick Navigation Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={activeStepIndex === WORKFLOW_STEPS.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))
                  }
                  className="px-4 py-2 cursor-pointer rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Illustrative Simulation Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-300">
                      Live Workflow Simulator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    {currentStep.sampleOutput.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] text-slate-400 font-medium">
                    {currentStep.sampleOutput.label}:
                  </div>
                  <div className="text-lg font-mono font-bold text-emerald-300 tracking-tight">
                    {currentStep.sampleOutput.value}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Franchise Node:</span>
                    <span className="text-slate-200 font-mono">BOM-HUB-01</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Application Sync:</span>
                    <span className="text-emerald-400 font-semibold">Web &amp; Mobile Realtime</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Audit Logged:</span>
                    <span className="text-slate-200 font-mono">Timestamped</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono text-center">
                  Demonstration UI — Illustrative Workflow
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── MOBILE VERTICAL TIMELINE (Visible on mobile/tablet) ── */}
        <div className="lg:hidden space-y-6">
          <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8">
            {WORKFLOW_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    {s.step}
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                        Step {s.step}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
