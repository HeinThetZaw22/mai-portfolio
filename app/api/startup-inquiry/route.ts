import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, interest, message } = await req.json();

    console.log(name, email, projectType, interest, message);
    if (!name || !email || !projectType || !interest || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: "heinthetzaw2212@gmail.com",
      subject: "Project Collaboration",
      html: `
        <h2>New Project Collaboration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Details:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
