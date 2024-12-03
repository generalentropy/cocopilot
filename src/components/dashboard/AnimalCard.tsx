import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Animal } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart } from "lucide-react";
import { splitUUID } from "@/app/utils/helpers";

type AnimalCardProps = {
  animalData: Animal;
};

export function AnimalCard({ animalData }: AnimalCardProps) {
  console.log(animalData);
  return (
    <Card className="w-[300px] overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center justify-between">
        <span className="text-xl font-bold">{animalData.name}</span>
        <Avatar className="h-16 w-16">
          <AvatarImage src="/poules/rousse.webp" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex-row">
        <div className="flex flex-col items-center">
          <Heart />
          <span>Santé</span>
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
