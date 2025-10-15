import { NextResponse } from "next/server";

export function middleware(req) {
  const accessToken = req.cookies.get("access_token");
  const { pathname } = req.nextUrl;

  // Allow static assets & public folder
  if (
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/css") ||
    pathname.startsWith("/js") ||
    pathname.startsWith("/auth/callback") ||  // 👈 allow callback to run
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Public pages
  const publicPaths = [
    "/auth/signup",
    "/auth/login",
    "/",
  ];

  // If already logged in → prevent access to login/signup
  if (accessToken && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If not logged in → block private pages
  if (!accessToken && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(
      new URL("/auth/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
