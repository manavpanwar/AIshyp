import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const blog = await prisma.blog.findFirst({
      where: { slug, isPublished: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("GET /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const existing = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!existing) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await prisma.blog.delete({
      where: { slug },
    });

    return NextResponse.json({
      success: true,
      message: "Blog post removed successfully",
    });
  } catch (error) {
    console.error("DELETE /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog", details: error.message },
      { status: 500 }
    );
  }
}
