"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, ScanBarcode, CheckCircle2, ArrowRight, Zap, ShieldCheck, QrCode, Truck, ExternalLink, WifiOff, RefreshCw, Star, RefreshCwIcon, } from "lucide-react";
import GooglePlayIcon from "./GooglePlayIcon";
import AppScreenshotsCarousel from "./AppScreenshotsCarousel";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tenantlogistics.app&pcampaignid=web_share&pli=1";

const APP_FEATURES = [
  {
    icon: ScanBarcode,
    title: "Sub-Second Barcode Scanner",
    description:
      "Transform any regular Android smartphone into a high-precision docket scanner. Reads Delhivery, DTDC, Blue Dart, Ekart barcodes instantly with zero costly hardware.",
    tag: "Camera Vision AI",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: RefreshCw,
    title: "Real-Time 2-Way Cloud Sync",
    description:
      "Dockets scanned or booked on the mobile app appear immediately on your franchise web dashboard. Seamless collaboration between counter executives and managers.",
    tag: "Instant Sync",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Truck,
    title: "Field Runner & Pickup Dispatch",
    description:
      "Assign scheduled pickups directly to field riders. Delivery executives verify parcel intake, capture recipient signatures, and confirm handovers on-the-go.",
    tag: "Field Operations",
    color: "from-amber-500 to-orange-600",
  },
 {
  icon: RefreshCwIcon,
  title: "Smart Service Recovery",
  description:
    "Stay informed during scheduled maintenance and temporary service interruptions. Our system helps restore connectivity and get you back to managing shipments as soon as services are available again.",
  tag: "Quick Recovery",
  color: "from-rose-500 to-red-600",
},
];

export default function AppIntegrationSection() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState("scanner");

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PLAY_STORE_URL);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section
      id="app-integration"
      className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden"
    >
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {/* Live on Google Play Indicator Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wide uppercase shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>NOW LIVE ON GOOGLE PLAY STORE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Courier Franchise Operations,{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-[#D8331F] bg-clip-text text-transparent">
              Right in Your Pocket
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Download the official Android companion app designed for courier franchise owners, counter operators, and field runners. Book consignments, scan physical dockets in seconds, and stay synced with the web platform.
          </p>
        </div>

        {/* Main App Showcase Card */}
        <div className="rounded-[36px] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* ── LEFT COLUMN: APP DETAILS & DOWNLOAD BUTTONS ── */}
            <div className="lg:col-span-6 space-y-6 text-left">

              {/* App Identity Row */}
              <div className="flex items-center gap-4">


                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                      AI Shyp Logistics App
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold">
                      Official
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-mono mt-0.5">
                    Package: com.tenantlogistics.app
                  </p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>4.9</span>
                    </div>
                    <span>•</span>
                    <span className="text-slate-500">Logistics &amp; Courier Operations</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">Free Install</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect your physical franchise counter directly to your central management software. Use your Android camera as an ultra-fast optical scanner for shipping dockets, register parcel intakes, and track customer dispatches on the move.
              </p>

              {/* Action Buttons: Big Google Play Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

                {/* Official Google Play Badge Button */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="playstore-download-main-btn"
                  className="inline-flex items-center justify-center sm:justify-start gap-4 px-6 py-4 rounded-2xl bg-black hover:bg-slate-900 border-2 border-slate-900 hover:border-emerald-500 text-white font-sans shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <GooglePlayIcon className="w-8 h-8 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                      GET IT ON
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      Google Play
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors ml-auto sm:ml-2" />
                </a>

                {/* Copy Link / Quick Share */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-mono font-bold transition-all active:scale-95 shadow-xs cursor-pointer"
                  title="Copy Play Store Link"
                >
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>{copiedLink ? "Link Copied!" : "Copy Play Store URL"}</span>
                </button>
              </div>

              {/* QR Code & Scan Quick Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 p-2 rounded-xl shrink-0 border border-slate-200 shadow-2xs flex items-center justify-center relative group">
                  {/* Vector QR code graphic pointing to Play Store */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-slate-950"
                    fill="currentColor"
                  >
                    {/* Top-left position marker */}
                    <rect x="5" y="5" width="28" height="28" rx="4" fill="#0F172A" />
                    <rect x="10" y="10" width="18" height="18" fill="white" />
                    <rect x="14" y="14" width="10" height="10" fill="#0F172A" />
                    {/* Top-right position marker */}
                    <rect x="67" y="5" width="28" height="28" rx="4" fill="#0F172A" />
                    <rect x="72" y="10" width="18" height="18" fill="white" />
                    <rect x="76" y="14" width="10" height="10" fill="#0F172A" />
                    {/* Bottom-left position marker */}
                    <rect x="5" y="67" width="28" height="28" rx="4" fill="#0F172A" />
                    <rect x="10" y="72" width="18" height="18" fill="white" />
                    <rect x="14" y="76" width="10" height="10" fill="#0F172A" />
                    {/* Data dots */}
                    <rect x="38" y="10" width="6" height="6" fill="#D8331F" />
                    <rect x="48" y="10" width="6" height="6" fill="#0F172A" />
                    <rect x="56" y="10" width="6" height="6" fill="#0F172A" />
                    <rect x="38" y="22" width="8" height="6" fill="#0F172A" />
                    <rect x="50" y="22" width="6" height="6" fill="#2563EB" />
                    <rect x="10" y="38" width="6" height="6" fill="#0F172A" />
                    <rect x="20" y="38" width="6" height="6" fill="#0F172A" />
                    <rect x="30" y="38" width="8" height="8" fill="#10B981" />
                    <rect x="44" y="38" width="6" height="6" fill="#0F172A" />
                    <rect x="54" y="38" width="8" height="8" fill="#0F172A" />
                    <rect x="68" y="38" width="6" height="6" fill="#0F172A" />
                    <rect x="80" y="38" width="6" height="6" fill="#0F172A" />
                    <rect x="10" y="48" width="6" height="6" fill="#0F172A" />
                    <rect x="22" y="48" width="6" height="6" fill="#0F172A" />
                    <rect x="36" y="48" width="6" height="8" fill="#0F172A" />
                    <rect x="48" y="48" width="6" height="6" fill="#D8331F" />
                    <rect x="62" y="48" width="6" height="6" fill="#0F172A" />
                    <rect x="74" y="48" width="6" height="8" fill="#0F172A" />
                    <rect x="86" y="48" width="6" height="6" fill="#0F172A" />
                    <rect x="38" y="62" width="6" height="6" fill="#0F172A" />
                    <rect x="48" y="62" width="6" height="6" fill="#0F172A" />
                    <rect x="58" y="62" width="6" height="6" fill="#2563EB" />
                    <rect x="70" y="62" width="6" height="6" fill="#0F172A" />
                    <rect x="82" y="62" width="6" height="6" fill="#0F172A" />
                    <rect x="38" y="74" width="8" height="6" fill="#0F172A" />
                    <rect x="52" y="74" width="6" height="6" fill="#0F172A" />
                    <rect x="64" y="74" width="6" height="6" fill="#10B981" />
                    <rect x="78" y="74" width="8" height="6" fill="#0F172A" />
                    <rect x="42" y="86" width="6" height="6" fill="#0F172A" />
                    <rect x="56" y="86" width="8" height="6" fill="#0F172A" />
                    <rect x="72" y="86" width="6" height="6" fill="#0F172A" />
                    <rect x="84" y="86" width="6" height="6" fill="#0F172A" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Scan with Mobile Camera</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">
                    Point your Android camera at the QR code to open the listing directly on Google Play Store.
                  </p>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-2 pt-0.5"
                  >
                    <span>Direct Play Store Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Google Play Protect Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Zero Third-party Hardware Needed
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  Android 6.0 and above
                </span>
              </div>

            </div>

            {/* ── RIGHT COLUMN: INTERACTIVE SMARTPHONE MOCKUP ── */}
            <div className="lg:col-span-6 flex justify-center">

              <div className="relative w-full max-w-[320px] sm:max-w-[360px]">

                {/* Glow behind phone */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-emerald-500/20 to-red-500/20 rounded-[48px] blur-2xl pointer-events-none" />

                {/* Smartphone chassis */}
                <div className="relative rounded-[42px] bg-slate-950 p-3 sm:p-3.5 shadow-2xl border-[5px] border-slate-700/80">

                  {/* Dynamic Island / Speaker Notch */}
                  <div className="relative mx-auto w-24 h-5 bg-slate-900 rounded-full mb-1 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black/80 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-950 ml-3" />
                  </div>

                  {/* Phone Screen Display */}
                  <div className="rounded-[30px] overflow-hidden bg-slate-900 border border-slate-800 text-white select-none">

                    {/* Status Bar */}
                    <div className="px-5 py-1.5 bg-slate-950 flex items-center justify-between text-[11px] font-mono text-slate-300 border-b border-slate-800/80">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="text-emerald-400 font-bold">5G</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* App Header inside phone */}
                    <div className="px-4 py-2.5 bg-slate-950/95 flex items-center justify-between border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#D8331F] to-red-600 flex items-center justify-center text-[10px] font-bold text-white shadow">
                          AS
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-white leading-none">
                            AIShyp Courier App
                          </div>
                          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">
                            Play Store ID: com.tenantlogistics.app
                          </div>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold font-mono">
                        SYNC ON
                      </span>
                    </div>

                    {/* Interactive Mode Tabs */}
                    <div className="grid grid-cols-2 bg-slate-950/70 border-b border-slate-800 text-[10px] font-bold">
                      <button
                        onClick={() => setActiveTab("scanner")}
                        className={`py-2 text-center transition-all cursor-pointer ${activeTab === "scanner"
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white"
                          }`}
                      >
                        Camera Scanner
                      </button>
                      <button
                        onClick={() => setActiveTab("pickup")}
                        className={`py-2 text-center transition-all cursor-pointer ${activeTab === "pickup"
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white"
                          }`}
                      >
                        Pickup Runner
                      </button>
                    </div>

                    {/* Phone Screen Viewport */}
                    {activeTab === "scanner" ? (
                      <div className="p-3 space-y-3">

                        {/* Camera Scanner Viewfinder */}
                        <div className="relative h-48 sm:h-52 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-3">

                          {/* Dot Grid background */}
                          <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />

                          {/* Scanner Target Box */}
                          <div className="relative w-44 h-32 border-2 border-emerald-400/90 rounded-xl flex flex-col items-center justify-center bg-emerald-950/25 shadow-[0_0_20px_rgba(52,211,153,0.35)]">

                            {/* Animated scan line */}
                            <motion.div
                              animate={{ y: [-40, 40, -40] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#34d399]"
                            />

                            <ScanBarcode className="w-12 h-12 text-emerald-400 mb-1" />
                            <span className="font-mono text-[9px] font-extrabold text-emerald-300 tracking-wider bg-black/80 px-2 py-0.5 rounded">
                              AWB-DEL-9842103829
                            </span>

                            {/* Corner reticles */}
                            <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white" />
                            <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white" />
                            <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white" />
                            <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white" />
                          </div>

                          <div className="absolute bottom-2 flex items-center gap-2 bg-black/80 px-2.5 py-0.5 rounded-full text-[9px] text-emerald-300 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Camera Docket Recognition Active</span>
                          </div>
                        </div>

                        {/* Scanned Result Card */}
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Docket Verified
                            </span>
                            <span className="text-slate-400 font-mono">0.14s Match</span>
                          </div>

                          <div className="text-xs font-bold text-white">
                            Consignee: Rajesh Sharma
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            Andheri East, Mumbai 400069 • Delhivery Surface
                          </div>

                          <div className="flex items-center justify-between text-[10px] pt-1 text-slate-300">
                            <span>Weight: <strong className="text-white">1.50 kg</strong></span>
                            <span className="text-blue-400 font-bold">Auto-assigned to Bag #12</span>
                          </div>
                        </div>

                      </div>
                    ) : (
                      <div className="p-3 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                          <span>Today's Pickup List</span>
                          <span className="text-emerald-400 font-mono">6 Pending</span>
                        </div>

                        {[
                          { id: "PK-101", name: "Pooja Garments", area: "Sector 18, Noida", parcels: 4, status: "Rider Assigned" },
                          { id: "PK-102", name: "Shree Electronics", area: "Sector 62, Noida", parcels: 2, status: "En Route" },
                          { id: "PK-103", name: "Mehta Auto Spares", area: "Sector 10, Noida", parcels: 7, status: "Ready for Pickup" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white">{item.name}</span>
                              <span className="font-mono text-blue-400 font-bold">{item.id}</span>
                            </div>
                            <div className="text-slate-400">{item.area} • {item.parcels} Parcels</div>
                            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-slate-900">
                              <span className="text-emerald-400 font-medium">{item.status}</span>
                              <span className="text-blue-400 underline font-semibold">Start Route →</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom Install Callout in phone */}
                    <div className="p-3 bg-slate-950 border-t border-slate-800">
                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all"
                      >
                        <GooglePlayIcon className="w-4 h-4 shrink-0" />
                        <span>Install Free on Google Play</span>
                      </a>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ── LIVE APP SCREENSHOTS CAROUSEL (RIGHT-TO-LEFT AUTO ROTATION) ── */}
        <AppScreenshotsCarousel />

        {/* ── 4 APP PILLARS / KEY ADVANTAGES ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APP_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-6 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM APP COMPATIBILITY STRIP ── */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <GooglePlayIcon className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">
                Ready to empower your franchise workforce?
              </div>
              <div className="text-xs text-slate-600">
                Install directly from Google Play Store or scan the QR code on your Android device.
              </div>
            </div>
          </div>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs shadow-md active:scale-95 transition-all shrink-0"
          >
            <GooglePlayIcon className="w-4 h-4" />
            <span>Open Google Play Listing</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
