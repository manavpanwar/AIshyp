import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllSuccessStories,
  getSuccessStoryBySlug,
  getRelatedSuccessStories,
} from "../../../data/successStories";
import { SITE_URL, SITE_NAME, getBreadcrumbSchema } from "../../../lib/seo";
import SuccessStoryCard from "../../../components/stories/SuccessStoryCard";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  TrendingUp,
  Quote,
  ShieldCheck,
  Building,
  Zap,
  Truck,
  User,
  Star,
  MapPin,
  Flame,
  LayoutDashboard,
  Gift,
} from "lucide-react";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllSuccessStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);

  if (!story) {
    return {
      title: "Success Story Not Found | AI Shyp",
      description: "The requested customer success story could not be found.",
    };
  }

  const canonicalUrl = `${SITE_URL}/success-stories/${story.slug}`;

  return {
    title: `${story.company} Logistics Case Study & Transformation | ${SITE_NAME}`,
    description: story.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${story.company}: How Smart Courier Aggregation Unlocked Scalable Logistics | AI Shyp`,
      description: story.summary,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      images: [story.heroImage || "/aggreshipping.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${story.company} Success Story | AI Shyp`,
      description: story.summary,
      images: [story.heroImage || "/aggreshipping.png"],
    },
  };
}

export default async function SuccessStoryDetailPage({ params }) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedSuccessStories(story.slug, 2);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Success Stories", item: "/success-stories" },
    { name: story.company, item: `/success-stories/${story.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${story.company}: ${story.summary}`,
    description: story.summary,
    image: `${SITE_URL}${story.heroImage || "/aggreshipping.png"}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/aishiplogo.png`,
    },
  };

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[100px] sm:pt-[116px]">
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── TOP BREADCRUMB STRIP ── */}
      <div className="bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#D8331F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Case Studies
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="hidden sm:inline">Case Study:</span>
            <span className="font-bold text-slate-800 truncate max-w-[180px] sm:max-w-none">
              {story.company}
            </span>
          </div>
        </div>
      </div>

      {/* ── COMMAND CENTER HERO HEADER ── */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FFF5F2]/50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Badges & Customer Info */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D8331F] to-[#b32312] text-white flex items-center justify-center font-mono font-extrabold text-sm shadow-md">
              {story.brandLogoText || story.company.slice(0, 3).toUpperCase()}
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-red-50 border border-red-200">
              {story.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Customer Case Study</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-white">
              {story.badge || "Verified ROI"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
            {story.company}: How Smart Courier Aggregation Unlocked Scalable Logistics
          </h1>

          {/* 1. Customer Name & Executive Bar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-slate-800 font-bold flex items-center gap-1.5 text-sm">
                <User className="w-4 h-4 text-[#D8331F]" />
                Customer: <span className="text-slate-950">{story.customerName}</span>
                <span className="text-xs text-slate-500 font-normal">({story.customerRole})</span>
              </span>
              <span className="text-slate-600 font-medium hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {story.customerLocation}
              </span>
              <span className="text-slate-600 font-medium flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                {story.customerScale}
              </span>
            </div>

            <div className="flex items-center gap-1 text-amber-500 font-bold font-mono">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0 / 5.0 Rating</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-4xl">
            {story.summary}
          </p>

          {/* Giant KPI Cockpit Bar (JetBrains Mono) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {story.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm text-left hover:border-slate-300 transition-colors"
              >
                <span className="text-2xl sm:text-4xl font-mono font-extrabold text-[#D8331F] block leading-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 block">
                  {metric.label}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase mt-0.5 block">
                  {metric.subtext || "Verified Benchmark"}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MAIN CONTENT & 4 CUSTOMER SECTIONS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: DETAILED CASE BREAKDOWN (8 COLS) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* ── POINT 2: HOW THE CUSTOMER USES THE AI SHYP PANEL ── */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
                <LayoutDashboard className="w-4 h-4" />
                <span>01 // Operational Workflow</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                How {story.company} Uses the AI Shyp Panel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {story.company}'s operations team follows this streamlined daily routine for automated multi-carrier dispatch, NDR recovery, and rapid remittance:
              </p>

              <div className="space-y-3 pt-2">
                {story.howTheyUsePanel?.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 hover:border-[#D8331F]/30 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-xl bg-red-100 text-[#D8331F] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{step.stepNumber}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carrier APIs connected */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-2">
                  Direct Courier APIs Connected to Panel
                </span>
                <div className="flex flex-wrap gap-2">
                  {story.carriersUsed?.map((carrier, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-extrabold text-slate-800 flex items-center gap-1.5"
                    >
                      <Truck className="w-3.5 h-3.5 text-[#D8331F]" />
                      {carrier}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── POINT 4: MEASURABLE CUSTOMER BENEFITS ── */}
            <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                <Gift className="w-4 h-4 text-emerald-600" />
                <span>02 // Tangible ROI &amp; Gains</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Key Tangible Business Benefits &amp; ROI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Direct financial returns, operational speed, and freight savings unlocked after deploying AI Shyp:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {story.customerBenefits?.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-emerald-100 p-4 sm:p-5 shadow-2xs space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-extrabold bg-emerald-100 text-emerald-800">
                          {benefit.metric}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── POINT 3: CUSTOMER FEEDBACK ── */}
            {story.customerFeedback && (
              <div className="relative bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-mono font-bold text-white ml-2">
                      5.0 / 5.0 Rating
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Customer Feedback
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#FF8A6E] opacity-80" />

                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                  "{story.customerFeedback.headline}"
                </h3>

                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  "{story.customerFeedback.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <div className="w-11 h-11 rounded-2xl bg-[#D8331F] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                    {story.customerFeedback.avatarText || "SK"}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-extrabold text-white leading-tight">
                        {story.customerFeedback.author}
                      </p>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-xs text-slate-400">
                      {story.customerFeedback.role} • {story.company}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── BEFORE VS AFTER COMPARISON MATRIX ── */}
            {story.beforeAfter && story.beforeAfter.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D8331F]">
                      Transformation Matrix
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Before vs. After AI Shyp Implementation
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Audited Comparison
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {story.beforeAfter.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                    >
                      <div className="sm:col-span-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D8331F]" />
                        {item.metric}
                      </div>

                      <div className="sm:col-span-4 text-xs bg-red-50 text-red-900 rounded-xl p-3 border border-red-200/60">
                        <span className="text-[10px] font-mono font-bold uppercase text-red-600 block">
                          Previous Legacy Flow
                        </span>
                        <span className="font-medium">{item.before}</span>
                      </div>

                      <div className="sm:col-span-4 text-xs bg-emerald-50 text-emerald-950 rounded-xl p-3 border border-emerald-200/80">
                        <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block">
                          AI Shyp Automated Stack
                        </span>
                        <span className="font-bold">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4 bg-red-50/40 border border-red-200/80 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Core Challenges Overcome</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Operational Roadblocks Before AI Shyp
              </h3>
              <div className="space-y-3 pt-2">
                {story.businessChallenges.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#D8331F] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY EXECUTIVE SIDEBAR (4 COLS) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Quick Consultation CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF8A6E] block">
                Implement This Stack
              </span>
              <h3 className="text-lg font-extrabold text-white leading-snug">
                Want similar logistics outcomes for your business?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our logistics solution architects for a free 30-minute operational audit and rate comparison.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#D8331F] hover:bg-[#FF8A6E] text-white py-3 px-4 rounded-full text-xs font-extrabold transition-all shadow-md hover:scale-105 flex items-center justify-center gap-1.5 text-center cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick Spec Box (Customer Details) */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Customer Profile &amp; Spec
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500">Customer Name:</span>
                  <span className="font-bold text-slate-900">{story.customerName}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500">Designation:</span>
                  <span className="font-bold text-slate-800">{story.customerRole}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-bold text-slate-800">{story.company}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500">Industry:</span>
                  <span className="font-bold text-slate-800">{story.industry}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500">Key Metric:</span>
                  <span className="font-mono font-extrabold text-[#D8331F]">
                    {story.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Deployment SLA:</span>
                  <span className="font-mono font-bold text-emerald-700">48 Hours</span>
                </div>
              </div>
            </div>

            {/* Browse All Stories Link */}
            <div className="text-center">
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#D8331F] transition-colors"
              >
                <span>← Browse all customer success stories</span>
              </Link>
            </div>

          </div>

        </div>

        {/* ── RELATED STORIES SECTION ── */}
        {relatedStories.length > 0 && (
          <div className="space-y-6 pt-12 mt-12 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Related Transformations
              </h3>
              <Link
                href="/success-stories"
                className="text-xs font-bold text-[#D8331F] hover:underline"
              >
                View All Stories →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStories.map((related) => (
                <SuccessStoryCard key={related.slug} story={related} compact />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
