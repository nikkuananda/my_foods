"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type FoodType = "uph" | "fresh";

export async function addFood(formData: FormData) {
  const name = formData.get("name")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";
  const image = formData.get("image")?.toString() || null;
  const ingredients = formData.get("ingredients")?.toString() ?? "";
  const typeRaw = formData.get("type")?.toString();

  if (!name || !description || !ingredients || !typeRaw) {
    console.error("Validasi gagal: Field kosong");
    return;
  }

  if (typeRaw !== "uph" && typeRaw !== "fresh") {
    console.error("Validasi gagal: Jenis makanan tidak valid");
    return;
  }

  const type = typeRaw as FoodType;

  await prisma.food.create({
    data: {
      name,
      description,
      image,
      ingredients,
      type,
    },
  });

  redirect("/foods");
}
