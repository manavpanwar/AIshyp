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
    <section className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column (5 cols): Business Profit Opportunity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-4"
        >
          <div>
            <p className="text-[11px] font-mono font-bold tracking-widest text-[#D8331F] uppercase mb-0.5">
              // Franchise Financial OS
            </p>
            <h2 className="font-sans font-extrabold text-slate-900 text-2xl sm:text-3xl leading-tight">
              Calculate Your <span className="text-[#D8331F]">Profit Potential</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
              Unlike traditional courier aggregator platforms that take 20%-40% revenue splits, AIShyp lets you keep 100% of your gross margins with ZERO commission fees.
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs pt-1">
            <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center shrink-0 text-xs">✓</span>
              <div>
                <p className="text-slate-900 font-bold font-sans text-xs">0% Revenue Share</p>
                <p className="text-slate-500 font-sans text-[11px]">Keep every single rupee of profit you generate.</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center shrink-0 text-xs">✓</span>
              <div>
                <p className="text-slate-900 font-bold font-sans text-xs">Direct Carrier Invoicing</p>
                <p className="text-slate-500 font-sans text-[11px]">Direct billing with Delhivery, Bluedart & DTDC.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Interactive Calculator Studio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 bg-slate-50 border border-slate-200/90 p-4 sm:p-6 rounded-2xl shadow-xl space-y-4 sm:space-y-5 border-t-4 border-t-[#D8331F]"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] animate-pulse" />
              <span className="text-[11px] font-bold text-slate-800 uppercase">
                Interactive Aggregator Profit Simulator
              </span>
            </div>
            <span className="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
              100% Margins
            </span>
          </div>

          {/* Slider 1: Monthly Shipments */}
          <div className="space-y-1.5 font-mono">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 font-bold">Monthly Network Orders:</span>
              <span className="text-slate-900 font-extrabold text-xs bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
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
              className="w-full accent-[#D8331F] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
            />
          </div>

          {/* Slider 2: Average Markup per Order */}
          <div className="space-y-1.5 font-mono">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 font-bold">Your Set Margin Markup per Parcel:</span>
              <span className="text-[#D8331F] font-extrabold text-xs bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
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
              className="w-full accent-[#D8331F] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
            />
          </div>

          {/* Calculated Output Display Cards */}
          <div className="grid sm:grid-cols-2 gap-3 font-mono">
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
              <p className="text-[9px] text-slate-400 font-bold uppercase">Estimated Monthly Profit</p>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                ₹{monthlyProfit.toLocaleString()}
              </p>
              <p className="text-[10px] text-emerald-600 font-bold pt-0.5">
                ✓ Retained 100% By You
              </p>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
              <p className="text-[9px] text-slate-400 font-bold uppercase">Estimated Annual Revenue</p>
              <p className="text-xl sm:text-2xl font-extrabold text-[#D8331F] font-sans">
                ₹{annualProfit.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-500 font-medium pt-0.5">
                Zero Revenue Share Paid
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-1 text-center">
            <Link
              href="/contact"
              className="w-full bg-[#D8331F] text-white rounded-full py-2.5 text-xs font-extrabold shadow-md hover:bg-[#FF8A6E] transition-colors inline-block"
            >
              Start Generating Franchise Profit →
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
