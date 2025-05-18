import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pincode = searchParams.get("pincode");

  if (!pincode || !/^\d{6}$/.test(pincode)) {
    return NextResponse.json(
      { error: "Invalid pincode. Must be 6 digits." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching pincode data:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch pincode data" },
      { status: 500 }
    );
  }
}

// export default async function handler(req, res) {
//   const { pincode } = req.query;

//   if (!pincode || !/^\d{6}$/.test(pincode)) {
//     return res
//       .status(400)
//       .json({ error: "Invalid pincode. Must be 6 digits." });
//   }

//   try {
//     const response = await fetch(
//       `https://api.postalpincode.in/pincode/${pincode}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`API request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching pincode data:", error.message);
//     res.status(500).json({ error: "Failed to fetch pincode data" });
//   }
// }
