import { z } from "zod";

export const animalSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .min(1, { message: "Veuillez saisir un nom ou un identifiant" })
    .max(50, { message: "Le nom ne doit pas dépasser 50 caractères" }),
  weight: z.coerce.number(),
  birthDate: z.date().refine(
    (date) => date <= new Date(), // Valide si la date est aujourd'hui ou avant
    { message: "La date de naissance n'est pas valide." },
  ),
  imgUrl: z.string().optional(),
  sex: z.enum(["male", "female"]),
  healthStatus: z.enum(["healthy", "injured", "sick", "recovering", "unknown"]),
  note: z
    .string()
    .max(500, { message: "La note ne doit pas dépasser 500 caractères" })
    .optional(),
  race: z
    .enum(
      [
        "pouleRousse",
        "leghorn",
        "isaBrown",
        "harco",
        "sussex",
        "rhodeIslandRed",
        "cornish",
        "faverolles",
        "plymouthRock",
        "brahma",
        "cochin",
        "orpington",
        "wyandotte",
        "marans",
        "sussexTricolor",
        "australorp",
        "padoue",
        "houdan",
        "sabelpoot",
        "serama",
        "nagasaki",
        "gournay",
        "coucouDeRennes",
        "gelineDeTouraine",
        "gauloise",
        "ardennaise",
        "pekin",
        "sebright",
        "chabo",
        "barbuDUccle",
        "bantamDeHollande",
        "autre",
        "unknown",
      ],
      { message: "La race indiquée n'est pas une race valide" },
    )
    .nullable(),
});
