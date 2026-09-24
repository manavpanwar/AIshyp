import React from "react";
import Link from "next/link";
import { getUnifiedBlogs } from "../../lib/blogs";
import { buildPageMetadata, getBreadcrumbSchema } from "../../lib/seo";
import BlogFeed from "../../components/blog/BlogFeed";
import CreateBlogAuthButton from "../../components/blog/CreateBlogAuthButton";

export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "Logistics & Shipping Aggregator Insights | AI Shyp Blog",
  description:
    "Actionable guides on e-commerce shipping automation, RTO reduction, WhatsApp NDR workflows, courier API integrations, and white-label aggregator SaaS.",
  path: "/blog",
  images: ["/partner.png"],
});



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

      {/* ── 1. TOP ACTION BAR (RIGHT-ALIGNED & HIGHER UP) ── */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-3 px-4 sm:px-8 lg:px-12 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-end">
          <CreateBlogAuthButton />
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
