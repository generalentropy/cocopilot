import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.animal.createMany({
    data: [
      {
        name: "Cluck",
        weight: 2000,
        race: "leghorn",
        age: 12,
        healthStatus: "healthy",
        healthNotes: null,
        dateOfBirth: new Date("2023-11-01"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Cluck est l'une des poules les plus actives de la ferme.",
      },
      {
        name: "Feather",
        weight: 1800,
        race: "isaBrown",
        age: 10,
        healthStatus: "recovering",
        healthNotes: "S'est remise d'une blessure à la patte.",
        dateOfBirth: new Date("2023-01-15"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Malgré sa récupération, Feather reste un peu hésitante à marcher sur un terrain accidenté.",
      },
      {
        name: "Goldie",
        weight: 2300,
        race: "orpington",
        age: 18,
        healthStatus: "injured",
        healthNotes: "Aile droite légèrement abîmée.",
        dateOfBirth: new Date("2022-06-10"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Goldie est connue pour sa nature douce et son plumage doré éclatant.",
      },
      {
        name: "Speckle",
        weight: 2100,
        race: "marans",
        age: 14,
        healthStatus: "sick",
        healthNotes: "Problème respiratoire observé.",
        dateOfBirth: new Date("2022-08-21"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Doit être surveillée de près, surtout par temps humide.",
      },
      {
        name: "Peck",
        weight: 2500,
        race: "sussex",
        age: 20,
        healthStatus: "healthy",
        healthNotes: null,
        dateOfBirth: new Date("2022-04-10"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Poule robuste et très curieuse, elle est souvent la première à explorer les nouveaux environnements.",
      },
      {
        name: "Snow",
        weight: 2200,
        race: "brahma",
        age: 16,
        healthStatus: "unknown",
        healthNotes: "Statut de santé non confirmé.",
        dateOfBirth: new Date("2022-11-30"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Snow a un comportement calme et se distingue par ses plumes blanches immaculées.",
      },
      {
        name: "Sunny",
        weight: 2400,
        race: "cochin",
        age: 13,
        healthStatus: "healthy",
        healthNotes: null,
        dateOfBirth: new Date("2023-02-10"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Son plumage jaune brillant fait honneur à son nom.",
      },
      {
        name: "Mellow",
        weight: 1900,
        race: "cornish",
        age: 9,
        healthStatus: "sick",
        healthNotes: "Problème intestinal détecté.",
        dateOfBirth: new Date("2023-05-18"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Son appétit a diminué ces derniers jours, un suivi est nécessaire.",
      },
      {
        name: "Fluffy",
        weight: 1700,
        race: "serama",
        age: 8,
        healthStatus: "recovering",
        healthNotes: "Après une fracture mineure.",
        dateOfBirth: new Date("2023-06-22"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Petite mais pleine de vie, Fluffy est un favori des enfants.",
      },
      {
        name: "Shadow",
        weight: 2000,
        race: "houdan",
        age: 11,
        healthStatus: "healthy",
        healthNotes: null,
        dateOfBirth: new Date("2023-03-14"),
        userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
        note: "Shadow est discrète mais très observatrice, toujours alerte.",
      },
    ],
  });

  console.log("Seed data for animals created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
