import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AnimalCard } from "./AnimalCard";

async function getData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await prisma.animal.findMany({ where: { userId: user.id } });

  return data;
}

export default async function Animals() {
  const animals = await getData();

  return (
    <div className="grid grid-cols-3">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
