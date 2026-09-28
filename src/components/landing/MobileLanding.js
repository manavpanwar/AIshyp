"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const COURIERS = [
  { name: "Delhivery", logo: "/delhivery.png" },
  { name: "DTDC", logo: "/dtdc.png" },
  { name: "Bluedart", logo: "/bluedart.png" },
  { name: "Xpressbees", logo: "/xpressbees.png" },
  { name: "Ekart", logo: "/ekart.png" },
  { name: "Shadowfax", logo: "/shadowfax.png" },
  { name: "Trackon", logo: "/trackon_logo.png" },
  { name: "DP World", logo: "/dpworldlogo.png" },
];

const CARDS = [
  { title: "Custom Domain Setup", body: "Deploy software on your custom domain (yourdomain.com) in 5 minutes." },
  { title: "14+ Multi-Courier APIs", body: "Plug in direct contracted keys for Delhivery, DTDC, Bluedart & Xpressbees." },
  { title: "100% Margin Retention", body: "Set custom buy & sell rate slabs per merchant and keep 100% gross profit." },
];

export default function MobileLanding() {
  useEffect(() => {
    const elements = document.querySelectorAll(".mobile-fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen text-slate-900 pt-24 pb-16 px-5 space-y-16 bg-[#FAFAFC] overflow-x-hidden">
      {/* ── HERO MOBILE ── */}
      <section className="text-center mobile-fade-in opacity-0 translate-y-6 transition-all duration-700 space-y-4">
        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#D8331F] bg-red-50 border border-red-200/80 inline-block shadow-2xs">
          White-Label Logistics OS
        </span>
        
        <h1 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-4xl text-center leading-[1.15] tracking-tight">
          Launch your own <br />
          <span className="text-[#D8331F]">shipping aggregator platform.</span>
        </h1>
        
        <p className="text-slate-600 text-sm text-center font-medium leading-relaxed max-w-sm mx-auto">
          You build the logistics brand — we power the technology. Deploy your custom domain portal with 14+ direct courier APIs in 5 minutes.
        </p>

        <div className="flex flex-col gap-3 justify-center pt-2">
          <Link
            href="/contact"
            className="bg-[#D8331F] text-white rounded-full px-7 py-3.5 font-extrabold text-sm text-center shadow-[0_8px_20px_rgba(216,51,31,0.35)] active:scale-95 transition-transform"
          >
            Launch Your Platform →
          </Link>
          <Link
            href="/pricing"
            className="bg-white border border-slate-200 text-slate-800 rounded-full px-7 py-3.5 font-bold text-sm text-center shadow-xs active:scale-95 transition-transform"
          >
            Explore SaaS Pricing
          </Link>
        </div>

        <div className="space-y-3 pt-6 text-left">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 space-y-1 shadow-sm"
            >
              <h3 className="font-sans font-extrabold text-slate-950 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D8331F]" />
                {c.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium pl-4">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THREE GAME-CHANGERS MOBILE ── */}
      <section className="text-left mobile-fade-in opacity-0 translate-y-6 transition-all duration-700 space-y-6">
        <div className="text-center space-y-1.5">
          <p className="text-[11px] font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Personal Courier Aggregator Panel
          </p>
          <h2 className="font-sans font-extrabold text-slate-950 text-2xl">
            One Platform. <span className="text-[#D8331F]">Three Game-Changers.</span>
          </h2>
          <p className="text-slate-600 text-xs font-medium">
            AIShyp gives shipping partners the tools, rates, and leads to scale overnight.
          </p>
        </div>

        <div className="space-y-4">
          {/* Pillar 01 */}
          <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-5 space-y-3 shadow-md border-t-4 border-t-[#D8331F]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-extrabold text-[#D8331F] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">01 • Digital Empire OS</span>
              <span className="text-xl">🚀</span>
            </div>
            <h3 className="font-sans font-extrabold text-slate-950 text-lg">Go Digital Instantly</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Deploy your white-label courier platform on your custom domain in under 5 minutes.</p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Custom Domain</span>
                <span className="text-emerald-700 font-bold text-[10px]">100% Yours</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Thermal AWB Labels</span>
                <span className="text-emerald-700 font-bold text-[10px]">Automated</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Branded Tracking Links</span>
                <span className="text-emerald-700 font-bold text-[10px]">0% Watermark</span>
              </div>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-5 space-y-3 shadow-md border-t-4 border-t-amber-500">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">02 • Rate Engine</span>
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="font-sans font-extrabold text-slate-950 text-lg">Control Rates & Margins</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Configure custom buy & sell rate slabs per merchant and keep 100% of your gross profit margins.</p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">14+ Courier Networks</span>
                <span className="text-amber-700 font-bold text-[10px]">Connected</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Margin Markups</span>
                <span className="text-[#D8331F] font-bold text-[10px]">100% Kept</span>
              </div>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-5 space-y-3 shadow-md border-t-4 border-t-emerald-500">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">03 • Network Hierarchy</span>
              <span className="text-xl">📈</span>
            </div>
            <h3 className="font-sans font-extrabold text-slate-950 text-lg">Manage Multi-Clients</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Manage your clients, sub-branches, pickup hubs, and financial ledgers from one panel.</p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Prepaid Merchant Wallets</span>
                <span className="text-emerald-700 font-bold text-[10px]">Auto Balance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-medium">Daily COD Remittance</span>
                <span className="text-emerald-700 font-bold text-[10px]">T+1 Bank Payout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRIER LOGOS MOBILE GRID ── */}
      <section className="text-center mobile-fade-in opacity-0 translate-y-6 transition-all duration-700 space-y-4">
        <div>
          <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            Pre-Integrated Carrier Networks
          </p>
          <h2 className="font-sans font-extrabold text-slate-950 text-2xl mt-1">
            14+ Courier APIs
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {COURIERS.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-slate-200/90 rounded-xl p-2 h-14 flex items-center justify-center shadow-2xs"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING MOBILE CTA ── */}
      <section className="text-center mobile-fade-in opacity-0 translate-y-6 transition-all duration-700 bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
        <h2 className="font-sans font-extrabold text-white text-2xl tracking-tight">
          Ready to launch your shipping platform?
        </h2>
        <p className="text-slate-400 text-xs font-medium">
          Deploy your white-label SaaS aggregator software on your domain in 5 minutes.
        </p>
        <Link
          href="/contact"
          className="bg-[#D8331F] text-white rounded-full px-7 py-3.5 font-extrabold text-xs inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
        >
          Launch Your Platform →
        </Link>
      </section>
    </div>
  );
}
