"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { seedDummyData } from "@/app/actions/user";
import { CloudUpload, Loader2 } from "lucide-react";

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

  return (
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
  );
}
