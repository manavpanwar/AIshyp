"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import RichBlogContent from "@/components/blog/RichBlogContent";

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
  { label: "Best Shipping", url: "" },
];

const COLOR_PRESETS = [
  { label: "AI Shyp Red", value: "#D8331F" },
  { label: "Royal Blue", value: "#2563eb" },
  { label: "Emerald Green", value: "#059669" },
  { label: "Purple", value: "#7c3aed" },
  { label: "Amber Orange", value: "#d97706" },
  { label: "Slate Charcoal", value: "#0f172a" },
  { label: "Muted Slate", value: "#64748b" },
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
  const [featuredImage, setFeaturedImage] = useState("");
  const [tags, setTags] = useState(["Logistics Automation", "Shipping OS"]);
  const [tagInput, setTagInput] = useState("");

  // Content Blocks State with comprehensive block types
  const [contentBlocks, setContentBlocks] = useState([
    {
      id: "b1",
      type: "paragraph",
      value:
        "",
      textColor: "#0f172a",
      images: [
        {
          url: "",
          caption: "Real-time automated RTO mitigation workflow",
          alt: "RTO reduction chart",
          alignment: "center",
          size: "medium",
          linkUrl: "",
        },
      ],
      imagePlacement: "below", // 'inline' | 'above' | 'below'
    },
  ]);

  // UI State
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewTab, setPreviewTab] = useState("editor"); // 'editor' | 'preview'
  const fileInputRef = useRef(null);

  // Link Dialog Modal State
  const [linkModal, setLinkModal] = useState({
    isOpen: false,
    blockIndex: null,
    itemIndex: null,
    linkText: "",
    linkUrl: "",
  });

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

  // Auto generate slug from title
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

  // Tags
  const handleAddTag = (e) => {
    if (e && e.key && e.key !== "Enter" && e.key !== ",") return;
    if (e) e.preventDefault();
    const clean = tagInput.trim().replace(/^,+|,+$/g, "");
    if (clean && !tags.includes(clean)) {
      setTags([...tags, clean]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Universal File Upload helper
  const uploadFileToServer = async (file) => {
    if (!file) return null;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file (PNG, JPG, WEBP, SVG)");
      return null;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB. Please choose a smaller image.");
      return null;
    }

    const toastId = toast.loading(`Uploading ${file.name || "image"}...`);
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
      toast.success("Image uploaded successfully!", { id: toastId });
      return data.url;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to upload image", { id: toastId });
      return null;
    }
  };

  // Cover image upload
  const handleCoverUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const url = await uploadFileToServer(file);
    if (url) setFeaturedImage(url);
    setIsUploading(false);
  };

  // --- Content Block Manipulators ---
  const updateBlock = (index, field, value) => {
    const updated = [...contentBlocks];
    updated[index] = { ...updated[index], [field]: value };
    setContentBlocks(updated);
  };

  const moveBlock = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= contentBlocks.length) return;
    const updated = [...contentBlocks];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);
    setContentBlocks(updated);
  };

  const duplicateBlock = (index) => {
    const target = contentBlocks[index];
    const newBlock = JSON.parse(JSON.stringify(target));
    newBlock.id = `b-${Date.now()}`;
    const updated = [...contentBlocks];
    updated.splice(index + 1, 0, newBlock);
    setContentBlocks(updated);
    toast.success("Block duplicated!");
  };

  const removeBlock = (index) => {
    if (contentBlocks.length <= 1) {
      toast.error("Article must contain at least one content block");
      return;
    }
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  const addBlock = (type) => {
    const newId = `b-${Date.now()}`;
    if (type === "heading") {
      setContentBlocks([
        ...contentBlocks,
        { id: newId, type: "heading", level: "h2", value: "New Section Title", textColor: "#0f172a" },
      ]);
    } else if (type === "list") {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "list",
          listType: "bullet",
          bulletColor: "#D8331F",
          textColor: "#1e293b",
          items: ["First key takeaway", "Second critical milestone"],
        },
      ]);
    } else if (type === "numberedList") {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "list",
          listType: "numbered",
          bulletColor: "#2563eb",
          textColor: "#1e293b",
          items: ["Step 1: Configure courier API credentials", "Step 2: Generate test shipping labels"],
        },
      ]);
    } else if (type === "image") {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "image",
          url: "/aggreshipping.png",
          caption: "Courier Aggregation Architecture Overview",
          alt: "Architecture overview",
          alignment: "center",
          size: "large",
          linkUrl: "",
        },
      ]);
    } else if (type === "gallery") {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "gallery",
          title: "Platform Feature Highlights",
          columns: 2,
          caption: "Side-by-side courier performance benchmarking",
          images: [
            { url: "/", caption: "Multi-Carrier Rate Engine", linkUrl: "" },
            { url: "/Ratesunlock.png", caption: "Dynamic Profit Margin Matrix", linkUrl: "" },
          ],
        },
      ]);
    } else if (type === "quote") {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "quote",
          title: "Industry Insight",
          value: "Real-time NDR automation recovers over 35% of shipments before they return to origin.",
          author: "Logistics Engineering Lead",
          theme: "highlight",
        },
      ]);
    } else {
      setContentBlocks([
        ...contentBlocks,
        {
          id: newId,
          type: "paragraph",
          value: "Enter your paragraph content here...",
          textColor: "#0f172a",
          images: [],
          imagePlacement: "below",
        },
      ]);
    }
  };

  // --- Inline Text Formatting Helpers ---
  const applyInlineFormat = (blockIndex, formatType) => {
    const block = contentBlocks[blockIndex];
    if (!block || typeof block.value !== "string") return;

    const textarea = document.getElementById(`textarea-block-${block.id}`);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = block.value.substring(start, end);

    let formatted = "";
    if (formatType === "bold") {
      formatted = `**${selected || "bold text"}**`;
    } else if (formatType === "italic") {
      formatted = `*${selected || "italic text"}*`;
    } else if (formatType === "underline") {
      formatted = `<u>${selected || "underlined text"}</u>`;
    }

    const newVal = block.value.substring(0, start) + formatted + block.value.substring(end);
    updateBlock(blockIndex, "value", newVal);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + formatted.length);
    }, 50);
  };

  // Color ONLY the selected text inside the active textarea
  const applySelectedTextColor = (blockIndex, colorValue) => {
    const block = contentBlocks[blockIndex];
    if (!block || typeof block.value !== "string") return;

    const textarea = document.getElementById(`textarea-block-${block.id}`);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = block.value;

    if (start !== end && start >= 0 && end <= val.length) {
      // User selected specific text: color ONLY that selected portion
      const selected = val.substring(start, end);
      const formatted = `[color:${colorValue}]${selected}[/color]`;
      const newVal = val.substring(0, start) + formatted + val.substring(end);
      updateBlock(blockIndex, "value", newVal);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + formatted.length);
      }, 50);
      toast.success("Applied color to selected text!");
    } else {
      // No text selected: insert colored template at cursor
      const formatted = `[color:${colorValue}]colored text[/color]`;
      const newVal = val.substring(0, start) + formatted + val.substring(start);
      updateBlock(blockIndex, "value", newVal);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + `[color:${colorValue}]`.length,
          start + `[color:${colorValue}]`.length + "colored text".length
        );
      }, 50);
      toast.success("Select text first to color only that part, or edit the tag!");
    }
  };

  // Open link insertion modal for block
  const openLinkModal = (blockIndex, itemIndex = null) => {
    let initialText = "";
    if (itemIndex !== null) {
      initialText = "";
    } else {
      const textarea = document.getElementById(`textarea-block-${contentBlocks[blockIndex]?.id}`);
      if (textarea) {
        initialText = contentBlocks[blockIndex].value.substring(
          textarea.selectionStart,
          textarea.selectionEnd
        );
      }
    }

    setLinkModal({
      isOpen: true,
      blockIndex,
      itemIndex,
      linkText: initialText || "",
      linkUrl: "",
    });
  };

  const handleInsertLink = (e) => {
    e.preventDefault();
    const { blockIndex, itemIndex, linkText, linkUrl } = linkModal;
    if (!linkUrl.trim()) {
      toast.error("Please enter a link destination URL");
      return;
    }

    const displayText = linkText.trim() || linkUrl.trim();
    const markdownLink = `[${displayText}](${linkUrl.trim()})`;

    if (itemIndex !== null) {
      // For list items
      const updated = [...contentBlocks];
      const items = [...updated[blockIndex].items];
      items[itemIndex] = `${items[itemIndex]} ${markdownLink}`.trim();
      updated[blockIndex].items = items;
      setContentBlocks(updated);
    } else {
      // For paragraphs
      const textarea = document.getElementById(`textarea-block-${contentBlocks[blockIndex]?.id}`);
      const block = contentBlocks[blockIndex];
      if (textarea && block) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newVal = block.value.substring(0, start) + markdownLink + block.value.substring(end);
        updateBlock(blockIndex, "value", newVal);
      } else {
        updateBlock(blockIndex, "value", `${block.value} ${markdownLink}`.trim());
      }
    }

    setLinkModal({ isOpen: false, blockIndex: null, itemIndex: null, linkText: "", linkUrl: "" });
    toast.success("Link inserted!");
  };


  // List manipulators
  const updateListItem = (blockIndex, itemIndex, value) => {
    const updated = [...contentBlocks];
    const items = [...updated[blockIndex].items];
    items[itemIndex] = value;
    updated[blockIndex].items = items;
    setContentBlocks(updated);
  };

  const addListItem = (blockIndex) => {
    const updated = [...contentBlocks];
    updated[blockIndex].items = [...updated[blockIndex].items, "New list entry"];
    setContentBlocks(updated);
  };

  const removeListItem = (blockIndex, itemIndex) => {
    const updated = [...contentBlocks];
    updated[blockIndex].items = updated[blockIndex].items.filter((_, idx) => idx !== itemIndex);
    setContentBlocks(updated);
  };

  // --- Gallery Block Manipulators ---
  const addGalleryImage = (blockIndex) => {
    const updated = [...contentBlocks];
    const currentImages = updated[blockIndex].images || [];
    updated[blockIndex].images = [
      ...currentImages,
      { url: "", caption: "", linkUrl: "" },
    ];
    setContentBlocks(updated);
  };

  const updateGalleryImage = (blockIndex, imgIndex, field, value) => {
    const updated = [...contentBlocks];
    const images = [...(updated[blockIndex].images || [])];
    images[imgIndex] = { ...images[imgIndex], [field]: value };
    updated[blockIndex].images = images;
    setContentBlocks(updated);
  };

  const removeGalleryImage = (blockIndex, imgIndex) => {
    const updated = [...contentBlocks];
    updated[blockIndex].images = updated[blockIndex].images.filter((_, idx) => idx !== imgIndex);
    setContentBlocks(updated);
  };

  // Single gallery item file upload
  const handleGalleryItemUpload = async (blockIndex, imgIndex, file) => {
    if (!file) return;
    const url = await uploadFileToServer(file);
    if (url) {
      updateGalleryImage(blockIndex, imgIndex, "url", url);
    }
  };

  // Multi-image file upload to gallery
  const handleGalleryMultiUpload = async (blockIndex, files) => {
    const fileList = Array.from(files || []);
    if (fileList.length === 0) return;

    const toastId = toast.loading(`Uploading ${fileList.length} gallery images...`);
    const newImgs = [];

    for (const f of fileList) {
      const url = await uploadFileToServer(f);
      if (url) {
        newImgs.push({
          url,
          caption: f.name.replace(/\.[^/.]+$/, ""),
          linkUrl: "",
        });
      }
    }

    if (newImgs.length > 0) {
      const updated = [...contentBlocks];
      const cur = updated[blockIndex].images || [];
      // Filter out empty items
      const cleanedCur = cur.filter((img) => img.url && img.url.trim() !== "");
      updated[blockIndex].images = [...cleanedCur, ...newImgs];
      setContentBlocks(updated);
      toast.success(`Added ${newImgs.length} images to gallery!`, { id: toastId });
    } else {
      toast.dismiss(toastId);
    }
  };

  // --- Form Submit ---
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
      toast.error("Please provide or upload a featured cover image");
      return;
    }

    const finalCategory = category === "Custom" ? customCategory.trim() || "Logistics" : category;

    // Clean blocks for MongoDB storage
    const cleanedBlocks = contentBlocks.map((b) => {
      if (b.type === "heading") {
        return {
          type: "heading",
          level: b.level || "h2",
          value: (b.value || "").trim(),
          textColor: b.textColor || "#0f172a",
        };
      }
      if (b.type === "list") {
        return {
          type: "list",
          listType: b.listType || "bullet",
          bulletColor: b.bulletColor || "#D8331F",
          textColor: b.textColor || "#1e293b",
          items: (b.items || []).map((i) => i.trim()).filter(Boolean),
        };
      }
      if (b.type === "image") {
        return {
          type: "image",
          url: (b.url || "").trim(),
          caption: (b.caption || "").trim(),
          alt: (b.alt || "").trim(),
          alignment: b.alignment || "center",
          size: b.size || "large",
          linkUrl: (b.linkUrl || "").trim(),
        };
      }
      if (b.type === "gallery") {
        return {
          type: "gallery",
          title: (b.title || "").trim(),
          columns: b.columns || 2,
          caption: (b.caption || "").trim(),
          images: (b.images || [])
            .filter((img) => img && img.url && img.url.trim() !== "")
            .map((img) => ({
              url: (img.url || "").trim(),
              caption: (img.caption || "").trim(),
              linkUrl: (img.linkUrl || "").trim(),
            })),
        };
      }
      if (b.type === "quote") {
        return {
          type: "quote",
          title: (b.title || "").trim(),
          value: (b.value || "").trim(),
          author: (b.author || "").trim(),
          theme: b.theme || "highlight",
        };
      }
      // Paragraph Block
      return {
        type: "paragraph",
        value: (b.value || "").trim(),
        textColor: b.textColor || "#0f172a",
        imagePlacement: b.imagePlacement || "below",
        images: (b.images || [])
          .filter((img) => img && img.url && img.url.trim() !== "")
          .map((img) => ({
            url: (img.url || "").trim(),
            caption: (img.caption || "").trim(),
            alt: (img.alt || "").trim(),
            alignment: img.alignment || "center",
            size: img.size || "medium",
            linkUrl: (img.linkUrl || "").trim(),
          })),
      };
    });

    setIsSubmitting(true);
    const toastId = toast.loading("Publishing rich article to MongoDB...");

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
    <main className="w-full bg-white text-slate-900 pt-32 sm:pt-40 pb-24 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Editorial Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#D8331F] text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
              <span>// Advanced Editorial Studio &amp; CMS</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Create Rich <span className="text-[#D8331F]">Blog Article</span>
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl">
              Create engaging blog content with rich text, images, links, lists, and more.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-1 text-xs text-slate-600 shrink-0 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Timestamp:</span>
              <span className="font-bold text-slate-900">{currentDateDisplay || "Realtime"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Blocks:</span>
              <span className="font-bold text-[#D8331F]">{contentBlocks.length} content blocks</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreviewTab("editor")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${previewTab === "editor"
                ? "bg-[#D8331F] text-white shadow-md shadow-red-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              <span>✏️ Block Editor</span>
              <span className="text-[10px] opacity-80 font-mono">({contentBlocks.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab("preview")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${previewTab === "preview"
                ? "bg-[#D8331F] text-white shadow-md shadow-red-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              <span>👁️ Live Preview</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
          >
            ← Back to All Blogs
          </Link>
        </div>

        {/* EDITOR TAB */}
        {previewTab === "editor" ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SECTION 1: Metadata & SEO */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-red-100 text-[#D8331F] flex items-center justify-center text-xs font-extrabold">
                  1
                </span>
                Article Metadata &amp; SEO
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Title */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="e.g. How to Automate NDR & Reduce RTO by 35% in 2026"
                    className="w-full px-4 py-3 text-sm font-semibold text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] transition-all"
                  />
                </div>

                {/* Slug */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      URL Slug <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
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
                      className="w-full px-4 py-3 text-sm font-mono text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] transition-all"
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
                        className="absolute right-3 top-3 text-[11px] font-bold text-[#D8331F] hover:underline"
                      >
                        Reset to Auto
                      </button>
                    )}
                  </div>
                </div>

                {/* Short Description */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Short Description / Executive Summary <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {description.length} chars (Recommended: 120-160)
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief 1-2 sentence executive summary for Google meta description and blog cards..."
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] transition-all"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] transition-all"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="AI Shyp Squad"
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-slate-50/70 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F] transition-all"
                  />
                </div>
              </div>

              {/* Tags Section */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Article Tags &amp; Keywords
                </label>
                <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50/70 border border-slate-200 rounded-2xl">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs font-mono"
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
                      className="px-3 py-1 bg-slate-200 hover:bg-[#D8331F] hover:text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Featured Cover Image */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-red-100 text-[#D8331F] flex items-center justify-center text-xs font-extrabold">
                  2
                </span>
                Featured Cover Image
              </h2>

              <div className="grid md:grid-cols-2 gap-6 items-start">
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
                      onChange={handleCoverUpload}
                      className="hidden"
                    />
                    <div className="w-12 h-12 rounded-full bg-red-50 group-hover:bg-red-100 text-[#D8331F] mx-auto flex items-center justify-center text-xl transition-colors">
                      📁
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      Click to choose cover image from your computer
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      Supports PNG, JPG, WEBP, SVG (Max 10MB)
                    </p>
                    {isUploading && (
                      <p className="text-xs font-bold text-[#D8331F] animate-pulse">
                        Uploading image to server...
                      </p>
                    )}
                  </div>

                  {/* Or Image URL */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Or Paste Cover Image URL / Public Path
                    </label>
                    <input
                      type="text"
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      placeholder="/ or https://images.unsplash.com/..."
                      className="w-full px-4 py-2.5 text-xs font-mono text-slate-900 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                    />
                  </div>

                  {/* Preset quick picks */}
                  <div className="space-y-2">
                    <span className="block text-xs font-bold text-slate-500">
                      Quick Pick Presets:
                    </span>
                    <div className="flex flex-wrap gap-1.5 cursor-pointer">
                      {PRESET_IMAGES.map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setFeaturedImage(preset.url)}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${featuredImage === preset.url
                            ? "bg-gray-300 text-black border-[#D8331F]"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cover Live Preview */}
                <div className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
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
                          unoptimized={true}
                        />
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400">No image selected</span>
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    Target: {featuredImage}
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 3: Content Blocks Builder */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-red-100 text-[#D8331F] flex items-center justify-center text-xs font-extrabold">
                      3
                    </span>
                    Interactive Content Blocks Builder
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Assemble paragraphs with inline images, headings, custom-colored bullet/numbered lists, and multi-image galleries with file uploads.
                  </p>
                </div>

                {/* Quick Add Bar */}
                <div className="flex items-center gap-1.5 flex-wrap cursor-pointer">
                  <button
                    type="button"
                    onClick={() => addBlock("paragraph")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                    title="Add Paragraph with inline formatting & embedded images"
                  >
                    📝 + Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("heading")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    📌 + Heading
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("list")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    • + Bullet List
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("numberedList")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    🔢 + Numbered List
                  </button>

                  <button
                    type="button"
                    onClick={() => addBlock("gallery")}
                    className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-[#D8331F] rounded-xl text-xs font-bold transition-all hover:scale-105 border border-red-200 cursor-pointer"
                  >
                    🗂️ + Gallery (Upload)
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock("quote")}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    💡 + Callout
                  </button>
                </div>
              </div>

              {/* Dynamic Blocks List */}
              <div className="space-y-6">
                {contentBlocks.map((block, index) => (
                  <div
                    key={block.id || index}
                    className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-2xs space-y-4 transition-all hover:border-slate-300"
                  >
                    {/* Block Toolbar Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center font-mono font-bold text-[11px]">
                          {index + 1}
                        </span>
                        <span className="font-extrabold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          {block.type === "paragraph" && "📝 Paragraph Section"}
                          {block.type === "heading" && `🏷️ Heading Block (${(block.level || "h2").toUpperCase()})`}
                          {block.type === "list" &&
                            (block.listType === "numbered" ? "🔢 Numbered List Block" : "📌 Bullet List Block")}

                          {block.type === "gallery" && "🗂️ Multi-Image Gallery Block (Upload Enabled)"}
                          {block.type === "quote" && "💡 Callout / Quote Box"}
                        </span>
                      </div>

                      {/* Controls: Move, Duplicate, Delete */}
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => moveBlock(index, -1)}
                          disabled={index === 0}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-lg text-slate-700 disabled:opacity-30 border border-slate-200 font-bold"
                          title="Move block up"
                        >
                          ↑ Up
                        </button>
                        <button
                          type="button"
                          onClick={() => moveBlock(index, 1)}
                          disabled={index === contentBlocks.length - 1}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-lg text-slate-700 disabled:opacity-30 border border-slate-200 font-bold"
                          title="Move block down"
                        >
                          ↓ Down
                        </button>
                        <button
                          type="button"
                          onClick={() => duplicateBlock(index)}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-lg text-slate-700 border border-slate-200 font-medium"
                          title="Duplicate block"
                        >
                          📋 Clone
                        </button>
                        <button
                          type="button"
                          onClick={() => removeBlock(index)}
                          className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-200 font-bold"
                          title="Delete block"
                        >
                          ✕ Remove
                        </button>
                      </div>
                    </div>

                    {/* --- TYPE 1: PARAGRAPH BLOCK --- */}
                    {block.type === "paragraph" && (
                      <div className="space-y-4">
                        {/* Inline Formatting Toolbar & Selected Text Color */}
                        <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 bg-white rounded-2xl border border-slate-200 text-xs">
                          {/* Rich Text Format Buttons */}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase font-mono">Format:</span>
                            <button
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => applyInlineFormat(index, "bold")}
                              className="px-2.5 py-1 font-extrabold bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg border border-slate-200"
                              title="Bold selected text (**text**)"
                            >
                              B
                            </button>
                            <button
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => applyInlineFormat(index, "italic")}
                              className="px-2.5 py-1 italic font-serif bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg border border-slate-200"
                              title="Italic selected text (*text*)"
                            >
                              I
                            </button>
                            <button
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => applyInlineFormat(index, "underline")}
                              className="px-2.5 py-1 underline underline-offset-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg border border-slate-200"
                              title="Underline selected text (<u>text</u>)"
                            >
                              U
                            </button>
                            <button
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => openLinkModal(index)}
                              className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-bold flex items-center gap-1"
                              title="Add clickable link to selected text"
                            >
                              <span>🔗 Add Link</span>
                            </button>
                          </div>

                          {/* Selected Text Color Swatches */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                              <span className="text-[11px] font-bold text-slate-700 uppercase font-mono flex items-center gap-1">
                                <span>🎨 Selected Text Color:</span>
                              </span>
                              <div className="flex items-center gap-1">
                                {COLOR_PRESETS.map((c) => (
                                  <button
                                    key={c.value}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => applySelectedTextColor(index, c.value)}
                                    className="w-5 h-5 rounded-full border-2 border-white shadow-2xs hover:scale-125 transition-transform"
                                    style={{ backgroundColor: c.value }}
                                    title={`Color selected text: ${c.label}`}
                                  />
                                ))}
                                {/* Custom Color Input for Selected Text */}
                                <label
                                  className="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-500 p-0.5 shadow-2xs hover:scale-110 transition-transform"
                                  title="Pick Custom Color for Selected Text"
                                  onMouseDown={(e) => e.preventDefault()}
                                >
                                  <input
                                    type="button"
                                    onChange={(e) => applySelectedTextColor(index, e.target.value)}
                                    className="opacity-0 w-0 h-0 cursor-pointer"
                                  />
                                  <span className="w-full h-full rounded-full bg-white flex items-center justify-center text-[9px] font-bold text-slate-800">
                                    +
                                  </span>
                                </label>
                              </div>
                            </div>

                            {/* Paragraph Base Color */}
                            <div className="flex items-center gap-1 text-slate-500">
                              <span className="text-[10px] uppercase font-mono font-medium">Whole block:</span>
                              <input
                                type="button"
                                value={block.textColor || "#0f172a"}
                                onChange={(e) => updateBlock(index, "textColor", e.target.value)}
                                className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                                title="Change default color for entire paragraph"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Textarea */}
                        <div className="relative">
                          <textarea
                            id={`textarea-block-${block.id}`}
                            rows={4}
                            value={block.value}
                            onChange={(e) => updateBlock(index, "value", e.target.value)}
                            style={{ color: block.textColor || "#0f172a" }}
                            placeholder="Write paragraph content... "
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-2xl leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#D8331F] font-medium"
                          />
                        </div>


                      </div>
                    )}

                    {/* --- TYPE 2: HEADING BLOCK --- */}
                    {block.type === "heading" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                          {/* Heading Level Selector */}
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-600 uppercase font-mono">Heading Level:</span>
                            <div className="flex items-center gap-1">
                              {["h2", "h3", "h4"].map((lvl) => (
                                <button
                                  key={lvl}
                                  type="button"
                                  onClick={() => updateBlock(index, "level", lvl)}
                                  className={`px-3 py-1 rounded-lg font-bold uppercase transition-all ${(block.level || "h2") === lvl
                                    ? "bg-[#D8331F] text-white"
                                    : "bg-white text-slate-700 border border-slate-200"
                                    }`}
                                >
                                  {lvl.toUpperCase()}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Heading Color Swatches */}
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-400 uppercase font-mono">Heading Color:</span>
                            <div className="flex items-center gap-1">
                              {COLOR_PRESETS.map((c) => (
                                <button
                                  key={c.value}
                                  type="button"
                                  onClick={() => updateBlock(index, "textColor", c.value)}
                                  className={`w-5 h-5 rounded-full border-2 transition-transform ${block.textColor === c.value ? "scale-125 border-slate-900" : "border-white"
                                    }`}
                                  style={{ backgroundColor: c.value }}
                                  title={c.label}
                                />
                              ))}
                              <input
                                type="color"
                                value={block.textColor || "#0f172a"}
                                onChange={(e) => updateBlock(index, "textColor", e.target.value)}
                                className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                                title="Custom Hex Color"
                              />
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          value={block.value}
                          onChange={(e) => updateBlock(index, "value", e.target.value)}
                          style={{ color: block.textColor || "#0f172a" }}
                          placeholder="Enter section heading title..."
                          className="w-full px-4 py-3 text-lg font-extrabold bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D8331F]"
                        />
                      </div>
                    )}

                    {/* --- TYPE 3: LIST BLOCK (BULLET / NUMBERED) --- */}
                    {block.type === "list" && (
                      <div className="space-y-4">
                        {/* List Controls: Type, Bullet Color, Text Color */}
                        <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 bg-white rounded-2xl border border-slate-200 text-xs">
                          {/* List Type Switcher */}
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-600 uppercase font-mono">List Type:</span>
                            <button
                              type="button"
                              onClick={() => updateBlock(index, "listType", "bullet")}
                              className={`px-3 py-1 rounded-lg font-bold transition-all ${block.listType === "bullet" || !block.listType
                                ? "bg-[#D8331F] text-white"
                                : "bg-slate-100 text-slate-700"
                                }`}
                            >
                              • Bullet List
                            </button>
                            <button
                              type="button"
                              onClick={() => updateBlock(index, "listType", "numbered")}
                              className={`px-3 py-1 rounded-lg font-bold transition-all ${block.listType === "numbered"
                                ? "bg-[#2563eb] text-white"
                                : "bg-slate-100 text-slate-700"
                                }`}
                            >
                              123 Numbered List
                            </button>
                          </div>

                          {/* Bullet / Number Color */}
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-400 uppercase font-mono">Bullet Color:</span>
                            <div className="flex items-center gap-1">
                              {COLOR_PRESETS.map((c) => (
                                <button
                                  key={c.value}
                                  type="button"
                                  onClick={() => updateBlock(index, "bulletColor", c.value)}
                                  className={`w-5 h-5 rounded-full border-2 transition-transform ${block.bulletColor === c.value ? "scale-125 border-slate-900" : "border-white"
                                    }`}
                                  style={{ backgroundColor: c.value }}
                                  title={c.label}
                                />
                              ))}
                              <input
                                type="color"
                                value={block.bulletColor || "#D8331F"}
                                onChange={(e) => updateBlock(index, "bulletColor", e.target.value)}
                                className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                                title="Custom Bullet Color"
                              />
                            </div>
                          </div>

                          {/* Text Color */}
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-400 uppercase font-mono">Text Color:</span>
                            <div className="flex items-center gap-1">
                              {COLOR_PRESETS.map((c) => (
                                <button
                                  key={c.value}
                                  type="button"
                                  onClick={() => updateBlock(index, "textColor", c.value)}
                                  className={`w-5 h-5 rounded-full border-2 transition-transform ${block.textColor === c.value ? "scale-125 border-slate-900" : "border-white"
                                    }`}
                                  style={{ backgroundColor: c.value }}
                                  title={c.label}
                                />
                              ))}
                              <input
                                type="color"
                                value={block.textColor || "#1e293b"}
                                onChange={(e) => updateBlock(index, "textColor", e.target.value)}
                                className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                                title="Custom Text Color"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Items List */}
                        <div className="space-y-2">
                          {block.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center gap-2">
                              {block.listType === "numbered" ? (
                                <span
                                  className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs"
                                  style={{ backgroundColor: block.bulletColor || "#2563eb" }}
                                >
                                  {itemIdx + 1}
                                </span>
                              ) : (
                                <span
                                  className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 border"
                                  style={{
                                    backgroundColor: `${block.bulletColor || "#D8331F"}15`,
                                    color: block.bulletColor || "#D8331F",
                                    borderColor: `${block.bulletColor || "#D8331F"}40`,
                                  }}
                                >
                                  ✓
                                </span>
                              )}

                              <input
                                type="text"
                                value={item}
                                onChange={(e) => updateListItem(index, itemIdx, e.target.value)}
                                style={{ color: block.textColor || "#1e293b" }}
                                placeholder="List item text (supports **bold**, *italic*, [link](url))..."
                                className="flex-1 px-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D8331F] font-medium"
                              />

                              <button
                                type="button"
                                onClick={() => openLinkModal(index, itemIdx)}
                                className="px-2 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-bold border border-blue-200"
                                title="Add clickable URL to this item"
                              >
                                🔗 Link
                              </button>

                              {block.items.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeListItem(index, itemIdx)}
                                  className="w-7 h-7 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center text-xs font-bold"
                                  title="Delete item"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() => addListItem(index)}
                            className="text-xs font-bold text-[#D8331F] hover:underline pt-1 inline-flex items-center gap-1"
                          >
                            <span>+ Add List Item</span>
                          </button>
                        </div>
                      </div>
                    )}



                    {/* --- TYPE 5: GALLERY BLOCK (MULTI-IMAGE WITH FILE UPLOAD) --- */}
                    {block.type === "gallery" && (
                      <div className="space-y-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200">
                        {/* Gallery Toolbar Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <label className="font-bold text-slate-700 uppercase font-mono">Layout Columns:</label>
                            <button
                              type="button"
                              onClick={() => updateBlock(index, "columns", 2)}
                              className={`px-3 py-1 rounded-lg font-bold transition-all ${block.columns === 2 || !block.columns
                                ? "bg-[#D8331F] text-white shadow-2xs"
                                : "bg-slate-100 text-slate-700"
                                }`}
                            >
                              2 Columns
                            </button>
                            <button
                              type="button"
                              onClick={() => updateBlock(index, "columns", 3)}
                              className={`px-3 py-1 rounded-lg font-bold transition-all ${block.columns === 3
                                ? "bg-[#D8331F] text-white shadow-2xs"
                                : "bg-slate-100 text-slate-700"
                                }`}
                            >
                              3 Columns
                            </button>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Upload Multiple Images Button */}
                            <label className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs">
                              <span>📁 Upload Multiple Images</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => handleGalleryMultiUpload(index, e.target.files)}
                              />
                            </label>

                            <button
                              type="button"
                              onClick={() => addGalleryImage(index)}
                              className="px-3 py-1.5 bg-red-50 hover:bg-[#D8331F] text-[#D8331F] hover:text-white rounded-xl text-xs font-bold transition-all border border-red-200"
                            >
                              + Add Item
                            </button>
                          </div>
                        </div>

                        {/* Gallery Section Title & Caption */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase font-mono">
                              Gallery Title (Optional)
                            </label>
                            <input
                              type="text"
                              value={block.title || ""}
                              onChange={(e) => updateBlock(index, "title", e.target.value)}
                              placeholder="e.g. Courier Dashboard Architecture"
                              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase font-mono">
                              Gallery Caption (Optional)
                            </label>
                            <input
                              type="text"
                              value={block.caption || ""}
                              onChange={(e) => updateBlock(index, "caption", e.target.value)}
                              placeholder="Summary note displayed beneath gallery..."
                              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                            />
                          </div>
                        </div>

                        {/* Gallery Items Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-1">
                          {block.images?.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center font-mono text-[10px]">
                                    {imgIdx + 1}
                                  </span>
                                  <span>Gallery Photo #{imgIdx + 1}</span>
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeGalleryImage(index, imgIdx)}
                                  className="text-red-500 hover:text-red-700 text-xs font-bold"
                                >
                                  ✕ Remove
                                </button>
                              </div>

                              {/* Live Image Preview Thumbnail */}
                              {img.url ? (
                                <div className="relative w-full h-36 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
                                  <Image
                                    src={img.url}
                                    alt={img.caption || `Gallery image ${imgIdx + 1}`}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-24 rounded-xl border-2 border-dashed border-slate-200 bg-slate-100/60 flex items-center justify-center text-xs text-slate-400 font-medium">
                                  No image uploaded yet
                                </div>
                              )}

                              {/* Image Upload Button & URL */}
                              <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono">
                                  Image Source (Upload or URL)
                                </label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={img.url}
                                    onChange={(e) => updateGalleryImage(index, imgIdx, "url", e.target.value)}
                                    placeholder="/ or https://..."
                                    className="flex-1 px-3 py-1.5 text-xs font-mono bg-white border border-slate-200 rounded-xl"
                                  />
                                  <label className="px-3 py-1.5 bg-[#D8331F] hover:bg-[#FF8A6E] text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shrink-0 flex items-center gap-1 shadow-2xs">
                                    <span>📁 Upload</span>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e) =>
                                        handleGalleryItemUpload(index, imgIdx, e.target.files?.[0])
                                      }
                                    />
                                  </label>
                                </div>
                              </div>

                              {/* Presets */}
                              <div className="flex flex-wrap gap-1 items-center pt-0.5">
                                <span className="text-[10px] text-slate-400 font-medium mr-1">Presets:</span>
                                {PRESET_IMAGES.slice(0, 4).map((p) => (
                                  <button
                                    key={p.url}
                                    type="button"
                                    onClick={() => updateGalleryImage(index, imgIdx, "url", p.url)}
                                    className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-[10px] text-slate-600 border border-slate-200"
                                  >
                                    {p.label}
                                  </button>
                                ))}
                              </div>

                              {/* Clickable Link & Caption */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono">
                                    Clickable Link (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    value={img.linkUrl || ""}
                                    onChange={(e) =>
                                      updateGalleryImage(index, imgIdx, "linkUrl", e.target.value)
                                    }
                                    placeholder="e.g. /features or https://..."
                                    className="w-full px-3 py-1.5 text-xs font-mono bg-white border border-slate-200 rounded-xl"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono">
                                    Caption (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    value={img.caption || ""}
                                    onChange={(e) =>
                                      updateGalleryImage(index, imgIdx, "caption", e.target.value)
                                    }
                                    placeholder="Photo caption..."
                                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* --- TYPE 6: CALLOUT / QUOTE BLOCK --- */}
                    {block.type === "quote" && (
                      <div className="space-y-3 p-4 bg-white rounded-2xl border border-slate-200">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-700 uppercase font-mono">Theme:</span>
                            {["highlight", "info", "success"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => updateBlock(index, "theme", t)}
                                className={`px-2.5 py-1 rounded-lg font-bold capitalize ${(block.theme || "highlight") === t
                                  ? "bg-slate-900 text-white"
                                  : "bg-slate-100 text-slate-700"
                                  }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        <input
                          type="text"
                          value={block.title || ""}
                          onChange={(e) => updateBlock(index, "title", e.target.value)}
                          placeholder="Callout Title (e.g. Industry Insight, Pro Tip)..."
                          className="w-full px-3 py-2 text-xs font-bold uppercase tracking-wider bg-slate-50 border border-slate-200 rounded-xl"
                        />

                        <textarea
                          rows={2}
                          value={block.value || ""}
                          onChange={(e) => updateBlock(index, "value", e.target.value)}
                          placeholder="Quote / takeaway content..."
                          className="w-full px-4 py-2.5 text-sm italic bg-slate-50 border border-slate-200 rounded-xl"
                        />

                        <input
                          type="text"
                          value={block.author || ""}
                          onChange={(e) => updateBlock(index, "author", e.target.value)}
                          placeholder="Author / Source (e.g. Logistics Director)..."
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Block Bottom Menu */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-2 uppercase font-mono">+ Add Content Block:</span>
                <button
                  type="button"
                  onClick={() => addBlock("paragraph")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  📝 Paragraph
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("heading")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  🏷️ Heading
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("list")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  📌 Bullet List
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("numberedList")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  🔢 Numbered List
                </button>

                <button
                  type="button"
                  onClick={() => addBlock("gallery")}
                  className="px-4 py-2 bg-red-50 hover:bg-red-100 text-[#D8331F] rounded-xl text-xs font-bold transition-all border border-red-200 cursor-pointer"
                >
                  🗂️ Gallery (Upload)
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("quote")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  💡 Callout
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="text-xs font-medium text-slate-500">
                Ready to publish?
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setPreviewTab("preview")}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap"
                >
                  👁️ Preview Article
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-[#FF8A6E] shadow-lg shadow-red-500/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubmitting ? "Publishing to save" : "Publish Blog Article →"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* LIVE PREVIEW TAB (Powered by RichBlogContent) */
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
              {/* Header preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-xs font-bold text-slate-400 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#D8331F] border border-red-200">
                    {category === "Custom" ? customCategory || "Logistics" : category}
                  </span>
                  <span>{currentDateDisplay || "Today"}</span>
                  <span>•</span>
                  <span>4 min read</span>
                  <span>•</span>
                  <span className="text-slate-700 font-semibold">By {author || "AI Shyp Squad"}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {title || "Untitled Blog Post"}
                </h1>

                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                  {description || "Article short description will appear here..."}
                </p>

                {/* Key Takeaways */}
                <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 text-slate-900 space-y-1.5 shadow-xs">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F]">
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
                    unoptimized={true}
                  />
                </div>
              )}

              {/* Content body rendered via Universal RichBlogContent */}
              <div className="pt-4">
                <RichBlogContent content={contentBlocks} />
              </div>

              {/* Tags Preview */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setPreviewTab("editor")}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                ← Return to Editor
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-[#FF8A6E] shadow-md transition-all hover:scale-105"
              >
                {isSubmitting ? "Publishing..." : "🚀 Publish Article →"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Clickable Link Inserter Modal */}
      {linkModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                  🔗
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Insert Clickable Link</h3>
                  <p className="text-[11px] text-slate-500">Internal route or external reference</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLinkModal({ ...linkModal, isOpen: false })}
                className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleInsertLink} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Anchor Text / Link Label
                </label>
                <input
                  type="text"
                  value={linkModal.linkText}
                  onChange={(e) => setLinkModal({ ...linkModal, linkText: e.target.value })}
                  placeholder="e.g. AI Shyp Logistics Guide or NDR Automation"
                  className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Destination URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={linkModal.linkUrl}
                  onChange={(e) => setLinkModal({ ...linkModal, linkUrl: e.target.value })}
                  placeholder="https://en.wikipedia.org/... or /features or /blog/slug"
                  className="w-full px-3 py-2 text-xs font-mono text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <p className="text-[10px] text-slate-400">
                  Tip: External links starting with <code className="text-slate-600">https://</code> open in a new tab with an indicator icon.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLinkModal({ ...linkModal, isOpen: false })}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20"
                >
                  Insert Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
