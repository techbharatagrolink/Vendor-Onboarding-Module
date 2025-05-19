import { connectDB } from '@/lib/mongodb';
import Vendor from '@/models/Vendor';
import { generateToken } from '@/lib/jwt';

export async function POST(req) {
  await connectDB();
  const { number, otp } = await req.json();

  const vendor = await Vendor.findOne({ number });
  if (!vendor || vendor.otp !== otp || new Date() > vendor.otpExpires) {
    return Response.json({ error: 'Invalid or expired OTP' }, { status: 400 });
  }

  // Clear OTP after verification
  vendor.otp = null;
  vendor.otpExpires = null;
  await vendor.save();

  const token = generateToken(vendor._id);

  return Response.json({ message: 'Login successful', token });
}
