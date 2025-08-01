import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ success: true, message: "Logged out" });

  res.cookies.set("isLoggedIn", "", {
    path: "/",
    httpOnly: false,
    maxAge: 0,
  });

  return res;
}
