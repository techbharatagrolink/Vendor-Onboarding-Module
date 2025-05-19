import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";

export async function POST(req) {
  try {
    await connectDB();

    const { number, otp } = await req.json();

    if (!number || !otp) {
      return NextResponse.json(
        { error: "Missing number or OTP" },
        { status: 400 }
      );
    }

    const vendor = await Vendor.findOne({ number });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    if (
      vendor.otp !== otp ||
      !vendor.otpExpires ||
      vendor.otpExpires < new Date()
    ) {
      return NextResponse.json(
        { error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Clear OTP fields
    vendor.otp = null;
    vendor.otpExpires = null;
    await vendor.save();

    const token = jwt.sign(
      { id: vendor._id },
      process.env.JWT_SECRET || "your-secret-key",
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json({
      message: "OTP verified successfully",
      vendor: { email: vendor.email, number: vendor.number, gst: vendor.gst },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });

    console.log(
      `Verify-OTP: Token set for vendor ${vendor.email}, Token=${token}`
    );
    return response;
  } catch (error) {
    console.error("Verify-OTP: Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

// import { connectDB } from "@/lib/mongodb";
// import Vendor from "@/models/Vendor";
// import { generateToken } from "@/lib/jwt";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   await connectDB();
//   const { number, otp } = await req.json();

//   const vendor = await Vendor.findOne({ number });
//   if (!vendor || vendor.otp !== otp || new Date() > vendor.otpExpires) {
//     return NextResponse.json(
//       { error: "Invalid or expired OTP" },
//       { status: 400 }
//     );
//   }

//   // Clear OTP after verification
//   vendor.otp = null;
//   vendor.otpExpires = null;
//   await vendor.save();

//   const token = generateToken(vendor._id);

//   const response = NextResponse.json({ message: "Login successful" });
//   response.cookies.set("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     maxAge: 24 * 60 * 60, // 1 day
//     path: "/",
//   });

//   return response;
// }

// import { connectDB } from '@/lib/mongodb';
// import Vendor from '@/models/Vendor';
// import { generateToken } from '@/lib/jwt';

// export async function POST(req) {
//   await connectDB();
//   const { number, otp } = await req.json();

//   const vendor = await Vendor.findOne({ number });
//   if (!vendor || vendor.otp !== otp || new Date() > vendor.otpExpires) {
//     return Response.json({ error: 'Invalid or expired OTP' }, { status: 400 });
//   }

//   // Clear OTP after verification
//   vendor.otp = null;
//   vendor.otpExpires = null;
//   await vendor.save();

//   const token = generateToken(vendor._id);

//   return Response.json({ message: 'Login successful', token });
// }
