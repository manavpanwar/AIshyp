"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingDown, DollarSign, Clock, ShieldCheck } from "lucide-react";

export default function SuccessStoriesRoiCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(5000);
  const [currentRtoRate, setCurrentRtoRate] = useState(24); // in %
  const [avgOrderValue, setAvgOrderValue] = useState(1200); // in INR

  // Benchmark calculations based on verified AI Shyp case study averages
  const results = useMemo(() => {
    const orders = Number(monthlyOrders);
    const rtoPct = Number(currentRtoRate) / 100;
    
    // Total RTO orders currently
    const currentRtoOrders = Math.round(orders * rtoPct);

    // AI Shyp average RTO drop is ~42%
    const rtoReductionFactor = 0.42;
    const ordersSaved = Math.round(currentRtoOrders * rtoReductionFactor);

    // Forward + reverse lost shipping freight per RTO order (avg ~ ₹140)
    const forwardReverseFreightCost = 140;
    const monthlyFreightSaved = ordersSaved * forwardReverseFreightCost;

    // Rescued revenue from orders delivered instead of returned
    const rescuedMerchandiseValue = Math.round(ordersSaved * avgOrderValue * 0.7);

    // Total monthly financial benefit
    const totalMonthlyBenefit = monthlyFreightSaved + rescuedMerchandiseValue;

    return {
      currentRtoOrders,
      ordersSaved,
      monthlyFreightSaved,
      totalMonthlyBenefit,
      newRtoRate: (currentRtoRate * (1 - rtoReductionFactor)).toFixed(1),
    };
  }, [monthlyOrders, currentRtoRate, avgOrderValue]);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8331F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF8A6E] bg-red-950/60 border border-red-800/60">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Estimate Your Shipping Savings with AI Shyp
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Based on benchmarks from our verified customer success stories across D2C, apparel, and electronics brands.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Benchmark: 42% Avg RTO Drop</span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slider 1: Monthly Shipments */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">Monthly Shipment Volume:</span>
                <span className="font-mono font-extrabold text-base text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                  {monthlyOrders.toLocaleString()} Orders / mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="w-full accent-[#D8331F] h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>500 orders</span>
                <span>25,000 orders</span>
                <span>50,000+ orders</span>
              </div>
            </div>

            {/* Slider 2: Current RTO % */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">Current Return-to-Origin (RTO) Rate:</span>
                <span className="font-mono font-extrabold text-base text-[#FF8A6E] bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                  {currentRtoRate}%
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="38"
                step="1"
                value={currentRtoRate}
                onChange={(e) => setCurrentRtoRate(Number(e.target.value))}
                className="w-full accent-[#D8331F] h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>8% (Low)</span>
                <span>20% (Industry Avg)</span>
                <span>38% (High COD)</span>
              </div>
            </div>

            {/* Slider 3: Average Order Value */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">Average Order Value (AOV):</span>
                <span className="font-mono font-extrabold text-base text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                  ₹{avgOrderValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="400"
                max="8000"
                step="100"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full accent-[#D8331F] h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>₹400</span>
                <span>₹4,000</span>
                <span>₹8,000+</span>
              </div>
            </div>

          </div>

          {/* Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800/90 shadow-xl space-y-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Estimated Monthly Operational Gain
            </span>

            {/* Giant Metric */}
            <div>
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-[#FF8A6E] tracking-tight block">
                ₹{results.monthlyFreightSaved.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Direct monthly reverse freight saved
              </span>
            </div>

            {/* Breakdown Chips */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                  RTO Rate Drop:
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  {currentRtoRate}% → {results.newRtoRate}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A6E]" />
                  RTO Orders Prevented:
                </span>
                <span className="font-mono font-bold text-white">
                  {results.ordersSaved.toLocaleString()} orders / mo
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  COD Settlement:
                </span>
                <span className="font-mono font-bold text-amber-400">
                  T+1 Day (vs T+14)
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <Link
              href="/contact"
              className="w-full bg-[#D8331F] hover:bg-[#FF8A6E] text-white py-3 px-4 rounded-2xl text-xs font-extrabold transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 group text-center cursor-pointer"
            >
              <span>Unlock These Results for Your Brand</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
