import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.log("Auth Status: No token found");
    return NextResponse.json({ isAuthenticated: false }, { status: 200 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    console.log("Auth Status: Token verified, Payload=", jwt.decode(token));
    return NextResponse.json({ isAuthenticated: true }, { status: 200 });
  } catch (error) {
    console.error("Auth Status: Invalid token:", error.message);
    return NextResponse.json({ isAuthenticated: false }, { status: 200 });
  }
}
