"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Helper for Indian numbering format (e.g. 14,85,200)
function formatINR(val) {
  return "₹" + Number(val).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNum(val) {
  return Number(val).toLocaleString("en-IN");
}

export default function ActualDashboardMockup({ brandName = "AIShyp" }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [progress, setProgress] = useState(0);

  // Smooth looping timer that slowly increases numbers over 18 seconds then loops seamlessly
  useEffect(() => {
    const CYCLE_MS = 18000; // 18 seconds per loop
    const INTERVAL_MS = 500;
    const step = INTERVAL_MS / CYCLE_MS;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        return next >= 1 ? 0 : next;
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // Compute live slowly increasing metrics based on progress (0 to 1)
  const createdCount = 1420 + Math.floor(progress * 160);
  const pickupSchedCount = 380 + Math.floor(progress * 65);
  const inTransitCount = 2850 + Math.floor(progress * 270);
  const ndrCount = 48 + Math.floor(progress * 6);
  const deliveredCount = 12480 + Math.floor(progress * 410);
  const rtoCount = 18 + Math.floor(progress * 4);

  const courierAssignedCount = 1390 + Math.floor(progress * 120);
  const courierTotalCount = 17196 + Math.floor(progress * 850);

  const remittanceGen = 1485200 + Math.floor(progress * 57600);
  const remittancePaid = 1240000 + Math.floor(progress * 48500);
  const dueToday = 185000 + Math.floor(progress * 9300);
  const dueNext = 60200 + Math.floor(progress * 1800);

  // Dynamic bar heights for the dispatch volume chart
  const bar1Height = `${Math.min(95, 38 + progress * 12)}%`;
  const bar2Height = `${Math.min(95, 68 + progress * 10)}%`;
  const bar3Height = `${Math.min(95, 82 + progress * 10)}%`;
  const bar4Height = `${Math.min(95, 92 + progress * 6)}%`;

  return (
    <div className="w-full bg-[#F4F7FC] rounded-2xl border border-slate-300/90 shadow-2xl overflow-hidden font-sans text-slate-800 text-[10px] leading-tight select-none">
      
      {/* ── TOP BROWSER TITLE BAR ── */}
      <div className="bg-slate-900 text-slate-400 px-3.5 py-2 flex items-center justify-between font-mono text-[9px] border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
        </div>
        
        {/* Custom Domain URL Pill */}
        <div className="bg-slate-950 px-3 py-1 rounded-md border border-slate-800 text-emerald-400 font-bold flex items-center gap-2 truncate max-w-[280px] shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate tracking-tight">https://express.{brandName.toLowerCase().replace(/\s+/g, "")}.com/dashboard</span>
        </div>

        {/* Live sync & White-label indicator */}
        <div className="flex items-center gap-2">
          <span className="text-[8px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-1.5 py-0.5 rounded font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE
          </span>
          <span className="text-[8.5px] text-slate-400 font-bold hidden sm:inline">100% White-Label</span>
        </div>
      </div>

      {/* ── MAIN DASHBOARD INTERFACE CONTAINER ── */}
      <div className="grid grid-cols-12 overflow-hidden">
        
        {/* ── LEFT SIDEBAR ── */}
        <div className="col-span-3 bg-white border-r border-slate-200 p-2 sm:p-2.5 flex flex-col justify-between space-y-2 overflow-hidden">
          <div className="space-y-2.5 overflow-hidden">
            
            {/* Logo */}
            <div className="px-1 py-1 flex items-center gap-2 border-b border-slate-100 pb-2">
              <div className="relative h-4.5 w-16 sm:w-20">
                <Image
                  src="/AIship1.png"
                  alt="Logo"
                  fill
                  sizes="80px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Sidebar Menu Items */}
            <nav className="space-y-0.5 font-semibold text-slate-700 text-[9.5px] sm:text-[10px] overflow-hidden">
              
              {/* Dashboard */}
              <button
                type="button"
                onClick={() => setActiveTab("Dashboard")}
                className={`w-full flex items-center gap-1.5 px-2 py-1.2 rounded-md text-left transition-all truncate ${
                  activeTab === "Dashboard"
                    ? "bg-[#2563EB] text-white font-bold shadow-xs"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="shrink-0 text-[11px]">📊</span>
                <span className="truncate">Dashboard</span>
              </button>

              {/* Orders */}
              <button
                type="button"
                onClick={() => setActiveTab("Orders")}
                className={`w-full flex items-center gap-1.5 px-2 py-1.2 rounded-md text-left transition-all truncate ${
                  activeTab === "Orders"
                    ? "bg-[#2563EB] text-white font-bold shadow-xs"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="shrink-0 text-[11px]">🛒</span>
                <span className="truncate">Orders</span>
              </button>

              {/* NDR */}
              <button
                type="button"
                className="w-full flex items-center gap-1.5 px-2 py-1.2 rounded-md text-left hover:bg-slate-100 text-slate-700 truncate transition-colors"
              >
                <span className="shrink-0 text-[11px]">🚚</span>
                <span className="truncate">NDR</span>
              </button>

              {/* Billing */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">💵</span>
                  <span className="truncate">Billing</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Tools */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">🔧</span>
                  <span className="truncate">Tools</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Report */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">📋</span>
                  <span className="truncate">Report</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Setting */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">⚙️</span>
                  <span className="truncate">Setting</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Warehouses */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">🏭</span>
                  <span className="truncate">Warehouses</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Admin */}
              <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="shrink-0 text-[11px]">🛡️</span>
                  <span className="truncate">Admin</span>
                </div>
                <span className="text-[8px] text-slate-400 shrink-0">▾</span>
              </div>

              {/* Customers */}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-slate-100 text-slate-700 cursor-pointer truncate transition-colors">
                <span className="shrink-0 text-[11px]">👥</span>
                <span className="truncate">Customers</span>
              </div>
            </nav>
          </div>

          {/* Support Desk Footer */}
          <div className="pt-1.5 border-t border-slate-100 text-[7.5px] text-slate-400 space-y-0.5 px-1 truncate">
            <p className="font-bold text-slate-600 truncate">Support Desk</p>
            <p className="truncate text-slate-500">support@{brandName.toLowerCase().replace(/\s+/g, "")}.com</p>
          </div>
        </div>

        {/* ── RIGHT MAIN DASHBOARD CONTENT AREA ── */}
        <div className="col-span-9 p-2.5 sm:p-3 space-y-2.5 overflow-hidden">
          
          {/* Top Header Controls Bar */}
          <div className="flex items-center justify-between gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
            
            {/* Search Input Box */}
            <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 text-[9px] w-36 sm:w-48 truncate">
              <span className="font-bold text-slate-500 shrink-0">AWB ▾</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400 truncate">Search AWB Number...</span>
            </div>

            {/* Date Filter & Actions */}
            <div className="flex items-center gap-1 font-mono text-[8.5px]">
              <div className="bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 text-slate-700 flex items-center gap-1 font-bold truncate">
                <span>📅</span>
                <span className="truncate">22 Jul - 28 Jul</span>
              </div>

              <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                <span>⚡</span>
                <span className="hidden sm:inline">Actions</span>
              </button>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                <span>🎧</span>
                <span className="hidden sm:inline">Tickets</span>
              </button>
            </div>
          </div>

          {/* Metric Status Cards Row (Animated slowly increasing & looping numbers) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 font-mono text-[8.5px]">
            
            {/* CREATED */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">CREATED</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-slate-900 font-sans tabular-nums transition-all">
                  {formatNum(createdCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-blue-500 shrink-0" />
              </div>
            </div>

            {/* PICKUP SCHEDULED */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-indigo-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">PICKUP SCHED</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-slate-900 font-sans tabular-nums transition-all">
                  {formatNum(pickupSchedCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-indigo-500 shrink-0" />
              </div>
            </div>

            {/* IN TRANSIT */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-sky-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">IN TRANSIT</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-slate-900 font-sans tabular-nums transition-all">
                  {formatNum(inTransitCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-sky-400 shrink-0" />
              </div>
            </div>

            {/* NDR */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-amber-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">NDR</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-amber-600 font-sans tabular-nums transition-all">
                  {formatNum(ndrCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-amber-500 shrink-0" />
              </div>
            </div>

            {/* DELIVERED */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-emerald-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">DELIVERED</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-emerald-600 font-sans tabular-nums transition-all">
                  {formatNum(deliveredCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-emerald-500 shrink-0" />
              </div>
            </div>

            {/* RTO */}
            <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-red-300 transition-all">
              <span className="text-[7px] font-bold text-slate-400 uppercase truncate block">RTO</span>
              <div className="flex justify-between items-end">
                <span className="text-[12px] font-extrabold text-red-600 font-sans tabular-nums transition-all">
                  {formatNum(rtoCount)}
                </span>
                <span className="w-3.5 h-1 rounded bg-red-500 shrink-0" />
              </div>
            </div>

          </div>

          {/* Middle Analytics Section: Dispatch Volume + Courier Distribution */}
          <div className="grid lg:grid-cols-12 gap-2">
            
            {/* Left: Dispatch Volume Bar Chart */}
            <div className="lg:col-span-8 bg-white p-2.5 rounded-xl border border-slate-200/90 shadow-2xs space-y-1.5">
              <div className="flex justify-between items-center">
                <h4 className="font-extrabold text-slate-900 text-[10px] font-sans">Dispatch Volume</h4>
                <span className="text-[7.5px] text-slate-400 font-mono">Selected Period</span>
              </div>

              {/* Status Tags Pill Row with Live Numbers */}
              <div className="flex flex-wrap gap-1 text-[7.5px] font-mono">
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-semibold tabular-nums">
                  created {formatNum(createdCount)}
                </span>
                <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold tabular-nums">
                  courierAssigned {formatNum(courierAssignedCount)}
                </span>
                <span className="bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded font-semibold tabular-nums">
                  pickupScheduled {formatNum(pickupSchedCount)}
                </span>
                <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-semibold tabular-nums">
                  inTransit {formatNum(inTransitCount)}
                </span>
              </div>

              {/* Dynamic Bar Chart with Animated Heights */}
              <div className="h-16 flex items-end justify-between gap-2 pt-2 border-b border-slate-100 font-mono text-[7.5px] text-slate-400">
                <div className="w-full bg-slate-100 rounded-t h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: bar1Height }}
                    className="w-full bg-[#2563EB] rounded-t transition-all duration-300"
                  />
                </div>
                <div className="w-full bg-slate-100 rounded-t h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: bar2Height }}
                    className="w-full bg-emerald-500 rounded-t transition-all duration-300"
                  />
                </div>
                <div className="w-full bg-slate-100 rounded-t h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: bar3Height }}
                    className="w-full bg-sky-400 rounded-t transition-all duration-300"
                  />
                </div>
                <div className="w-full bg-slate-100 rounded-t h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: bar4Height }}
                    className="w-full bg-[#D8331F] rounded-t transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex justify-between text-[7.5px] font-mono text-slate-400 px-0.5">
                <span>24 Jul</span>
                <span>26 Jul</span>
                <span>28 Jul</span>
                <span>Today</span>
              </div>
            </div>

            {/* Right: Courier Distribution Donut Mockup */}
            <div className="lg:col-span-4 bg-white p-2.5 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-1.5">
              <div>
                <h4 className="font-extrabold text-slate-900 text-[10px] font-sans">Courier Distribution</h4>
                <p className="text-[7.5px] text-slate-400 font-mono">Split by partner</p>
              </div>

              {/* Donut Chart Ring with Live Total */}
              <div className="flex items-center justify-center py-1">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center font-mono text-center p-1.5 shadow-inner"
                     style={{
                       background: "conic-gradient(#2563EB 0% 42%, #10B981 42% 77%, #F59E0B 77% 100%)",
                     }}
                >
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center shadow-xs">
                    <p className="text-[10px] font-extrabold text-slate-900 tabular-nums">
                      {formatNum(courierTotalCount)}
                    </p>
                    <p className="text-[6px] font-bold text-slate-400 uppercase tracking-tighter">Total</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[7.5px] font-mono text-slate-600 border-t border-slate-100 pt-1 font-semibold">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  Delhivery 42%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Bluedart 35%
                </span>
              </div>
            </div>

          </div>

          {/* Finance Remittance Metrics Row (Live INR values) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 text-[10px] font-sans">Finance Remittance Metrics</h4>
              <span className="text-[7.5px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Settlements
              </span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 font-mono text-[8px]">
              
              <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs truncate hover:border-slate-300 transition-all">
                <p className="text-[6.5px] font-bold text-slate-400 uppercase truncate">REMITTANCE GENERATED</p>
                <p className="text-[10.5px] font-extrabold text-slate-900 font-sans truncate mt-0.5 tabular-nums">
                  {formatINR(remittanceGen)}
                </p>
              </div>

              <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs truncate hover:border-emerald-300 transition-all">
                <p className="text-[6.5px] font-bold text-slate-400 uppercase truncate">REMITTANCE PAID</p>
                <p className="text-[10.5px] font-extrabold text-emerald-600 font-sans truncate mt-0.5 tabular-nums">
                  {formatINR(remittancePaid)}
                </p>
              </div>

              <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs truncate hover:border-amber-300 transition-all">
                <p className="text-[6.5px] font-bold text-slate-400 uppercase truncate">DUE TODAY</p>
                <p className="text-[10.5px] font-extrabold text-amber-600 font-sans truncate mt-0.5 tabular-nums">
                  {formatINR(dueToday)}
                </p>
              </div>

              <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs truncate hover:border-purple-300 transition-all">
                <p className="text-[6.5px] font-bold text-slate-400 uppercase truncate">DUE NEXT</p>
                <p className="text-[10.5px] font-extrabold text-purple-600 font-sans truncate mt-0.5 tabular-nums">
                  {formatINR(dueNext)}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
