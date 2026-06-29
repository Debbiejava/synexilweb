import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();

  await resend.emails.send({
    from: "Synexil <support@synexil.com>",
    to: "support@synexil.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
