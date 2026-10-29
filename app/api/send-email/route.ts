import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    const resend = getResend();
    const data = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: "heinthetzaw2212@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
