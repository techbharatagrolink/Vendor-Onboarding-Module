import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";

export async function POST(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    );
    await connectDB();

    const body = await req.json();
    const {
      companyName,
      displayName,
      description,
      address,
      pincode,
      city,
      state,
      gstIN,
      legalName,
      pan,
      bussNature,
      stateName,
    } = body;

    await Vendor.findByIdAndUpdate(decoded.id, {
      companyName,
      displayName,
      description,
      address,
      pincode,
      city,
      state,
      gst: gstIN,
      legalName,
      pan,
      bussNature,
      stateName,
    });

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
