import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.log("VerifyGST: Missing token");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    console.log("VerifyGST: Token verified");
  } catch (error) {
    console.error("VerifyGST: Invalid token:", error.message);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const gstNo = searchParams.get("gstNo");
  const keySecret = searchParams.get("key_secret");

  const gstinRegex =
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  if (!gstNo || !gstinRegex.test(gstNo)) {
    return NextResponse.json(
      { error: "Invalid GSTIN. Must be a 15-character valid GSTIN format." },
      { status: 400 }
    );
  }

  if (!keySecret) {
    return NextResponse.json(
      { error: "Missing key_secret parameter." },
      { status: 400 }
    );
  }

  try {
    const url = `https://appyflow.in/api/verifyGST?gstNo=${gstNo}&key_secret=${keySecret}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Appyflow API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("VerifyGST: Fetch error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch GSTIN data." },
      { status: 500 }
    );
  }
}
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function GET(request) {
//   const token = request.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//   }

//   const { searchParams } = new URL(request.url);
//   const gstNo = searchParams.get("gstNo");
//   const keySecret = searchParams.get("key_secret");

//   const gstinRegex =
//     /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

//   if (!gstNo || !gstinRegex.test(gstNo)) {
//     return NextResponse.json(
//       { error: "Invalid GSTIN. Must be a 15-character valid GSTIN format." },
//       { status: 400 }
//     );
//   }

//   if (!keySecret) {
//     return NextResponse.json(
//       { error: "Missing key_secret parameter." },
//       { status: 400 }
//     );
//   }

//   try {
//     const url = `https://appyflow.in/api/verifyGST?gstNo=${gstNo}&key_secret=${keySecret}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Appyflow API error: ${response.status}`);
//     }

//     const data = await response.json();
//     return NextResponse.json({ data }, { status: 200 });
//   } catch (error) {
//     console.error("Fetch error:", error.message);
//     return NextResponse.json(
//       { error: "Failed to fetch GSTIN data." },
//       { status: 500 }
//     );
//   }
// }
// app/api/verifyGST/route.js
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const gstNo = searchParams.get("gstNo"); // Match client parameter
//   const keySecret = searchParams.get("key_secret"); // Match client parameter

//   const gstinRegex =
//     /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

//   if (!gstNo || !gstinRegex.test(gstNo)) {
//     return NextResponse.json(
//       { error: "Invalid GSTIN. Must be a 15-character valid GSTIN format." },
//       { status: 400 }
//     );
//   }

//   if (!keySecret) {
//     return NextResponse.json(
//       { error: "Missing key_secret parameter." },
//       { status: 400 }
//     );
//   }

//   try {
//     const url = `https://appyflow.in/api/verifyGST?gstNo=${gstNo}&key_secret=${keySecret}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Appyflow API error: ${response.status}`);
//     }

//     const data = await response.json();
//     return NextResponse.json({ data }, { status: 200 });
//   } catch (error) {
//     console.error("Fetch error:", error.message);
//     return NextResponse.json(
//       { error: "Failed to fetch GSTIN data." },
//       { status: 500 }
//     );
//   }
// }
