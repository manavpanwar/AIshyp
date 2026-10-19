"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Smartphone, Layers } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [integrationDropdownOpen, setIntegrationDropdownOpen] = useState(false);
  const [mobileIntegrationOpen, setMobileIntegrationOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef(null);

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
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) {
        setMenuOpen(false);
        setMobileIntegrationOpen(false);
      }
    };
    if (mediaQuery.matches) {
      setMenuOpen(false);
      setMobileIntegrationOpen(false);
    }
    mediaQuery.addEventListener("change", closeMenuOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIntegrationDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIntegrationDropdownOpen(false);
    }, 150);
  };

  const isIntegrationActive =
    pathname === "/integration" ||
    pathname?.startsWith("/integration") ||
    pathname === "/courier-franchise-solutions" ||
    pathname?.startsWith("/courier-franchise-solutions") ||
    pathname === "/app-integration";

  return (
    <>
      {/* Header with dynamic scroll background */}
      <header
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px rgba(15, 23, 42, 0.06)" : "none",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Left: AI Shyp Logo */}
          <Link href="/" className="flex items-center no-underline flex-shrink-0 overflow-hidden">
            <div className="relative h-14 w-56 flex items-center justify-start flex-shrink-0">
              <Image
                src="/AIship1.png"
                alt="AIShip logo"
                fill
                sizes="224px"
                className="object-contain object-left scale-[2.9] origin-left"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Nav Links with Active Route Highlight & Dropdown */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${pathname === "/"
                  ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                  : "text-slate-700 hover:text-[#D8331F] font-semibold"
                }`}
            >
              Home
            </Link>

            {/* Features */}
            <Link
              href="/features"
              className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${pathname === "/features" || pathname?.startsWith("/features")
                  ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                  : "text-slate-700 hover:text-[#D8331F] font-semibold"
                }`}
            >
              Features
            </Link>

            {/* Integrations with Hover Sublink Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                type="button"
                onClick={() => setIntegrationDropdownOpen((prev) => !prev)}
                className={`text-sm font-sans flex items-center gap-1 transition-all duration-200 whitespace-nowrap relative cursor-pointer ${isIntegrationActive
                    ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                    : "text-slate-700 hover:text-[#D8331F] font-semibold"
                  }`}
                aria-expanded={integrationDropdownOpen}
                aria-haspopup="true"
              >
                <span>Integrations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${integrationDropdownOpen ? "rotate-180 text-[#D8331F]" : ""
                    }`}
                />
              </button>

              {/* Desktop Sublink Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 transition-all duration-200 z-50 ${integrationDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-[0_12px_36px_rgba(15,23,42,0.12)] p-2 space-y-1">

                  {/* Sublink 1: Carrier & Channel APIs */}
                  <Link
                    href="/integration"
                    onClick={() => setIntegrationDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[#D8331F] flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-105 transition-transform">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#D8331F] transition-colors flex items-center gap-1.5">
                        <span>Courier &amp; Channel APIs</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">
                        Delhivery, BlueDart, DTDC, Xpressbees &amp; Shopify 1-click sync.
                      </div>
                    </div>
                  </Link>

                  {/* Sublink 2: Courier Franchise App Integration */}
                  <Link
                    href="/courier-franchise-solutions"
                    id="header-app-integration-sublink"
                    onClick={() => setIntegrationDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/70 transition-colors group text-left border border-transparent hover:border-blue-100"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                        <span>App Integration &amp; Franchise Solutions</span>
                        <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 text-[9px] font-mono font-bold">
                          NEW
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">
                        Connected web &amp; mobile apps for docket scanning &amp; bookings.
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${pathname === "/pricing" || pathname?.startsWith("/pricing")
                  ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                  : "text-slate-700 hover:text-[#D8331F] font-semibold"
                }`}
            >
              Pricing
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${pathname === "/blog" || pathname?.startsWith("/blog")
                  ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                  : "text-slate-700 hover:text-[#D8331F] font-semibold"
                }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${pathname === "/contact" || pathname?.startsWith("/contact")
                  ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                  : "text-slate-700 hover:text-[#D8331F] font-semibold"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Glossy Orange Pill "Launch Platform" Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/account-create"
              className="bg-[#D8331F] text-white rounded-full px-5 py-2.5 text-xs font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all duration-200 inline-block whitespace-nowrap"
            >
              Launch Platform →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu with Active Route Highlight & Integrations Sublink */}
      <nav
        className={`fixed top-[72px] left-0 right-0 z-40 px-6 py-6 flex flex-col gap-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
      >
        {/* Home */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-sans transition-colors ${pathname === "/"
              ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
              : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
            }`}
        >
          Home
        </Link>

        {/* Features */}
        <Link
          href="/features"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-sans transition-colors ${pathname === "/features" || pathname?.startsWith("/features")
              ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
              : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
            }`}
        >
          Features
        </Link>

        {/* Integrations with Collapsible Sublinks on Mobile */}
        <div className="border-b border-slate-100 py-1">
          <button
            type="button"
            onClick={() => setMobileIntegrationOpen((prev) => !prev)}
            className="w-full flex items-center justify-between text-base font-sans font-semibold text-slate-700 hover:text-slate-900 py-2 cursor-pointer"
          >
            <span className={isIntegrationActive ? "text-[#D8331F] font-extrabold" : ""}>
              Integrations
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${mobileIntegrationOpen ? "rotate-180 text-[#D8331F]" : "text-slate-400"
                }`}
            />
          </button>

          {/* Sublinks Container */}
          <div
            className={`space-y-2 pl-3 pt-1 pb-2 transition-all duration-200 ${mobileIntegrationOpen ? "block" : "hidden"
              }`}
          >
            <Link
              href="/integration"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-md bg-red-50 text-[#D8331F] flex items-center justify-center shrink-0">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <div>Courier &amp; Channel APIs</div>
                <div className="text-[10px] text-slate-500 font-normal">Delhivery, BlueDart, DTDC &amp; Shopify</div>
              </div>
            </Link>

            <Link
              href="/courier-franchise-solutions"
              id="mobile-app-integration-sublink"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-blue-50/70 border border-blue-100 text-xs font-bold text-blue-900"
            >
              <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Smartphone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span>App Integration (Franchise)</span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-200 text-blue-800 text-[8px] font-mono font-bold">
                    NEW
                  </span>
                </div>
                <div className="text-[10px] text-blue-700 font-normal">Web &amp; mobile docket scanning</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Pricing */}
        <Link
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-sans transition-colors ${pathname === "/pricing" || pathname?.startsWith("/pricing")
              ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
              : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
            }`}
        >
          Pricing
        </Link>

        {/* Blog */}
        <Link
          href="/blog"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-sans transition-colors ${pathname === "/blog" || pathname?.startsWith("/blog")
              ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
              : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
            }`}
        >
          Blog
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-sans transition-colors ${pathname === "/contact" || pathname?.startsWith("/contact")
              ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
              : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
            }`}
        >
          Contact
        </Link>

        <Link
          href="/account-create"
          onClick={() => setMenuOpen(false)}
          className="bg-[#D8331F] text-white text-center rounded-full px-5 py-3 text-sm font-bold shadow-lg hover:bg-[#FF8A6E] transition-colors mt-2"
        >
          Launch Platform →
        </Link>
      </nav>
    </>
  );
}
