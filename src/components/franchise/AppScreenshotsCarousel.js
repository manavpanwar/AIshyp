"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {Sparkles,ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight, Play, Pause, } from "lucide-react";
import GooglePlayIcon from "./GooglePlayIcon";
import { PLAY_STORE_URL } from "./AppIntegrationSection";

const APP_SCREENS = [
  {
    id: "login",
    src: "/uploads/110.jpeg",
    title: "Secure Franchise Login",
    step: "01",
    badge: "Authentication",
    desc: "Single sign-on & credentials management for franchise operators, counter staff, and field runners.",
  },
  {
    id: "workspace",
    src: "/uploads/111.jpeg",
    title: "Multi-Tenant Workspace",
    step: "02",
    badge: "Workspace Setup",
    desc: "Connect your assigned Franchise Tenant ID with enterprise isolation and dynamic operational configuration.",
  },
  {
    id: "serviceability",
    src: "/uploads/25463.jpeg",
    title: "Destination Serviceability",
    step: "03",
    badge: "Booking Intake",
    desc: "Instant carrier pincode lookup (DTDC, Delhivery, etc.), package type, and prepaid/COD payment selection.",
  },
  {
    id: "camera-scan",
    src: "/uploads/1113.jpeg",
    title: "Docket Barcode & OCR Scan",
    step: "04",
    badge: "Camera Vision",
    desc: "Scan physical docket barcodes and use smartphone camera to auto-parse customer delivery & pickup labels.",
  },
  {
    id: "address-autofill",
    src: "/uploads/31254.jpeg",
    title: "Intelligent Address Capture",
    step: "05",
    badge: "Label Extraction",
    desc: "Auto-extracts recipient names, contact numbers, street addresses, and 6-digit postal pincodes without typing.",
  },
  {
    id: "kyc-upload",
    src: "/uploads/2536.jpeg",
    title: "Box Dimensions & KYC",
    step: "06",
    badge: "Compliance",
    desc: "Enter volumetric weight, box dimensions, and capture invoice or KYC documents directly from the camera.",
  },
  {
    id: "carrier-rates",
    src: "/uploads/112.jpeg",
    title: "Live Carrier Comparison",
    step: "07",
    badge: "Rate Engine",
    desc: "Compare real-time shipping freight across Shadowfax, XpressBees, and Amazon ATS to generate instant AWB.",
  },
];

export default function AppScreenshotsCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Open modal lightbox for inspecting a specific screen
  const handleOpenModal = (screen) => {
    setSelectedImage(screen);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = APP_SCREENS.findIndex((s) => s.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % APP_SCREENS.length;
    setSelectedImage(APP_SCREENS[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = APP_SCREENS.findIndex((s) => s.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + APP_SCREENS.length) % APP_SCREENS.length;
    setSelectedImage(APP_SCREENS[prevIndex]);
  };

  // Manual nudge buttons
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Duplicate items for continuous seamless loop
  const duplicatedScreens = [...APP_SCREENS, ...APP_SCREENS];

  return (
    <div className="w-full mt-20 pt-16 border-t border-slate-200 relative">
      {/* ── HEADER ── */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>REAL APPLICATION SCREENS</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
          Explore the Live App in Action
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Actual screenshots from our Android application live on Google Play Store. See how walk-in counter booking, barcode scanning, KYC capture, and carrier rate comparisons work on your phone.
        </p>

        {/* Carousel controls bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Auto-rotating Right → Left • Hover to pause</span>
          </span>

          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              type="button"
              className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono flex items-center gap-1 transition-all cursor-pointer border border-slate-200 shadow-2xs"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-amber-500" />}
              <span>{isPaused ? "Play" : "Pause"}</span>
            </button>

            <button
              onClick={scrollLeft}
              type="button"
              className="p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-all cursor-pointer border border-slate-200 shadow-2xs"
              title="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={scrollRight}
              type="button"
              className="p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-all cursor-pointer border border-slate-200 shadow-2xs"
              title="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── CONTINUOUS SCROLLING CAROUSEL VIEWPORT ── */}
      <div className="relative w-full overflow-hidden py-4 group">

        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Scrolling track */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 sm:gap-8 items-center ${isPaused ? "overflow-x-auto no-scrollbar" : "animate-marquee-rtl"
            }`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedScreens.map((screen, idx) => (
            <div
              key={`${screen.id}-${idx}`}
              className="shrink-0 w-[240px] sm:w-[270px] select-none group/card cursor-pointer"
              onClick={() => handleOpenModal(screen)}
            >
              {/* Smartphone Frame Outer Chassis */}
              <div className="relative rounded-[36px] bg-slate-950 p-2 sm:p-2.5 border-2 border-slate-800 group-hover/card:border-blue-500 shadow-[0_15px_35px_rgba(15,23,42,0.12)] group-hover/card:shadow-[0_20px_45px_rgba(37,99,235,0.2)] group-hover/card:-translate-y-2 transition-all duration-300">

                {/* Speaker notch / top camera dot */}
                <div className="relative mx-auto w-20 h-3.5 bg-slate-900 rounded-full mb-1.5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-700 border border-slate-600" />
                </div>

                {/* Inner Screen Bezel */}
                <div className="relative rounded-[26px] overflow-hidden bg-slate-950 aspect-[9/19.5] border border-slate-800">
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 240px, 270px"
                    className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                    priority={idx < 4}
                  />

                  {/* Top Step Pill Overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10">
                      Step {screen.step}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[9px] font-bold text-white shadow-xs">
                      {screen.badge}
                    </span>
                  </div>

                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-20 h-1 bg-slate-700/60 rounded-full mx-auto mt-2" />

              </div>

              {/* Title & Step Caption under card */}
              <div className="text-center mt-3 px-1">
                <div className="text-xs sm:text-sm font-extrabold text-slate-950 group-hover/card:text-blue-600 transition-colors">
                  {screen.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                  {screen.badge} • Step {screen.step}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ── BOTTOM PLAY STORE CALLOUT ── */}
      <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <span className="text-xs text-slate-500">
          All screens shown above are from the official Android app build live on Google Play Store.
        </span>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-bold text-xs shadow-md transition-all group"
        >
          <GooglePlayIcon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
          <span>Download on Google Play</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
        </a>
      </div>

      {/* ── LIGHTBOX / MODAL FOR SCREEN INSPECTION ── */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col md:flex-row items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer z-10"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev button */}
            <button
              onClick={handlePrevImage}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md cursor-pointer hidden md:flex items-center justify-center"
              title="Previous Screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right/Next button */}
            <button
              onClick={handleNextImage}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md cursor-pointer hidden md:flex items-center justify-center"
              title="Next Screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Left: Smartphone Preview */}
            <div className="shrink-0 w-[240px] sm:w-[270px]">
              <div className="rounded-[36px] bg-slate-950 p-2.5 border-4 border-slate-800 shadow-2xl">
                <div className="w-16 h-3 bg-slate-900 rounded-full mx-auto mb-1.5" />
                <div className="relative rounded-[26px] overflow-hidden aspect-[9/19.5] bg-black">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="270px"
                  />
                </div>
                <div className="w-16 h-1 bg-slate-700/60 rounded-full mx-auto mt-2" />
              </div>
            </div>

            {/* Right: Screen Details & Play Store CTA */}
            <div className="space-y-4 text-left flex-1 px-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                <span>Step {selectedImage.step} of 07</span>
                <span>•</span>
                <span>{selectedImage.badge}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {selectedImage.title}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedImage.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div className="text-slate-500 font-mono text-[10px]">APPLICATION ID</div>
                <div className="text-slate-950 font-semibold">AI Shyp Logistics Companion</div>
                <div className="text-emerald-600 font-mono text-[11px] font-bold">com.tenantlogistics.app</div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  <GooglePlayIcon className="w-4 h-4 shrink-0" />
                  <span>Get on Google Play Store</span>
                </a>

                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}



      {/* ── CSS KEYFRAMES FOR SMOOTH 60FPS RIGHT-TO-LEFT ROTATION ── */}
      <style>{`
        @keyframes marqueeRTL {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRTL 28s linear infinite;
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
