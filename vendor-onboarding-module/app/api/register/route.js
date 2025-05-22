import { connectDB } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { number, email, gst, password } = body;

    if (!number || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const vendorExists = await Vendor.findOne({ email });
    if (vendorExists) {
      return NextResponse.json(
        { error: "Vendor already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = await Vendor.create({
      number,
      email,
      gst: gst || null,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newVendor._id },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Vendor registered successfully",
      vendor: {
        email: newVendor.email,
        number: newVendor.number,
        gst: newVendor.gst,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });

    console.log(`Register: Vendor created, token set for ${email}`);
    return response;
  } catch (error) {
    console.error("Register API: Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
