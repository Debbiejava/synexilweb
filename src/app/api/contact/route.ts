import { NextResponse } from "next/server";
import { Resend } from "resend";

// Only initialize Resend if the key exists at runtime
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Skip sending email during build (no API key available)
    if (!resend) {
      console.warn("⚠ RESEND_API_KEY missing — skipping email send during build.");
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "Synexil Contact Form <support@synexil.com>",
      to: "support@synexil.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
