"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import FAQ from "../../components/FAQ";
import { buildFaqSchema } from "../../data/faq";
import { getContactPageSchema, getBreadcrumbSchema } from "../../lib/seo";

// ── INLINE SVG ICONS (MATCHING APPLE-STYLE DESIGN SYSTEM) ──
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

function PhoneIcon({ className = "w-5 h-5" }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.26-1.94 1.34-.51.08-1.18.11-3.41-.81-2.84-1.18-4.67-4.08-4.81-4.27-.14-.19-1.16-1.55-1.16-2.95 0-1.4 1.05-2.08 1.42-2.37.28-.22.61-.28.81-.28.2 0 .41.01.59.01.19 0 .44-.07.69.53.25.61.86 2.1.94 2.25.08.16.14.34.03.55-.11.22-.16.35-.32.55-.16.19-.34.43-.49.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.11 2.29 1.45 2.62 1.61.33.16.52.14.71-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.91.9 2.24 1.07.33.16.55.25.63.38.08.14.08.79-.16 1.47z" />
    </svg>
  );
}

function LocationIcon({ className = "w-5 h-5" }) {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

// ── ONBOARDING FAQS FOR CONTACT PAGE ──
const ONBOARDING_FAQS = [
  {
    id: "contact-faq-1",
    category: "Onboarding & Launch",
    question: "How quickly can our white-label courier platform go live?",
    answer:
      "Most white-label deployments go live within 24 to 48 hours. Our engineering team provisions your isolated cloud instance, binds your custom domain (e.g., ship.yourbrand.com), and configures SSL certificates immediately upon onboarding.",
  },
  {
    id: "contact-faq-2",
    category: "Courier APIs",
    question: "Can we connect our own courier API commercial contracts?",
    answer:
      "Yes. You have complete flexibility: connect your own direct corporate API keys from Delhivery, BlueDart, DTDC, Xpressbees, and Shadowfax, or use AIShyp pre-integrated tier slabs with high-discount volume rates.",
  },
  {
    id: "contact-faq-3",
    category: "Commission & Margins",
    question: "Does AIShyp take any revenue share or commission per shipment?",
    answer:
      "Zero commission. AIShyp operates strictly on a predictable flat SaaS software model. You define custom buy/sell shipping rate cards for your merchants or franchise outlets and keep 100% of the margin spread.",
  },
  {
    id: "contact-faq-4",
    category: "Franchise & Multi-Tenant",
    question: "How does sub-franchise and branch counter management work?",
    answer:
      "Our built-in multi-tenant architecture allows you to create unlimited sub-agent and branch counters with role-based access, cash collection logging, individual merchant wallets, and isolated rate slabs.",
  },
  {
    id: "contact-faq-5",
    category: "Tech Support & SLA",
    question: "What technical support and SLA guarantees are provided?",
    answer:
      "All plans include direct WhatsApp and phone support with our dedicated platform engineering squad, 99.9% uptime SLA, automated daily backups, and continuous carrier API maintenance.",
  },
];

const QUICK_CHANNELS = [
  {
    label: "DIRECT CALL LINE",
    value: "+91 7045814007",
    href: "tel:+917045814007",
    subtext: "Mon–Sat, 9:30 AM – 7:30 PM",
    badge: "Instant Call",
    badgeColor: "bg-red-50 text-[#D8331F] border-red-200",
    icon: PhoneIcon,
    iconWrapper: "bg-red-50 text-[#D8331F] border-red-200/80",
  },
  {
    label: "PRIORITY EMAIL",
    value: "mohit@vizlabs.in",
    href: "mailto:mohit@vizlabs.in",
    subtext: "< 2 Hour Engineering SLA",
    badge: "Direct Inbox",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: MailIcon,
    iconWrapper: "bg-blue-50 text-blue-700 border-blue-200/80",
  },
  {
    label: "WHATSAPP INSTANT",
    value: "+91 7045814007",
    href: "https://wa.me/917045814007?text=Hi%20AI%20Shyp%20Team%2C%20I%20want%20to%20know%20more%20about%20launching%20our%20white-label%20courier%20aggregator%20platform.",
    subtext: "Live Chat with Founders",
    badge: "Online Now",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: WhatsAppIcon,
    iconWrapper: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
  },
  {
    label: "ENGINEERING HQ",
    value: "Gurgaon, NCR, India",
    href: null,
    subtext: "Logistics Tech Hub",
    badge: "India Office",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    icon: LocationIcon,
    iconWrapper: "bg-amber-50 text-amber-700 border-amber-200/80",
  },
];

const ONBOARDING_TIMELINE = [
  {
    step: "01",
    title: "Request Assessment",
    duration: "15 Mins",
    desc: "Our platform engineering team analyzes your shipping volumes, carrier relationships, and target territory.",
  },
  {
    step: "02",
    title: "1-on-1 Demo & Commercials",
    duration: "30 Mins",
    desc: "Personalized walkthrough of our white-label portal, courier rate engine, margin markup controls, and NDR engine.",
  },
  {
    step: "03",
    title: "Custom Domain & API Setup",
    duration: "< 24 Hours",
    desc: "We bind ship.yourbrand.com, configure SSL certificates, and plug direct courier API keys into your tenant instance.",
  },
  {
    step: "04",
    title: "Production Launch & Scale",
    duration: "Live",
    desc: "Onboard merchants and franchise counters immediately with 24/7 engineering support and 0% revenue share taken.",
  },
];

const SOLUTION_PILLS = [
  "Launch White-Label Aggregator",
  "Courier Franchise Software",
  "14+ Courier Direct APIs",
  "Shopify / E-Commerce Sync",
  "Enterprise SLA & Volume Rates",
];

const INPUT_CLASS =
  "w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 placeholder-slate-400 outline-none focus:bg-white focus:border-[#D8331F] focus:ring-2 focus:ring-[#D8331F]/15 transition-all font-medium";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Launch White-Label Aggregator",
    shipmentVolume: "100 - 500 shipments/day",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactSchema = getContactPageSchema();
  const contactBreadcrumbSchema = getBreadcrumbSchema([
    { name: "Contact & Onboarding", item: "/contact" },
  ]);
  const faqSchema = buildFaqSchema(ONBOARDING_FAQS);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSubject = (subjectName) => {
    setFormData((prev) => ({ ...prev, subject: subjectName }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Phone, Subject, and Details).");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        subject: formData.subject.trim(),
        message: `${formData.message.trim()}\n\nSelected Daily Shipment Volume: ${formData.shipmentVolume || "Not specified"}`,
      };

      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit inquiry");
      }

      toast.success("Inquiry submitted successfully! Our logistics team will connect within 2 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Launch White-Label Aggregator",
        shipmentVolume: "100 - 500 shipments/day",
        message: "",
      });
    } catch (err) {
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD SCHEMAS FOR SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. APPLE-STYLE HERO SECTION WITH AMBIENT RADIAL GLOW ── */}
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
            <span className="text-[#D8331F] font-bold">Contact &amp; Onboarding</span>
          </div>

          {/* Minimal Pill Badge with SparklesIcon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>Direct Onboarding &amp; Platform Engineering Squad</span>
          </motion.div>

          {/* High-Impact Headline with Brand Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Talk to Platform Specialists:{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
              Deploy Your Aggregator in &lt; 24 Hours
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Whether you are launching a white-label courier aggregator, setting up franchise booking counters, connecting 14+ direct carrier APIs, or negotiating custom enterprise volume SLAs — our squad is ready.
          </motion.p>

          {/* SLA Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-semibold"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>&lt; 15 Min Avg SLA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>🧑‍💻 Direct Engineer Access</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>🛡️ 100% White-Label on Your Domain</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>💰 0% Platform Commission</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. QUICK CONTACT CHANNELS (APPLE-STYLE 4 CARDS) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_CHANNELS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${card.iconWrapper}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[9.5px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full border ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {card.label}
                  </p>

                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm sm:text-[15px] font-extrabold font-sans text-slate-900 hover:text-[#D8331F] transition-colors truncate block mt-0.5"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-[15px] font-extrabold font-sans text-slate-900 truncate mt-0.5">
                      {card.value}
                    </p>
                  )}
                </div>

                <p className="text-xs text-slate-500 font-medium mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>{card.subtext}</span>
                  {card.href && (
                    <span className="text-slate-400 group-hover:text-[#D8331F] font-bold transition-colors">
                      →
                    </span>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 3. MAIN FORM & SIDEBAR GRID ── */}
      <section id="contact-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inquiry & Demo Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_12px_40px_rgba(16,27,61,0.06)] space-y-6 relative overflow-hidden"
          >
            {/* Ambient Corner Red Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D8331F]/10 via-[#FF5733]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-[#D8331F] uppercase tracking-wider px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F] animate-pulse" />
                <span>Priority Inquiry &amp; Demo Request</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight mt-3">
                Schedule a 1-on-1 Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Fill in your details below. Our platform engineering squad will respond within 2 hours with customized commercials and live dashboard access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Solution Needed Pills Selector */}
              <div>
                <label className="text-xs font-bold font-sans text-slate-800 block mb-2">
                  What Solution Are You Looking For? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {SOLUTION_PILLS.map((pill) => {
                    const isSelected = formData.subject === pill;
                    return (
                      <button
                        key={pill}
                        type="button"
                        onClick={() => handleSelectSubject(pill)}
                        className={`text-xs font-sans font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#D8331F] text-white border-[#D8331F] shadow-sm scale-[1.02]"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        {pill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Full Name & Work Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Acme Logistics Pvt Ltd"
                    value={formData.company}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              {/* Shipment Volume Selector */}
              <div>
                <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                  Estimated Daily Shipment Volume
                </label>
                <select
                  name="shipmentVolume"
                  value={formData.shipmentVolume}
                  onChange={handleChange}
                  className={`${INPUT_CLASS} cursor-pointer`}
                >
                  <option value="Under 100 shipments/day">Under 100 shipments / day (Startup Plan)</option>
                  <option value="100 - 500 shipments/day">100 - 500 shipments / day (Growth Tier)</option>
                  <option value="500 - 2,000 shipments/day">500 - 2,000 shipments / day (Scale Tier)</option>
                  <option value="2,000+ shipments/day">2,000+ shipments / day (Enterprise Unlimited)</option>
                </select>
              </div>

              {/* Requirement Details */}
              <div>
                <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                  Requirement Details &amp; Objectives *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your target shipping region, current courier integrations (e.g. Delhivery, BlueDart), franchise counter plans, or custom portal requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${INPUT_CLASS} resize-none leading-relaxed`}
                />
              </div>

              {/* Form Action & Response Badge */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#D8331F] hover:bg-[#c02816] text-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{loading ? "Submitting Inquiry..." : "Schedule Platform Consultation →"}</span>
                </button>
                <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Avg Response: &lt; 2 Hours</span>
                </span>
              </div>

              <p className="text-[11px] font-sans text-slate-400 pt-1">
                🔒 100% Confidential. We respect your privacy and never share your data. Direct engineer communication guaranteed.
              </p>
            </form>
          </motion.div>

          {/* Right Column: Sidebar (Value Props, Onboarding Timeline, WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Card 1: Why Launch With AI Shyp (Luxury Dark Card) */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-5 relative overflow-hidden">
              {/* Subtle Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D8331F]/20 via-[#FF5733]/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AIShyp Competitive Edge</span>
                </span>
                <h3 className="text-xl font-extrabold font-sans text-white tracking-tight mt-2.5">
                  Why Leading Aggregators Choose AIShyp
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white">100% White-Label SaaS:</strong> Deploy on your custom domain (ship.yourbrand.com) with your own logo, color theme, and zero vendor watermarks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white">100% Margin Spread Retention:</strong> Zero AIShyp commission on shipping volume. Configure your own rate cards and keep all profits.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white">14+ Pre-Integrated APIs:</strong> Instant access to Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, and Ekart in one dashboard.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white">Automated WhatsApp NDR Engine:</strong> Recover up to 35% of failed doorstep deliveries automatically with smart buyer re-dispatch.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: 4-Step Onboarding Journey */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold font-sans text-slate-950 tracking-tight">
                  Fast 4-Step Onboarding
                </h3>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  &lt; 24h Go-Live
                </span>
              </div>

              <div className="space-y-4 font-sans relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200/80">
                {ONBOARDING_TIMELINE.map((item) => (
                  <div key={item.step} className="flex items-start gap-3.5 relative">
                    <span className="w-7 h-7 rounded-xl bg-red-50 text-[#D8331F] border border-red-200/90 flex items-center justify-center font-mono font-extrabold text-[11px] shrink-0 z-10 shadow-2xs">
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-extrabold text-slate-950">{item.title}</p>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          • {item.duration}
                        </span>
                      </div>
                      <p className="text-[11.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Instant WhatsApp Connect Card */}
            <div className="bg-emerald-50/70 rounded-3xl p-5 sm:p-6 border border-emerald-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Need Immediate Answers?</h4>
                  <p className="text-xs text-slate-600 font-medium">Chat directly with our platform founders.</p>
                </div>
              </div>
              <a
                href="https://wa.me/917045814007?text=Hi%20AI%20Shyp%20Team%2C%20I%20want%20to%20know%20more%20about%20launching%20our%20white-label%20courier%20aggregator%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 7045814007) →</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. ONBOARDING & SETUP FAQS ── */}
      <section className="mt-20">
        <FAQ
          items={ONBOARDING_FAQS}
          title="Frequently Asked Onboarding Questions"
          subtitle="Everything you need to know about white-label setup, courier APIs, commercial rate cards, and launch timelines."
          maxItems={6}
          showSearch={false}
          showCategoryFilter={false}
          showCta={false}
        />
      </section>

      {/* ── 5. LUXURY DARK CLOSING CTA BANNER (CONSISTENT WITH OTHER PAGES) ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#D8331F]/25 via-[#FF5733]/10 to-transparent blur-xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#FF8A6E] uppercase tracking-widest px-3 py-1 bg-red-950/80 border border-red-800/80 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fast Turnaround • Zero Commission</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Ready to Build Your Independent Shipping Enterprise?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed">
            Join logistics entrepreneurs, courier franchises, and e-commerce aggregators across India scaling on AI Shyp OS.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-form"
              className="bg-[#D8331F] text-white rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#c02816] transition-all hover:scale-105"
            >
              Schedule Platform Demo →
            </a>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all"
            >
              View 0% Commission Plans
            </Link>
            <Link
              href="/features"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all"
            >
              Explore 10 OS Modules
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}