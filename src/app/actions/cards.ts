"use server";

import { animalSchema } from "@/app/lib/zodSchemas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { z } from "zod";
import prisma from "@/app/lib/db";

type AnimalValidated = z.infer<typeof animalSchema>;

// -> Revoir les erreurs!
export async function createAnimalCard(animalData: AnimalValidated) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Non autorisé");
  }

  const parsedData = animalSchema.safeParse(animalData);
  if (!parsedData.success) {
    throw new Error("Paramètres de requête invalides");
  }

  try {
    const newAnimal = await prisma.animal.create({
      data: {
        userId: user.id,
        name: parsedData.data.name,
        race: parsedData.data.race || "unknown",
        sex: parsedData.data.sex,
        healthStatus: parsedData.data.healthStatus,
        birthDate: parsedData.data.birthDate,
        note: parsedData.data.note,
        imgUrl: parsedData.data.imgUrl,

        weights: {
          create: {
            weight: parsedData.data.weight,
          },
        },
      },
      include: {
        weights: true, // inclure les poids dans la réponse
      },
    });

    return { data: newAnimal };
  } catch (error) {
    console.log(error);
    throw new Error("Erreur lors de la création");
  }
}

type DeleteAnimalCardResponse = {
  count?: number;
  error?: string;
};

export async function deleteAnimalCard(
  id: string,
): Promise<DeleteAnimalCardResponse> {
  // await new Promise((res) => setTimeout(res, 5000));
  // throw new Error("Non autorisé");
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const animalId = z.string().uuid();
  const parsedId = animalId.safeParse(id);

  if (!parsedId.success) {
    throw new Error("Paramètres de requête invalides");
  }

  if (!user) {
    throw new Error("Non autorisé");
  }

  try {
    const deleteAnimalCard = await prisma.animal.deleteMany({
      where: { id, userId: user.id },
    });

    return deleteAnimalCard;
  } catch (error) {
    console.log(error);
    throw new Error("Erreur lors de la suppression");
  }
}
