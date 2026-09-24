"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getBreadcrumbSchema } from "../../../lib/seo";

// Inline Sparkles Icon
function SparklesIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

// ── 6 CORE DEVELOPER & ENGINEERING TEAM MEMBERS ──
const DEVELOPER_TEAM = [

  {
    name: "Parag Aggarwal",
    role: "Full-Stack Developer",
    specialization: "Web Application Development",
    image: "/Parag.png",
    bio: "Develops reliable and user-friendly web applications across frontend and backend systems.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Danish Khan",
    role: "Full-Stack Developer",
    specialization: "Full-Stack Web Development",
    image: "/Danish.png",
    bio: "Builds modern web applications with a focus on scalable frontend and backend solutions.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Manav Panwar",
    role: "AWS Cloud Architect & DevOps Engineer",
    specialization: "Cloud Infrastructure & DevOps",
    image: "/Manav.png",
    bio: "Manages scalable cloud infrastructure, deployments, automation, and production environments.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Sudhanshu Saini",
    role: "Backend Developer",
    specialization: "Backend & API Development",
    image: "/imjage.png",
    bio: "Builds secure and scalable backend services, APIs, and database-driven applications.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Hitesh",
    role: "Backend Developer",
    specialization: "Server-Side Development",
    image: "/imajge.png",
    bio: "Develops robust backend systems, APIs, and server-side solutions for web applications.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
];

const COMPANY_PILLARS = [
  {
    badge: "DECADE OF GROUND LOGISTICS",
    title: "Battle-Tested Operations",
    desc: "We don't build software from ivory towers. Every line of code reflects 10+ years of ground execution at DTDC, understanding real hub dispatches, manifests, and cash collection.",
  },
  {
    badge: "100% WHITE-LABEL FREEDOM",
    title: "Zero Vendor Lock-In",
    desc: "We empower logistics entrepreneurs to build their own independent brand on their own custom domain with 0% commission taken by AI Shyp.",
  },
  {
    badge: "HIGH-AVAILABILITY CLOUD",
    title: "Engineering Excellence",
    desc: "Built with isolated multi-tenant architecture, sub-120ms rate calculators, and automatic multi-carrier failover for seamless 24/7 parcel booking.",
  },
];

export default function TeamPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "About", item: "/about" },
    { name: "Leadership & Team", item: "/about/team" },
  ]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD BREADCRUMBS SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. HERO SECTION WITH AMBIENT RADIAL GLOW ── */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Ambient Color Theme radiating directly from below the fixed header */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.16)_0%,rgba(255,138,110,0.08)_35%,rgba(16,27,61,0.06)_65%,transparent_80%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-20 bg-gradient-to-b from-[#D8331F]/12 via-[#FF8A6E]/6 to-transparent blur-xl pointer-events-none" /> */}

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-slate-700 transition-colors">
              About
            </Link>
            <span>/</span>
            <span className="text-[#D8331F] font-bold">Leadership &amp; Team</span>
          </div>

          {/* Minimal Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>Leadership &amp; Core Engineering Squad</span>
          </motion.div>

          {/* High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            The Minds Behind AI Shyp:{" "}
            <span className="bg-red bg-clip-text text-transparent">
              10+ Years of Logistics Mastery Meets Modern Software
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Founded by DTDC logistics veterans and engineered by passionate full-stack systems architects. We build the operating system that powers India&apos;s independent courier aggregators and regional franchises.
          </motion.p>

          {/* Quick Metrics Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-semibold"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>10+ Years DTDC Legacy</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>🏢 Founder &amp; CTO Led</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>⚡ 14+ Courier Protocols Mastered</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>📍 Gurgaon Engineering HQ</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUNDER & CTO SPOTLIGHT SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
            // FOUNDER &amp; CHIEF TECHNOLOGY OFFICER
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight mt-3">
            Visionary Leadership &amp; Logistics Roots
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Meet Mohit Panwar — Combining over a decade of ground-level freight execution with full-stack platform architecture.
          </p>
        </div>

        {/* Executive Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-[0_15px_50px_rgba(16,27,61,0.07)] relative overflow-hidden"
        >
          {/* Subtle Ambient Red Tint Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D8331F]/10 via-[#FF5733]/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Founder Photo & Quick Accolades */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-100 shadow-2xl bg-slate-950 group">
                <Image
                  src="/image.png"
                  alt="Mohit Panwar - Founder & CTO at AI Shyp"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Floating Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/90 border border-red-800/80 text-[#FF8A6E] font-mono text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Founder &amp; CTO</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                    Mohit Panwar
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    10+ Years Logistics Veteran • DTDC
                  </p>
                </div>
              </div>

              {/* Founder Metric Badges */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-5">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <p className="text-base sm:text-lg font-black text-[#D8331F] font-sans">
                    10+ Years
                  </p>
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    DTDC &amp; Logistics
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <p className="text-base sm:text-lg font-black text-slate-900 font-sans">
                    14+ APIs
                  </p>
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Couriers Mastered
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Story, Vision & Experience */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#D8331F] uppercase tracking-wider px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
                  Executive Profile &amp; Story
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans text-slate-950 tracking-tight mt-2.5">
                  Mohit Panwar
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#D8331F] font-mono mt-1">
                  Founder &amp; Chief Technology Officer (CTO)
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                <p>
                  With more than <strong>10 years of immersive ground experience at DTDC</strong> and India&apos;s leading freight logistics networks, Mohit understands the real-world operational bottlenecks of shipping — from dispatch manifests and hub sorters to branch franchise margins and cash collection.
                </p>
                <p>
                  Recognizing that traditional logistics software was bogged down by steep commissions, closed ecosystems, and sluggish APIs, Mohit stepped forward as both <strong>Founder and CTO</strong> to create <strong>AI Shyp</strong>: an open, modern, 0% commission white-label logistics operating system.
                </p>
                <p>
                  Under his dual technical and operational leadership, AI Shyp has consolidated 14+ direct carrier APIs (Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, eKart) into a unified cloud engine, giving regional courier franchises and aggregators the software power to launch under their own brand in under 24 hours.
                </p>
              </div>

              {/* Key Achievements Bullet Checklist */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>10+ Years DTDC Veteran:</strong> Hands-on expertise in regional franchise network scaling, pincode mapping, and hub operations.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Chief Technology Architect:</strong> Personally engineered the sub-120ms rate calculator, thermal label engine, and multi-tenant ledger.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Zero-Commission Philosophy:</strong> Championed the 100% margin spread model allowing logistics operators to retain all profits.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="bg-[#D8331F] hover:bg-[#c02816] text-white rounded-full px-6 py-3 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  Schedule 1-on-1 with Mohit →
                </Link>
                <a
                  href="mailto:mohit@vizlabs.in"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-full px-5 py-3 text-xs font-bold transition-colors"
                >
                  ✉️ mohit@vizlabs.in
                </a>
                <a
                  href="tel:+917045814007"
                  className="text-slate-600 hover:text-[#D8331F] text-xs font-mono font-bold transition-colors ml-2"
                >
                  📞 +91 7045814007
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. CORE DEVELOPER & ENGINEERING SQUAD (6 CARDS) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
            // CORE DEVELOPER SQUAD
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-950 tracking-tight mt-3">
            The Engineering Team Behind AIShyp OS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Our specialized squad of full-stack developers, API architects, and telemetry engineers working relentlessly to power India&apos;s fastest logistics technology.
          </p>
        </div>

        {/* 6 Developer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVELOPER_TEAM.map((dev, idx) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Role Badge Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shrink-0 shadow-sm">
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-extrabold font-sans text-slate-950 truncate group-hover:text-[#D8331F] transition-colors">
                      {dev.name}
                    </h4>
                    <p className="text-xs font-bold text-[#D8331F] truncate mt-0.5">
                      {dev.role}
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 block truncate">
                      {dev.specialization}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  {dev.bio}
                </p>


              </div>

              {/* Card Footer: Verified Engineer Status */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1 text-[10.5px] text-emerald-600 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Core Contributor</span>
                </span>
                <span className="text-slate-400 text-[11px] font-semibold">
                  AIShyp OS Squad
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. COMPANY PILLARS & ENGINEERING ETHOS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
            // OUR ENGINEERING PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight mt-3">
            Built by Logistics Veterans, For Logistics Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:bg-white hover:shadow-md transition-all space-y-3"
            >
              <span className="text-[10px] font-mono font-extrabold text-[#D8331F] uppercase tracking-widest px-2.5 py-0.5 bg-red-50 border border-red-200 rounded-full">
                {p.badge}
              </span>
              <h3 className="text-lg font-extrabold font-sans text-slate-950">
                {p.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. LUXURY DARK CLOSING CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#D8331F]/25 via-[#FF5733]/10 to-transparent blur-xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#FF8A6E] uppercase tracking-widest px-3 py-1 bg-red-950/80 border border-red-800/80 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Founder &amp; Engineering Consultation</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Ready to Build Your Shipping Enterprise with Mohit &amp; the Team?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed">
            Talk directly to platform logistics specialists. Deploy your custom domain white-label shipping aggregator in under 24 hours.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#c02816] transition-all hover:scale-105"
            >
              Schedule Platform Consultation →
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all"
            >
              Read the &quot;What If?&quot; Vision
            </Link>
            <Link
              href="/solutions/courier-franchise-software"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all"
            >
              Courier Franchise Software
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
