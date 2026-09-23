"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
const DOMAIN_ENDPOINT = "/api/tenant/check-domain";
const CREATE_ENDPOINT = "/api/tenant/create";

const initialForm = {
  name: "",
  panNumber: "",
  phoneNumber: "",
  email: "",
};

const STEPS = [
  "Verifying business details",
  "Provisioning tenant database",
  "Assigning custom domain",
];

const PAN_PATTERN = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const PHONE_PATTERN = /^[0-9]{10}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RULES = {
  name: (v) => (v.trim().length >= 2 ? "" : "Enter your registered business name."),
  panNumber: (v) => (PAN_PATTERN.test(v) ? "" : "Enter a valid 10-character PAN (e.g. ABCDE1234F)."),
  phoneNumber: (v) => (PHONE_PATTERN.test(v) ? "" : "Enter a valid 10-digit mobile number."),
  email: (v) => (EMAIL_PATTERN.test(v.trim()) ? "" : "Enter a valid owner/admin email address."),
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const toHref = (domain) => (/^https?:\/\//i.test(domain) ? domain : `https://${domain}`);
const toHost = (domain) => domain.replace(/^https?:\/\//i, "").replace(/\/$/, "");

const makeRef = () =>
  "TC-" +
  Math.random().toString(36).slice(2, 6).toUpperCase() +
  "-" +
  Math.random().toString(36).slice(2, 5).toUpperCase();

export default function AccountCreatePage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | running | success | error
  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState(null);
  const [subdomain, setSubdomain] = useState("");
  const [domainStatus, setDomainStatus] = useState({ state: "idle", message: "" }); // idle | checking | available | taken
  const [refCode, setRefCode] = useState("");
  const [copied, setCopied] = useState(false);

  const timers = useRef([]);
  const loading = status === "running";

  const schedule = (fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    setRefCode(makeRef());
    return () => timers.current.forEach(clearTimeout);
  }, []);

  /* ---------- Change & Blur handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = value;

    if (name === "panNumber") {
      next = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
    }
    if (name === "phoneNumber") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
      next = digits.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: next }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setOutcome(null);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) return;
    setErrors((prev) => ({ ...prev, [name]: RULES[name](value) || undefined }));
  };

  const handleReset = () => {
    clearTimers();
    setFormData(initialForm);
    setSubdomain("");
    setDomainStatus({ state: "idle", message: "" });
    setErrors({});
    setStatus("idle");
    setStep(0);
    setOutcome(null);
    setRefCode(makeRef());
    setCopied(false);
  };

  const validate = () => {
    const next = {};
    for (const key of Object.keys(RULES)) {
      const message = RULES[key](formData[key]);
      if (message) next[key] = message;
    }

    if (!subdomain.trim() || subdomain.trim().length < 2) {
      next.subdomain = "Please choose a subdomain (at least 2 characters).";
    }

    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      const el = document.getElementById(first);
      if (el) el.focus();
      toast.error("Please fill in all required fields accurately.");
    }
    return !first;
  };

  /* ---------- Domain availability check ---------- */
  const checkDomain = async () => {
    const clean = subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    if (!clean || clean.length < 2) {
      setErrors((prev) => ({ ...prev, subdomain: "Enter at least 2 alphanumeric characters." }));
      return;
    }

    try {
      setDomainStatus({ state: "checking", message: "Checking availability..." });
      setErrors((prev) => ({ ...prev, subdomain: undefined }));

      const response = await fetch(DOMAIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: clean }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.exists) {
        setDomainStatus({
          state: "taken",
          message: data?.message || `${clean}.shipingtech.in is already taken.`,
        });
        toast.error(`${clean}.shipingtech.in is not available.`);
      } else {
        setDomainStatus({
          state: "available",
          message: `${clean}.shipingtech.in is available!`,
        });
        toast.success(`Great! ${clean}.shipingtech.in is free.`);
      }
    } catch (error) {
      console.error("Domain check error:", error);
      setDomainStatus({ state: "idle", message: "Could not verify domain. Try again." });
    }
  };

  /* ---------- Form Submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !validate()) return;

    const cleanSub = subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    const tenantPayload = {
      name: formData.name.trim(),
      panNumber: formData.panNumber,
      phoneNumber: formData.phoneNumber,
      email: formData.email.trim().toLowerCase(),
      domain: cleanSub,
      referenceCode: refCode,
    };

    clearTimers();
    setOutcome(null);
    setStep(0);
    setStatus("running");
    schedule(() => setStep(1), 500);
    schedule(() => setStep(2), 1100);

    try {
      const [response] = await Promise.all([
        fetch(CREATE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tenantPayload),
        }),
        wait(1600),
      ]);

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || data?.message || "Failed to create tenant account.");
      }

      const domain = data?.domain || `${cleanSub}.shipingtech.in`;
      const href = domain ? toHref(domain) : "";

      clearTimers();
      setOutcome({
        message: data?.message || "Shipping portal created successfully!",
        name: tenantPayload.name,
        domain,
        href,
        referenceCode: data?.tenant?.referenceCode || refCode,
      });
      setStatus("success");
      setFormData(initialForm);
      setErrors({});
      toast.success("Account created successfully!");

      if (href) {
        schedule(() => window.open(href, "_blank", "noopener,noreferrer"), 1200);
      }
    } catch (error) {
      clearTimers();
      setOutcome({ message: error?.message || "Unable to complete tenant registration." });
      setStatus("error");
      toast.error(error?.message || "Failed to create account.");
    }
  };

  const copyToClipboard = (text) => {
    if (!text) return;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80 text-slate-900 selection:bg-[#D8331F] selection:text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-48 right-1/4 w-[28rem] h-[28rem] bg-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Header Badge & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <SparklesIcon className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>AIshyp Multi-Carrier Logistics Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Launch Your Branded <span className="text-[#D8331F]">Shipping Portal</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Get instant API access to 12+ top courier networks, smart AI NDR reduction, and your custom white-labeled logistics dashboard in minutes.
          </p>
        </div>

        {/* ── 2-COLUMN SPLIT LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN: FORM SECTION (7 COLS ON DESKTOP)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-9 relative overflow-hidden transition-all">
            {/* Top Accent Gradient Line */}
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#101B3D] via-[#D8331F] to-indigo-500" />

            {status === "success" && outcome ? (
              /* ── SUCCESS VIEW ── */
              <div className="py-4 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 grid place-items-center text-emerald-600 shadow-sm">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-emerald-100/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
                    Portal Active & Ready
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {outcome.message}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    Congratulations! Your dedicated logistics portal for <strong className="text-slate-900">{outcome.name}</strong> has been provisioned and configured.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Session Reference</span>
                    <span suppressHydrationWarning className="font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {outcome.referenceCode || refCode || "TC-INIT"}
                    </span>
                  </div>
                  <div className="border-t border-dashed border-slate-200" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Portal Subdomain</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={outcome.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 break-all"
                      >
                        {toHost(outcome.domain)}
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(outcome.href)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 rounded-md transition-colors"
                        title="Copy Portal Link"
                      >
                        {copied ? (
                          <span className="text-emerald-600 text-xs font-bold">✓ Copied</span>
                        ) : (
                          <CopyIcon className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={outcome.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-[#101B3D] text-white font-semibold text-sm hover:bg-[#16225A] shadow-md transition-colors"
                  >
                    <span>Open Shipping Portal</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 h-12 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  >
                    Create Another Account
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Login instructions and admin credentials have also been linked to your registered email address.
                </p>
              </div>
            ) : (
              /* ── REGISTRATION FORM ── */
              <>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Tenant Registration Details
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out your business and domain details to initialize your portal.
                    </p>
                  </div>
                 
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Business Name Field */}
                  <FormField
                    id="name"
                    name="name"
                    label="Business / Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Acme Retail Pvt Ltd"
                    error={errors.name}
                    disabled={loading}
                    icon={<BuildingIcon className="w-5 h-5 text-slate-400" />}
                  />

                  {/* PAN & Phone Number in 2 Cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      id="panNumber"
                      name="panNumber"
                      label="Company PAN Number"
                      value={formData.panNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ABCDE1234F"
                      mono
                      maxLength={10}
                      error={errors.panNumber}
                      disabled={loading}
                      hint="10-digit entity PAN"
                      icon={<IdCardIcon className="w-5 h-5 text-slate-400" />}
                    />

                    <div>
                      <label htmlFor="phoneNumber" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                        Contact Mobile Number
                      </label>
                      <div
                        className={`flex h-12 items-center rounded-xl border bg-white transition-all focus-within:ring-3 ${
                          errors.phoneNumber
                            ? "border-rose-400 focus-within:border-rose-500 focus-within:ring-rose-100"
                            : "border-slate-300 focus-within:border-indigo-600 focus-within:ring-indigo-100"
                        }`}
                      >
                        <span className="flex items-center px-3.5 h-full rounded-l-xl bg-slate-50 border-r border-slate-200 font-mono text-sm font-medium text-slate-600 select-none">
                          +91
                        </span>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="9876543210"
                          maxLength={10}
                          disabled={loading}
                          className="min-w-0 flex-1 px-3.5 bg-transparent font-mono text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 disabled:text-slate-400"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Owner Email */}
                  <FormField
                    id="email"
                    name="email"
                    type="email"
                    label="Authorized Admin Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="owner@yourcompany.com"
                    error={errors.email}
                    disabled={loading}
                    hint="Your portal login access and invoices will be delivered here."
                    icon={<MailIcon className="w-5 h-5 text-slate-400" />}
                  />

                  {/* Subdomain Chooser */}
                  <div className="pt-2 border-t border-slate-100">
                    <label htmlFor="subdomain" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">
                      Choose Your Portal Subdomain
                    </label>
                    <div className="flex gap-2">
                      <div
                        className={`flex h-12 flex-1 items-center rounded-xl border bg-white transition-all focus-within:ring-3 overflow-hidden ${
                          errors.subdomain
                            ? "border-rose-400 focus-within:border-rose-500 focus-within:ring-rose-100"
                            : domainStatus.state === "available"
                            ? "border-emerald-500 focus-within:ring-emerald-100"
                            : "border-slate-300 focus-within:border-indigo-600 focus-within:ring-indigo-100"
                        }`}
                      >
                        <input
                          id="subdomain"
                          name="subdomain"
                          type="text"
                          value={subdomain}
                          onChange={(e) => {
                            const clean = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
                            setSubdomain(clean);
                            setDomainStatus({ state: "idle", message: "" });
                            setErrors((prev) => ({ ...prev, subdomain: undefined }));
                          }}
                          placeholder="yourbrand"
                          disabled={loading || domainStatus.state === "checking"}
                          autoComplete="off"
                          spellCheck={false}
                          className="min-w-0 flex-1 px-3.5 bg-transparent font-mono text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400"
                        />
                        <span className="flex items-center px-3 sm:px-4 h-full bg-slate-50 border-l border-slate-200 font-mono text-xs sm:text-sm text-slate-500 whitespace-nowrap select-none">
                          .shipingtech.in
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={checkDomain}
                        disabled={!subdomain.trim() || domainStatus.state === "checking" || loading}
                        className="h-12 px-4 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 flex-none shadow-xs"
                      >
                        {domainStatus.state === "checking" ? (
                          <>
                            <Spinner className="w-3.5 h-3.5" />
                            <span>Checking</span>
                          </>
                        ) : (
                          "Check"
                        )}
                      </button>
                    </div>

                    {/* Domain Status Feedback Pill */}
                    {domainStatus.state === "available" && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-600">
                        <CheckIcon className="w-4 h-4 text-emerald-600 flex-none" />
                        <span>{domainStatus.message}</span>
                      </p>
                    )}
                    {domainStatus.state === "taken" && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-rose-600">
                        <CrossIcon className="w-4 h-4 text-rose-600 flex-none" />
                        <span>{domainStatus.message}</span>
                      </p>
                    )}
                    {errors.subdomain && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.subdomain}</p>
                    )}
                  </div>

                  {/* Error Alert Box */}
                  {status === "error" && outcome && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-4 flex gap-3 items-start">
                      <AlertCircleIcon className="w-5 h-5 text-rose-600 flex-none mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-rose-800">Registration Failed</h4>
                        <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">{outcome.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Stepper Progress Bar (when creating) */}
                  {loading && (
                    <div className="py-2 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-2">
                        {STEPS.map((label, idx) => {
                          const isDone = idx < step;
                          const isActive = idx === step;
                          return (
                            <div key={label} className="flex-1 text-center">
                              <div className="flex items-center justify-center mb-1">
                                <span
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                    isDone
                                      ? "bg-emerald-600 text-white"
                                      : isActive
                                      ? "bg-indigo-600 text-white animate-pulse"
                                      : "bg-slate-200 text-slate-500"
                                  }`}
                                >
                                  {isDone ? "✓" : idx + 1}
                                </span>
                              </div>
                              <p className={`text-[10px] sm:text-xs leading-tight line-clamp-2 ${isActive ? "font-semibold text-slate-900" : "text-slate-500"}`}>
                                {label}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Submit and Clear Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#101B3D] via-[#16225A] to-[#D8331F] text-white font-semibold text-sm sm:text-base hover:opacity-95 shadow-md shadow-indigo-950/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Spinner className="w-4 h-4 text-white" />
                          <span>Creating Portal...</span>
                        </>
                      ) : (
                        <>
                          <span>Create Shipping Portal</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={loading}
                      className="h-12 px-5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 transition-colors"
                    >
                      Clear
                    </button>
                  </div>

                  {/* Trust Micro-Text */}
                  <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <LockIcon className="w-3.5 h-3.5 text-slate-400" />
                      256-bit Encrypted
                    </span>
                    <span>•</span>
                    <span>Zero Setup Fees</span>
                    <span>•</span>
                    <span>Instant API Keys</span>
                  </div>
                </form>
              </>
            )}
          </div>


          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN: IMAGE & CONTENT SHOWCASE (5 COLS)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Primary Showcase Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#101B3D] via-[#152352] to-[#0A0E1A] text-white p-6 sm:p-8 shadow-2xl border border-slate-800/80 overflow-hidden">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D8331F]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-rose-300 mb-5">
                <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
                <span>Next-Gen Logistics Engine</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                One Single Dashboard for All Your Shipping Couriers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect your business to India&apos;s leading parcel networks and automate fulfillment, billing, and NDR recovery automatically.
              </p>

              {/* Simulated Interactive Logistics Preview Box */}
              <div className="mt-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-slate-200">AI Routing Engine</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SLA: 99.9%
                  </span>
                </div>

                {/* Integrated Courier Logos Grid */}
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                    Pre-Integrated Courier Partners
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 hover:bg-white/15 transition-all">
                      <Image
                        src="/delhivery.png"
                        alt="Delhivery"
                        width={70}
                        height={24}
                        className="object-contain brightness-0 invert opacity-90 max-h-6"
                      />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 hover:bg-white/15 transition-all">
                      <Image
                        src="/bluedart.png"
                        alt="Blue Dart"
                        width={70}
                        height={24}
                        className="object-contain brightness-0 invert opacity-90 max-h-6"
                      />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 hover:bg-white/15 transition-all">
                      <Image
                        src="/dtdc.png"
                        alt="DTDC"
                        width={70}
                        height={24}
                        className="object-contain brightness-0 invert opacity-90 max-h-6"
                      />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 hover:bg-white/15 transition-all">
                      <Image
                        src="/xpressbees.png"
                        alt="Xpressbees"
                        width={70}
                        height={24}
                        className="object-contain brightness-0 invert opacity-90 max-h-6"
                      />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 hover:bg-white/15 transition-all">
                      <Image
                        src="/ekart.png"
                        alt="Ekart Logistics"
                        width={70}
                        height={24}
                        className="object-contain brightness-0 invert opacity-90 max-h-6"
                      />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center px-2 text-[11px] font-bold text-slate-300">
                      + 7 More
                    </div>
                  </div>
                </div>

                {/* Live Metric Stats */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">RTO Reduction</span>
                    <span className="text-base sm:text-lg font-bold text-emerald-400">↓ 34.2%</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Delivery Time</span>
                    <span className="text-base sm:text-lg font-bold text-indigo-300">~ 1.8 Days</span>
                  </div>
                </div>
              </div>

              {/* Feature Points List */}
              <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8331F]/20 text-[#D8331F] flex items-center justify-center flex-none mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white font-semibold">100% White-Label Portal:</strong>
                    <span className="text-slate-300 ml-1">Your own branded subdomain, custom tracking page, and logo.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8331F]/20 text-[#D8331F] flex items-center justify-center flex-none mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white font-semibold">AI Automated WhatsApp NDR:</strong>
                    <span className="text-slate-300 ml-1">Reach customers instantly to re-attempt deliveries and slash returns.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8331F]/20 text-[#D8331F] flex items-center justify-center flex-none mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white font-semibold">Instant Commercial Rates:</strong>
                    <span className="text-slate-300 ml-1">Pre-negotiated Tier-1 freight rates starting at ₹19 / 500g.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-sm">{star}</span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;Setting up our shipping portal on AIshyp took barely 3 minutes. The automated courier rate comparison and WhatsApp NDR have reduced our return shipments dramatically.&rdquo;
              </p>
             
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}


function FormField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  placeholder = "",
  mono = false,
  error,
  hint,
  disabled = false,
  maxLength,
  icon,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
        {label}
      </label>

      <div
        className={`flex h-12 items-center rounded-xl border bg-white px-3.5 transition-all focus-within:ring-3 ${
          error
            ? "border-rose-400 focus-within:border-rose-500 focus-within:ring-rose-100"
            : "border-slate-300 focus-within:border-indigo-600 focus-within:ring-indigo-100"
        }`}
      >
        {icon && <span className="mr-2.5 flex-none">{icon}</span>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete="off"
          spellCheck={false}
          className={`min-w-0 flex-1 bg-transparent text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 disabled:text-slate-400 ${
            mono ? "font-mono tracking-wider" : ""
          }`}
        />
      </div>

      {error ? (
        <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}

function BuildingIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}

function IdCardIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M15 9h2" />
      <path d="M15 13h2" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
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

function CrossIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function AlertCircleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CopyIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function LockIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Spinner({ className = "w-4 h-4" }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        className="opacity-75"
      />
    </svg>
  );
}