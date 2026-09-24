import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // ✅ VALIDATION
    if (!name) {
      return NextResponse.json(
        { error: "Full Name is required" },
        { status: 400 },
      );
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid Email is required" },
        { status: 400 },
      );
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }
    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 },
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const emailUser = String(process.env.EMAIL_USER ?? "").trim();
    const emailPass = String(process.env.EMAIL_PASS ?? "").trim();
    const receiverEmail = String(
      process.env.CONTACT_RECEIVER_EMAIL ?? emailUser,
    ).trim();

    // ✅ SAVE DATA TO POSTGRESQL
    const created = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        subject,
        message,
      },
    });

    // ✅ EMAIL NOTIFICATION (IF EMAIL CREDENTIALS ARE PROVIDED)
    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        // Send email to admin
        await transporter.sendMail({
          from: `"AI Shyp Contact Form" <${emailUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `New Contact: ${subject}`,
          text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "N/A"}
Subject: ${subject}

Message:
${message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Company:</b> ${company || "N/A"}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
          `,
        });

        // Auto-reply to user
        await transporter.sendMail({
          from: `"AI Shyp Team" <${emailUser}>`,
          to: email,
          subject: "We received your enquiry - AI Shyp",
          text: `Hi ${name},

Thanks for contacting AI Shyp.
We have received your enquiry and our team will connect with you shortly.

Your submitted details:
- Subject: ${subject}
- Phone: ${phone}

Best regards,
AI Shyp Team`,
          html: `
            <p>Hi ${name},</p>
            <p>Thanks for contacting <b>AI Shyp</b>.</p>
            <p>We have received your enquiry and our team will connect with you shortly.</p>
            <p><b>Your submitted details:</b></p>
            <ul>
              <li><b>Subject:</b> ${subject}</li>
              <li><b>Phone:</b> ${phone}</li>
            </ul>
            <p>Best regards,<br/>AI Shyp Team</p>
          `,
        });
      } catch (emailErr) {
        console.warn("Email sending warning (data was saved in PostgreSQL):", emailErr.message);
      }
    }

    return NextResponse.json(
      { ok: true, message: "Saved in PostgreSQL ✅", id: created.id },
      { status: 201 },
    );
  } catch (err) {
    console.error("🔥 Contact API Error:", err);

    return NextResponse.json(
      {
        error: "Something went wrong",
        details: err.message,
      },
      { status: 500 },
    );
  }
}
