import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const gstin = searchParams.get("gstin");
  const action = searchParams.get("action") || "TP"; // Default to "TP"

  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  if (!gstin || !gstinRegex.test(gstin)) {
    return NextResponse.json(
      { error: "Invalid GSTIN. Must be a 15-character valid GSTIN format." },
      { status: 400 }
    );
  }

  try {
    const url = `https://api.gst.gov.in/commonapi/v1.0/tpaddtlstatus?gstin=${gstin}&action=${action}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch company data." },
      { status: 500 }
    );
  }
}
