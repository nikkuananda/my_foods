import Link from "next/link";
import DeleteButton from "@/components/deleteButton"; // Pastikan huruf D besar, sesuai nama file

interface Food {
  id: number;
  name: string;
  description: string;
}

export default async function FoodsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/foods`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen py-12 px-6 sm:px-12 flex items-center justify-center">
        <p className="text-red-600 text-center text-lg">
          Gagal memuat data makanan. (Status: {res.status})
        </p>
      </div>
    );
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    return (
      <div className="min-h-screen py-12 px-6 sm:px-12 flex items-center justify-center">
        <p className="text-red-600 text-center text-lg">
          Format data dari API tidak valid.
        </p>
      </div>
    );
  }

  const foods: Food[] = data;

  return (
    <div
      className="min-h-screen py-12 px-6 sm:px-12"
      style={{
        background:
          "linear-gradient(135deg, #fdf6ec 0%, #fbf1e6 40%, #fffefa 100%)",
      }}
    >
      <h1 className="text-5xl font-extrabold text-center text-amber-700 drop-shadow-md mb-12 font-serif select-none">
        Daftar Makanan
      </h1>

      {foods.length === 0 ? (
        <p className="text-center text-amber-600 text-lg font-medium italic">
          Tidak ada data makanan.
        </p>
      ) : (
        <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {foods.map((food) => (
            <li
              key={food.id}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div>
                <Link
                  href={`/foods/${food.id}`}
                  className="text-2xl font-semibold text-amber-800 hover:text-amber-500 transition-colors"
                  aria-label={`Detail makanan ${food.name}`}
                >
                  {food.name}
                </Link>
                <p className="mt-3 text-amber-700 text-sm leading-relaxed">
                  {food.description}
                </p>
              </div>

              <div className="mt-6 flex gap-5">
                <Link
                  href={`/foods/edit/${food.id}`}
                  className="flex-1 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl shadow font-semibold text-center transition"
                >
                  Update
                </Link>

                <DeleteButton id={food.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
