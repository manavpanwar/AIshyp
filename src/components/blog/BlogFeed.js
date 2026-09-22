"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogCardBanner from "./BlogCardBanner";

function formatDate(dateString) {
  if (!dateString) return "Recent";
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Inline Search Icon
function SearchIcon({ className = "w-3.5 h-3.5" }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function BlogFeed({ blogs = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(["All"]);
    blogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [blogs]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category?.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        blog.title?.toLowerCase().includes(query) ||
        blog.description?.toLowerCase().includes(query) ||
        (Array.isArray(blog.tags) &&
          blog.tags.some((t) => t?.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
    

      {/* Results Count Strip */}
      <div className="flex items-center justify-between text-xs  text-slate-500 px-2">
        <span>
          Showing <b className="text-slate-950 font-bold">{filteredBlogs.length}</b> articles
          {activeCategory !== "All" && ` in "${activeCategory}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        <span className="text-[11px] text-slate-400">
          Updated in Real-Time
        </span>
      </div>

      {/* ── BLOG CARDS GRID ── */}
      {filteredBlogs.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const hasCustomImage =
              blog.featuredImage &&
              blog.featuredImage !== "/aishiplogo.png" &&
              !blog.featuredImage.includes("logo");

            return (
              <article
                key={blog._id || blog.slug}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner / Image */}
                  <Link href={`/blog/${blog.slug}`} className="block overflow-hidden relative">
                    {hasCustomImage ? (
                      <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized={
                            blog.featuredImage.startsWith("http") ||
                            blog.featuredImage.startsWith("/uploads/")
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-3 left-4 text-[10px]  font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                          {blog.category || "Logistics"}
                        </span>
                        {blog.isFromDb && (
                          <span className="absolute top-3 right-3 text-[10px]  font-bold px-2.5 py-0.5 rounded-full bg-[#D8331F] text-white shadow-md">
                            Live
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="relative">
                        <BlogCardBanner slug={blog.slug} title={blog.title} className="h-48 sm:h-52" />
                        {blog.isFromDb && (
                          <span className="absolute top-3 right-3 text-[10px]  font-bold px-2.5 py-0.5 rounded-full bg-[#D8331F] text-white shadow-md z-20">
                            Live
                          </span>
                        )}
                      </div>
                    )}
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px]  font-bold text-slate-400">
                      <span>{formatDate(blog.publishedDate)}</span>
                      <span className="text-[#D8331F] bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-full">
                        {blog.readingTime || "4 min read"}
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold font-sans text-slate-950 leading-snug group-hover:text-[#D8331F] transition-colors line-clamp-2">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Tags */}
                    {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {blog.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px]  font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Attribution & Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px]  text-slate-400">
                    By {blog.author || "AI Shyp Squad"}
                  </span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#D8331F] hover:text-[#c02816] transition-colors pt-3"
                  >
                    <span>Read article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-red-50 text-[#D8331F] mx-auto flex items-center justify-center text-xl">
            <SearchIcon className="w-5 h-5 text-[#D8331F]" />
          </div>
          <h3 className="text-base font-bold text-slate-900">No articles found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No blogs matched your search criteria. Try selecting another category or write a new blog post.
          </p>
          <div className="pt-2">
            <Link
              href="/blog/create"
              className="inline-flex items-center gap-2 bg-[#D8331F] text-white px-5 py-2.5 rounded-full text-xs font-extrabold shadow-md hover:bg-[#c02816] transition-all"
            >
              + Create First Article in this Topic
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
