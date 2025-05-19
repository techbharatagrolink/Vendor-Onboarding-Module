import { connectDB } from '@/lib/mongodb';
import Vendor from '@/models/Vendor';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  try {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) return Response.json({ error: 'Vendor not found' }, { status: 404 });

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) return Response.json({ error: 'Invalid password' }, { status: 401 });

    const token = jwt.sign({ vendorId: vendor._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return Response.json({ message: 'Login successful', token });
  } catch (error) {
    return Response.json({ error: 'Login failed', details: error.message }, { status: 500 });
  }
}
