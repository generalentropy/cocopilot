"use client";

import { Button } from "@/components/ui/button";
import { deleteAnimalCard } from "@/app/actions/animals/cards";

export default function DeleteCardButton({ animalId }: { animalId: string }) {
  return (
    <Button type="submit" onClick={() => deleteAnimalCard(animalId)}>
      Supprimer la carte
    </Button>
  );
}
