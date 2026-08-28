"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integration" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ];

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
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

          {/* Center: Desktop Nav Links with Active Route Highlight */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-sans transition-all duration-200 whitespace-nowrap relative ${
                    isActive
                      ? "text-[#D8331F] font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D8331F] after:rounded-full"
                      : "text-slate-700 hover:text-[#D8331F] font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Glossy Orange Pill "Launch Platform" Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
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
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu with Active Route Highlight */}
      <nav
        className={`fixed top-[72px] left-0 right-0 z-40 px-6 py-6 flex flex-col gap-4 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname?.startsWith(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-sans transition-colors ${
                isActive
                  ? "text-[#D8331F] font-extrabold bg-red-50 px-3.5 py-2 rounded-xl border border-red-200/80"
                  : "text-slate-700 hover:text-slate-900 font-semibold py-2 border-b border-slate-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="bg-[#D8331F] text-white text-center rounded-full px-5 py-3 text-sm font-bold shadow-lg hover:bg-[#FF8A6E] transition-colors mt-2"
        >
          Launch Platform →
        </Link>
      </nav>
    </>
  );
}
