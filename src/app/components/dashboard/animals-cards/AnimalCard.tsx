import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import { TbGenderFemale, TbGenderMale } from "react-icons/tb";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Heart, Calendar1, Weight, NotepadText, Eye } from "lucide-react";
import CustomBadge from "../CustomBadge";
import { calculateAgeInMonths, healthStatus } from "@/app/lib/card";
import { Separator } from "../../ui/separator";
import { capitalizeFirstLetter } from "@/app/utils/helpers";
import { chickenBreed } from "@/app/lib/animals";
import EditCardButton from "./EditCardButton";
import { AnimalWithWeights } from "@/app/types/types";

interface AnimalCardProps {
  animalData: AnimalWithWeights;
}

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

  const ageInMonths = calculateAgeInMonths(animalData.birthDate);
  const breed = chickenBreed.find((el) => el.value === animalData.race);

  return (
    <Card className="w-full overflow-hidden transition-colors hover:border-gray-300 sm:w-[300px]">
      <CardHeader className="relative flex-col items-center justify-between border-b bg-gray-50">
        <div className="flex min-w-full justify-between">
          <div className="flex">
            <div className="flex flex-col items-start">
              <div className="max-w-[160px] truncate text-xl font-medium tracking-wider">
                {animalData.name?.toLocaleUpperCase()}
              </div>

              <div className="mt-1 flex items-center">
                <CustomBadge className="rounded-full border border-gray-300 bg-white font-medium text-gray-600">
                  {capitalizeFirstLetter(breed?.label ?? "")}
                </CustomBadge>
                {animalData.sex === "male" ? (
                  <div className="ml-2 text-blue-300">
                    <TbGenderMale size={20} />
                  </div>
                ) : (
                  <div className="ml-2 text-pink-300">
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
            {ageInMonths === 0 ? "Moins d'un mois" : ageInMonths + " mois"}
          </CustomBadge>
        </div>
        <Separator className="my-4" />

        <div className="flex justify-between">
          <div className="flex items-center">
            <Weight className="mr-2" size={18} />
            <span>Poids</span>
          </div>
          <CustomBadge className="bg-gray-500">
            {animalData.weights[0]?.weight}g
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
                  Afficher
                </p>
              </PopoverTrigger>
              <PopoverContent align="end" className="mx-2 w-auto max-w-[310px]">
                <div className="whitespace-pre-line text-sm">
                  {animalData.note}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <p className="flex italic">Pas de note</p>
          )}
        </CustomBadge>
        <EditCardButton animalId={animalData.id} />
      </CardFooter>
    </Card>
  );
}
