"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  HeartHandshake,
  Cpu,
  Layers,
  MapPin,
} from "lucide-react";
import { getAboutPageSchema, getBreadcrumbSchema } from "../../lib/seo";


const CORE_TEAM = [
  {
    name: "Parag Aggarwal",
    role: "Full-Stack Developer",
    specialization: "Web Application Development",
    image: "/Parag.png",
    bio: "Develops reliable and user-friendly web applications across frontend and backend systems.",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    linkedIn: "https://www.linkedin.com/in/paragaggarwall/",
    github: "https://github.com",
  },
  {
    name: "Danish Khan",
    role: "Full-Stack Developer",
    specialization: "Full-Stack Web Development",
    image: "/Danish.png",
    bio: "Builds modern web applications with a focus on scalable frontend and backend solutions.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    linkedIn: "https://www.linkedin.com/in/danishkhan786/?isSelfProfile=true",
    github: "https://github.com",
  },
  {
    name: "Manav Panwar",
    role: "AWS Cloud Architect & DevOps",
    specialization: "Cloud Infrastructure & DevOps",
    image: "/Manav.png",
    bio: "Manages scalable cloud infrastructure, deployments, automation, and high-availability production environments.",
    skills: ["AWS", "Docker", "DevOps", "CI/CD", "Linux"],
    linkedIn: "https://www.linkedin.com/in/manav-panwar-031213179/",
    github: "https://github.com",
  },
  {
    name: "Sudhanshu Saini",
    role: "Backend Developer",
    specialization: "Backend & API Development",
    image: "/imjage.png",
    bio: "Builds secure and scalable backend services, courier APIs, and database-driven transaction engines.",
    skills: ["Node.js", "Express", "PostgreSQL", "Webhooks"],
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Hitesh",
    role: "Backend Developer",
    specialization: "Server-Side Development",
    image: "/imajge.png",
    bio: "Develops robust backend systems, courier protocol integrations, and server-side rate logic.",
    skills: ["Backend Architecture", "APIs", "Database HA"],
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
];


const MISSION_POINTS = [
  "Eliminate multi-lakh engineering costs for emerging logistics businesses",
  "Provide 100% white-label autonomy on custom domains (zero watermarks)",
  "Zero commission split — businesses retain 100% of freight profit margins",
  "Instant 1-click access to 14+ Tier-1 courier APIs across 29,000+ pincodes",
];

const VISION_POINTS = [
  "Build India's largest decentralized, sovereign shipping aggregator network",
  "Pioneer AI-first logistics automation with OCR vision & WhatsApp NDR",
  "Enable 10,000+ regional courier franchises to compete with tech monopolies",
  "Expand from retail parcels to heavy commercial cargo & global cross-border",
];

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const aboutBreadcrumbs = getBreadcrumbSchema([
    { name: "About Us", item: "/about" },
  ]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbs) }}
      />

      {/* Semantic Summary for Answer Engines */}
      <div className="sr-only" itemScope itemType="https://schema.org/AboutPage">
        <span itemProp="name">About AI Shyp - India&apos;s Flagship White-Label Logistics OS</span>
        <span itemProp="description">
          AI Shyp empowers courier franchises, regional aggregators, and D2C brands across India to launch their own branded shipping software on a custom domain with 14+ direct carrier APIs, automated WhatsApp NDR, and 0% commission split. Founded by logistics  Mohit Panwar.
        </span>
      </div>

      {/* ── 1. HERO SECTION & WHAT IS AISHYP ── */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <span className="text-slate-600">Company</span>
              </li>
              <li>/</li>
              <li className="text-[#D8331F] font-bold">About Us</li>
            </ol>
          </nav>

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>ABOUT AISHYP • INDIA&apos;S 100% WHITE-LABEL COURIER OS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight uppercase"
          >
            What is AI Shyp? <br />
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
              Logistics Software Built for True Independence.
            </span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            AI Shyp is India&apos;s leading turnkey multi-tenant logistics operating system. We enable shipping businesses, regional courier franchises, and e-commerce brands to launch their own fully-branded shipping aggregator portal on their custom domain in under 24 hours—with zero commission cuts and complete operational autonomy.
          </motion.p>

          {/* Quick Anchor Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#about-aishyp"
              className="bg-[#D8331F] hover:bg-[#c02816] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5"
            >
              <span>Explore AIshyp Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#mission-vision"
              className="border border-slate-300 text-slate-800 hover:bg-slate-50 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              Our Mission &amp; Vision
            </a>
            <a
              href="#leader"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              Our Boss &amp; Leader
            </a>
            <a
              href="#team"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              Meet Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT IS AISHYP (DEEP DIVE SECTION) ── */}
      <section id="about-aishyp" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24">
        {/* Fast Stats Strip */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="border-r border-slate-800/80 last:border-none p-2">
              <p className="text-3xl sm:text-4xl font-black text-[#FF8A6E]">100%</p>
              <p className="text-xs font-bold text-slate-300 uppercase mt-1">White-Label</p>
              <p className="text-[11px] text-slate-400">Your domain &amp; brand</p>
            </div>
            <div className="border-r border-slate-800/80 last:border-none p-2">
              <p className="text-3xl sm:text-4xl font-black text-white">14+</p>
              <p className="text-xs font-bold text-slate-300 uppercase mt-1">Courier APIs</p>
              <p className="text-[11px] text-slate-400">Delhivery, BlueDart, DTDC</p>
            </div>
            <div className="border-r border-slate-800/80 last:border-none p-2">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">0%</p>
              <p className="text-xs font-bold text-slate-300 uppercase mt-1">Commission Split</p>
              <p className="text-[11px] text-slate-400">Retain 100% shipping profits</p>
            </div>
            <div className="p-2">
              <p className="text-3xl sm:text-4xl font-black text-white">&lt; 120ms</p>
              <p className="text-xs font-bold text-slate-300 uppercase mt-1">Rate Engine</p>
              <p className="text-[11px] text-slate-400">Real-time pin-code lookup</p>
            </div>
          </div>
        </div>

        {/* Narrative Card: Why AI Shyp Exists */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <span className="text-[11px] font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full">
              // The Architecture &amp; Solution
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Deployed in &lt; 24 Hours • Hosted on AWS
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                Stop Building Someone Else&apos;s Brand. <br />
                <span className="text-[#D8331F]">Own Your Logistics Empire.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                For years, independent courier franchisees and emerging shipping aggregators in India were trapped between two brutal choices: spend ₹20L+ and 9+ months trying to code custom logistics software from scratch, or sign with legacy aggregators that hijack customer relationships, print their own logos on thermal labels, and take an unfair 5% to 15% cut of gross turnover.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong>AI Shyp solves this forever.</strong> We provide the entire backend, frontend, tracking webhooks, thermal label generators, and multi-carrier API mesh ready out-of-the-box. You launch under your company name, on your own domain (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">ship.yourbrand.com</code>), connect your own courier accounts or commercial slabs, and keep every single rupee of profit.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Globe className="w-4 h-4 text-[#D8331F]" />
                  <span>100% White-Label Platform</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Your custom logo, brand colors, custom domain, and zero AI Shyp watermarks on labels or customer portals.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>14+ Direct Courier Partner APIs</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, DP World B2B cargo &amp; Shopify 1-click order sync.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>Automated WhatsApp NDR Recovery</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Rescues up to 35% of failed doorstep deliveries automatically with buyer WhatsApp interactive confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR MISSION & OUR VISION ── */}
      <section id="mission-vision" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full inline-block">
            // Guiding Compass • Purpose &amp; Destination
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Mission &amp; Our Vision
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Everything we build is anchored by two fundamental commitments to the logistics ecosystem of India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ── MISSION CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-red-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all space-y-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-red-50 rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#D8331F] text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                Democratize Institutional-Grade Shipping Tech for Every Logistics Entrepreneur
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To liberate Indian courier franchises, regional hubs, and growing D2C brands from predatory middleman commissions and technical paralysis by providing turnkey, institutional-grade shipping aggregation software that launches on their domain in under 24 hours.
              </p>
            </div>

            <div className="relative z-10 space-y-2.5 pt-2 border-t border-slate-100">
              <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Our Core Commitments:
              </p>
              {MISSION_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D8331F] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── VISION CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-950 text-white border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(15,23,42,0.4)] transition-all space-y-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(ellipse_at_top_right,rgba(216,51,31,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FF8A6E] text-xs font-bold uppercase tracking-wider">
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                Power India&apos;s Most Sovereign, Decentralized &amp; High-Velocity Logistics Mesh
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                To build an interconnected digital logistics backbone where 10,000+ independent courier partners operate sovereign software, orchestrating millions of daily parcels with sub-120ms rate calculations, autonomous computer-vision OCR, and daily automated T+1 cash settlements.
              </p>
            </div>

            <div className="relative z-10 space-y-2.5 pt-2 border-t border-slate-800">
              <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Where We Are Heading:
              </p>
              {VISION_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. OUR BOSS / LEADER SPOTLIGHT SECTION ── */}
      <section id="leader" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full inline-block">
            // Visionary Leadership • Our Boss &amp; Founder
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Meet Our Leader: Mohit Panwar
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Combining a decade of ground-level freight execution with full-stack platform architecture.
          </p>
        </div>

        {/* Featured Boss Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Leader Image & Floating Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-950 group">
                <Image
                  src="/image.png"
                  alt="Mohit Panwar - Founder & Leader at AI Shyp"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-85" />

                {/* Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/90 border border-red-800/80 text-[#FF8A6E] font-mono text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Founder &amp; Chief Technology Officer</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    Mohit Panwar
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">
                    10+ Years DTDC  • Logistics Architect
                  </p>
                </div>
              </div>

              {/* Leader Metrics */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-5">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <p className="text-lg font-black text-[#D8331F]">10+ Years</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Logistics Roots</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <p className="text-lg font-black text-slate-900">14+ APIs</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Protocols Mastered</p>
                </div>
              </div>
            </div>

            {/* Leader Bio & Mission Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
                  The Founder&apos;s Journey &amp; Ethos
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                  &ldquo;I built AI Shyp so every franchise owner can own their tech and keep 100% of their profits.&rdquo;
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Mohit Panwar didn&apos;t conceptualize AI Shyp from an isolated software incubator. His insights were forged across <strong>over a decade of frontline ground execution at DTDC Express</strong>—one of India&apos;s pioneer courier networks.
                </p>
                <p>
                  Having managed daily hub manifests, 3-inch barcode label printer calibrations, cash-on-delivery reconciliation nightmares, and late-night dispatch crunches, Mohit saw firsthand how franchise owners and local logistics entrepreneurs were systematically squeezed by tech middlemen who confiscated customer loyalty and drained profit margins.
                </p>
                <p>
                  Under Mohit&apos;s leadership, AI Shyp was built with pure engineering discipline: sub-120ms rate calculators, bulletproof isolated tenant databases, automated WhatsApp non-delivery workflow engines, and zero vendor lock-in.
                </p>
              </div>

              {/* Direct Founder Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hands-on architectural leadership</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deep DTDC &amp; carrier API expertise</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-bureaucracy mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct founder support for franchises</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/mohitpanwar2111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Connect with Mohit on LinkedIn</span>
                  <span>→</span>
                </a>
                <Link
                  href="/contact"
                  className="border border-slate-300 text-slate-800 hover:bg-slate-50 px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Schedule Founder Consultation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 5. MEET OUR TEAM SECTION ── */}
      <section id="team" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200 rounded-full inline-block">
            // Core Squad • The Builders
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Meet Our Core Engineering &amp; Development Team
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            The talented full-stack systems architects, backend developers, and cloud DevOps specialists behind AI Shyp&apos;s lightning-fast platform.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* Photo & Role Tag */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 group-hover:scale-105 transition-transform">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#D8331F] uppercase px-2 py-0.5 bg-red-50 rounded border border-red-100">
                      {member.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Row with Social Links */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">AI Shyp Core</span>
                <div className="flex items-center gap-2 text-[#D8331F] font-bold text-xs">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. LIFE & CULTURE CROSS-LINK CARD ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest px-2.5 py-0.5 bg-white border border-emerald-200 rounded-md inline-block">
              // Life, Values &amp; Celebrations
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Curious About Life Inside AI Shyp?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Explore our engineering culture, core values of extreme ownership, milestone celebrations, and office moments.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/culture"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore Culture @ AIshyp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CLOSING CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-36 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.25)_0%,transparent_70%)] pointer-events-none" />

          <span className="text-[10.5px] font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full inline-block">
            // Start Your Logistics Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Build Your Own Sovereign Courier Aggregator?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Talk directly to Mohit Panwar and our platform specialists to launch on your domain in &lt; 24 hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3 text-xs sm:text-sm font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Schedule Platform Demo →
            </Link>
            <Link
              href="/pricing"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold inline-block transition-colors"
            >
              Explore SaaS Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
