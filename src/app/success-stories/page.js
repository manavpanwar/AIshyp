import React from "react";
import Link from "next/link";
import { getAllSuccessStories } from "../../data/successStories";
import { buildPageMetadata, getBreadcrumbSchema, SITE_URL } from "../../lib/seo";
import SuccessStoriesFeed from "../../components/stories/SuccessStoriesFeed";
import SuccessStoriesRoiCalculator from "../../components/stories/SuccessStoriesRoiCalculator";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Truck,
  Layers,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Customer Success Stories & Logistics Case Studies | AI Shyp",
  description:
    "Discover how D2C brands, shipping franchises, and multi-tenant aggregators cut RTO by 48%, unlocked T+1 COD remittance, and unified 14+ courier partners with AI Shyp.",
  path: "/success-stories",
  images: ["/aggreshipping.png"],
});

export default function SuccessStoriesPage() {
  const stories = getAllSuccessStories();

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Success Stories", item: "/success-stories" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Customer Success Stories & Logistics Case Studies | AI Shyp",
    description:
      "Real-world enterprise case studies demonstrating automated multi-courier booking, automated WhatsApp NDR recovery, and T+1 COD reconciliation.",
    url: `${SITE_URL}/success-stories`,
    hasPart: stories.map((s, idx) => ({
      "@type": "Article",
      position: idx + 1,
      headline: `${s.company}: ${s.keyOutcome}`,
      url: `${SITE_URL}/success-stories/${s.slug}`,
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

      {/* Semantic Summary for AI Answer Engines */}
      <div className="sr-only" itemScope itemType="https://schema.org/CollectionPage">
        <span itemProp="name">AI Shyp Customer Success Stories &amp; Logistics Impact</span>
        <span itemProp="description">
          Detailed business success stories showcasing how D2C e-commerce brands, courier franchises, and multi-tenant shipping aggregators automate multi-carrier booking (Delhivery, BlueDart, DTDC, Xpressbees), reduce RTO via WhatsApp NDR, and optimize COD remittance.
        </span>
      </div>

      {/* ── 1. MODERN HERO SECTION ── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-8 lg:px-12 ">
        
        {/* Glow ambient background element */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D8331F]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] bg-red-50 border border-red-200 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#D8331F]" />
            <span>Proven Enterprise Logistics Results</span>
          </div>

          <h1 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Real Brands. Smarter Shipping. <br />
            <span className="text-[#D8331F]">Measurable Logistics ROI.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Explore how high-growth D2C brands, regional franchises, and courier aggregators cut RTO by 48%, unlocked T+1 COD remittance, and consolidated 14+ courier APIs on AI Shyp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#stories-feed"
              className="w-full sm:w-auto bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_25px_rgba(216,51,31,0.48)] hover:scale-105 active:scale-95 transition-all text-center"
            >
              Explore Client Transformations ↓
            </a>

            <a
              href="#roi-calculator"
              className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold shadow-xs hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Calculate Your Potential ROI</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-left">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] block">
                -48.4%
              </span>
              <span className="text-xs text-slate-700 font-bold block mt-0.5">
                Avg. RTO Reduction
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Automated WhatsApp NDR
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-left">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] block">
                T+1 Day
              </span>
              <span className="text-xs text-slate-700 font-bold block mt-0.5">
                Fast COD Settlement
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Direct bank wallet payout
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-left">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] block">
                14+ APIs
              </span>
              <span className="text-xs text-slate-700 font-bold block mt-0.5">
                Direct Carrier Integrations
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Delhivery, BlueDart, DTDC...
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-left">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] block">
                ₹1.8 Cr+
              </span>
              <span className="text-xs text-slate-700 font-bold block mt-0.5">
                Freight Costs Saved
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Dynamic lane rate routing
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. STORIES FEED WITH SEARCH, FILTER & IN-PAGE INSPECTOR ── */}
      <section
        id="stories-feed"
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 scroll-mt-28"
      >
        <div className="mb-6 space-y-2">
          <p className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            // Client Case Studies &amp; Transformations
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Inspect Real Operational Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Click any case study to view its live KPI breakdown, before vs after analysis, and deployed carrier architecture.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Case Study Inspector</span>
            </div>
          </div>
        </div>

        <SuccessStoriesFeed stories={stories} />
      </section>

      {/* ── 3. INTERACTIVE ROI ESTIMATOR WIDGET ── */}
      <section
        id="roi-calculator"
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 scroll-mt-28"
      >
        <SuccessStoriesRoiCalculator />
      </section>

      {/* ── 4. HOW AI SHYP POWERS THESE TRANSFORMATIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            // Core Technology Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The Engine Behind Our Customer Milestones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How our courier aggregation platform solves the three biggest bottlenecks in Indian e-commerce logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-all shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#D8331F] flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Automated WhatsApp NDR Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a delivery attempt fails, AI Shyp triggers an interactive WhatsApp bot to verify address issues, collect landmark details, or reschedule delivery directly with the customer.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-[#D8331F] flex items-center gap-1.5">
              <span>Up to 48% RTO drop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-all shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              T+1 Rapid COD Remittance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              End the 14-day courier cash holding trap. AI Shyp audits carrier delivery logs in real time and transfers confirmed COD cash into your bank account the very next business day.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
              <span>Zero working capital lock-in</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-all shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Intelligent Lane &amp; SLA Routing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No single carrier excels across all 29,000 pincodes. AI Shyp dynamically evaluates historical SLA, first-attempt success rate, and rate card pricing to assign the best courier per package.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-amber-700 flex items-center gap-1.5">
              <span>91%+ first-attempt delivery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FREQUENTLY ASKED QUESTIONS ABOUT SUCCESS STORIES ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 border-t border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold text-[#D8331F] uppercase tracking-wider">
            // Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Learn more about how these logistics workflows are implemented and how quickly your brand can benefit.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D8331F]" />
              How quickly can my business deploy these exact logistics workflows?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              Most brands and courier franchises complete deployment within 24 to 48 hours. Our team assists with store webhook connections (Shopify, WooCommerce, custom API), carrier API activation (Delhivery, BlueDart, DTDC, Xpressbees), and customized automated NDR bot setup.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D8331F]" />
              Can courier franchises use AI Shyp as their own white-label software?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              Yes. Courier franchises and regional aggregators can deploy our white-label SaaS on their custom domain with their own logo, branding, custom client rate cards, and automated sub-wallet prepaid balances.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D8331F]" />
              How does the automated WhatsApp NDR workflow decrease COD return rates?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              As soon as a carrier marks a package as undelivered (e.g. "Customer Unavailable" or "Door Closed"), AI Shyp immediately sends an interactive WhatsApp message asking the customer to confirm their availability or update their address/landmark, triggering an automated carrier reattempt.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pb-16">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8331F]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF8A6E] bg-red-950/70 border border-red-800 inline-block">
              Scale Your Shipping Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to write your own shipping success story?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Deploy your white-label courier aggregator portal or connect your D2C storefront in under 48 hours with 14+ direct carrier APIs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/contact"
              className="bg-[#D8331F] hover:bg-[#FF8A6E] text-white px-8 py-3.5 rounded-full text-xs font-extrabold shadow-lg hover:shadow-red-600/30 hover:scale-105 transition-all text-center whitespace-nowrap cursor-pointer"
            >
              Book a Strategy Call →
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-full text-xs font-bold transition-all text-center whitespace-nowrap"
            >
              View In-Depth Topics
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
