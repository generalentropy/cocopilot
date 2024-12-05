"use client";

import { getUserData } from "@/app/actions/user";
import { useQuery } from "@tanstack/react-query";
import CreateCard from "./CreateCard";
import { AnimalCard } from "./AnimalCard";
// import { type User, type Animal } from "prisma/prisma-client";

export default function Cards() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => getUserData(),
  });

  if (isLoading) return <p>loading</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="flex w-full flex-wrap gap-4 p-2 sm:p-8">
      <CreateCard />

      {data?.ownedAnimals?.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
