import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "../../../data/caseStudies";
import { SITE_URL, SITE_NAME, getBreadcrumbSchema } from "../../../lib/seo";
import CaseStudyCard from "../../../components/stories/CaseStudyCard";
import CaseStudyInteractiveView from "../../../components/stories/CaseStudyInteractiveView";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  TrendingUp,
  Clock,
  Target,
  FileText,
  Lightbulb,
  Workflow,
  CheckSquare,
  Building,
  Zap,
  Scale,
  XCircle,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const all = getAllCaseStudies();
  const params = [];
  all.forEach((cs) => {
    params.push({ slug: cs.slug });
    if (cs.aliases && Array.isArray(cs.aliases)) {
      cs.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    return {
      title: "Case Study Not Found | AI Shyp",
      description: "The requested logistics case study could not be found.",
    };
  }

  const canonicalUrl = `${SITE_URL}/case-studies/${cs.slug}`;

  return {
    title: `${cs.title} | ${SITE_NAME} Logistics Case Study`,
    description: cs.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${cs.title} | AI Shyp Logistics Case Study`,
      description: cs.summary,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      images: [cs.heroImage || "/aggreshipping.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} | AI Shyp`,
      description: cs.summary,
      images: [cs.heroImage || "/aggreshipping.png"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  const relatedCaseStudies = getRelatedCaseStudies(cs.slug, 2);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
    { name: cs.title, item: `/case-studies/${cs.slug}` },
  ]);

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: cs.title,
    description: cs.summary,
    image: `${SITE_URL}${cs.heroImage || "/aggreshipping.png"}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/aishiplogo.png`,
    },
  };

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 font-sans overflow-hidden pt-[90px] sm:pt-[104px]">
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />

      {/* ── TOP BREADCRUMB & BACK LINK ── */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav className="flex items-center gap-1.5 text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link
              href="/case-studies"
              className="hover:text-slate-900 transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#D8331F] font-bold truncate max-w-[200px] sm:max-w-md">
              {cs.topicCategory}
            </span>
          </nav>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-[#D8331F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Case Studies
          </Link>
        </div>
      </div>

      {/* ── HERO HEADER SECTION ── */}
      <section className="bg-white border-b border-slate-200/80 pt-8 pb-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Badge Ribbon */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-red-50 border border-red-200 shadow-2xs">
              Topic {cs.topicNumber} // {cs.topicCategory}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Verified Panel Architecture</span>
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {cs.readTime}
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3 max-w-5xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              {cs.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {cs.subtitle}
            </p>
          </div>

          {/* Target Audience Strip */}
          <div className="flex flex-wrap items-center gap-2 p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700">
            <Target className="w-4 h-4 text-[#D8331F] shrink-0" />
            <span>
              <strong className="text-slate-900 font-bold">Target Audience:</strong>{" "}
              {cs.targetAudience}
            </span>
          </div>

          {/* 4 Metrics Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
            {cs.metricsSummary.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-left shadow-2xs hover:border-slate-300 transition-all hover:shadow-xs group"
              >
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] group-hover:scale-105 transition-transform inline-block leading-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5 block">
                  {metric.desc}
                </span>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1 text-[9px] font-mono text-emerald-700 font-bold uppercase">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified ROI</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Banner Visual */}
          <div className="pt-4">
            <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900">
              <Image
                src={cs.heroImage || "/aggreshippingh.png"}
                alt={cs.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Bottom Highlights on Image */}
              {cs.panelHighlights && cs.panelHighlights.length > 0 && (
                <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center gap-2 overflow-x-auto scrollbar-none">
                  {cs.panelHighlights.slice(0, 3).map((hl, i) => (
                    <div
                      key={i}
                      className="bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-white text-[11px] flex items-center gap-2 shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8331F]" />
                      <strong className="font-bold">{hl.title}:</strong>
                      <span className="text-slate-300 truncate max-w-[220px]">
                        {hl.badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE BODY WITH DESKTOP STICKY TOC & STRUCTURED SECTIONS ── */}
      <CaseStudyInteractiveView caseStudy={cs}>
        {/* Section 01: Executive Summary */}
        <section
          id="overview"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>01 // Executive Summary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Operational Blueprint &amp; Executive Summary
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            {cs.overview}
          </p>

          {/* Quick Highlight Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50/70 to-orange-50/70 border border-red-100 flex items-start gap-3 mt-4">
            <Sparkles className="w-5 h-5 text-[#D8331F] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900">
                Core Architectural Impact
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cs.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Customer Profile */}
        <section
          id="customer"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            <Building className="w-4 h-4" />
            <span>02 // Operational Profile &amp; Scale</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Customer Profile &amp; Fulfillment Baseline
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            {cs.customerBackground}
          </p>
        </section>

        {/* Section 03: Business Challenges */}
        <section
          id="challenges"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>03 // Business Challenges</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Core Bottlenecks Inhibiting Scalability
          </h2>
          <div className="space-y-3 pt-1">
            {cs.businessChallenges.map((challenge, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 bg-red-50/50 border border-red-100 rounded-2xl hover:bg-red-50/80 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-red-100 text-[#D8331F] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Legacy Workflow vs AI Shyp Panel Automation */}
        <section
          id="comparison"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>04 // Operational Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Legacy Manual Workflow vs. AI Shyp Panel Automation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Legacy Way */}
            <div className="bg-red-50/40 border border-red-200/80 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-800 uppercase tracking-wide">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>The Legacy Painful Way</span>
              </div>
              <ul className="space-y-2.5">
                {(cs.legacyVsAutomated?.legacy || [cs.existingWorkflow]).map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* AI Shyp Way */}
            <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The AI Shyp Panel Automation</span>
              </div>
              <ul className="space-y-2.5">
                {(
                  cs.legacyVsAutomated?.automated || [cs.platformSolution]
                ).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed"
                  >
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 05: Platform Solution */}
        <section
          id="solution"
          className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8A6E] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#D8331F]" />
            <span>05 // Platform-Based Solution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The AI Shyp Architecture &amp; Automated Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            {cs.platformSolution}
          </p>
        </section>

        {/* Section 06: Features Leveraged */}
        <section
          id="features"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>06 // Integrated Platform Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Panel Tools &amp; APIs Leveraged
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {cs.featuresUsed.map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3 shadow-2xs hover:border-slate-300 hover:bg-slate-50/80 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 07: Implementation Process */}
        <section
          id="implementation"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
            <CheckSquare className="w-4 h-4" />
            <span>07 // Implementation Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Step-by-Step Deployment Phases
          </h2>
          <div className="space-y-3 pt-1">
            {cs.implementationProcess.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#D8331F] text-white flex items-center justify-center font-mono text-xs font-bold shadow-2xs">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {phase.step}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed font-medium">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 08: Results & Business Impact */}
        <section
          id="results"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>08 // Results &amp; Business Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Verifiable Impact on Shipping Economics
          </h2>
          <div className="space-y-3 pt-1">
            {cs.resultsImpact.map((res, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3.5 hover:bg-emerald-50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {res}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 09: Key Takeaways */}
        <section
          id="takeaways"
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>09 // Key Operational Takeaways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Best Practices for Courier Aggregators &amp; Merchants
          </h2>
          <div className="space-y-3 pt-1">
            {cs.keyTakeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 bg-amber-50/40 border border-amber-200/60 rounded-2xl"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8331F] shrink-0 mt-1.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Call to Action (CTA) */}
        <section className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border border-red-200/90 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-white border border-red-200">
            Next Steps // Live Deployment
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Implement This Workflow in Your Business
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Book a personalized walkthrough with an AI Shyp logistics architect to see how our white-label courier platform automates this exact process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-full px-8 py-3.5 text-xs font-extrabold shadow-md hover:scale-105 transition-all text-center"
            >
              Book a Live Demo →
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 rounded-full px-6 py-3.5 text-xs font-bold hover:bg-slate-50 transition-all text-center"
            >
              Explore Other Case Studies
            </Link>
          </div>
        </section>

        {/* Section 10: Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
                10 // Related Studies
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Recommended Logistics Case Studies
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedCaseStudies.map((related) => (
                <CaseStudyCard key={related.slug} caseStudy={related} />
              ))}
            </div>
          </section>
        )}
      </CaseStudyInteractiveView>
    </main>
  );
}
