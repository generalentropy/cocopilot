"use client";

import { Card } from "@/components/ui/card";
import { BadgePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AnimalCardCreate } from "./AnimalCardCreate";
import { useState } from "react";

export default function CreateCard() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full sm:w-[300px]">
        <div className="font-cursive absolute text-xs"></div>
        <Card className="flex h-[357px] flex-col items-center justify-center overflow-hidden border-2 border-dashed bg-gray-50 shadow-none sm:w-[300px]">
          <div className="flex items-center justify-center rounded-full bg-amber-100 p-4">
            <BadgePlus size={42} className="text-amber-500" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">
            Ajouter un animal
          </p>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-h-screen w-[95%] overflow-y-scroll rounded-lg border-none bg-transparent p-0 py-2">
        <DialogHeader className="sr-only">
          <DialogTitle>Ajouter un animal</DialogTitle>
          <DialogDescription>
            Ce formulaire vous permet d&apos;ajouter nouvel animal
          </DialogDescription>
        </DialogHeader>
        <AnimalCardCreate setModalState={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
