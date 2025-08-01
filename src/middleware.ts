import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const path = request.nextUrl.pathname;

  const protectedPaths = ["/", "/foods"];

  if (
    protectedPaths.some(
      (protectedPath) =>
        path === protectedPath || path.startsWith(protectedPath + "/")
    )
  ) {
    if (isLoggedIn !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (path === "/login" && isLoggedIn === "true") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/foods/:path*"],
};
