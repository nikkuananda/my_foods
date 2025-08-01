import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-50 via-yellow-100 to-pink-50 px-6 py-12 sm:px-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-orange-600 drop-shadow-lg">
        🍲 Selamat Datang di FoodApp
      </h1>

      <p className="text-base sm:text-lg text-center max-w-lg mb-12 leading-relaxed text-gray-700">
        Aplikasi sederhana untuk menampilkan, menambahkan, dan mengelola daftar
        makanan favorit kamu. Yuk mulai!
      </p>

      <div className="mb-10 w-full max-w-md relative h-64 sm:h-80 rounded-xl overflow-hidden">
        <Image
          src="https://hsph.harvard.edu/wp-content/uploads/2024/05/iStock-1407832840.jpg"
          alt="Ilustrasi makanan"
          fill
          style={{ objectFit: "contain", borderRadius: "1rem" }}
          priority
          draggable={false}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full max-w-sm sm:max-w-md justify-center">
        <Link
          href="/login"
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl shadow-md transition-colors duration-300 text-center font-semibold select-none"
        >
          Login
        </Link>
        <Link
          href="/foods"
          className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl shadow-md transition-colors duration-300 text-center font-semibold select-none"
        >
          Daftar Makanan
        </Link>
      </div>
    </main>
  );
}
