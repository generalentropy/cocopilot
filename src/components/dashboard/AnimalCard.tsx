import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  ScaleIcon,
  HeartPulseIcon,
  TagIcon,
  ClipboardIcon,
} from "lucide-react";

import type { Animal } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type AnimalCardProps = {
  animalData: Animal;
};

export function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <Card className="mx-auto w-full max-w-md overflow-hidden">
      <div className="relative h-48">
        <img
          src="/poules/rousse.webp"
          alt="Profile cover"
          className="h-full w-full object-cover"
        />
        <Avatar className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 transform border-4 border-background">
          <AvatarImage src="/poules/rousse.webp" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className="pb-4 pt-16">
        <h2 className="text-center text-2xl font-bold">Poupoule</h2>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Profession</span>
          <Badge variant="secondary">Designer</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Localisation</span>
          <span className="text-sm">Paris, France</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Expérience</span>
          <span className="text-sm">5 ans</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Spécialité</span>
          <span className="text-sm">UI/UX Design</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Langues</span>
          <span className="text-sm">Français, Anglais</span>
        </div>
      </CardContent>
    </Card>
  );

  // return (
  //   <Card className="w-[300px]">
  //     <CardHeader>
  //       <CardTitle className="text-center capitalize">poupoule</CardTitle>
  //       <Badge className="mx-auto mt-2 rounded-full bg-gray-200 text-gray-500">
  //         Orpington
  //       </Badge>
  //     </CardHeader>
  //     <CardContent className="grid gap-4">
  //       <div className="flex items-center">
  //         <TagIcon className="mr-2 h-4 w-4 opacity-70" />
  //         <span className="text-sm font-medium">Nom :</span>
  //         <span className="ml-2 text-sm">Poupoule</span>
  //       </div>
  //       <div className="flex items-center">
  //         <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
  //         <span className="text-sm font-medium">Âge:</span>
  //         <span className="ml-2 text-sm">18 mois</span>
  //       </div>
  //       <div className="flex items-center">
  //         <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
  //         <span className="text-sm font-medium">Date de naissance:</span>
  //         <span className="ml-2 text-sm">31/10/2024</span>
  //       </div>
  //       <div className="flex items-center">
  //         <ScaleIcon className="mr-2 h-4 w-4 opacity-70" />
  //         <span className="text-sm font-medium">Poids:</span>
  //         <span className="ml-2 text-sm">2000g</span>
  //       </div>
  //       <div className="flex items-center">
  //         <HeartPulseIcon className="mr-2 h-4 w-4 text-pink-600 opacity-70" />
  //         <span className="text-sm font-medium">État de santé:</span>
  //         <Badge className="hover ml-2 bg-green-600">Bon</Badge>
  //       </div>
  //       <div className="mt-2">
  //         <div className="mb-1 flex items-center">
  //           <ClipboardIcon className="mr-2 h-4 w-4 opacity-70" />
  //           <span className="text-sm font-medium">Notes de santé:</span>
  //         </div>
  //         <p className="text-sm text-muted-foreground">Poux à surveiller</p>
  //       </div>
  //     </CardContent>
  //   </Card>
  // );
}
