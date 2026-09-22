"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      toast.error("Please enter your email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.error || "Subscription failed. Please try again.");
        return;
      }

      toast.success(data?.message || "Subscribed successfully.");
      setEmail("");
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = {
    Company: [
      { label: "About AI Shyp", href: "/about" },
      { label: "Logistics Blog", href: "/blog" },
      { label: "Careers", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
    Solutions: [
      { label: "White Label Portal India", href: "/solutions/white-label-logistics-portal-india" },
      { label: "Courier Aggregation Software", href: "/solutions/courier-aggregation-software-india" },
      { label: "Multi-Tenant Shipping SaaS", href: "/solutions/multi-tenant-shipping-saas" },
      { label: "RTO & NDR Automation", href: "/solutions/rto-ndr-automation" },
    ],
    Integrations: [
      { label: "14+ Courier APIs", href: "/integration" },
      { label: "Shopify Storefront Sync", href: "/integration" },
      { label: "Amazon SP-API", href: "/integration" },
      { label: "Developer REST API", href: "/integration" },
    ],
    Support: [
      { label: "SaaS Pricing", href: "/pricing" },
      { label: "Book Aggregator Demo", href: "/contact" },
      { label: "Platform FAQs", href: "/faq" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  };

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohitpanwar2111/",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const stats = [
    { num: "100%", label: "White-Label SaaS", desc: "Your Domain & Zero Watermarks" },
    { num: "14+", label: "Direct Courier APIs", desc: "Delhivery, BlueDart, DTDC & More" },
    { num: "29,000+", label: "Indian Pincodes", desc: "Pan-India Air & Surface Network" },
    { num: "0%", label: "Revenue Split", desc: "100% Margin Retention" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 text-slate-400 font-[family-name:var(--font-inter)] antialiased">
      {/* Subtle Ambient Radial Glow starting at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.14)_0%,rgba(255,138,110,0.06)_40%,rgba(16,27,61,0.08)_70%,transparent_80%)] pointer-events-none" />

      <div className="relative z-10">
        {/* ── 1. NEWSLETTER SECTION (DARK LUXURY THEME) ── */}
        <div className="border-b border-slate-800/80 bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-6 py-12 sm:py-14 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#FF8A6E] text-[11px] font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F] animate-pulse" />
              <span>Logistics Intelligence &amp; Product Updates</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Stay Ahead with{" "}
              <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#FF8A6E] bg-clip-text text-transparent">
                AI Shyp Logistics OS
              </span>
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed font-normal">
              Get courier API updates, RTO reduction tactics, and multi-tenant shipping software news delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-7 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your corporate work email"
                  className="w-full px-4 py-3 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] transition-all font-normal"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#D8331F] hover:bg-[#c02816] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold flex-shrink-0 shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe →"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ── 2. PLATFORM STATS GRID BAR ── */}
        <div className="border-b border-slate-800/80 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-slate-900/50 border border-slate-800/70 rounded-2xl p-4 sm:p-5 text-center hover:border-slate-700 hover:bg-slate-900/80 transition-all"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <span className="text-[#FF8A6E]">{s.num}</span>
                </p>
                <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  {s.label}
                </p>
                <p className="text-[11.5px] text-slate-500 mt-0.5 hidden sm:block font-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. MAIN FOOTER SITEMAP & BRAND COLUMNS ── */}
        <div className="max-w-6xl mx-auto px-6 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center no-underline flex-shrink-0 overflow-hidden group">
              <div className="relative h-14 sm:h-16 md:h-[68px] w-52 sm:w-64 md:w-72 flex items-center justify-start flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/AIship1.png"
                  alt="AIShip logo"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-contain object-left scale-[3.1] sm:scale-[3.3] origin-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-1 font-normal">
              AI Shyp is India&apos;s leading white-label logistics SaaS platform. Deploy your custom branded shipping portal on your own domain with 14+ direct courier APIs and 0% revenue split.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">●</span>
                <span>Production Deployments Active</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#FF8A6E]">⚡</span>
                <span>Delhivery, BlueDart, DTDC, DP World</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 border border-slate-800 bg-slate-900/90 transition-all duration-200 hover:text-white hover:border-[#D8331F] hover:bg-[#D8331F]/20 shadow-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns (4 cols wide: Company, Solutions, Integrations, Support) */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#FF8A6E] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                <span>{title}</span>
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-[13px] text-slate-400 hover:text-white transition-all duration-200 inline-flex items-center gap-1 hover:translate-x-1 font-normal"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 4. BOTTOM COPYRIGHT BAR ── */}
        <div className="border-t border-slate-800/80 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-500 tracking-wide font-normal">
              © {currentYear} AI Shyp Logistics OS. Powered by VizLabs. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 font-normal">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms of SaaS", href: "/contact" },
                { label: "Courier SLA", href: "/contact" },
                { label: "Security & Trust", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-slate-300 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}