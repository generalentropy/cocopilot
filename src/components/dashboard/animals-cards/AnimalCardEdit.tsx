"use client";

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

import { TbGenderFemale, TbGenderMale } from "react-icons/tb";

import { type Animal } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Heart, Calendar1, Weight, NotepadText } from "lucide-react";

import CustomBadge from "../CustomBadge";

import { Separator } from "../../ui/separator";
import { capitalizeFirstLetter, splitUUID } from "@/app/utils/helpers";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type AnimalCardEditProps = {
  animalData: Animal;
  // onSubmit: (values: any) => void;
};

export function AnimalCardEdit({ animalData }: AnimalCardEditProps) {
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

  const form = useForm({
    defaultValues: {
      name: animalData.name ?? "",
      race: animalData.race ?? "autre",
      sex: animalData.sex ?? "male",
      healthStatus: animalData.healthStatus ?? "unknown",
      age: animalData.age ?? 0,
      weight: animalData.weight ?? 0,
      note: animalData.note ?? "",
      imgUrl: animalData.imgUrl ?? "/poules/rousse.webp",
    },
  });

  // const handleFormSubmit = (values: any) => {
  //   onSubmit(values);
  // };

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

              <div className="flex items-center gap-2">
                <CustomBadge className="mt-1 rounded-full border border-gray-300 bg-white font-medium text-gray-600">
                  {animalData.race === "autre"
                    ? "Non spécifié"
                    : capitalizeFirstLetter(animalData.race)}
                </CustomBadge>
                {animalData.sex === "male" ? (
                  <TbGenderMale size={20} className="text-blue-300" />
                ) : (
                  <TbGenderFemale size={20} className="text-pink-300" />
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

      <Form {...form}>
        <form>
          <CardContent className="space-y-4 p-6">
            {/* Nom */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Race */}
            <FormField
              control={form.control}
              name="race"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Race</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Par exemple: Leghorn, Sussex, autre...
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sexe */}
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sexe</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir le sexe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Mâle</SelectItem>
                        <SelectItem value="female">Femelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Santé */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="mr-2" size={18} />
                <span>Santé</span>
              </div>
              <FormField
                control={form.control}
                name="healthStatus"
                render={({ field }) => (
                  <FormItem className="min-w-[120px]">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className={colorClass}>
                          <SelectValue placeholder="État de santé" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthy">
                            En bonne santé
                          </SelectItem>
                          <SelectItem value="injured">Blessé</SelectItem>
                          <SelectItem value="sick">Malade</SelectItem>
                          <SelectItem value="recovering">
                            En convalescence
                          </SelectItem>
                          <SelectItem value="unknown">Inconnu</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Separator className="my-4" />

            {/* Âge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar1 className="mr-2" size={18} />
                <span>Âge (mois)</span>
              </div>
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="max-w-[120px]">
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="my-4" />

            {/* Poids */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Weight className="mr-2" size={18} />
                <span>Poids (g)</span>
              </div>
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="max-w-[120px]">
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="my-4" />

            {/* Note */}
            <div className="flex w-full flex-col">
              <div className="mb-2 flex items-center text-gray-700">
                <NotepadText size={16} className="mr-1" /> Note
              </div>
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea {...field} placeholder="Ajoutez une note..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Image URL */}
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="URL de l'image" />
                  </FormControl>
                  <FormDescription>
                    Lien vers une image représentative de l’animal
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex justify-end space-x-2">
            <Button variant="secondary" type="button">
              Annuler
            </Button>
            <Button type="submit">Enregistrer</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
