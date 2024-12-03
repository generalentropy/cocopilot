import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { type Animal } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, Calendar1, Weight, NotepadText } from "lucide-react";

import CustomBadge from "./CustomBadge";
import { getHealthStatusColor, healthStatus } from "@/lib/card";
import { ScrollArea } from "../ui/scroll-area";

type AnimalCardProps = {
  animalData: Animal;
};

export function AnimalCard({ animalData }: AnimalCardProps) {
  console.log(animalData);
  return (
    <Card className="h-[430px] w-[300px] overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center justify-between border-b bg-gray-50">
        <span className="text-2xl font-light">{animalData.name}</span>
        <Avatar className="h-16 w-16 ring-4 ring-gray-200">
          <AvatarImage src="/poules/rousse.webp" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex-row">
        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <Heart className="mr-2" size={18} />
            <span>Santé</span>
          </div>
          <CustomBadge
            className={getHealthStatusColor(animalData.healthStatus)}
          >
            {healthStatus(animalData.healthStatus)}
          </CustomBadge>
        </div>

        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <Calendar1 className="mr-2" size={18} />
            <span>Âge</span>
          </div>
          <CustomBadge className="bg-gray-500">
            {animalData.age} mois
          </CustomBadge>
        </div>

        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <Weight className="mr-2" size={18} />
            <span>Poids</span>
          </div>
          <CustomBadge>{animalData.weight}g</CustomBadge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start px-2 pb-2">
        <CustomBadge className="mb-2 flex w-full bg-gray-200 py-2 text-gray-600">
          <NotepadText size={16} className="mr-1" /> Notes
        </CustomBadge>
        <ScrollArea className="m-0 h-[121px] border px-2 text-sm italic">
          <p>{animalData.note}</p>
        </ScrollArea>
      </CardFooter>
    </Card>
  );
}
