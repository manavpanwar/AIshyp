import React from "react";
import Link from "next/link";
import { getUnifiedBlogs } from "../../lib/blogs";
import { buildPageMetadata, getBreadcrumbSchema } from "../../lib/seo";
import BlogFeed from "../../components/blog/BlogFeed";

export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "Logistics & Shipping Aggregator Insights | AI Shyp Blog",
  description:
    "Actionable guides on e-commerce shipping automation, RTO reduction, WhatsApp NDR workflows, courier API integrations, and white-label aggregator SaaS.",
  path: "/blog",
  images: ["/partner.png"],
});

// Inline Sparkles Icon matching features/integration page spec
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

export default async function BlogPage() {
  const blogs = await getUnifiedBlogs();
  const blogBreadcrumbSchema = getBreadcrumbSchema([
    { name: "Logistics Blog", item: "/blog" },
  ]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
      />

      {/* Semantic AI Summary for Answer Engine Extraction */}
      <div className="sr-only" itemScope itemType="https://schema.org/Blog">
        <span itemProp="name">AIShyp Logistics &amp; Shipping Aggregator Blog</span>
        <span itemProp="description">
          Actionable technical playbooks and operational guides covering RTO reduction, delivery failure causes in India, courier API comparisons (Delhivery vs BlueDart vs DTDC vs Xpressbees), 1-click Shopify fulfillment automation, and white-label courier franchise business models.
        </span>
      </div>

      {/* ── 1. HERO SECTION STARTING DIRECTLY BELOW HEADER (MATCHING FEATURES STANDARD) ── */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Subtle Ambient Radial Glow starting below header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(216,51,31,0.12)_0%,rgba(255,138,110,0.06)_40%,rgba(16,27,61,0.08)_70%,transparent_80%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs  text-slate-400 mb-6">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#D8331F] font-bold">Blog</li>
            </ol>
          </nav>

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-[#D8331F] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <SparklesIcon className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>Industry Insights &amp; Playbooks</span>
          </div>

          {/* Clean High-Impact Headline with Gradient Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Logistics &amp; Shipping:{" "}
            <span className="bg-gradient-to-r from-[#D8331F] via-[#FF5733] to-[#101B3D] bg-clip-text text-transparent">
              Aggregator Insights &amp; Playbooks
            </span>
          </h1>

          {/* Subheadline (Exact content preserved) */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Actionable technical and business playbooks on e-commerce shipping automation, RTO reduction, WhatsApp NDR workflows, courier rate optimization, and white-label aggregator SaaS.
          </p>

          {/* Action Button Group */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/blog/create"
              className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5"
            >
              <span>✍️</span>
              <span>+ Create Blog Article</span>
            </Link>
            <Link
              href="/integration"
              className="border border-[#D8331F]/40 text-[#D8331F] bg-white hover:bg-red-50/80 hover:border-[#D8331F] px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5"
            >
              <span>14+ Courier APIs →</span>
            </Link>
            <Link
              href="/features"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5"
            >
              <span>Platform Features ↓</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. DYNAMIC BLOG FEED WITH SEARCH & CATEGORY FILTERS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <BlogFeed blogs={blogs} />
      </section>

      {/* ── 3. INTERNAL SOLUTIONS CROSS-LINKING MATRIX (MATCHING FEATURES STANDARD) ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-sm  font-bold text-[#D8331F] uppercase tracking-wider">
            // Dedicated Solution Portals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/solutions/white-label-logistics-portal-india"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              White Label Logistics Portal India →
            </Link>
            <Link
              href="/solutions/courier-aggregation-software-india"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              Courier Aggregation Software India →
            </Link>
            <Link
              href="/solutions/multi-tenant-shipping-saas"
              className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#D8331F] hover:text-[#D8331F] transition-all"
            >
              Multi-Tenant Shipping SaaS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. HIGH-IMPACT CLOSING CTA BANNER (MATCHING FEATURES STANDARD) ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-20 text-center">
        <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl">
          <span className="text-[10.5px]  font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
            // Turn Insights Into Revenue
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
            Launch Your White-Label Aggregator Portal <br />
            <span className="text-[#FF8A6E]">in Under 24 Hours.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            Stitch together Delhivery, BlueDart, DTDC, Xpressbees, and automated WhatsApp NDR workflows on your own custom domain.
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
              View SaaS Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
