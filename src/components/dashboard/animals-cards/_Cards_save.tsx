"use client";

import { getUserData } from "@/app/actions/user";
import { useQuery } from "@tanstack/react-query";
import CreateCard from "./CreateCard";
import { AnimalCard } from "./AnimalCard";
import { type User, type Animal } from "prisma/prisma-client";

type CardsProps = {
  userData: (User & { ownedAnimals: Animal[] }) | null;
};

export default function Cards({ userData }: CardsProps) {
  // https://github.com/TanStack/query/issues/6264
  // https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
  // Passer async () => getUserData() au lieu de la référence (sinon erreur )

  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => getUserData(),
    initialData: userData,
  });

  if (!userData) {
    return <p>No user data available.</p>;
  }

  if (isLoading) return <p>loading</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="flex flex-wrap gap-4 p-2 sm:p-8">
      <CreateCard />
      {data?.ownedAnimals?.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
