"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Heart, Calendar1, Weight, NotepadText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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

type AnimalCardCreateProps = {
  // onSubmit: (values: AnimalFormValues) => void;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AnimalCardCreate({ setModalState }: AnimalCardCreateProps) {
  const statusColors: { [key: string]: string } = {
    healthy: "bg-green-200 border border-green-300 text-green-600",
    injured: "bg-red-200 border border-red-300 text-red-600",
    sick: "bg-orange-200 border border-orange-300 text-orange-600",
    recovering: "bg-blue-200 border border-blue-300 text-blue-600",
    unknown: "bg-gray-200 border border-gray-300 text-gray-600",
  };

  const form = useForm({
    defaultValues: {
      name: "",
      race: "autre",
      sex: "male",
      healthStatus: "unknown",
      age: 0,
      weight: 0,
      note: "",
      imgUrl: "/poules/rousse.webp",
    },
  });

  // const handleFormSubmit = (values: any) => {
  //   onSubmit(values);
  // };

  const currentHealthStatus = form.getValues("healthStatus");
  const colorClass = statusColors[currentHealthStatus] || statusColors.unknown;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="flex-col items-center justify-between border-b bg-gray-50">
        <div className="flex min-w-full items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">
            Créer une fiche animal
          </h2>
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
                    <Input {...field} placeholder="Nom de l'animal" />
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
                    <Input
                      {...field}
                      placeholder="Ex: Leghorn, Sussex, autre..."
                    />
                  </FormControl>
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
                      <Input type="number" {...field} placeholder="0" />
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
                      <Input type="number" {...field} placeholder="0" />
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
            <Button type="submit">Enregistrer</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
