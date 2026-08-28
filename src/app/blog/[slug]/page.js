import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "../../../lib/blogs";
import { SITE_URL, SITE_NAME } from "../../../lib/seo";
import BlogCardBanner from "../../../components/blog/BlogCardBanner";

function formatDate(dateString) {
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
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return {
      title: "Blog Not Found | AIShyp",
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

function renderContentBlock(block, index) {
  if (block.type === "heading") {
    return (
      <h2 key={`heading-${index}`} className="text-xl sm:text-2xl font-extrabold font-sans text-slate-950 mt-8 mb-3 tracking-tight">
        {block.value}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={`list-${index}`} className="space-y-2.5 my-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
        {block.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-200">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.link) {
    return (
      <p key={`paragraph-link-${index}`} className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4 font-medium">
        {block.value}
        <Link href={block.link.href} className="text-[#D8331F] font-bold hover:underline">
          {block.link.label}
        </Link>
        {block.trailing}
      </p>
    );
  }

  return (
    <p key={`paragraph-${index}`} className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4 font-medium">
      {block.value}
    </p>
  );
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const relatedBlogs = getRelatedBlogs(blog.slug, 2);
  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    author: {
      "@type": "Person",
      name: blog.author,
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

  return (
    <main className="w-full bg-[#FAFAFC] text-slate-900 pt-28 sm:pt-32 pb-20 font-sans overflow-hidden">
      <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
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
          <div className="flex items-center gap-3 font-mono text-xs font-bold text-slate-400">
            <span className="px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200">
              {blog.tags[0] || "Logistics"}
            </span>
            <span>{formatDate(blog.publishedDate)}</span>
            <span>•</span>
            <span>{blog.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {blog.description}
          </p>
        </header>

        {/* Vector Header Card */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <BlogCardBanner slug={blog.slug} title={blog.title} className="h-64 sm:h-72" />
        </div>

        {/* Article Body Content */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
          {blog.content.map((block, index) => renderContentBlock(block, index))}
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
