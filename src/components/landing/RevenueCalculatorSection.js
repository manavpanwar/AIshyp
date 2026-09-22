"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RevenueCalculatorSection() {
  const [monthlyShipments, setMonthlyShipments] = useState(5000);
  const [markupPerShipment, setMarkupPerShipment] = useState(25);

  const monthlyProfit = monthlyShipments * markupPerShipment;
  const annualProfit = monthlyProfit * 12;

  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (5 cols): Business Profit Opportunity */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F]  text-xs font-bold shadow-2xs">
              <span>✨</span>
              <span className="uppercase tracking-wider">Franchise Financial OS</span>
            </div>
            <h2 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-4xl leading-tight tracking-tight">
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#D8331F] bg-clip-text text-transparent">
                Profit Potential
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Unlike traditional courier aggregator platforms that take 20%-40% revenue splits, AIShyp lets you keep 100% of your gross margins with <strong className="font-bold text-slate-900">ZERO commission fees</strong>.
            </p>
          </div>

          <div className="space-y-3  text-xs pt-1">
            <div className="flex items-center gap-3 bg-slate-50/80 hover:bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs transition-all">
              <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center shrink-0 text-xs">
                ✓
              </span>
              <div>
                <p className="text-slate-900 font-bold font-sans text-xs sm:text-sm">0% Revenue Share</p>
                <p className="text-slate-500 font-sans text-xs">Keep every single rupee of profit you generate.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50/80 hover:bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs transition-all">
              <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center shrink-0 text-xs">
                ✓
              </span>
              <div>
                <p className="text-slate-900 font-bold font-sans text-xs sm:text-sm">Direct Carrier Invoicing</p>
                <p className="text-slate-500 font-sans text-xs">Direct billing with Delhivery, Bluedart & DTDC.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Interactive Calculator Studio */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 ">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] animate-pulse" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Interactive Profit Simulator
              </span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
              100% Margins
            </span>
          </div>

          {/* Slider 1: Monthly Shipments */}
          <div className="space-y-2 ">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 font-bold">Monthly Network Orders:</span>
              <span className="text-slate-900 font-extrabold text-xs bg-slate-50 px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                {monthlyShipments.toLocaleString()} Orders / Mo
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyShipments}
              onChange={(e) => setMonthlyShipments(parseInt(e.target.value))}
              className="w-full accent-[#D8331F] cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
          </div>

          {/* Slider 2: Average Markup per Order */}
          <div className="space-y-2 ">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 font-bold">Your Set Margin Markup per Parcel:</span>
              <span className="text-[#D8331F] font-extrabold text-xs bg-red-50/60 px-3 py-1 rounded-lg border border-red-200 shadow-2xs">
                +₹{markupPerShipment} / Parcel
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={markupPerShipment}
              onChange={(e) => setMarkupPerShipment(parseInt(e.target.value))}
              className="w-full accent-[#D8331F] cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
          </div>

          {/* Calculated Output Display Cards */}
          <div className="grid sm:grid-cols-2 gap-4 ">
            <div className="bg-emerald-50/40 p-4 sm:p-5 rounded-2xl border border-emerald-200/70 space-y-1">
              <p className="text-[10px] text-emerald-800/70 font-bold uppercase tracking-wider">Estimated Monthly Profit</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans">
                ₹{monthlyProfit.toLocaleString()}
              </p>
              <p className="text-[11px] text-emerald-700 font-bold pt-0.5">
                ✓ Retained 100% By You
              </p>
            </div>

            <div className="bg-red-50/30 p-4 sm:p-5 rounded-2xl border border-red-200/70 space-y-1">
              <p className="text-[10px] text-red-800/70 font-bold uppercase tracking-wider">Estimated Annual Revenue</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D8331F] font-sans">
                ₹{annualProfit.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-500 font-normal pt-0.5">
                Zero Revenue Share Paid
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-1 text-center">
            <Link
              href="/contact"
              className="w-full bg-[#D8331F] hover:bg-[#c02816] text-white rounded-full py-3.5 text-xs sm:text-sm font-extrabold shadow-[0_6px_20px_rgba(216,51,31,0.3)] hover:shadow-[0_8px_25px_rgba(216,51,31,0.4)] transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Start Generating Franchise Profit</span>
              <span>→</span>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

