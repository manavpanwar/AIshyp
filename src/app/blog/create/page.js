"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PRESET_CATEGORIES = [
  "Logistics Automation",
  "RTO Reduction",
  "Courier API & Webhooks",
  "Franchise SaaS Playbook",
  "E-Commerce Shipping",
  "Last-Mile Logistics",
  "Shopify Integration",
  "Rate Optimization",
];

const PRESET_IMAGES = [
  { label: "Best Shipping", url: "/bestshipping.png" },
  { label: "Aggregator SaaS", url: "/aggreshipping.png" },
  { label: "Rate Calculator", url: "/Ratesunlock.png" },
  { label: "Reduce RTO", url: "/reduceRto.png" },
  { label: "NDR Automation", url: "/ndrcourier.png" },
  { label: "Courier APIs", url: "/shopify.jpeg" },
  { label: "Franchise Playbook", url: "/Franchise.png" },
  { label: "COD & Logistics", url: "/cod.png" },
];

export default function CreateBlogPage() {
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugManual, setIsSlugManual] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Logistics Automation");
  const [customCategory, setCustomCategory] = useState("");
  const [author, setAuthor] = useState("AI Shyp Squad");
  const [featuredImage, setFeaturedImage] = useState("/bestshipping.png");
  const [tags, setTags] = useState(["Logistics Automation", "Shipping OS"]);
  const [tagInput, setTagInput] = useState("");

  // Content Blocks State
  // Support flexible blocks: paragraph, heading, list, quote
  const [contentBlocks, setContentBlocks] = useState([
    {
      id: "b1",
      type: "paragraph",
      value:
        "Write an engaging opening paragraph explaining the logistics challenge and how shipping automation solves it.",
    },
    {
      id: "b2",
      type: "heading",
      value: "Key Operational Bottlenecks & Industry Insights",
    },
    {
      id: "b3",
      type: "list",
      items: [
        "First key insight or implementation step",
        "Second critical operational milestone",
        "Reduced RTO and improved courier SLA",
      ],
    },
    {
      id: "b4",
      type: "paragraph",
      value:
        "Provide in-depth technical recommendations, courier benchmarking, and integration steps for e-commerce brands.",
    },
  ]);

  // UI State
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewTab, setPreviewTab] = useState("editor"); // 'editor' | 'preview'
  const fileInputRef = useRef(null);

  // Current Date display
  const [currentDateDisplay, setCurrentDateDisplay] = useState("");
  useEffect(() => {
    const now = new Date();
    setCurrentDateDisplay(
      now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, []);

  // Auto generate slug from title unless manually edited
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!isSlugManual) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generated);
    }
  };

  const handleSlugChange = (e) => {
    setIsSlugManual(true);
    setSlug(
      e.target.value
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "")
    );
  };

  // Add Tag
  const handleAddTag = (e) => {
    if (e && e.key && e.key !== "Enter" && e.key !== ",") return;
    if (e) e.preventDefault();
    const clean = tagInput.trim().replace(/^,+|,+$/g, "");
    if (clean && !tags.includes(clean)) {
      setTags([...tags, clean]);
      setTagInput("");
    }
  };

  // Remove Tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Handle local file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file (PNG, JPG, WEBP)");
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      toast.error("File size exceeds 8MB. Please choose a smaller image.");
      return;
    }

    setIsUploading(true);
    const toastId = toast.loading("Uploading image...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload image");
      }

      setFeaturedImage(data.url);
      toast.success("Image uploaded successfully!", { id: toastId });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to upload image", { id: toastId });
    } finally {
      setIsUploading(false);
    }
  };

  // Content block manipulators
  const updateBlock = (index, field, value) => {
    const updated = [...contentBlocks];
    updated[index] = { ...updated[index], [field]: value };
    setContentBlocks(updated);
  };

  const updateListItem = (blockIndex, itemIndex, value) => {
    const updated = [...contentBlocks];
    const items = [...updated[blockIndex].items];
    items[itemIndex] = value;
    updated[blockIndex].items = items;
    setContentBlocks(updated);
  };

  const addListItem = (blockIndex) => {
    const updated = [...contentBlocks];
    updated[blockIndex].items = [...updated[blockIndex].items, "New bullet point"];
    setContentBlocks(updated);
  };

  const removeListItem = (blockIndex, itemIndex) => {
    const updated = [...contentBlocks];
    updated[blockIndex].items = updated[blockIndex].items.filter((_, idx) => idx !== itemIndex);
    setContentBlocks(updated);
  };

  const addBlock = (type) => {
    const newId = `b-${Date.now()}`;
    if (type === "heading") {
      setContentBlocks([...contentBlocks, { id: newId, type: "heading", value: "New Section Title" }]);
    } else if (type === "list") {
      setContentBlocks([
        ...contentBlocks,
        { id: newId, type: "list", items: ["Actionable insight 1", "Actionable insight 2"] },
      ]);
    } else {
      setContentBlocks([
        ...contentBlocks,
        { id: newId, type: "paragraph", value: "Enter detailed content here..." },
      ]);
    }
  };

  const removeBlock = (index) => {
    if (contentBlocks.length <= 1) {
      toast.error("Article must contain at least one content block");
      return;
    }
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  const moveBlock = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= contentBlocks.length) return;
    const updated = [...contentBlocks];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);
    setContentBlocks(updated);
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a blog title");
      return;
    }
    if (!slug.trim()) {
      toast.error("Please enter a valid slug");
      return;
    }
    if (!description.trim()) {
      toast.error("Please write a short description");
      return;
    }
    if (!featuredImage.trim()) {
      toast.error("Please provide or upload a featured image");
      return;
    }

    const finalCategory = category === "Custom" ? customCategory.trim() || "Logistics" : category;

    // Filter valid content blocks
    const cleanedBlocks = contentBlocks.map((b) => {
      if (b.type === "list") {
        return {
          type: "list",
          items: b.items.map((i) => i.trim()).filter(Boolean),
        };
      }
      return {
        type: b.type,
        value: b.value.trim(),
      };
    });

    setIsSubmitting(true);
    const toastId = toast.loading("Publishing blog to MongoDB...");

    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        description: description.trim(),
        content: cleanedBlocks,
        featuredImage: featuredImage.trim(),
        author: author.trim() || "AI Shyp Squad",
        category: finalCategory,
        tags: tags.length > 0 ? tags : [finalCategory],
      };

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to publish blog post");
      }

      toast.success("Blog published successfully! Redirecting...", { id: toastId });

      // Redirect to the new blog article
      setTimeout(() => {
        router.push(`/blog/${slug}`);
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to publish blog", { id: toastId });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-white text-slate-900 pt-28 sm:pt-32 pb-24 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs  text-slate-400">

        </nav>

        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F]  text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
              <span>// Editorial Desk &amp; CMS</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Create New <span className="text-[#D8331F]">Blog Article</span>
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Publish logistics guides, API documentation, or courier case studies to MongoDB in real time.
            </p>
          </div>

          {/* Quick Stats / Date Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-1 text-xs  text-slate-600 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Auto Timestamp:</span>
              <span className="font-bold text-slate-900">{currentDateDisplay || "Realtime"}</span>
            </div>

          </div>
        </div>

        {/* Tab Switcher: Editor vs Live Preview */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreviewTab("editor")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${previewTab === "editor"
                ? "bg-[#D8331F] text-white shadow-md shadow-red-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              ✏️ Article Editor
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab("preview")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${previewTab === "preview"
                ? "bg-[#D8331F] text-white shadow-md shadow-red-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              👁️ Live Preview
            </button>
          </div>

          <Link
            href="/blog"
            className="text-xs  font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Back to All Blogs
          </Link>
        </div>

        {/* MAIN FORM */}
        {previewTab === "editor" ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SECTION 1: Meta Information */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center text-xs  font-bold">
                  1
                </span>
                Article Metadata &amp; SEO
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Title */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="e.g. How to Automate NDR & Reduce RTO by 35% in 2026"
                    className="w-full px-4 py-3 text-sm font-semibold text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] focus:border-transparent transition-all"
                  />
                </div>

                {/* Slug */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                      URL Slug <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px]  text-slate-400">
                      URL: /blog/{slug || "your-slug-here"}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={slug}
                      onChange={handleSlugChange}
                      placeholder="how-to-automate-ndr-reduce-rto"
                      className="w-full px-4 py-3 text-sm  text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] focus:border-transparent transition-all"
                    />
                    {isSlugManual && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsSlugManual(false);
                          const generated = title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "");
                          setSlug(generated);
                        }}
                        className="absolute right-3 top-3 text-[11px]  font-bold text-[#D8331F] hover:underline"
                      >
                        Reset to Auto
                      </button>
                    )}
                  </div>
                </div>

                {/* Short Description */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                      Short Description / Excerpt <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px]  text-slate-400">
                      {description.length} chars (Recommended: 120-160)
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief 1-2 sentence executive summary for Google meta description and blog cards..."
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] focus:border-transparent transition-all"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] focus:border-transparent transition-all"
                  >
                    {PRESET_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                    <option value="Custom">+ Custom Category</option>
                  </select>

                  {category === "Custom" && (
                    <input
                      type="text"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      placeholder="Enter custom category name"
                      className="w-full mt-2 px-4 py-2.5 text-xs text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                    />
                  )}
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="AI Shyp Squad"
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Tags Section */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                  Article Tags &amp; Keywords
                </label>
                <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50/70 border border-slate-200 rounded-2xl">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs  font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="w-4 h-4 rounded-full bg-slate-100 hover:bg-red-100 text-slate-500 hover:text-red-600 flex items-center justify-center text-[10px] transition-colors"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                  <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="Add tag and press Enter..."
                      className="w-full bg-transparent px-2 py-1 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-3 py-1 bg-slate-200 hover:bg-[#D8331F] hover:text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Featured Image */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center text-xs  font-bold">
                  2
                </span>
                Featured Cover Image
              </h2>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Left: Upload or URL Input */}
                <div className="space-y-4">
                  {/* File Upload Box */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-[#D8331F] bg-slate-50/50 hover:bg-red-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all space-y-2 group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="w-12 h-12 rounded-full bg-red-50 group-hover:bg-red-100 text-[#D8331F] mx-auto flex items-center justify-center text-xl transition-colors">
                      📁
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      Click to choose image from your computer
                    </p>
                    <p className="text-[11px]  text-slate-400">
                      Supports PNG, JPG, WEBP, SVG (Max 8MB)
                    </p>
                    {isUploading && (
                      <p className="text-xs font-bold text-[#D8331F] animate-pulse">
                        Uploading image to server...
                      </p>
                    )}
                  </div>

                  {/* Or Image URL */}
                  <div className="space-y-2">
                    <label className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                      Or Paste Image URL / Public Path
                    </label>
                    <input
                      type="text"
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      placeholder="/bestshipping.png or https://images.unsplash.com/..."
                      className="w-full px-4 py-2.5 text-xs  text-slate-900 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                    />
                  </div>

                  {/* Preset quick picks */}
                  <div className="space-y-2">
                    <span className="block text-xs  font-bold text-slate-500">
                      Quick Pick Presets:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {PRESET_IMAGES.map((preset) => (
                        <button
                          key={preset.url}
                          type="button"
                          onClick={() => setFeaturedImage(preset.url)}
                          className={`text-[11px]  font-semibold px-2.5 py-1 rounded-lg border transition-all ${featuredImage === preset.url
                            ? "bg-[#D8331F] text-white border-[#D8331F]"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Cover Image Live Preview */}
                <div className="space-y-2">
                  <span className="block text-xs  font-bold uppercase tracking-wider text-slate-700">
                    Live Cover Preview
                  </span>
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner flex items-center justify-center">
                    {featuredImage ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={featuredImage}
                          alt="Cover Preview"
                          fill
                          className="object-cover"
                          unoptimized={featuredImage.startsWith("http") || featuredImage.startsWith("/uploads/")}
                        />
                      </div>
                    ) : (
                      <span className="text-xs  text-slate-400">
                        No image selected
                      </span>
                    )}
                  </div>
                  <p className="text-[11px]  text-slate-400 truncate">
                    Target: {featuredImage}
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 3: Content Builder */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-red-100 text-[#D8331F] flex items-center justify-center text-xs  font-bold">
                    3
                  </span>
                  Article Body Content Builder
                </h2>

                {/* Add Block Buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => addBlock("paragraph")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
                  >
                    + Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("heading")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
                  >
                    + Heading (H2)
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("list")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
                  >
                    + Bullet List
                  </button>
                </div>
              </div>

              {/* Dynamic Content Blocks */}
              <div className="space-y-4">
                {contentBlocks.map((block, index) => (
                  <div
                    key={block.id || index}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3 transition-all hover:border-slate-300"
                  >
                    {/* Block Toolbar */}
                    <div className="flex items-center justify-between text-xs ">
                      <span className="font-bold text-slate-500 uppercase flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px]">
                          {index + 1}
                        </span>
                        {block.type === "heading" && "📌 Heading Block (H2)"}
                        {block.type === "paragraph" && "📄 Paragraph Block"}
                        {block.type === "list" && "📋 Bullet Checklist Block"}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveBlock(index, -1)}
                          disabled={index === 0}
                          className="px-2 py-1 bg-white hover:bg-slate-100 rounded-lg text-slate-600 disabled:opacity-30 border border-slate-200"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveBlock(index, 1)}
                          disabled={index === contentBlocks.length - 1}
                          className="px-2 py-1 bg-white hover:bg-slate-100 rounded-lg text-slate-600 disabled:opacity-30 border border-slate-200"
                          title="Move down"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeBlock(index)}
                          className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-200 font-bold"
                          title="Delete block"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Block Inputs */}
                    {block.type === "heading" && (
                      <input
                        type="text"
                        value={block.value}
                        onChange={(e) => updateBlock(index, "value", e.target.value)}
                        placeholder="Section Heading..."
                        className="w-full px-4 py-2.5 text-base font-extrabold text-slate-950 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                      />
                    )}

                    {block.type === "paragraph" && (
                      <textarea
                        rows={4}
                        value={block.value}
                        onChange={(e) => updateBlock(index, "value", e.target.value)}
                        placeholder="Write detailed paragraph content..."
                        className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                      />
                    )}

                    {block.type === "list" && (
                      <div className="space-y-2">
                        {block.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-xs shrink-0 border border-red-200">
                              ✓
                            </span>
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => updateListItem(index, itemIdx, e.target.value)}
                              placeholder="Key bullet item..."
                              className="flex-1 px-3 py-2 text-xs text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                            />
                            {block.items.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeListItem(index, itemIdx)}
                                className="w-6 h-6 rounded-lg text-slate-400 hover:text-red-600 flex items-center justify-center text-xs"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addListItem(index)}
                          className="text-xs  font-bold text-[#D8331F] hover:underline pt-1 inline-block"
                        >
                          + Add List Item
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="text-xs  text-slate-500">
                Ready to publish? Content will be stored directly in MongoDB.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setPreviewTab("preview")}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  👁️ Preview Article
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-[#FF8A6E] shadow-lg shadow-red-500/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Publishing to MongoDB..." : "🚀 Publish Blog Article →"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* LIVE PREVIEW TAB */
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
              {/* Header preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3  text-xs font-bold text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200">
                    {category === "Custom" ? customCategory || "Logistics" : category}
                  </span>
                  <span>{currentDateDisplay || "Today"}</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {title || "Untitled Blog Post"}
                </h1>

                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                  {description || "Article short description will appear here..."}
                </p>

                {/* Key Takeaways */}
                <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 text-slate-900 space-y-1.5 shadow-xs">
                  <span className="text-xs  font-bold uppercase tracking-wider text-[#D8331F]">
                    ⚡ Key Takeaways &amp; Executive Summary
                  </span>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {description || "Article summary highlights."}
                  </p>
                </div>
              </div>

              {/* Cover Image preview */}
              {featuredImage && (
                <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src={featuredImage}
                    alt={title || "Cover preview"}
                    fill
                    className="object-cover"
                    unoptimized={featuredImage.startsWith("http") || featuredImage.startsWith("/uploads/")}
                  />
                </div>
              )}

              {/* Content body preview */}
              <div className="pt-4 space-y-5">
                {contentBlocks.map((block, idx) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={idx}
                        className="text-xl sm:text-2xl font-extrabold font-sans text-slate-950 mt-8 mb-3 tracking-tight"
                      >
                        {block.value}
                      </h2>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={idx} className="space-y-2.5 my-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-red-50 text-[#D8331F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-200">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium"
                    >
                      {block.value}
                    </p>
                  );
                })}
              </div>

              {/* Tags Preview */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs  font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setPreviewTab("editor")}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                ← Return to Editor
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
