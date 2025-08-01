import { notFound } from "next/navigation";
import { updateFood } from "./action";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edit Makanan",
};

interface Props {
  params: {
    id: string;
  };
}

async function getFood(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/foods/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function EditFoodPage({ params }: Props) {
  const food = await getFood(params.id);
  if (!food) return notFound();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          "linear-gradient(120deg, #ffe4b2 0%, #ffecd2 50%, #ffc1cc 100%)",
      }}
    >
      <form
        action={updateFood}
        className="bg-white bg-opacity-95 rounded-2xl shadow-2xl max-w-lg w-full p-8 space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-6 tracking-tight drop-shadow-sm select-none">
          Edit Makanan
        </h1>

        {/* kirim id lewat hidden input */}
        <input type="hidden" name="id" value={params.id} />

        <input
          name="name"
          defaultValue={food.name}
          placeholder="Nama"
          className="w-full border border-orange-200 rounded-lg p-3 text-gray-900"
          required
        />

        <textarea
          name="description"
          defaultValue={food.description}
          placeholder="Deskripsi"
          rows={3}
          className="w-full border border-orange-200 rounded-lg p-3 resize-none text-gray-900"
          required
        />

        <input
          name="image"
          defaultValue={food.image}
          placeholder="URL Gambar"
          className="w-full border border-orange-200 rounded-lg p-3 text-gray-900"
        />

        <input
          name="ingredients"
          defaultValue={food.ingredients}
          placeholder="Bahan-bahan"
          className="w-full border border-orange-200 rounded-lg p-3 text-gray-900"
          required
        />

        <label htmlFor="type" className="block font-medium text-orange-700">
          Jenis
        </label>
        <select
          id="type"
          name="type"
          defaultValue={food.type}
          className="w-full border border-orange-200 rounded-lg p-3 text-gray-900"
          required
        >
          <option value="uph">UPH</option>
          <option value="fresh">Fresh</option>
        </select>

        <div className="flex justify-between items-center gap-4">
          <Link
            href="/foods"
            className="flex-1 text-center py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
          >
            Kembali
          </Link>
          <button
            type="submit"
            className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
