"use client";

import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Yakin ingin menghapus makanan ini?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/foods/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        const errorData = await res.json();
        alert(
          `Gagal menghapus makanan: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Delete failed", error);
      alert("Terjadi kesalahan saat menghapus makanan.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="flex-1 px-5 py-2 bg-rose-400 hover:bg-rose-500 text-white rounded-2xl shadow font-semibold transition"
      type="button"
    >
      Delete
    </button>
  );
}
