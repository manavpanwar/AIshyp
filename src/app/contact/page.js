"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const INFO_CARDS = [
  {
    label: "DIRECT PHONE",
    value: "+91 7045814007",
    href: "tel:+917045814007",
    subtext: "Call Support • Mon-Sat",
    icon: "📞",
    accentBg: "bg-red-50 text-[#D8331F] border-red-200",
  },
  {
    label: "PRIORITY EMAIL",
    value: "mohit@vizlabs.in",
    href: "mailto:mohit@vizlabs.in",
    subtext: "< 2 Hour Response",
    icon: "✉️",
    accentBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    label: "HQ LOCATION",
    value: "Gurgaon, NCR, India",
    href: null,
    subtext: "Main Tech Hub",
    icon: "📍",
    accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    label: "SUPPORT HOURS",
    value: "Mon–Sat, 9:30 AM – 7:00 PM IST",
    href: null,
    subtext: "Dedicated Onboarding",
    icon: "⏰",
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const ONBOARDING_STEPS = [
  {
    step: "1",
    title: "Request Assessment",
    desc: "Our platform engineering team reviews your shipping volume and target territory.",
  },
  {
    step: "2",
    title: "1-on-1 Demo & Commercials",
    desc: "We walk you through our white-label portal, courier rate engine, and margin controls.",
  },
  {
    step: "3",
    title: "Domain & API Setup",
    desc: "Map your custom domain (ship.yourbrand.com) and plug direct courier API keys.",
  },
  {
    step: "4",
    title: "Live Go-Live & Support",
    desc: "Onboard your merchants and scale recurring revenue with dedicated tech support.",
  },
];

const INPUT_CLASS =
  "w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3.5 text-sm text-slate-950 placeholder-slate-400 outline-none focus:bg-white focus:border-[#D8331F] focus:ring-2 focus:ring-[#D8331F]/10 transition-all font-medium";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    shipmentVolume: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: `${formData.message}\n\nDaily Shipment Volume: ${formData.shipmentVolume || "Not provided"}`,
      };

      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit enquiry");
      }

      toast.success("Enquiry submitted successfully! Our team will contact you within 2 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        shipmentVolume: "",
        message: "",
      });
    } catch (err) {
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      
      {/* ── 1. CLEAN APPLE-STYLE HERO SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
          <span>// Direct Onboarding & Engineering Support</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
        >
          Talk to our platform <br className="hidden sm:inline" />
          <span className="text-[#D8331F]">logistics specialists.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed"
        >
          Whether you want to launch a white-label shipping aggregator portal, connect 14+ direct courier APIs, or request an enterprise SLA — our engineering squad is ready.
        </motion.p>
      </section>

      {/* ── 2. INFO CARDS GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFO_CARDS.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 border ${card.accentBg}`}
              >
                {card.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {card.label}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-sm font-extrabold font-sans text-slate-950 hover:text-[#D8331F] transition-colors truncate block"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm font-extrabold font-sans text-slate-950 truncate">
                    {card.value}
                  </p>
                )}
                <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                  {card.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. MAIN FORM & SIDEBAR GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6"
          >
            <div>
              <span className="text-[11px] font-mono font-bold text-[#D8331F] uppercase tracking-widest px-3 py-1 bg-red-50 border border-red-200/80 rounded-full">
                // Direct Inquiry Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight mt-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Fill in your details and our team will get back to you within 2 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Rahul Sharma"
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
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Pvt. Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Enquiry Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${INPUT_CLASS} cursor-pointer`}
                  >
                    <option value="">Select subject</option>
                    <option value="Launch White-Label Portal">Launch White-Label Aggregator Portal</option>
                    <option value="Shopify Shipping Integration">Shopify Shipping Integration</option>
                    <option value="Courier Direct APIs">14+ Courier Direct APIs</option>
                    <option value="Enterprise SLA & Volume Rates">Enterprise SLA & Volume Rates</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                    Daily Shipment Volume
                  </label>
                  <select
                    name="shipmentVolume"
                    value={formData.shipmentVolume}
                    onChange={handleChange}
                    className={`${INPUT_CLASS} cursor-pointer`}
                  >
                    <option value="">Select volume range</option>
                    <option value="Under 100 shipments/day">Under 100 shipments/day</option>
                    <option value="100 - 500 shipments/day">100 - 500 shipments/day</option>
                    <option value="500 - 2,000 shipments/day">500 - 2,000 shipments/day</option>
                    <option value="2,000+ shipments/day">2,000+ shipments/day (Unlimited)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold font-sans text-slate-800 block mb-1.5">
                  Requirement Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your target shipping region, current courier partners, or custom platform needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${INPUT_CLASS} resize-none leading-relaxed`}
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#D8331F] text-white rounded-full px-8 py-4 text-xs font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Submitting Request..." : "Submit Inquiry →"}
                </button>
                <span className="text-xs font-mono font-bold text-slate-400">
                  ⚡ Avg Response: &lt; 2 Hours
                </span>
              </div>
            </form>
          </motion.div>

          {/* Sidebar Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Why Partner Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-4">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                Why AIShyp OS
              </span>
              <h3 className="text-xl font-extrabold font-sans text-white tracking-tight">
                Why Launch With AIShyp?
              </h3>
              <ul className="space-y-3 text-xs text-slate-300 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong>100% White-Label SaaS:</strong> Deploy on your custom domain (ship.yourbrand.com) with your brand colors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong>100% Gross Margin Retention:</strong> Configure custom buy/sell rate slabs and keep 100% of profit markups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong>14+ Courier Direct APIs:</strong> Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax & DP World pre-integrated.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong>Automated WhatsApp NDR:</strong> Recover up to 35% of failed deliveries automatically.</span>
                </li>
              </ul>
            </div>

            {/* What Happens Next Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-lg font-extrabold font-sans text-slate-950 tracking-tight">
                What Happens Next?
              </h3>
              <div className="space-y-3 font-sans">
                {ONBOARDING_STEPS.map((st) => (
                  <div key={st.step} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-red-50 text-[#D8331F] border border-red-200 flex items-center justify-center font-mono font-extrabold text-xs shrink-0 mt-0.5">
                      {st.step}
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-slate-950">{st.title}</p>
                      <p className="text-[11.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone / Email Fast Contact Card */}
            <div className="bg-red-50/60 rounded-3xl p-5 border border-red-200/80 text-xs font-sans text-slate-800 space-y-1">
              <p className="font-extrabold text-slate-950">Need Immediate Assistance?</p>
              <p className="text-slate-600 font-medium">
                Call us directly at{" "}
                <a href="tel:+917045814007" className="text-[#D8331F] font-extrabold hover:underline">
                  +91 7045814007
                </a>{" "}
                or email{" "}
                <a href="mailto:mohit@vizlabs.in" className="text-[#D8331F] font-extrabold hover:underline">
                  mohit@vizlabs.in
                </a>
              </p>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}