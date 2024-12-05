"use server";

import { animalSchema } from "@/app/lib/zodSchemas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/app/lib/db";

type AnimalValidated = z.infer<typeof animalSchema>;

export async function createAnimalCard(animalData: AnimalValidated) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return { error: "Non autorisé" };
  }

  const parsedData = animalSchema.safeParse(animalData);
  if (!parsedData.success) {
    console.log("❌ erreur de validation");

    return {
      error: "Paramètres de requête invalides",
    };
  }

  console.log("✅ Données carte validées");

  try {
    const newAnimal = await prisma.animal.create({
      data: {
        userId: user.id,
        name: parsedData.data.name,
        race: parsedData.data.race || "unknown",
        sex: parsedData.data.sex,
        healthStatus: parsedData.data.healthStatus,
        birthDate: parsedData.data.birthDate,
        weight: parsedData.data.weight,
        note: parsedData.data.note,
        imgUrl: parsedData.data.imgUrl,
      },
    });

    revalidatePath("/dashboard/animals");

    return { data: newAnimal };
  } catch (error) {
    console.error("❌ Erreur lors de la création de l'animal :", error);
    return { error: "Erreur lors de la création" };
  }
}

type DeleteAnimalCardResponse = {
  count?: number;
  error?: string;
};

export async function deleteAnimalCard(
  id: string,
): Promise<DeleteAnimalCardResponse> {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const animalId = z.string().uuid();

  const parsedId = animalId.safeParse(id);
  if (!parsedId.success) {
    console.log("❌ erreur de validation");

    return {
      error: "Paramètres de requête invalides",
    };
  }

  if (!user) {
    return { error: "Unauthorized" };
  }

  try {
    const deleteAnimalCard = await prisma.animal.deleteMany({
      where: { id, userId: user.id },
    });
    revalidatePath("/dashboard/animals");
    console.log("path revalidé");

    return deleteAnimalCard;
  } catch (error) {
    console.log(error);
    return { error: "Erreur lors de la suppression" };
  }
}
