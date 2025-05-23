import { connectDB } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";
import { randomInt } from "crypto";

export async function POST(req) {
  await connectDB();
  const { number } = await req.json();

  if (!number)
    return Response.json({ error: "Mobile number required" }, { status: 400 });

  const otp = randomInt(100000, 999999).toString();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // expires in 5 minutes

  try {
    const response = await fetch(
      `http://1.rapidsms.co.in/api/push.json?apikey=${process.env.RAPID_API_KEY}&route=trans&sender=AGROLN&mobileno=${number}&text=Hi%20User%2C%0AYour%20OTP%20for%20login%20is%20%7B%23${otp}%23%7D%0AThank%20you%20for%20choosing%20Bharatagrolink.%20Use%20the%20following%20OTP%20to%20complete%20your%20procedure.%20OTP%20is%20valid%20for%205%20Minutes%0AAGROLINK%20MANUFACTURING%20PVT%20LTD`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  const vendor = await Vendor.findOneAndUpdate(
    { number },
    { otp, otpExpires },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  console.log(`OTP for ${number}: ${otp}`); // Replace with SMS gateway in prod

  return Response.json({ message: "OTP sent successfully" });
}
