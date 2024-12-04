import prisma from "@/app/lib/db";
import { AnimalCard } from "@/components/dashboard/animals-cards/AnimalCard";
import CreateCard from "@/components/dashboard/animals-cards/CreateCard";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      ownedAnimals: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return data;
}

export default async function Animals() {
  const user = await getData();

  return (
    <div className="flex flex-wrap gap-4 p-2 sm:p-8">
      <CreateCard />
      {user?.ownedAnimals.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
