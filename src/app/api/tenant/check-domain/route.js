import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_BASE = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3500";
const BACKEND_ENDPOINT = `${API_BASE}/tenant/Aishypcheckdomain`;

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const domain = String(body?.domain || "").trim();

    if (!domain) {
      return NextResponse.json(
        { exists: false, message: "Domain is required." },
        { status: 400 }
      );
    }

    // Forward request directly to backend URL
    const upstreamRes = await fetch(BACKEND_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain }),
      cache: "no-store",
    });

    const data = await upstreamRes.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: upstreamRes.status,
    });
  } catch (error) {
    console.error("Error proxying to domain check backend:", error);
    return NextResponse.json(
      {
        error: "Unable to reach backend server.",
        details: error?.message || "Connection refused to backend API",
        endpoint: BACKEND_ENDPOINT,
      },
      { status: 502 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain") || "";

    if (!domain) {
      return NextResponse.json(
        { exists: false, message: "domain query parameter is required." },
        { status: 400 }
      );
    }

    const upstreamRes = await fetch(BACKEND_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain }),
      cache: "no-store",
    });

    const data = await upstreamRes.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: upstreamRes.status,
    });
  } catch (error) {
    console.error("Error proxying GET domain check:", error);
    return NextResponse.json(
      {
        error: "Unable to reach backend server.",
        details: error?.message,
        endpoint: BACKEND_ENDPOINT,
      },
      { status: 502 }
    );
  }
}
