import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, FoodType } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid food ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { name, description, image, ingredients, type } = body;

    if (!Object.values(FoodType).includes(type)) {
      return NextResponse.json({ error: "Invalid food type" }, { status: 400 });
    }

    const updated = await prisma.food.update({
      where: { id },
      data: {
        name,
        description,
        image: image || "",
        ingredients,
        type,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Gagal update:", error);
    return NextResponse.json(
      { error: "Gagal update makanan" },
      { status: 500 }
    );
  }
}
