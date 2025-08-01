import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email === "admin@mail.com" && password === "123456") {
    const res = NextResponse.json({ success: true, message: "Login berhasil" });

    res.cookies.set("isLoggedIn", "true", {
      path: "/",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res;
  }

  return NextResponse.json(
    { success: false, message: "Email atau password salah" },
    { status: 401 }
  );
}
