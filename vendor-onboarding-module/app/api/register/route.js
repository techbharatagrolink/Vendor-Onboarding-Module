// // import { connectDB } from '@/lib/mongodb';
// // import Vendor from "@/models/Vendor"; 

// // import bcrypt from 'bcryptjs';

// // export async function POST(req) {
// //   await connectDB();
// //   const { number, email, gst, password } = await req.json();

// //   try {
// //     const vendorExists = await Vendor.findOne({ email });
// //     if (vendorExists) {
// //       return Response.json({ error: 'Vendor already exists' }, { status: 400 });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newVendor = await Vendor.create({
// //       number,
// //       email,
// //       gst,
// //       password: hashedPassword,
// //     });

// //     return Response.json({ message: 'Vendor registered successfully', vendor: newVendor });
// //   } catch (error) {
// //     return Response.json({ error: 'Registration failed', details: error.message }, { status: 500 });
// //   }
// // }

// export async function POST(req) {
//   await connectDB();

//   try {
//     const body = await req.json();
//     console.log("Received body:", body);

//     const { number, email, gst, password } = body;

//     const vendorExists = await Vendor.findOne({ email });
//     if (vendorExists) {
//       return Response.json({ error: 'Vendor already exists' }, { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newVendor = await Vendor.create({
//       number,
//       email,
//       gst,
//       password: hashedPassword,
//     });

//     return Response.json({ message: 'Vendor registered successfully', vendor: newVendor });
//   } catch (error) {
//     console.error("Registration error:", error);
//     return Response.json(
//       { error: 'Registration failed', details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { connectDB } from '@/lib/mongodb';
import Vendor from '@/models/Vendor';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const { number, email, gst, password } = body;

    if (!number || !email || !gst || !password) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const vendorExists = await Vendor.findOne({ email });
    if (vendorExists) {
      return new Response(JSON.stringify({ error: 'Vendor already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = await Vendor.create({
      number,
      email,
      gst,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({
        message: 'Vendor registered successfully',
        vendor: {
          email: newVendor.email,
          number: newVendor.number,
          gst: newVendor.gst,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
