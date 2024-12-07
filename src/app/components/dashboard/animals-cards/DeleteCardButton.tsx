"use client";

import { Button } from "@/app/components/ui/button";
import { deleteAnimalCard } from "@/app/actions/cards";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type User, type Animal } from "@prisma/client";
import { Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";

type UserWithAnimals = User & {
  ownedAnimals: Animal[];
};

// https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates
export default function DeleteCardButton({ animalId }: { animalId: string }) {
  const queryClient = useQueryClient();
  // https://tkdodo.eu/blog/mastering-mutations-in-react-query
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

          const sortedAnimals = oldData.ownedAnimals
            .filter((animal) => animal.id !== animalId)
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime() || (a.id > b.id ? 1 : -1), // Tri secondaire par ID si les timestamps sont similaires (seed)
            );

          return {
            ...oldData,
            ownedAnimals: sortedAnimals,
          };
        },
      );

      // Return a context object with the snapshotted value
      return { previousUserData };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (error: unknown, _, context) => {
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
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"destructive"}>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cela supprimera définitivement l&apos;ensemble des données de
            l&apos;animal. Cette action est irréversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteAnimalMutation.mutate()}>
            Continuer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
