import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Contact Form Data:", body);

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}