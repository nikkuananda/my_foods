"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/foods");
      } else {
        alert(data.message || "Email atau password salah!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login.");
    }
  };

  const handleShowInfo = () => {
    setInfoMessage("Masukan email: admin@mail.com dan password: 123456");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-50 via-yellow-100 to-pink-50 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 border border-gray-200 space-y-7"
      >
        <h1 className="text-3xl font-extrabold text-center text-orange-600 drop-shadow-sm">
          Masuk ke FoodApp
        </h1>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-orange-400 transition text-gray-900"
            placeholder="admin@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-orange-400 transition text-gray-900"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 hover:from-orange-500 hover:via-pink-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-xl shadow-lg transition"
        >
          Login
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={handleShowInfo}
            className="text-sm text-orange-700 hover:underline focus:outline-none"
            aria-label="Informasi login"
          >
            Info
          </button>
        </div>

        {infoMessage && (
          <p className="mt-2 text-sm text-center text-gray-700 select-text">
            {infoMessage}
          </p>
        )}
      </form>
    </main>
  );
}
