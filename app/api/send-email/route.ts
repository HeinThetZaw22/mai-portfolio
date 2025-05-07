import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
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
