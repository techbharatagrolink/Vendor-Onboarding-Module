import { connectDB } from '@/lib/mongodb';
import Vendor from '@/models/Vendor';
import { randomInt } from 'crypto';

export async function POST(req) {
  await connectDB();
  const { number } = await req.json();

  if (!number) return Response.json({ error: 'Mobile number required' }, { status: 400 });

  const otp = randomInt(100000, 999999).toString();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // expires in 5 minutes

  const vendor = await Vendor.findOneAndUpdate(
    { number },
    { otp, otpExpires },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  console.log(`OTP for ${number}: ${otp}`); // Replace with SMS gateway in prod

  return Response.json({ message: 'OTP sent successfully' });
}
