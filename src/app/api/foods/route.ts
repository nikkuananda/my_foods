import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  try {
    const foods = await prisma.food.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch foods",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description, ingredients, type, image } = body;

    if (!name || !description || !ingredients || !type) {
      return NextResponse.json(
        { error: "Name, description, ingredients, and type are required" },
        { status: 400 }
      );
    }

    const validTypes = ["uph", "fresh"];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid type. Must be 'uph' or 'fresh'" },
        { status: 400 }
      );
    }

    const newFood = await prisma.food.create({
      data: {
        name,
        description,
        ingredients,
        type,
        image: image || null,
      },
    });

    return NextResponse.json(newFood, { status: 201 });
  } catch (error) {
    console.error("Error creating food:", error);

    return NextResponse.json(
      {
        error: "Failed to create food",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
