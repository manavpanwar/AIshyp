import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    await connectToMongo();
    const blog = await Blog.findOne({ slug, isPublished: true }).lean();

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

    await connectToMongo();
    const deleted = await Blog.findOneAndDelete({ slug });

    if (!deleted) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

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
