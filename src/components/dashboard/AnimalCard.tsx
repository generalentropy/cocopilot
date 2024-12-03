import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { TbGenderFemale, TbGenderMale } from "react-icons/tb";

import { type Animal } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, Calendar1, Weight, NotepadText, Eye } from "lucide-react";

import CustomBadge from "./CustomBadge";
import { healthStatus } from "@/lib/card";
import { Separator } from "../ui/separator";
import { capitalizeFirstLetter, splitUUID } from "@/app/utils/helpers";

type AnimalCardProps = {
  animalData: Animal;
};

export function AnimalCard({ animalData }: AnimalCardProps) {
  const statusColors: { [key: string]: string } = {
    healthy: "bg-green-200 border border-green-300 text-green-600",
    injured: "bg-red-200 border border-red-300 text-red-600",
    sick: "bg-orange-200 border border-orange-300 text-orange-600",
    recovering: "bg-blue-200 border border-blue-300 text-blue-600",
    unknown: "bg-gray-200 border border-gray-300 text-gray-600",
  };

  const colorClass =
    statusColors[animalData.healthStatus ?? ""] ||
    "bg-gray-200 border border-gray-300 text-gray-600";

  return (
    <Card className="w-full overflow-hidden sm:w-[300px]">
      <CardHeader className="flex-col items-center justify-between border-b bg-gray-50">
        <div className="flex min-w-full justify-between">
          <div className="flex">
            <div className="flex flex-col items-start">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="max-w-[160px] truncate text-xl font-medium tracking-wider">
                    {animalData.name?.toLocaleUpperCase()}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Nom : {animalData.name}</p>
                    <p>Identifiant : {splitUUID(animalData.id)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex items-center">
                <CustomBadge className="mt-1 rounded-full border border-gray-300 bg-white font-medium text-gray-600">
                  {animalData.race === "autre"
                    ? "Non spécifié"
                    : capitalizeFirstLetter(animalData.race)}
                </CustomBadge>
                {animalData.sex === "MALE" ? (
                  <div className="ml-2 mt-1 text-blue-300">
                    <TbGenderMale size={20} />
                  </div>
                ) : (
                  <div className="ml-2 mt-1 text-pink-300">
                    <TbGenderFemale size={20} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Avatar className="h-16 w-16 ring-4 ring-gray-200">
            <AvatarImage
              className="object-cover"
              src={animalData.imgUrl ?? "/poules/rousse.webp"}
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Heart className="mr-2" size={18} />
            <span>Santé</span>
          </div>
          <CustomBadge className={colorClass}>
            {healthStatus(animalData.healthStatus)}
          </CustomBadge>
        </div>
        <Separator className="my-4" />

        <div className="flex justify-between">
          <div className="flex items-center">
            <Calendar1 className="mr-2" size={18} />
            <span>Âge</span>
          </div>
          <CustomBadge className="bg-gray-500">
            {animalData.age} mois
          </CustomBadge>
        </div>
        <Separator className="my-4" />

        <div className="flex justify-between">
          <div className="flex items-center">
            <Weight className="mr-2" size={18} />
            <span>Poids</span>
          </div>
          <CustomBadge className="bg-gray-500">
            {animalData.weight}g
          </CustomBadge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start">
        <CustomBadge className="flex w-full justify-between bg-gray-100 py-2 text-gray-700">
          <p className="flex">
            <NotepadText size={16} className="mr-1" /> Note
          </p>

          {animalData.note ? (
            <Popover>
              <PopoverTrigger>
                <p className="group flex cursor-pointer items-center transition-colors hover:text-gray-900 hover:underline">
                  <Eye size={14} className="mr-1" />
                  Lire la note
                </p>
              </PopoverTrigger>
              <PopoverContent align="center" className="w-[300px]">
                <div className="whitespace-pre-line text-sm">
                  {animalData.note}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <p className="flex italic">Pas de note</p>
          )}
        </CustomBadge>
      </CardFooter>
    </Card>
  );
}
