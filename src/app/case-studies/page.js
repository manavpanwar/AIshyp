import React from "react";
import Link from "next/link";
import { getAllCaseStudies } from "../../data/caseStudies";
import { buildPageMetadata, getBreadcrumbSchema, SITE_URL } from "../../lib/seo";
import CaseStudiesFeed from "../../components/stories/CaseStudiesFeed";
import { BookOpen } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Courier Aggregation Case Studies | AI Shyp",
  description:
    "Explore how our courier aggregation technology helps businesses simplify shipping workflows, manage courier operations, and improve operational visibility.",
  path: "/case-studies",
  images: ["/aggreshipping.png"],
});

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Case Studies", item: "/case-studies" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Courier Aggregation Case Studies | AI Shyp",
    description:
      "Explore how our courier aggregation technology helps businesses simplify shipping workflows, manage courier operations, and improve operational visibility.",
    url: `${SITE_URL}/case-studies`,
    hasPart: caseStudies.map((cs, idx) => ({
      "@type": "TechArticle",
      position: idx + 1,
      headline: cs.title,
      url: `${SITE_URL}/case-studies/${cs.slug}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Semantic Summary for Answer Engine Discovery */}
      <div className="sr-only" itemScope itemType="https://schema.org/CollectionPage">
        <span itemProp="name">AI Shyp Technical Courier Aggregation Case Studies</span>
        <span itemProp="description">
          In-depth architectural and operational case studies detailing bulk order processing, courier rate card margin management, T+1 COD remittance reconciliation, multi-carrier tracking standardization, AI courier allocation, and WhatsApp NDR automation.
        </span>
      </div>

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#F4F6F9] via-slate-50/50 to-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-red-50 border border-red-200 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>In-Depth Logistics Engineering &amp; Operations</span>
          </div>

          <h1 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Real Challenges. <br />
            <span className="text-[#D8331F]">Smarter Logistics Solutions.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Explore how our courier aggregation technology helps businesses simplify shipping workflows, manage courier operations, and improve operational visibility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-full px-8 py-3.5 text-sm font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all text-center"
            >
              Talk to Our Team →
            </Link>

            <a
              href="#case-studies-feed"
              className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full px-8 py-3.5 text-sm font-bold shadow-xs hover:bg-slate-50 transition-all text-center"
            >
              Explore All Case Studies ({caseStudies.length}) ↓
            </a>
          </div>

          {/* Problem -> Solution Methodology Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left">
              <span className="text-xs font-mono font-bold text-[#D8331F] block">
                01. Problem
              </span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                Bottleneck Analysis
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left">
              <span className="text-xs font-mono font-bold text-[#D8331F] block">
                02. Solution
              </span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                Aggregator OS
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left">
              <span className="text-xs font-mono font-bold text-[#D8331F] block">
                03. Implementation
              </span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                Rapid Rollout
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left">
              <span className="text-xs font-mono font-bold text-[#D8331F] block">
                04. Results
              </span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                Measurable Impact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CASE STUDIES FEED SECTION ── */}
      <section
        id="case-studies-feed"
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 scroll-mt-28"
      >
        <div className="mb-6 space-y-1">
          <p className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            // Core Operational Disciplines
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Courier Aggregator Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Review detailed operational blueprints covering order automation, rate management, COD settlements, and AI routing.
          </p>
        </div>

        <CaseStudiesFeed caseStudies={caseStudies} />
      </section>

      {/* ── 3. BOTTOM CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pb-16">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-red-950/70 border border-red-800 inline-block">
              Architected for Indian Logistics
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to implement these logistics playbooks?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Connect Delhivery, DTDC, BlueDart, and Xpressbees on your custom domain with 0% commission split.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-[#D8331F] hover:bg-[#FF8A6E] text-white px-7 py-3 rounded-full text-xs font-extrabold shadow-md hover:scale-105 transition-all text-center whitespace-nowrap"
            >
              Book a Demo →
            </Link>
            <Link
              href="/success-stories"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold transition-all text-center whitespace-nowrap"
            >
              Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
