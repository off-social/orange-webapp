import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App URL that appends the row to the consultation sheet.
// Set CONSULTATION_SHEET_WEBHOOK_URL in .env.local — see google-apps-script-setup.md.
const WEBHOOK_URL = process.env.CONSULTATION_SHEET_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    const { name, mobile, printer, message } = await request.json();

    if (!name?.trim() || !mobile?.trim() || !printer?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!WEBHOOK_URL) {
      console.error("CONSULTATION_SHEET_WEBHOOK_URL not configured");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        mobile: mobile.trim(),
        printer,
        message: message?.trim() || "",
      }),
    });

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
