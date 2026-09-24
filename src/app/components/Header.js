"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const FRANCHISE_MESSAGES = [
  {
    tag: "Franchise Aggregator OS",
    tagColor: "bg-red-950/80 border-red-800/80 text-[#FF8A6E]",
    text: "Launch your branded courier franchise & multi-carrier shipping aggregator on your own domain",
    cta: "Franchise Software",
    href: "/solutions/courier-franchise-software",
  },
  {
    tag: "14+ Carrier APIs",
    tagColor: "bg-blue-950/80 border-blue-800/80 text-sky-400",
    text: "Connect Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax & Ekart in one unified dashboard",
    cta: "Carrier Integrations",
    href: "/integration",
  },
  {
    tag: "0% Commission SaaS",
    tagColor: "bg-emerald-950/80 border-emerald-800/80 text-emerald-400",
    text: "Keep 100% margin spread • Multi-branch booking counters, sub-agents & master wallet",
    cta: "0% Commission Plans",
    href: "/pricing",
  },
  {
    tag: "White-Label OS",
    tagColor: "bg-amber-950/80 border-amber-800/80 text-amber-300",
    text: "Full autonomy with custom domain, automated NDR/RTO engine & branded WhatsApp tracking",
    cta: "Book Platform Demo",
    href: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMsgIndex, setActiveMsgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveMsgIndex((prev) => (prev + 1) % FRANCHISE_MESSAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    if (mediaQuery.matches) setMenuOpen(false);
    mediaQuery.addEventListener("change", closeMenuOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integration" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact-us", href: "/contact" },
  ];

  return (
    <>
      {/* ── FIXED WRAPPER CONTAINING TOP ANNOUNCEMENT BAR & MAIN HEADER ── */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* ── 1. FRANCHISE & AGGREGATOR TOP ANNOUNCEMENT BAR ── */}
        <aside
          aria-label="Courier Franchise & Shipping Aggregator Announcement"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full bg-slate-950 text-slate-200 border-b border-slate-800/90 py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 text-[11px] sm:text-xs select-none relative overflow-hidden"
        >
          {/* Subtle Ambient Red Tint Glow */}
          <div className="absolute top-0 left-1/4 w-80 h-full bg-gradient-to-r from-transparent via-[#D8331F]/20 to-transparent pointer-events-none" />

          <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-3 relative z-10">
            {/* Mobile View: Compact, High-converting Single Tap */}
            <div className="flex sm:hidden items-center justify-between w-full">
              <Link
                href={FRANCHISE_MESSAGES[activeMsgIndex].href}
                className="flex items-center gap-1.5 overflow-hidden text-left flex-1 mr-2"
              >
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-950/90 border border-red-800/80 text-[#FF8A6E]  text-[9px] font-extrabold uppercase shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Franchise OS</span>
                </span>
                <span className="text-slate-200 text-[11px] font-medium truncate">
                  {FRANCHISE_MESSAGES[activeMsgIndex].text}
                </span>
              </Link>
              <Link
                href="/solutions/courier-franchise-software"
                className="text-[#FF8A6E] hover:text-white  font-bold text-[10.5px] shrink-0 inline-flex items-center gap-0.5 whitespace-nowrap bg-red-950/60 border border-red-800/60 px-2 py-0.5 rounded-md"
              >
                <span>Join</span>
                <span>→</span>
              </Link>
            </div>

            {/* Desktop / Tablet View: Rich Rotating Franchise Headlines */}
            <div className="hidden sm:flex items-center justify-between w-full gap-4">
              {/* Left: Dynamic Franchise Value Prop */}
              <div className="flex items-center gap-3 overflow-hidden min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMsgIndex}
                    initial={{ opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -7 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border  text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-2xs ${FRANCHISE_MESSAGES[activeMsgIndex].tagColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{FRANCHISE_MESSAGES[activeMsgIndex].tag}</span>
                    </span>
                    <span className="text-slate-600 hidden md:inline">•</span>
                    <span className="text-slate-200 font-medium truncate text-xs">
                      {FRANCHISE_MESSAGES[activeMsgIndex].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center / Indicators: Dot Pointers to switch messages */}
              <div className="hidden lg:flex items-center gap-1 shrink-0">
                {FRANCHISE_MESSAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMsgIndex(i)}
                    aria-label={`Show franchise slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeMsgIndex === i
                      ? "w-4 bg-[#FF8A6E]"
                      : "w-1.5 bg-slate-700 hover:bg-slate-500"
                      }`}
                  />
                ))}
              </div>

              {/* Right: Quick Action CTAs */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0  text-[11px]">
                <Link
                  href={FRANCHISE_MESSAGES[activeMsgIndex].href}
                  className="text-[#FF8A6E] hover:text-white font-bold transition-colors inline-flex items-center gap-1 whitespace-nowrap bg-red-950/70 hover:bg-red-900/80 border border-red-800/80 px-2.5 py-0.5 rounded-md shadow-2xs"
                >
                  <span>{FRANCHISE_MESSAGES[activeMsgIndex].cta}</span>
                  <span>→</span>
                </Link>
                <span className="text-slate-700 hidden xl:inline">|</span>
                <Link
                  href="/solutions/courier-franchise-software"
                  className="text-slate-400 hover:text-white hidden xl:inline transition-colors whitespace-nowrap"
                >
                  Franchise Portal
                </Link>
                <span className="text-slate-700 hidden lg:inline">|</span>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-emerald-400 hidden lg:inline transition-colors whitespace-nowrap"
                >
                  0% Commission
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* ── 2. MAIN HEADER NAVIGATION BAR ── */}
        <header
          style={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.97)" : "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid rgba(226, 232, 240, 0.7)",
            boxShadow: scrolled ? "0 4px 25px rgba(15, 23, 42, 0.08)" : "none",
          }}
          className={`w-full transition-all duration-300 ${scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-3.5"
            }`}
        >
          <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4 lg:gap-8">
            {/* Left: AI Shyp Logo - Pushed to the side with responsive positioning */}
            <Link href="/" className="flex items-center no-underline flex-shrink-0 overflow-hidden group -ml-2 sm:-ml-3 lg:-ml-4">
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

            {/* Center: Desktop Nav Links with About Dropdown and generous gaps */}
            <nav className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-6 2xl:gap-7">
              {navLinks.map((link) => {
                if (link.label === "About") {
                  const isAboutActive =
                    pathname === "/about" || pathname?.startsWith("/about");

                  return (
                    <div key="about-dropdown" className="relative group py-1.5">
                      <div className="flex items-center gap-1 cursor-pointer px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100/70 transition-colors">
                        <Link
                          href="/about"
                          className={`text-[14px] lg:text-[15px] xl:text-base font-sans transition-all duration-200 whitespace-nowrap relative ${isAboutActive
                            ? "text-[#D8331F] font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                            : "text-slate-700 hover:text-[#D8331F] font-medium hover:font-semibold"
                            }`}
                        >
                          About
                        </Link>
                        <svg
                          className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D8331F] transition-transform duration-200 group-hover:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>

                      {/* Dropdown Menu Card */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px] opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div className="bg-white/98 backdrop-blur-2xl rounded-2xl p-2.5 shadow-[0_20px_40px_rgba(15,23,42,0.14)] border border-slate-200/90">

                          <div className="grid grid-cols-3 gap-1">

                            {/* 1st */}
                            <Link
                              href="/about"
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${pathname === "/about"
                                ? "bg-red-50 text-[#D8331F]"
                                : "hover:bg-slate-50 text-slate-800 hover:text-[#D8331F]"
                                }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                                ⚡
                              </div>

                              <div className="min-w-0">
                                <p className="text-xs font-extrabold font-sans leading-tight">
                                  About Platform
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  &quot;What If?&quot; Vision &amp; Architecture
                                </p>
                              </div>
                            </Link>

                            {/* 2nd */}
                            <Link
                              href="/about/team"
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${pathname === "/about/team"
                                ? "bg-red-50 text-[#D8331F]"
                                : "hover:bg-slate-50 text-slate-800 hover:text-[#D8331F]"
                                }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                                👥
                              </div>

                              <div className="min-w-0">
                                <p className="text-xs font-extrabold font-sans leading-tight">
                                  Leadership &amp; Team
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Founder Mohit Panwar &amp; Dev Squad
                                </p>
                              </div>
                            </Link>

                            <Link
                              href="/about/mission-vision"
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${pathname === "/about/mission-vision"
                                ? "bg-red-50 text-[#D8331F]"
                                : "hover:bg-slate-50 text-slate-800 hover:text-[#D8331F]"
                                }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                                🎯
                              </div>

                              <div className="min-w-0">
                                <p className="text-xs font-extrabold font-sans leading-tight">
                                  Our Mission &amp; Vision
                                </p>

                                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Building the future of intelligent logistics
                                </p>
                              </div>
                            </Link>

                          </div>

                        </div>
                      </div>
                    </div>
                  );
                }

                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] lg:text-[15px] xl:text-base font-sans transition-all duration-200 whitespace-nowrap relative px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100/70 ${isActive
                      ? "text-[#D8331F] font-bold after:content-[''] after:absolute after:-bottom-1 after:left-2.5 after:right-2.5 after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                      : "text-slate-700 hover:text-[#D8331F] font-medium hover:font-semibold"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Orange Pill "Launch Platform" Button */}
            <div className="hidden md:flex items-center flex-shrink-0 pl-1 lg:pl-3">
              <Link
                href="/account-create"
                className="bg-[#D8331F] hover:bg-[#c02816] text-white rounded-full px-5 lg:px-6 py-2.5 text-xs sm:text-[13px] font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all duration-200 inline-block whitespace-nowrap"
              >
                Launch Platform →
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors cursor-pointer z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu with Active Route Highlight */}
      <nav
        className={`fixed top-[104px] sm:top-[112px] left-0 right-0 z-40 px-6 py-6 flex flex-col gap-3 bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl transition-all duration-300 ${menuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
      >
        {navLinks.map((link) => {
          if (link.label === "About") {
            const isAboutActive =
              pathname === "/about" || pathname?.startsWith("/about");

            return (
              <div
                key="mobile-about-group"
                className="flex flex-col gap-1.5 bg-slate-50/80 p-2.5 rounded-2xl border border-slate-200/80"
              >
                <div className="px-2 pt-0.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider ">
                  About AI Shyp
                </div>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-sans transition-all py-2 px-3 rounded-xl flex items-center gap-2 ${pathname === "/about"
                    ? "text-[#D8331F] font-bold bg-red-50 border border-red-200/80 shadow-2xs"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-semibold"
                    }`}
                >
                  <span>⚡</span>
                  <span>About Platform (&quot;What If?&quot; Vision)</span>
                </Link>
                <Link
                  href="/about/team"
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-sans transition-all py-2 px-3 rounded-xl flex items-center gap-2 ${pathname === "/about/team"
                    ? "text-[#D8331F] font-bold bg-red-50 border border-red-200/80 shadow-2xs"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-semibold"
                    }`}
                >
                  <span>👥</span>
                  <span>Leadership &amp; Team (Founder Mohit Panwar)</span>
                </Link>
                <Link
                  href="/about/mission-vision"
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-sans transition-all py-2 px-3 rounded-xl flex items-center gap-2 ${pathname === "/about/mission-vision"
                    ? "text-[#D8331F] font-bold bg-red-50 border border-red-200/80 shadow-2xs"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-semibold"
                    }`}
                >
                  <span>🎯</span>
                  <span>Our Mission &amp; Vision</span>
                </Link>
              </div>
            );
          }

          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname?.startsWith(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base sm:text-lg font-sans transition-all py-2.5 px-3 rounded-xl ${isActive
                ? "text-[#D8331F] font-bold bg-red-50 border border-red-200/80 shadow-2xs"
                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold"
                }`}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
          <Link
            href="/solutions/courier-franchise-software"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-slate-900 text-slate-100 text-center rounded-xl px-4 py-2.5 text-xs font-bold border border-slate-800"
          >
            🏢 Franchise Software Solutions →
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-[#D8331F] text-white text-center rounded-full px-5 py-3 text-sm font-bold shadow-md hover:bg-[#c02816] transition-colors"
          >
            Launch Platform →
          </Link>
        </div>
      </nav>
    </>
  );
}
