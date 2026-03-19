import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "amirudhshanmukha2399@gmail.com",
            subject: `New Contact from ${name}`,
            html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
        });

        return NextResponse.json({ message: "Email sent" });
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}