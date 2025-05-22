import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log(
    `Middleware: Invoked for URL=${request.url}, Path=${request.nextUrl.pathname}`
  );

  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/register/dashboard"];
  const authRoutes = ["/", "/register", "/register/password"];

  console.log(
    `Middleware: Path=${pathname}, Token=${token ? "present" : "missing"}`
  );

  let isValidToken = false;
  if (token) {
    try {
      // Verify token via API (runs in Node.js Runtime)
      const response = await fetch(
        `${request.nextUrl.origin}/api/auth/status`,
        {
          headers: {
            Cookie: `token=${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Auth status request failed: ${response.status}`);
      }
      const data = await response.json();
      isValidToken = data.isAuthenticated;
      console.log(
        `Middleware: Token validation via API: ${
          isValidToken ? "valid" : "invalid"
        }`
      );
    } catch (error) {
      console.error("Middleware: Token validation failed:", error.message);
    }
  } else {
    console.log("Middleware: No token found in cookies");
  }

  // Redirect authenticated users from auth routes to dashboard
  if (isValidToken && authRoutes.includes(pathname)) {
    console.log(
      `Middleware: Redirecting authenticated user from ${pathname} to /register/dashboard`
    );
    return NextResponse.redirect(new URL("/register/dashboard", request.url));
  }

  // Redirect unauthenticated users from protected routes to home
  if (!isValidToken && protectedRoutes.includes(pathname)) {
    console.log(
      `Middleware: Redirecting unauthenticated user from ${pathname} to /`
    );
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log(`Middleware: Allowing access to ${pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/register/:path*"], // Matches /, /register, /register/password, /register/dashboard
};
