"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { HealthStatus, Sex, type ChickenBreed } from "@prisma/client";
import { dummyData } from "../data/dummy";
import { UserData } from "../types/types";

export async function getUserData(): Promise<UserData | null> {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  // Ajout du tri par id pour garder une cohérence quand les données viennent du seed et possèdent un timestamp similaire (éviter les incohérences avec optimistic update)
  const data = await prisma.user.findUnique({
    where: { id: user?.id },
    include: {
      productions: {
        orderBy: { date: "desc" },
      },
      ownedAnimals: {
        orderBy: [{ createdAt: "desc" }, { id: "asc" }],
        include: { weights: { orderBy: { recordedAt: "desc" } } },
      },
    },
  });

  return data;
}

export async function seedDummyData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    throw new Error("Non autorisé");
  }

  const dataWithUserId = dummyData.map((item) => ({
    name: item.name,
    userId: user.id,
    race: item.race as ChickenBreed,
    healthStatus: item.healthStatus as HealthStatus,
    sex: item.sex as Sex,
    imgUrl: item.imgUrl,
    birthDate: item.birthDate,
    note: item.note,

    weight: item.weight,
  }));

  try {
    await prisma.$transaction(
      dataWithUserId.map((item) =>
        prisma.animal.create({
          data: {
            userId: item.userId,
            name: item.name,
            race: item.race,
            sex: item.sex,
            healthStatus: item.healthStatus as HealthStatus,
            birthDate: item.birthDate,
            note: item.note,
            imgUrl: item.imgUrl,

            // Création simultanée de WeightRecord
            weights: {
              create: {
                weight: item.weight,
                // recordedAt: new Date(), // Optionnel, défini par défaut dans le modèle
              },
            },
          },
        }),
      ),
    );

    console.log(
      `Début du seed pour l'utilisateur ${user.id} à ${new Date().toISOString()}`,
    );
  } catch (error) {
    console.error(`Erreur lors du seed ${error}`);
    throw new Error("Erreur lors de l'envoi des données");
  }
}

export async function getOwnedAnimalsCount(): Promise<number | null> {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const count = await prisma.animal.count({
    where: {
      userId: user.id,
    },
  });

  return count;
}
