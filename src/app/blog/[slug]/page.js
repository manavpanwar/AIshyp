import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllBlogs,
  getUnifiedBlogBySlug,
  getUnifiedRelatedBlogs,
} from "../../../lib/blogs";
import { SITE_URL, SITE_NAME, getBreadcrumbSchema } from "../../../lib/seo";
import BlogCardBanner from "../../../components/blog/BlogCardBanner";
import RichBlogContent from "../../../components/blog/RichBlogContent";

export const dynamicParams = true;

function formatDate(dateString) {
  if (!dateString) return "Recent";
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getUnifiedBlogBySlug(slug);
  if (!blog) {
    return {
      title: "Blog Not Found | AI Shyp",
      description: "The requested blog post could not be found.",
    };
  }

  const canonicalPath = `/blog/${blog.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: `${blog.title} | ${SITE_NAME} Blog`,
    description: blog.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      images: [blog.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.featuredImage],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getUnifiedBlogBySlug(slug);
  if (!blog) notFound();

  const relatedBlogs = await getUnifiedRelatedBlogs(blog.slug, 2);
  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    author: {
      "@type": "Person",
      name: blog.author || "AI Shyp Squad",
    },
    datePublished: blog.publishedDate,
    image: `${SITE_URL}${blog.featuredImage}`,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/aishiplogo.png`,
      },
    },
  };
  const blogBreadcrumbSchema = getBreadcrumbSchema([
    { name: "Blog", item: "/blog" },
    { name: blog.title, item: `/blog/${blog.slug}` },
  ]);

  const hasCustomCover =
    blog.featuredImage &&
    blog.featuredImage !== "/aishiplogo.png" &&
    !blog.featuredImage.includes("aishiplogo");

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
        />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-400">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-slate-900 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D8331F] font-bold truncate max-w-xs">{blog.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs font-bold text-slate-400 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200">
              {blog.category || blog.tags?.[0] || "Logistics"}
            </span>
            <span>{formatDate(blog.publishedDate)}</span>
            <span>•</span>
            <span>{blog.readingTime || "4 min read"}</span>
            <span>•</span>
            <span className="text-slate-700 font-semibold">By {blog.author || "AI Shyp Squad"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {blog.description}
          </p>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 text-slate-900 space-y-1.5 shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F]">
              ⚡ Key Takeaways &amp; Executive Summary
            </span>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {blog.description}
            </p>
          </div>
        </header>

        {/* Cover Image or Vector Banner */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          {hasCustomCover ? (
            <div className="relative w-full h-72 sm:h-96 bg-slate-900">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                priority
                className="object-cover"
                unoptimized={
                  blog.featuredImage.startsWith("http") ||
                  blog.featuredImage.startsWith("/uploads/")
                }
              />
            </div>
          ) : (
            <BlogCardBanner slug={blog.slug} title={blog.title} className="h-64 sm:h-72" />
          )}
        </div>

        {/* Article Body Content */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
          <RichBlogContent content={blog.content} />

          {/* Tags Footer */}
          {Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-400 mr-2">Tags:</span>
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action Box */}
        <section className="bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl text-center space-y-4">
          <h2 className="text-2xl font-extrabold font-sans">Ready to Launch Your White-Label Shipping Portal?</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Deploy your custom domain shipping platform with 14+ pre-integrated courier APIs in 5 minutes.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#D8331F] text-white rounded-full px-8 py-3.5 text-xs font-extrabold inline-block shadow-md hover:bg-[#FF8A6E] transition-colors"
            >
              Launch Your Platform →
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="pt-8 space-y-4">
            <h2 className="text-2xl font-extrabold font-sans text-slate-950">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedBlogs.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  <Link href={`/blog/${related.slug}`} className="block">
                    <BlogCardBanner slug={related.slug} title={related.title} className="h-40" />
                  </Link>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-extrabold font-sans text-slate-950 leading-snug group-hover:text-[#D8331F] transition-colors">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                      {related.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
