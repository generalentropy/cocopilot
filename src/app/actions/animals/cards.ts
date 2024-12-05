"use server";

import { animalSchema } from "@/app/lib/zodSchemas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/app/lib/db";

// Générer un type TypeScript basé sur le schéma Zod
type AnimalValidated = z.infer<typeof animalSchema>;

export async function createAnimalCard(animalData: AnimalValidated) {
  console.log("createAnimalCard server action");

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const parsedData = animalSchema.safeParse(animalData);
  if (!parsedData.success) {
    console.log("erreur de validation");

    return {
      error: "Invalid query parameters",
    };
  }

  console.log("données validées");

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
    console.error("Erreur lors de la création de l'animal :", error);

    return { error: "Failed to create the animal" };
  }
}

export async function deleteAnimalCard(id: string) {
  console.log(`id reçu : ${id}`);

  const animal = await prisma.animal.findUnique({ where: { id: id } });
  if (!animal) {
    console.log(id);
    throw new Error(`Animal with ID ${id} not found`);
  }

  // Supprimez l'animal maintenant que vous êtes sûr du type d'id
  await prisma.animal.delete({ where: { id: id } });

  revalidatePath("/dashboard/animals");
  console.log("path revalidé");
}
