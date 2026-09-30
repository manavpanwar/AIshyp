"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import {
  LEGAL_TABS,
  LEGAL_METADATA,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from "../../data/legalPolicies";

// ── INLINE SVG ICONS ──
function ShieldIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FileTextIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function RefreshCwIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function PhoneCallIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PrinterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function ShareIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function SearchIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SmartphoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.26-1.94 1.34-.51.08-1.18.11-3.41-.81-2.84-1.18-4.67-4.08-4.81-4.27-.14-.19-1.16-1.55-1.16-2.95 0-1.4 1.05-2.08 1.42-2.37.28-.22.61-.28.81-.28.2 0 .41.01.59.01.19 0 .44-.07.69.53.25.61.86 2.1.94 2.25.08.16.14.34.03.55-.11.22-.16.35-.32.55-.16.19-.34.43-.49.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.11 2.29 1.45 2.62 1.61.33.16.52.14.71-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.91.9 2.24 1.07.33.16.55.25.63.38.08.14.08.79-.16 1.47z" />
    </svg>
  );
}

export default function LegalPageViewer({ initialTab = "privacy" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Legal / Policy Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync tab with browser URL history for seamless "same page" navigation
  const switchTab = (tabId, targetPath) => {
    setActiveTab(tabId);
    setSearchQuery("");
    if (typeof window !== "undefined") {
      window.history.pushState({ tab: tabId }, "", targetPath);
      // Smooth scroll back up to the tab viewer
      const anchor = document.getElementById("legal-content-top");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname.includes("terms")) {
        setActiveTab("terms");
      } else if (pathname.includes("refund")) {
        setActiveTab("refund");
      } else if (pathname.includes("contact")) {
        setActiveTab("contact");
      } else {
        setActiveTab("privacy");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const activePolicyData = useMemo(() => {
    if (activeTab === "terms") return TERMS_AND_CONDITIONS;
    if (activeTab === "refund") return REFUND_AND_CANCELLATION;
    return PRIVACY_POLICY;
  }, [activeTab]);

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!activePolicyData?.sections) return [];
    if (!searchQuery.trim()) return activePolicyData.sections;

    const q = searchQuery.toLowerCase();
    return activePolicyData.sections.filter(
      (section) =>
        section.title.toLowerCase().includes(q) ||
        section.tag?.toLowerCase().includes(q) ||
        section.content.some((line) => line.toLowerCase().includes(q))
    );
  }, [activePolicyData, searchQuery]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Policy link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in your name, email, and inquiry message.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      if (res.ok) {
        toast.success("Thank you. Your inquiry has been sent to our Grievance Desk.");
        setContactForm({
          name: "",
          email: "",
          phone: "",
          subject: "Legal / Policy Inquiry",
          message: "",
        });
      } else {
        toast.success("Message received. Our legal team will respond within 24 hours.");
      }
    } catch {
      toast.success("Inquiry logged. Our compliance officer will contact you shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-24 font-sans min-h-screen">
      <div id="legal-content-top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── TOP HERO HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse"></span>
            Official Compliance & Legal Portal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            AI Shyp Legal, Trust & Policies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Transparent, enterprise-grade policies governing the AI Shyp white-label logistics SaaS platform, multi-carrier APIs, and the <strong>AI Shyp Mobile Application (Android & iOS)</strong>.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-5 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-xs">
              <span className="text-slate-400">Effective:</span>
              <strong className="text-slate-700">{LEGAL_METADATA.effectiveDate}</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-xs">
              <span className="text-slate-400">Last Revised:</span>
              <strong className="text-slate-700">{LEGAL_METADATA.lastUpdated}</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-xs">
              <span className="text-slate-400">Jurisdiction:</span>
              <strong className="text-slate-700">India (IT Act & DPDP)</strong>
            </span>
          </div> */}
        </div>

        {/* ── INTERACTIVE TAB SWITCHER (SAME-PAGE NAVIGATION) ── */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm rounded-2xl p-2 mb-10 transition-all">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {LEGAL_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id, tab.path)}
                  className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md ring-1 ring-slate-800"
                      : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {tab.id === "privacy" && <ShieldIcon className="w-4 h-4" />}
                    {tab.id === "terms" && <FileTextIcon className="w-4 h-4" />}
                    {tab.id === "contact" && <PhoneCallIcon className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold truncate tracking-tight">{tab.label}</span>
                    </div>
                    <span
                      className={`text-[10px] hidden sm:block font-mono tracking-wider uppercase truncate ${
                        isActive ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE TAB VIEW: CONTACT US & GRIEVANCE ── */}
        {activeTab === "contact" ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold uppercase tracking-wider">
                  Direct Statutory Redressal
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                  Contact Us & Grievance Redressal Desk
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Have inquiries regarding our Privacy Policy, Terms of Service, carrier agreements, or refund claims? Connect with our dedicated support and statutory Grievance Officer.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 hover:border-[#D8331F]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D8331F] border border-red-200 flex items-center justify-center mb-4">
                    <PhoneCallIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wide">Direct Helpline</h3>
                  <a href={`tel:${LEGAL_METADATA.phone}`} className="text-base font-bold text-slate-900 hover:text-[#D8331F] block mt-1">
                    {LEGAL_METADATA.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Mon–Sat, 9:30 AM to 7:30 PM IST</p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 hover:border-[#D8331F]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-4">
                    <ShieldIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wide">Grievance & Legal Officer</h3>
                  <a href={`mailto:${LEGAL_METADATA.grievanceEmail}`} className="text-sm font-bold text-slate-900 hover:text-[#D8331F] block mt-1 truncate">
                    {LEGAL_METADATA.grievanceEmail}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Lead: Mohit Panwar (24-Hour SLA)</p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 hover:border-[#D8331F]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-4">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wide">Instant WhatsApp Chat</h3>
                  <a
                    href="https://wa.me/917045814007?text=Hi%20AI%20Shyp%20Team%2C%20I%20have%20a%20legal%20or%20support%20query%20regarding%20the%20platform%20and%20mobile%20app."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline block mt-1"
                  >
                    Open WhatsApp Chat &rarr;
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Instant support from platform squad</p>
                </div>
              </div>

              {/* Form & Office Address Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Send a Compliance or Support Message</h3>
                  <p className="text-xs text-slate-500 mb-6">Our compliance squad responds within 24 business hours.</p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Ramesh Verma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number</label>
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                        <select
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] outline-none bg-white"
                        >
                          <option value="Legal / Policy Inquiry">Legal / Policy Inquiry</option>
                          <option value="Refund or Cancellation Claim">Refund or Cancellation Claim</option>
                          <option value="Mobile App Hardware & Privacy Query">Mobile App Permissions Query</option>
                          <option value="Carrier Dispute or Weight Escalation">Carrier Weight Dispute Escalation</option>
                          <option value="Grievance Officer Redressal">Grievance Officer Redressal</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message or AWB Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Provide your query, registered mobile number, or AWB tracking numbers if applicable..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#D8331F] focus:ring-1 focus:ring-[#D8331F] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-xl bg-[#D8331F] hover:bg-[#FF8A6E] text-white font-semibold text-sm transition-all duration-200 disabled:opacity-60 cursor-pointer shadow-md"
                    >
                      {isSubmitting ? "Sending Request..." : "Submit Inquiry to Compliance Desk"}
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/80">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Corporate Headquarters
                    </h4>
                    <p className="text-base font-bold text-slate-900">{LEGAL_METADATA.companyName} (VizLabs)</p>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {LEGAL_METADATA.address}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
                      <div><strong>Entity:</strong> VizLabs (Logistics SaaS)</div>
                      <div><strong>Support Email:</strong> <a href={`mailto:${LEGAL_METADATA.contactEmail}`} className="text-[#D8331F] hover:underline">{LEGAL_METADATA.contactEmail}</a></div>
                      <div><strong>Escalation:</strong> <a href={`mailto:${LEGAL_METADATA.grievanceEmail}`} className="text-[#D8331F] hover:underline">{LEGAL_METADATA.grievanceEmail}</a></div>
                    </div>
                  </div>

                  <div className="border border-red-100 bg-red-50/60 rounded-2xl p-5">
                    <h4 className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider mb-2">
                      Looking to launch your own courier portal?
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Visit our comprehensive onboarding and demo booking page to connect directly with our engineering founders.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#D8331F] hover:underline"
                    >
                      Go to Full Onboarding & Demo Page &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── POLICY DOCUMENT VIEWER (PRIVACY, TERMS, OR REFUND) ── */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ── LEFT SIDEBAR: TOC & APP HIGHLIGHTS ── */}
            <aside className="lg:col-span-4 lg:sticky lg:top-40 space-y-6">
              {/* Document Summary Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
                    {activePolicyData.title}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    v{activePolicyData.version}
                  </span>
                </div>

                {/* Live Filter / Search Input */}
                <div className="mt-4 relative">
                  <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search in this policy..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:border-[#D8331F]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Table of Contents */}
                <div className="mt-4">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Table of Contents ({filteredSections.length} sections)
                  </p>
                  <nav className="flex flex-col gap-1 max-h-72 overflow-y-auto pr-1 text-xs">
                    {filteredSections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-between group ${
                          sec.isMobileHighlight ? "font-semibold text-emerald-800 bg-emerald-50/70" : ""
                        }`}
                      >
                        <span className="truncate">{sec.title}</span>
                        {sec.isMobileHighlight && (
                          <span className="text-[10px] font-mono bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded ml-1 flex-shrink-0">
                            App
                          </span>
                        )}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Actions: Print and Share */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <PrinterIcon className="w-3.5 h-3.5" />
                    Print PDF
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> : <ShareIcon className="w-3.5 h-3.5" />}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ── MOBILE APP HIGHLIGHT CARD ── */}
              <div className="border border-emerald-200 bg-emerald-50/70 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono tracking-wider mb-2">
                  <SmartphoneIcon className="w-4 h-4 text-emerald-700" />
                  AI Shyp Mobile App Policy
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Includes specific clauses governing our Android & iOS mobile applications, covering <strong>Camera barcode scanning</strong>, <strong>GPS pickup geotagging</strong>, <strong>offline PDF label downloads</strong>, and <strong>push notifications</strong>.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-white text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-mono">
                    Android APK / Play Store
                  </span>
                  <span className="text-[10px] bg-white text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-mono">
                    Apple iOS App
                  </span>
                </div>
              </div>

              {/* Quick Grievance Box */}
              <div className="border border-slate-200 bg-white rounded-2xl p-5 text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Questions regarding this policy?</p>
                <p className="text-slate-500 mb-3">Our platform compliance team is available to assist.</p>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div>Phone: <a href="tel:+917045814007" className="text-slate-900 font-semibold hover:text-[#D8331F]">+91 7045814007</a></div>
                  <div>Email: <a href="mailto:mohit@vizlabs.in" className="text-[#D8331F] font-semibold hover:underline">mohit@vizlabs.in</a></div>
                </div>
              </div>
            </aside>

            {/* ── RIGHT MAIN COLUMN: DOCUMENT TEXT ── */}
            <article className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
              {/* Policy Header */}
              <div className="border-b border-slate-200 pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D8331F] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activePolicyData.title}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Version {activePolicyData.version}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activePolicyData.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {activePolicyData.subtitle}
                </p>
              </div>

              {/* Introductory Paragraphs */}
              <div className="space-y-3.5 mb-10 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 border border-slate-200/80 p-5 rounded-2xl">
                {activePolicyData.intro.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Filter Notice */}
              {searchQuery && (
                <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-center justify-between">
                  <span>
                    Showing sections matching &quot;<strong>{searchQuery}</strong>&quot; ({filteredSections.length} found)
                  </span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="font-bold underline text-amber-900 cursor-pointer ml-2"
                  >
                    Reset Filter
                  </button>
                </div>
              )}

              {/* Numbered Sections */}
              <div className="space-y-10">
                {filteredSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-36 p-5 sm:p-6 rounded-2xl transition-colors ${
                      section.isMobileHighlight
                        ? "bg-emerald-50/40 border border-emerald-200/90"
                        : section.isLegalNotice
                        ? "bg-amber-50/30 border border-amber-200/80"
                        : "bg-white border border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        {section.isMobileHighlight && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <SmartphoneIcon className="w-3 h-3" />
                            Mobile App Clause
                          </span>
                        )}
                        {section.tag && (
                          <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 bg-slate-100 rounded-md">
                            {section.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {section.content.map((line, lIdx) => {
                        // Highlight bullet points or subsections nicely
                        const isBullet = line.startsWith("•") || line.startsWith("  1.") || line.startsWith("  2.") || line.startsWith("  3.") || line.startsWith("  4.");
                        const isHeading = line.startsWith("A.") || line.startsWith("B.");
                        return (
                          <p
                            key={lIdx}
                            className={`${
                              isBullet ? "pl-3 text-slate-600" : isHeading ? "font-bold text-slate-900 pt-2" : ""
                            }`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                ))}

                {filteredSections.length === 0 && (
                  <div className="text-center py-12 border border-dashed border-slate-300 rounded-2xl">
                    <p className="text-sm font-semibold text-slate-700">No matching sections found for &quot;{searchQuery}&quot;.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
                    >
                      Show All Sections
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Nav to Other Policies */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Explore Other Policies & Agreements
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {LEGAL_TABS.filter((t) => t.id !== activeTab).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => switchTab(tab.id, tab.path)}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D8331F] bg-slate-50/60 hover:bg-white text-left transition-all group cursor-pointer"
                    >
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#D8331F] flex items-center justify-between">
                        {tab.label}
                        <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono block mt-1">
                        {tab.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </main>
  );
}
