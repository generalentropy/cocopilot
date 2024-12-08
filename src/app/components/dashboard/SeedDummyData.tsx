"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { getUserData, seedDummyData } from "@/app/actions/user";
import { CloudUpload, Loader2 } from "lucide-react";
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

export default function SeedDummyData() {
  const queryClient = useQueryClient();

  const seedDummyDataMutation = useMutation({
    mutationFn: () => {
      console.log("Début du seed des données...");
      return seedDummyData();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      toast.success("Données chargées avec succès 🎉");
    },
    onError: (e) => toast.error(e.message),
  });

  const { data } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => getUserData(),
    select: (data) => (data ? data.ownedAnimals.length : 0),
  });

  return (
    <>
      {data && data > 0 ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="text-xs"
              variant={"ghost"}
              disabled={seedDummyDataMutation.isPending}
            >
              {seedDummyDataMutation.isPending ? (
                <Loader2 className="animate-spin-fast" />
              ) : (
                <CloudUpload />
              )}
              Charger des données de test
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Vous avez déja des données</AlertDialogTitle>
              <AlertDialogDescription>
                Vous possédez déjà des données d&apos;animaux. En cliquant sur
                continuer, des données de test seront ajoutées à votre
                collection existante.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button onClick={() => seedDummyDataMutation.mutate()}>
                  continuer
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Button
          className="text-xs"
          variant={"ghost"}
          onClick={() => seedDummyDataMutation.mutate()}
          disabled={seedDummyDataMutation.isPending}
        >
          {seedDummyDataMutation.isPending ? (
            <Loader2 className="animate-spin-fast" />
          ) : (
            <CloudUpload />
          )}
          Charger des données de test
        </Button>
      )}
    </>
  );
}

{
  /* <Button
className="text-xs"
variant={"ghost"}
onClick={() => seedDummyDataMutation.mutate()}
disabled={seedDummyDataMutation.isPending}
>
{seedDummyDataMutation.isPending ? (
  <Loader2 className="animate-spin-fast" />
) : (
  <CloudUpload />
)}
Charger des données de test
</Button> */
}
