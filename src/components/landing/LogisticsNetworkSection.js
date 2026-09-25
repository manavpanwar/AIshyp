"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../reactbits/CountUp";

const HUBS = [
  {
    id: "delhi",
    name: "Delhi / NCR Hub",
    zone: "Zone A - North Region",
    lat: "28.61° N",
    lng: "77.21° E",
    latency: "12ms",
    activeOrders: 14280,
    couriers: [
      { name: "Delhivery Surface", logo: "/delhivery.png", status: "API Active", margin: "+28% Markup", speed: "Same-Day Pick", sla: "99.1%", rto: "1.6%" },
      { name: "Bluedart Air Express", logo: "/bluedart.png", status: "API Active", margin: "+35% Markup", speed: "Next-Day Air", sla: "99.7%", rto: "1.2%" },
      { name: "DTDC Premium", logo: "/dtdc.png", status: "API Active", margin: "+24% Markup", speed: "Standard Surface", sla: "98.4%", rto: "2.1%" },
      { name: "xpressbees Surface", logo: "/xpressbees.png", status: "API Active", margin: "+26% Markup", speed: "Standard Surface", sla: "98.9%", rto: "1.7%" },

    ],
  },
  {
    id: "mumbai",
    name: "Mumbai West Hub",
    zone: "Zone B - West Region",
    lat: "19.07° N",
    lng: "72.87° E",
    latency: "14ms",
    activeOrders: 18920,
    couriers: [
      { name: "Bluedart Air", logo: "/bluedart.png", status: "API Active", margin: "+32% Markup", speed: "Priority Air", sla: "99.8%", rto: "1.1%" },
      { name: "Delhivery Surface", logo: "/delhivery.png", status: "API Active", margin: "+26% Markup", speed: "Regional Surface", sla: "98.9%", rto: "1.7%" },
      { name: "Shadowfax Express", logo: "/shadowfax.png", status: "API Active", margin: "+20% Markup", speed: "Hyperlocal 2hr", sla: "97.8%", rto: "2.4%" },
    ],
  },
  {
    id: "bengaluru",
    name: "Bengaluru South Hub",
    zone: "Zone C - South Region",
    lat: "12.97° N",
    lng: "77.59° E",
    latency: "11ms",
    activeOrders: 16400,
    couriers: [
      { name: "Ekart Express", logo: "/ekart.png", status: "API Active", margin: "+25% Markup", speed: "Pan-India Surface", sla: "98.6%", rto: "1.9%" },
      { name: "Xpressbees Direct", logo: "/xpressbees.png", status: "API Active", margin: "+22% Markup", speed: "Standard Air", sla: "98.2%", rto: "2.0%" },
      { name: "Trackon Premium", logo: "/trackon_logo.png", status: "API Active", margin: "+18% Markup", speed: "Heavy Surface", sla: "97.5%", rto: "2.5%" },
    ],
  },
  {
    id: "kolkata",
    name: "Kolkata East Hub",
    zone: "Zone D - East Region",
    lat: "22.57° N",
    lng: "88.36° E",
    latency: "18ms",
    activeOrders: 9850,
    couriers: [
      { name: "DTDC Express", logo: "/dtdc.png", status: "API Active", margin: "+24% Markup", speed: "Air Cargo", sla: "98.1%", rto: "2.2%" },
      { name: "Delhivery Air", logo: "/delhivery.png", status: "API Active", margin: "+30% Markup", speed: "Priority Air", sla: "99.3%", rto: "1.5%" },
    ],
  },
  {
    id: "chennai",
    name: "Chennai Port Hub",
    zone: "Zone E - South Coast",
    lat: "13.08° N",
    lng: "80.27° E",
    latency: "15ms",
    activeOrders: 11200,
    couriers: [
      { name: "Bluedart Air", logo: "/bluedart.png", status: "API Active", margin: "+34% Markup", speed: "Express Air", sla: "99.6%", rto: "1.3%" },
      { name: "DP World Freight", logo: "/dpworldlogo.png", status: "API Active", margin: "+28% Markup", speed: "B2B Heavy", sla: "98.8%", rto: "1.8%" },
    ],
  },
  {
    id: "hyderabad",
    name: "Hyderabad Central Hub",
    zone: "Zone F - Central Region",
    lat: "17.38° N",
    lng: "78.48° E",
    latency: "13ms",
    activeOrders: 13540,
    couriers: [
      { name: "Delhivery Direct", logo: "/delhivery.png", status: "API Active", margin: "+25% Markup", speed: "Surface 5 CFT", sla: "98.7%", rto: "1.7%" },
      { name: "Trackon Air", logo: "/trackon_logo.png", status: "API Active", margin: "+20% Markup", speed: "Next Flight Out", sla: "98.0%", rto: "2.3%" },
    ],
  },
];

const DISPATCH_FEED = [
  { awb: "AWB #894120", route: "Delhi ➔ Mumbai", courier: "Delhivery Surface", logo: "/delhivery.png", status: "In Transit 🚛", progress: 65, eta: "Today 4 PM" },
  { awb: "AWB #894121", route: "Bengaluru ➔ Hyderabad", courier: "Bluedart Air", logo: "/bluedart.png", status: "Out for Delivery 📦", progress: 90, eta: "In 30 mins" },
  { awb: "AWB #894122", route: "Kolkata ➔ Chennai", courier: "DTDC Express", logo: "/dtdc.png", status: "Flight Departed ✈️", progress: 45, eta: "Tomorrow 11 AM" },
  { awb: "AWB #894123", route: "Pune ➔ Ahmedabad", courier: "Xpressbees Direct", logo: "/xpressbees.png", status: "Pickup Completed ✅", progress: 20, eta: "In 2 Days" },
];

export default function LogisticsNetworkSection() {
  const [selectedHub, setSelectedHub] = useState(HUBS[0]);
  const [activeTab, setActiveTab] = useState("matrix");

  return (
    <section className="relative w-full py-8 sm:py-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

        {/* Left Column (5 cols): Title, Subtitle, Hub Pills & 4 Equal Feature Badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div>
              <p className="text-[11px] font-mono font-bold tracking-widest text-[#D8331F] uppercase mb-1">
                // Pan-India Coverage & Network
              </p>
              <h2 className="font-sans font-extrabold text-slate-900 text-2xl sm:text-3xl leading-tight">
                Manage Your Pan-India <span className="text-[#D8331F]">Logistics Network</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
                Select any regional logistics hub to inspect carrier API connectivity, live order volume, SLA success ratios, and custom profit margin markups.
              </p>
            </div>

            {/* Hub Selector Buttons */}
            <div>
              <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                Select Logistics Hub:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {HUBS.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${selectedHub.id === hub.id
                        ? "bg-[#D8331F] text-white border-[#D8331F] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-[#D8331F] hover:text-[#D8331F]"
                      }`}
                  >
                    {hub.name.split(" ")[0]} Hub
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Coverage</p>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 font-sans">29,000+ Pincodes</p>
              <p className="text-[10.5px] text-slate-500 font-medium">Pan-India Reach</p>
            </div>
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Latency</p>
              <p className="text-sm sm:text-base font-extrabold text-emerald-600 mt-0.5 font-sans">&lt; 14ms API</p>
              <p className="text-[10.5px] text-slate-500 font-medium">Real-Time Routing</p>
            </div>
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Profit</p>
              <p className="text-sm sm:text-base font-extrabold text-[#D8331F] mt-0.5 font-sans">100% Margins</p>
              <p className="text-[10.5px] text-slate-500 font-medium">0% Revenue Share</p>
            </div>
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-2xs">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">RTO Protection</p>
              <p className="text-sm sm:text-base font-extrabold text-sky-600 mt-0.5 font-sans">42% Lower RTO</p>
              <p className="text-[10.5px] text-slate-500 font-medium">WhatsApp Engine</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Clean, Perfectly Formatted Unified Enterprise Command Suite */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-lg space-y-4 flex flex-col justify-between"
        >
          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                  {selectedHub.name}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-1">
                {selectedHub.zone} • Latency: {selectedHub.latency} • <strong className="text-slate-800"><CountUp to={selectedHub.activeOrders} /> Active Orders</strong>
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("matrix")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeTab === "matrix"
                    ? "bg-[#D8331F] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                ⚡ Live Routing
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("dispatch")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeTab === "dispatch"
                    ? "bg-[#D8331F] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                📦 Active Orders
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ndr")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeTab === "ndr"
                    ? "bg-[#D8331F] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                🛡️ RTO Shield
              </button>
            </div>
          </div>

          {/* TAB 1: Live Carrier Routing & SLA Matrix */}
          {activeTab === "matrix" && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHub.id + "-matrix"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5 my-auto"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                    Carrier SLA & Gross Profit Comparison:
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Auto-Routing Active
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedHub.couriers.map((courier) => (
                    <div
                      key={courier.name}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-11 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                          <Image
                            src={courier.logo}
                            alt="LSP Logo"
                            width={64}
                            height={32}
                            style={{ width: "auto", height: "auto" }}
                            className="object-contain max-h-full"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-mono">
                            Mode: <span className="text-slate-800 font-bold">{courier.speed}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-5 text-right font-mono text-xs border-t sm:border-t-0 border-slate-200/60 pt-2 sm:pt-0">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">SLA Ratio</p>
                          <p className="text-emerald-600 font-extrabold mt-0.5">{courier.sla}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Est. RTO</p>
                          <p className="text-sky-600 font-extrabold mt-0.5">{courier.rto}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Franchise Profit</p>
                          <span className="text-xs font-mono font-extrabold text-[#D8331F] bg-[#D8331F]/10 px-2.5 py-1 rounded-lg border border-[#D8331F]/20 inline-block mt-0.5">
                            {courier.margin}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* TAB 2: Live AWB Dispatch Stream with Visual Progress */}
          {activeTab === "dispatch" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 my-auto"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                  Real-Time Dispatch Stream:
                </span>
                <span className="text-[10px] font-mono text-slate-500">Live Socket Sync</span>
              </div>

              <div className="space-y-3 font-mono">
                {DISPATCH_FEED.map((item) => (
                  <div
                    key={item.awb}
                    className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 space-y-2.5 shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                          <Image src={item.logo} alt="Logo" width={20} height={20} style={{ width: "auto", height: "auto" }} className="object-contain max-h-full" />
                        </span>
                        <span className="text-slate-900 font-extrabold">{item.awb}</span>
                        <span className="text-slate-500 text-[11px]">• {item.route}</span>
                      </div>
                      <span className="text-emerald-700 font-extrabold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {item.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#D8331F] to-emerald-500 h-full rounded-full"
                      />
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                      <span>Status: <strong className="text-emerald-700 font-bold">{item.status}</strong></span>
                      <span>Delivery ETA: <strong className="text-slate-800 font-bold">{item.eta}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: Automated NDR & RTO Reduction Engine */}
          {activeTab === "ndr" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 my-auto font-mono"
            >
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">RTO Reduction Engine</p>
                  <p className="text-xl font-extrabold text-emerald-600 mt-1 font-sans">42% Lower RTO</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">WhatsApp NDR Automation</p>
                  <p className="text-xl font-extrabold text-sky-600 mt-1 font-sans">Instant Resolution</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5 text-xs">
                <p className="text-slate-700 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200 pb-2">
                  Live NDR Workflow Simulation:
                </p>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-medium">
                    ⚠️ <strong>[11:28 AM] NDR Raised:</strong> Delivery Failed - Address Incomplete
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 font-medium">
                    📲 <strong>[11:28 AM] WhatsApp Trigger:</strong> Interactive address confirmation sent
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
                    ✅ <strong>[11:29 AM] Buyer Confirmed:</strong> "Near Metro Station Gate 3, Flat 402"
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium">
                    🔄 <strong>[11:30 AM] Carrier Synced:</strong> Address auto-updated in carrier panel
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-slate-500">
            <span>Pan-India Logistics Infrastructure</span>
            <span className="text-[#D8331F] font-bold">100% Margin Control</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
