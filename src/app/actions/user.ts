"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";

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
