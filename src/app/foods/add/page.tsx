import { addFood } from "./action";

export default function AddFoodPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        background:
          "linear-gradient(120deg, #ffe4b2 0%, #ffecd2 50%, #ffc1cc 100%)",
      }}
    >
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-8">
          Buat Makanan
        </h1>

        <form action={addFood} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            required
            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-400 transition font-medium"
          />

          <textarea
            name="description"
            placeholder="Deskripsi"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-orange-400 transition font-medium"
          />

          <input
            type="text"
            name="image"
            placeholder="URL Gambar (opsional)"
            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-400 transition font-medium"
          />

          <input
            type="text"
            name="ingredients"
            placeholder="Bahan-bahan"
            required
            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-400 transition font-medium"
          />

          <select
            name="type"
            required
            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-400 transition font-medium"
          >
            <option value="" disabled>
              Pilih jenis makanan
            </option>
            <option value="uph">UPH</option>
            <option value="fresh">Fresh</option>
          </select>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 hover:from-orange-500 hover:via-pink-500 hover:to-yellow-500 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
