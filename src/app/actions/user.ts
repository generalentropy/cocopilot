"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { dummyData } from "../../../prisma/seed";
import { HealthStatus, Sex, type ChickenBreed } from "@prisma/client";

export async function getUserData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const data = await prisma.user.findUnique({
    where: { id: user?.id },
    include: {
      ownedAnimals: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return data;
}

export async function seedDummyData() {
  console.log("Seeding dummy animals data");
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    throw new Error("Non autorisé");
  }

  const dataWithUserId = dummyData.map((item) => ({
    ...item,
    userId: user.id,
    race: item.race as ChickenBreed,
    healthStatus: item.healthStatus as HealthStatus,
    sex: item.sex as Sex,
  }));

  try {
    await prisma.animal.createMany({
      data: dataWithUserId,
    });
  } catch (error) {
    console.error(`Erreur lors du seed ${error}`);
    throw new Error("Erreur lors de l'envoi des données");
  }
}
