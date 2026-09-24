"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";


export function FormattedText({ text, defaultColor }) {
  if (!text) return null;
  if (typeof text !== "string") return text;

  return <>{parseNodes(text, 0)}</>;
}

function parseNodes(str, depth = 0) {
  if (!str) return null;
  if (depth > 6) return str; // Prevent infinite recursion

  const masterRegex =
    /\[color:\s*(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*\]([\s\S]*?)\[\/color\]|<span\s+style=["']color:\s*([^"';]+)[^"']*["']>([\s\S]*?)<\/span>|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|<b>([\s\S]*?)<\/b>|<strong>([\s\S]*?)<\/strong>|(?<!\*)\*([^*]+)\*(?!\*)|<i>([\s\S]*?)<\/i>|<em>([\s\S]*?)<\/em>|<u>([\s\S]*?)<\/u>|\n/gi;

  const elements = [];
  let lastIndex = 0;
  let match;
  let keyIdx = 0;

  while ((match = masterRegex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      elements.push(str.substring(lastIndex, match.index));
    }

    const matchedStr = match[0];

    if (matchedStr === "\n") {
      elements.push(<br key={`br-${depth}-${keyIdx++}`} />);
    } else if (match[1] && match[2] !== undefined) {
      // [color:#hex]selected text[/color]
      const colorVal = match[1];
      const innerText = match[2];
      elements.push(
        <span
          key={`col-${depth}-${keyIdx++}`}
          style={{ color: colorVal }}
          className="font-medium inline"
        >
          {parseNodes(innerText, depth + 1)}
        </span>
      );
    } else if (match[3] && match[4] !== undefined) {
      // <span style="color:...">selected text</span>
      const colorVal = match[3];
      const innerText = match[4];
      elements.push(
        <span
          key={`span-col-${depth}-${keyIdx++}`}
          style={{ color: colorVal }}
          className="font-medium inline"
        >
          {parseNodes(innerText, depth + 1)}
        </span>
      );
    } else if (match[5] && match[6]) {
      // [Anchor Text](https://url)
      const label = match[5];
      const href = match[6].trim();
      const isExternal = href.startsWith("http://") || href.startsWith("https://");

      if (isExternal) {
        elements.push(
          <a
            key={`a-ext-${depth}-${keyIdx++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563eb] hover:text-[#1d4ed8] underline decoration-[#2563eb]/40 hover:decoration-[#1d4ed8] underline-offset-3 font-semibold transition-colors duration-150 inline-flex items-center gap-0.5 group"
            title={`Open link: ${href}`}
          >
            <span>{parseNodes(label, depth + 1)}</span>
            <svg
              className="w-3 h-3 text-[#2563eb]/70 group-hover:text-[#1d4ed8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.5 1.5H10.5V8.5" />
              <path d="M10.5 1.5L1.5 10.5" />
            </svg>
          </a>
        );
      } else {
        elements.push(
          <Link
            key={`a-int-${depth}-${keyIdx++}`}
            href={href}
            className="text-[#D8331F] hover:text-[#FF8A6E] underline decoration-[#D8331F]/40 hover:decoration-[#D8331F] underline-offset-3 font-bold transition-colors duration-150"
            title={`Go to ${href}`}
          >
            {parseNodes(label, depth + 1)}
          </Link>
        );
      }
    } else if (match[7] || match[8] || match[9]) {
      // **bold** or <b>bold</b> or <strong>bold</strong>
      const boldText = match[7] || match[8] || match[9];
      elements.push(
        <strong key={`b-${depth}-${keyIdx++}`} className="font-extrabold text-slate-950">
          {parseNodes(boldText, depth + 1)}
        </strong>
      );
    } else if (match[10] || match[11] || match[12]) {
      // *italic* or <i>italic</i> or <em>italic</em>
      const italicText = match[10] || match[11] || match[12];
      elements.push(
        <em key={`i-${depth}-${keyIdx++}`} className="italic text-slate-800">
          {parseNodes(italicText, depth + 1)}
        </em>
      );
    } else if (match[13]) {
      // <u>underline</u>
      const underlineText = match[13];
      elements.push(
        <u
          key={`u-${depth}-${keyIdx++}`}
          className="underline decoration-slate-400 underline-offset-3 decoration-1"
        >
          {parseNodes(underlineText, depth + 1)}
        </u>
      );
    }

    lastIndex = masterRegex.lastIndex;
  }

  if (lastIndex < str.length) {
    elements.push(str.substring(lastIndex));
  }

  return elements.length > 0 ? elements : str;
}


export function ContentImageItem({ img, isEmbedded = false, isGallery = false }) {
  if (!img || !img.url) return null;

  const alignment = img.alignment || "center";
  const size = img.size || "medium";

  // Size classes
  const sizeClasses = {
    small: "max-w-[300px]",
    medium: "max-w-[560px]",
    large: "max-w-[820px]",
    full: "w-full max-w-full",
  };
  const sizeClass = isGallery ? "w-full max-w-full" : sizeClasses[size] || sizeClasses.medium;

  // Alignment classes
  let alignWrapperClass = isGallery ? "my-2 w-full flex flex-col" : "my-6";
  if (!isGallery) {
    if (alignment === "center") {
      alignWrapperClass += " mx-auto text-center flex flex-col items-center";
    } else if (alignment === "left") {
      alignWrapperClass += isEmbedded
        ? " sm:float-left sm:mr-6 sm:mb-4 w-full"
        : " mr-auto text-left";
    } else if (alignment === "right") {
      alignWrapperClass += isEmbedded
        ? " sm:float-right sm:ml-6 sm:mb-4 w-full"
        : " ml-auto text-right";
    } else {
      alignWrapperClass += " w-full";
    }
  }

  const isExternal = img.linkUrl && (img.linkUrl.startsWith("http://") || img.linkUrl.startsWith("https://"));

  const ImageElement = (
    <div
      className={`relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-50 group transition-all duration-300 ${
        img.linkUrl ? "hover:shadow-xl hover:border-[#D8331F]/50 hover:scale-[1.01] cursor-pointer" : ""
      } ${sizeClass}`}
    >
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-slate-100">
        <Image
          src={img.url}
          alt={img.alt || img.caption || "Blog image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={true}
        />
      </div>

      {img.linkUrl && (
        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-90 group-hover:opacity-100 flex items-center gap-1 shadow-md border border-white/20 transition-opacity">
          <span>🔗 Open Link</span>
          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 1.5h6v6M9 1.5L1.5 9" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <figure className={alignWrapperClass}>
      {img.linkUrl ? (
        isExternal ? (
          <a
            href={img.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            title={`Visit: ${img.linkUrl}`}
          >
            {ImageElement}
          </a>
        ) : (
          <Link href={img.linkUrl} className="block" title={`Visit: ${img.linkUrl}`}>
            {ImageElement}
          </Link>
        )
      ) : (
        ImageElement
      )}

      {img.caption && (
        <figcaption className="text-xs text-slate-500 italic mt-2.5 max-w-lg mx-auto font-medium text-center">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}


export function RenderBlogBlock({ block, index = 0 }) {
  if (!block) return null;

  // Handle plain string legacy paragraphs
  if (typeof block === "string") {
    return (
      <p
        key={`str-${index}`}
        className="text-slate-700 text-sm sm:text-base leading-relaxed mt-5 font-medium"
      >
        <FormattedText text={block} />
      </p>
    );
  }

  // 1. Heading Block (H2, H3, H4 with custom colors)
  if (block.type === "heading") {
    const level = block.level || "h2";
    const customColor = block.textColor || block.color;
    const styleObj = customColor ? { color: customColor } : {};

    if (level === "h3") {
      return (
        <h3
          key={`h3-${index}`}
          style={styleObj}
          className="text-lg sm:text-xl font-extrabold font-sans text-slate-900 mt-6 mb-2.5 tracking-tight"
        >
          <FormattedText text={block.value} />
        </h3>
      );
    }

    if (level === "h4") {
      return (
        <h4
          key={`h4-${index}`}
          style={styleObj}
          className="text-base sm:text-lg font-bold font-sans text-slate-900 mt-5 mb-2 tracking-tight"
        >
          <FormattedText text={block.value} />
        </h4>
      );
    }

    return (
      <h2
        key={`h2-${index}`}
        style={styleObj}
        className="text-xl sm:text-2xl font-extrabold font-sans text-slate-950 mt-8 mb-3 tracking-tight border-b border-slate-100 pb-2"
      >
        <FormattedText text={block.value} />
      </h2>
    );
  }

  // 2. List Block (Bullet Lists and Numbered Lists with customizable colors)
  if (block.type === "list") {
    const isNumbered = block.listType === "numbered";
    const bulletColor = block.bulletColor || "#D8331F";
    const textColor = block.textColor || "#1e293b";

    return (
      <div key={`list-wrap-${index}`} className="my-5">
        <ul className="space-y-3">
          {block.items &&
            block.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {isNumbered ? (
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 text-white shadow-xs mt-0.5"
                    style={{ backgroundColor: bulletColor }}
                  >
                    {idx + 1}
                  </span>
                ) : (
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border"
                    style={{
                      backgroundColor: `${bulletColor}15`,
                      color: bulletColor,
                      borderColor: `${bulletColor}40`,
                    }}
                  >
                    ✓
                  </span>
                )}
                <div
                  className="text-sm sm:text-base leading-relaxed font-medium flex-1"
                  style={{ color: textColor }}
                >
                  <FormattedText text={item} />
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  // 3. Standalone Image Block
  if (block.type === "image") {
    return (
      <ContentImageItem
        key={`img-${index}`}
        img={{
          url: block.url || block.value,
          caption: block.caption,
          alt: block.alt,
          alignment: block.alignment || "center",
          size: block.size || "large",
          linkUrl: block.linkUrl || block.urlLink,
        }}
        isEmbedded={false}
      />
    );
  }

  // 4. Multi-Image Gallery Block
  if (block.type === "gallery") {
    const cols = block.columns || 2;
    const gridColsClass =
      cols === 3
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

    return (
      <div key={`gallery-${index}`} className="my-8 space-y-3">
        {block.title && (
          <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider text-center">
            {block.title}
          </h4>
        )}
        <div className={`grid gap-4 sm:gap-6 ${gridColsClass}`}>
          {block.images &&
            block.images
              .filter((img) => img && img.url)
              .map((img, imgIdx) => (
                <ContentImageItem
                  key={`gallery-img-${imgIdx}`}
                  img={img}
                  isEmbedded={false}
                  isGallery={true}
                />
              ))}
        </div>
        {block.caption && (
          <p className="text-xs text-slate-500 italic text-center font-medium">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  // 5. Callout / Quote Box
  if (block.type === "quote" || block.type === "callout") {
    const theme = block.theme || "highlight";
    const themes = {
      highlight: {
        border: "border-[#D8331F]",
        bg: "bg-red-50/60",
        badge: "text-[#D8331F]",
      },
      info: {
        border: "border-blue-600",
        bg: "bg-blue-50/60",
        badge: "text-blue-700",
      },
      success: {
        border: "border-emerald-600",
        bg: "bg-emerald-50/60",
        badge: "text-emerald-700",
      },
    };
    const t = themes[theme] || themes.highlight;

    return (
      <div
        key={`quote-${index}`}
        className={`my-6 p-5 sm:p-6 rounded-2xl border-l-4 ${t.border} ${t.bg} text-slate-900 shadow-xs space-y-2`}
      >
        {block.title && (
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${t.badge}`}>
            💡 {block.title}
          </span>
        )}
        <p className="text-sm sm:text-base font-medium italic leading-relaxed text-slate-800">
          <FormattedText text={block.value} />
        </p>
        {block.author && (
          <p className="text-xs font-bold text-slate-600 text-right">— {block.author}</p>
        )}
      </div>
    );
  }

  // 6. Paragraph Block with support for text color, embedded single/multiple images, and links
  const textColor = block.textColor || block.color;
  const styleObj = textColor ? { color: textColor } : {};
  const embeddedImages = Array.isArray(block.images)
    ? block.images.filter((img) => img && img.url)
    : block.image && block.image.url
    ? [block.image]
    : [];

  return (
    <div key={`p-wrapper-${index}`} className="my-5 clear-both">
      {/* If images placed 'above' */}
      {block.imagePlacement === "above" && embeddedImages.length > 0 && (
        <div className="space-y-4 mb-4">
          {embeddedImages.map((img, imgIdx) => (
            <ContentImageItem
              key={`emb-img-top-${imgIdx}`}
              img={img}
              isEmbedded={false}
            />
          ))}
        </div>
      )}

      {/* Paragraph Text with embedded side images */}
      <div className="flow-root">
        {block.imagePlacement !== "above" &&
          block.imagePlacement !== "below" &&
          embeddedImages.map((img, imgIdx) => (
            <ContentImageItem
              key={`emb-img-side-${imgIdx}`}
              img={img}
              isEmbedded={true}
            />
          ))}

        <p
          style={styleObj}
          className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium"
        >
          {block.link ? (
            // Legacy link format compatibility
            <>
              <FormattedText text={block.value} />{" "}
              <Link
                href={block.link.href}
                className="text-[#D8331F] font-bold underline decoration-[#D8331F]/40 hover:underline"
              >
                {block.link.label}
              </Link>
              {block.trailing && <FormattedText text={block.trailing} />}
            </>
          ) : (
            <FormattedText text={block.value} />
          )}
        </p>
      </div>

      {/* If images placed 'below' or default when multiple */}
      {block.imagePlacement === "below" && embeddedImages.length > 0 && (
        <div className="space-y-4 mt-4">
          {embeddedImages.map((img, imgIdx) => (
            <ContentImageItem
              key={`emb-img-bot-${imgIdx}`}
              img={img}
              isEmbedded={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default function RichBlogContent({ content }) {
  if (!content) return null;

  if (typeof content === "string") {
    return (
      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium">
        <FormattedText text={content} />
      </div>
    );
  }

  if (Array.isArray(content)) {
    return (
      <div className="space-y-2">
        {content.map((block, index) => (
          <RenderBlogBlock key={block?.id || index} block={block} index={index} />
        ))}
      </div>
    );
  }

  return null;
}
