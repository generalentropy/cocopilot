"use client";

import { getUserData } from "@/app/actions/user";
import { useQuery } from "@tanstack/react-query";
import CreateCard from "./CreateCard";
import { AnimalCard } from "./AnimalCard";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import CardsLoader from "@/app/components/dashboard/animals-cards/CardsLoader";
import { UserData } from "@/app/types/types";

export default function Cards() {
  const { data, error, isLoading } = useQuery<UserData | null>({
    queryKey: ["userData"],
    queryFn: async () => getUserData(),
  });

  if (isLoading)
    return (
      <div className="flex w-full flex-wrap gap-4 p-2 sm:p-8">
        <CardsLoader />
      </div>
    );

  if (error)
    return (
      <>
        <Alert variant="destructive" role="alert">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="font-bold">Erreur</AlertTitle>
          <AlertDescription>
            <p>Une erreur s&apos;est produite lors du chargement des données</p>
            <p>
              Il vous suffit en général d&apos;actualiser la page pour corriger
              l&apos;erreur
            </p>
          </AlertDescription>
        </Alert>

        <Button
          variant="destructive"
          onClick={() => window.location.reload()}
          className="my-2"
        >
          Rafraîchir la page
        </Button>
      </>
    );

  return (
    <div className="flex w-full flex-wrap gap-4 p-2 sm:p-8">
      <CreateCard />

      {data?.ownedAnimals?.map((animal) => (
        <AnimalCard key={animal.id} animalData={animal} />
      ))}
    </div>
  );
}
