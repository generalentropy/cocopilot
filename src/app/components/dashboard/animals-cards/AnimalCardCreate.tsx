"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { Heart, Calendar1, Weight, NotepadText } from "lucide-react";
import { Separator } from "@/app/components/ui/separator";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { z } from "zod";
import { animalSchema } from "@/app/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/app/lib/utils";
import { chickenBreed } from "@/app/lib/animals";
import { createAnimalCard } from "@/app/actions/cards";
import { SubmitCardButton } from "./SubmitCardButton";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AnimalCardCreateProps = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AnimalCardCreate({ setModalState }: AnimalCardCreateProps) {
  const statusColors: { [key: string]: string } = {
    healthy: "bg-green-200 border border-green-300 text-green-700",
    injured: "bg-red-200 border border-red-300 text-red-700",
    sick: "bg-orange-200 border border-orange-300 text-orange-700",
    recovering: "bg-blue-200 border border-blue-300 text-blue-700",
    unknown: "bg-gray-200 border border-gray-300 text-gray-700",
  };

  const form = useForm<z.infer<typeof animalSchema>>({
    resolver: zodResolver(animalSchema),
    defaultValues: {
      name: "",
      race: null,
      sex: "female",
      healthStatus: "unknown",
      birthDate: new Date(),
      weight: 2000,
      note: "",
      imgUrl: "/poules/rousse.webp",
    },
  });

  const queryClient = useQueryClient();
  const createNewAnimalMutation = useMutation({
    mutationFn: (values: z.infer<typeof animalSchema>) =>
      createAnimalCard(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      setModalState(false);
      toast.success("Ajouté avec succès");
    },
    onError: (e) => toast.error(e.message),
  });

  async function onSubmit(values: z.infer<typeof animalSchema>) {
    createNewAnimalMutation.mutate(values);
  }

  const currentHealthStatus = form.watch("healthStatus");
  const colorClass = statusColors[currentHealthStatus] || statusColors.unknown;

  return (
    <Card className="w-full overflow-hidden rounded-md">
      <CardHeader className="flex-col items-center justify-between border-b bg-gray-50">
        <div className="flex min-w-full items-center">
          <h2 className="text-xl font-bold tracking-tight">
            Créer une fiche animal
          </h2>
        </div>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 p-4 sm:p-6">
            {/* Nom */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="placeholder:italic"
                      placeholder="Identifiant ou nom de l'animal"
                    />
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
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner la race" />
                      </SelectTrigger>
                      <SelectContent>
                        {chickenBreed.map((breed, i) => (
                          <SelectItem key={i} value={breed.value}>
                            {breed.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <div className="px-2 text-xs italic text-gray-500">
                    Choisissez <span className="font-semibold">autre</span> si
                    la race de l&apos;animal n&apos;est pas présente dans la
                    base
                  </div>
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
                        <SelectValue placeholder="Sélectionner le sexe" />
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
                <span>État de santé</span>
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
                          <SelectItem value="healthy">Bon</SelectItem>
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

            {/* Date de naissance */}
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center">
                <Calendar1 className="mr-2" size={18} />
                <div className="flex flex-col">
                  <span>Date de naissance</span>
                  <span className="text-xs italic text-gray-500">
                    (Date réelle ou approximative)
                  </span>
                </div>
              </div>
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="max-w-[240px]">
                    <FormControl>
                      <Popover modal={true}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP", { locale: fr })
                              : "Sélectionnez une date"}
                            <Calendar1 className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            locale={fr}
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
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
                      <Input
                        type="number"
                        {...field}
                        placeholder="2000"
                        min={0}
                      />
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
            <Button
              variant="secondary"
              type="button"
              onClick={() => setModalState((prev: boolean) => !prev)}
            >
              Annuler
            </Button>
            <SubmitCardButton isCreating={createNewAnimalMutation.isPending} />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
