import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });
    if (existing) {
      return NextResponse.json(
        { ok: true, message: "Email already subscribed." },
        { status: 200 },
      );
    }

    await prisma.newsletterSubscription.create({
      data: { email },
    });

    return NextResponse.json(
      { ok: true, message: "Subscribed successfully." },
      { status: 201 },
    );
  } catch (error) {
    // P2002 is Prisma's unique constraint violation error code
    if (error?.code === "P2002") {
      return NextResponse.json(
        { ok: true, message: "Email already subscribed." },
        { status: 200 },
      );
    }

    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }
}
