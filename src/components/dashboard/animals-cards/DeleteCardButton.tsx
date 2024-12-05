"use client";

import { Button } from "@/components/ui/button";
import { deleteAnimalCard } from "@/app/actions/cards";
import toast from "react-hot-toast";

export default function DeleteCardButton({ animalId }: { animalId: string }) {
  const handleDeleteCard = async () => {
    const res = await deleteAnimalCard(animalId);

    if (!res?.count) {
      toast.error("Erreur lors de la suppression");
    }

    if (res?.count && res.count > 0) {
      toast.success("Carte supprimée avec succès");
    }
  };

  return (
    <Button type="submit" onClick={handleDeleteCard}>
      Supprimer la carte
    </Button>
  );
}
