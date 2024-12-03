import prisma from "@/app/lib/db";
import { AnimalCard } from "@/components/dashboard/AnimalCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await prisma.user.findUnique({
    where: { id: user.id },
    include: { ownedAnimals: true },
  });

  return data;
}

export default async function Animals() {
  const user = await getData();
  console.log(user);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-2 md:p-8">
      {user?.ownedAnimals.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
