"use server";

import { PrismaClient, FoodType } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function updateFood(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  const rawType = formData.get("type")?.toString();

  try {
    if (!id || !name || !description || !ingredients || !rawType) {
      throw new Error("Form tidak lengkap");
    }

    const type = rawType === "uph" ? FoodType.uph : FoodType.fresh;

    await prisma.food.update({
      where: { id },
      data: {
        name,
        description,
        image,
        ingredients,
        type,
      },
    });

    redirect("/foods");
  } catch (err) {
    console.error("Update error:", err);
    throw err;
  }
}
