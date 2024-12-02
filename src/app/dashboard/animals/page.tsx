import prisma from "@/app/lib/db";
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
    <div>
      {user?.ownedAnimals.map((animal) => <p key={animal.id}>{animal.name}</p>)}
    </div>
  );
}
