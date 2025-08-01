"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "GET" });
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 sm:px-8 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-extrabold tracking-tight hover:scale-110 transition-transform duration-300 select-none"
          aria-label="Beranda FoodApp"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-4xl animate-bounce">🍲</span>
          <span>FoodApp</span>
        </Link>

        <button
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex gap-5 items-center text-sm sm:text-base font-medium select-none">
          <Link
            href="/"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/foods"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Daftar Makanan
          </Link>
          <Link
            href="/foods/add"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md hover:scale-105 hover:brightness-110 transition transform duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Buat Makanan
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md hover:scale-105 hover:brightness-110 transition transform duration-200"
            aria-label="Logout dari FoodApp"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 bg-gray-800 rounded-lg p-4 shadow-lg select-none">
          <Link
            href="/"
            className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/foods"
            className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Daftar Makanan
          </Link>
          <Link
            href="/foods/add"
            className="block px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md hover:brightness-110 transition transform duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Buat Makanan
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="w-full text-left px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md hover:brightness-110 transition transform duration-200"
            aria-label="Logout dari FoodApp"
            type="button"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
