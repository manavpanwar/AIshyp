import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

function calculateReadingTime(content) {
  let text = "";
  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    text = content
      .map((block) => {
        if (typeof block === "string") return block;
        const parts = [];
        if (block?.value) parts.push(block.value);
        if (block?.caption) parts.push(block.caption);
        if (block?.items && Array.isArray(block.items)) parts.push(block.items.join(" "));
        if (block?.images && Array.isArray(block.images)) {
          block.images.forEach((img) => {
            if (img?.caption) parts.push(img.caption);
          });
        }
        return parts.join(" ");
      })
      .join(" ");
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "100", 10);

    const where = { isPublished: true };
    if (category && category !== "All") {
      where.category = {
        equals: category,
        mode: "insensitive",
      };
    }

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: [{ publishedDate: "desc" }, { createdAt: "desc" }],
      take: limit,
    });

    return NextResponse.json({ success: true, count: blogs.length, blogs });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    let {
      title,
      slug,
      description,
      content,
      featuredImage,
      author,
      category,
      tags,
      readingTime,
    } = body;

    title = String(title || "").trim();
    slug = String(slug || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    description = String(description || "").trim();
    author = String(author || "AI Shyp Squad").trim();
    category = String(category || "Logistics Automation").trim();
    featuredImage = String(featuredImage || "/aishiplogo.png").trim();

    // Validation
    if (!title) {
      return NextResponse.json(
        { error: "Blog title is required" },
        { status: 400 }
      );
    }
    if (!slug) {
      return NextResponse.json(
        { error: "Blog slug is required" },
        { status: 400 }
      );
    }
    if (!description) {
      return NextResponse.json(
        { error: "Short description / excerpt is required" },
        { status: 400 }
      );
    }
    if (!content || (Array.isArray(content) && content.length === 0)) {
      return NextResponse.json(
        { error: "Blog content cann't be empty" },
        { status: 400 }
      );
    }

    // Process tags
    if (typeof tags === "string") {
      tags = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    } else if (!Array.isArray(tags)) {
      tags = [];
    }

    // Auto calculate reading time if not provided
    if (!readingTime) {
      readingTime = calculateReadingTime(content);
    }

    // Check slug collision
    const existing = await prisma.blog.findUnique({
      where: { slug },
    });
    if (existing) {
      return NextResponse.json(
        { error: `A blog post with slug "${slug}" already exists. Please choose a different title or slug.` },
        { status: 409 }
      );
    }

    // Create blog in PostgreSQL
    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        description,
        content,
        featuredImage,
        author,
        category,
        tags,
        readingTime,
        publishedDate: new Date(),
        isPublished: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog created and published successfully to PostgreSQL!",
        blog: newBlog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json(
      { error: "Failed to create blog", details: error.message },
      { status: 500 }
    );
  }
}
