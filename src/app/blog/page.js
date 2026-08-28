import React from "react";
import Link from "next/link";
import { getAllBlogs } from "../../lib/blogs";
import { buildPageMetadata } from "../../lib/seo";
import BlogCardBanner from "../../components/blog/BlogCardBanner";

export const metadata = buildPageMetadata({
  title: "Logistics & Shipping Aggregator Insights | AIShyp Blog",
  description:
    "Actionable guides on e-commerce shipping automation, RTO reduction, WhatsApp NDR workflows, courier API integrations, and white-label aggregator SaaS.",
  path: "/blog",
  images: ["/partner.png"],
});

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D8331F] font-bold">Blog</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
            <span>// Industry Insights & Playbooks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Logistics & Shipping <span className="text-[#D8331F]">Aggregator Insights</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Actionable technical and business playbooks on e-commerce shipping automation, RTO reduction, WhatsApp NDR workflows, courier rate optimization, and white-label aggregator SaaS.
          </p>
        </header>

        {/* Blog Cards Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <Link href={`/blog/${blog.slug}`} className="block overflow-hidden">
                  <BlogCardBanner slug={blog.slug} title={blog.title} className="h-48 sm:h-52" />
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                    <span>{formatDate(blog.publishedDate)}</span>
                    <span className="text-[#D8331F]">{blog.readingTime}</span>
                  </div>

                  <h2 className="text-lg font-extrabold font-sans text-slate-950 leading-snug group-hover:text-[#D8331F] transition-colors">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#D8331F] hover:text-[#FF8A6E] transition-colors pt-3"
                >
                  Read full article →
                </Link>
              </div>
            </article>
          ))}
        </section>

      </section>
    </main>
  );
}
