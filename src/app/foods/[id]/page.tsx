import { notFound } from "next/navigation";
import Link from "next/link";

interface Food {
  name: string;
  description: string;
  image: string;
  ingredients: string;
  type: "uph" | "fresh";
}

interface Props {
  params: { id: string };
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

export default async function FoodDetailPage({ params }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/foods/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const food: Food = await res.json();
  const imageUrl = food.image?.trim() ?? "";

  const showImage = isValidUrl(imageUrl);

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover p-6 flex flex-col items-center"
      style={{
        background:
          "linear-gradient(135deg, #fff8e1 0%, #ffecb3 40%, #ffcdd2 100%)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-xl w-full">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 select-none">
            {food.name}
          </h1>

          {showImage && (
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={imageUrl}
                alt={food.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="space-y-5 text-gray-800 text-lg leading-relaxed px-2 sm:px-6">
            <p>
              <strong className="font-semibold">Deskripsi:</strong>{" "}
              {food.description}
            </p>
            <p>
              <strong className="font-semibold">Bahan:</strong>{" "}
              {food.ingredients}
            </p>
            <p>
              <strong className="font-semibold">Jenis:</strong>{" "}
              <span className="capitalize">
                {food.type === "uph" ? "UPH" : "Fresh"}
              </span>
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/foods"
              className="flex items-center justify-center gap-2 text-orange-600 font-semibold select-none rounded-lg border-2 border-orange-600 px-8 py-3 hover:bg-yellow-400 hover:text-white shadow-lg transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
