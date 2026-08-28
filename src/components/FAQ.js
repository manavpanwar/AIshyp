"use client";

import { memo, useMemo, useState } from "react";
import Link from "next/link";
import { faqItems } from "../data/faq";

const CATEGORY_MAP = [
  { key: "All", label: "General" },
  { key: "Shipping Aggregator", label: "Shipping" },
  { key: "Courier Franchise", label: "Franchise" },
  { key: "RTO & NDR", label: "RTO / NDR" },
  { key: "API & Integrations", label: "Integration" },
];

function FAQ({
  items = faqItems,
  subtitle = "Answers for shipping aggregation, franchise operations, RTO/NDR, and delivery optimization for AI Shyp SaaS.",
  maxItems,
  showSearch = false,
  showCategoryFilter = true,
  showCta = false,
  showExploreMore = false,
  className = "",
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIds, setOpenIds] = useState(
    () => new Set(["shipping-aggregator-1", "shipping-aggregator-3", "shipping-aggregator-2"])
  );

  const toggleOpen = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    let result = items || [];

    if (showCategoryFilter && activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (showSearch && normalizedQuery) {
      result = result.filter(
        (item) =>
          item.question.toLowerCase().includes(normalizedQuery) ||
          item.answer.toLowerCase().includes(normalizedQuery),
      );
    }

    if (typeof maxItems === "number") {
      result = result.slice(0, maxItems);
    }

    return result;
  }, [activeCategory, items, maxItems, normalizedQuery, showCategoryFilter, showSearch]);

  const leftColItems = filteredItems.filter((_, idx) => idx % 2 === 0);
  const rightColItems = filteredItems.filter((_, idx) => idx % 2 !== 0);

  const renderCard = (item) => {
    const isOpen = openIds.has(item.id);
    const panelId = `faq-panel-${item.id}`;
    const buttonId = `faq-button-${item.id}`;

    return (
      <article
        key={item.id}
        className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-xs hover:shadow-md transition-all duration-200"
      >
        <h3>
          <button
            id={buttonId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => toggleOpen(item.id)}
            className="w-full text-left flex items-start justify-between gap-4 group"
          >
            <span className="font-extrabold text-slate-900 text-sm md:text-base leading-snug group-hover:text-[#D8331F] transition-colors">
              {item.question}
            </span>
            <span className="text-[#D8331F] font-bold text-xl leading-none shrink-0 select-none pt-0.5">
              {isOpen ? "−" : "+"}
            </span>
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-3 pt-3 border-t border-slate-100 font-medium">
              {item.answer}
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column (Headline, Subtitle, Category Filter Pills, Explore CTA) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div>
            <h2 className="font-sans font-extrabold text-[#D8331F] text-4xl md:text-5xl leading-[1.08] tracking-tight">
              Everything You <br />
              Need to Know
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed font-medium max-w-sm">
              {subtitle}
            </p>
          </div>

          {showCategoryFilter && (
            <div className="flex flex-wrap gap-2.5 pt-1">
              {CATEGORY_MAP.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#D8331F] text-white shadow-xs"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 shadow-2xs"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {showSearch && (
            <div className="pt-2">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQ by keyword..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-[#D8331F] shadow-2xs"
              />
            </div>
          )}

          {showExploreMore && (
            <div className="pt-2">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-red-700 transition-all shadow-sm hover:shadow-md group"
              >
                Explore More FAQs
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </Link>
            </div>
          )}

          {showCta && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 text-white p-5">
              <p className="font-semibold text-sm">Still have questions?</p>
              <p className="text-xs text-slate-300 mt-1">
                Talk to our logistics team for franchise setup, pricing, and integration support.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-3 rounded-lg bg-[#D8331F] px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Contact AIShyp Team
              </Link>
            </div>
          )}
        </div>

        {/* Right Column (2-Column Masonry Cards Grid) */}
        <div className="lg:col-span-8">
          {filteredItems.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div className="space-y-4">{leftColItems.map(renderCard)}</div>
                <div className="space-y-4">{rightColItems.map(renderCard)}</div>
              </div>

              {showExploreMore && (
                <div className="mt-8 text-center md:text-left block lg:hidden">
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#D8331F] hover:bg-red-700 transition-all shadow-sm hover:shadow-md group"
                  >
                    Explore More FAQs
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <p className="text-sm text-slate-500">
                No FAQs matched your filter. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);
