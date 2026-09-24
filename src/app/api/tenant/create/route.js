import { NextResponse } from "next/server";

// export const runtime = "nodejs";

const API_BASE = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3500";
const BACKEND_ENDPOINT = `${API_BASE}/tenant/AishypTenantcreate`;

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    const name = String(body?.name || "").trim();
    const panNumber = String(body?.panNumber || "").trim().toUpperCase();
    const phoneNumber = String(body?.phoneNumber || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const domain = String(body?.domain || "").trim();

    // Basic frontend validation pass
    if (!name || !panNumber || !phoneNumber || !email || !domain) {
      return NextResponse.json(
        { error: "All fields (name, panNumber, phoneNumber, email, domain) are required." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      panNumber,
      phoneNumber,
      email,
      domain,
    };

    // Forward request directly to backend API URL
    const upstreamRes = await fetch(BACKEND_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const data = await upstreamRes.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: upstreamRes.status,
    });
  } catch (error) {
    console.error("Error proxying to tenant create backend:", error);
    return NextResponse.json(
      {
        error: "Unable to connect to the backend server.",
        details: error?.message || "Connection refused to backend API",
        endpoint: BACKEND_ENDPOINT,
      },
      { status: 502 }
    );
  }
}
