"use client";

import { Button } from "@/components/ui/button";
import { deleteAnimalCard } from "@/app/actions/cards";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { type User, type Animal } from "@prisma/client";

type UserWithAnimals = User & {
  ownedAnimals: Animal[];
};

export default function DeleteCardButton({ animalId }: { animalId: string }) {
  const queryClient = useQueryClient();
  const deleteAnimalMutation = useMutation({
    mutationFn: () => deleteAnimalCard(animalId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      // toast.success("Supprimé avec succès");
    },
    onMutate: async () => {
      // Sauvegarde l'état précédent du cache
      const previousUserData = queryClient.getQueryData(["userData"]);

      // Optimistically update to the new value
      queryClient.setQueryData(
        ["userData"],
        (oldData: UserWithAnimals | undefined) => {
          if (!oldData) return oldData; // Vérifiez que les données existent

          return {
            ...oldData,
            ownedAnimals: oldData.ownedAnimals.filter(
              (animal) => animal.id !== animalId,
            ),
          };
        },
      );

      // Return a context object with the snapshotted value
      return { previousUserData };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (error: any, _, context) => {
      if (context?.previousUserData) {
        queryClient.setQueryData(["userData"], context.previousUserData);
      }
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        // En cas d'erreurs non standards
        toast.error("Une erreur est survenue");
      }
    },

    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
    },
  });

  return (
    <Button onClick={() => deleteAnimalMutation.mutate()}>
      {deleteAnimalMutation.isPending ? (
        <div className="absolute inset-0 flex items-center justify-center rounded bg-gray-200 bg-opacity-50">
          {/* Spinner */}
          <div className="h-5 w-5 animate-spin-fast rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      ) : (
        "Supprimer"
      )}
    </Button>
  );
}
