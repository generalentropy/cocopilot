// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export const dummyData = [
  {
    name: "Cluck",
    weight: 2000,
    race: "leghorn",
    healthStatus: "healthy",
    healthNotes: null,
    birthDate: new Date("2023-11-01"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Cluck est l'une des poules les plus actives de la ferme.",
    imgUrl: "https://i.imgur.com/VfaazJE.jpeg",
    sex: "female",
  },
  {
    name: "Feather",
    weight: 1800,
    race: "pouleRousse",
    healthStatus: "recovering",
    healthNotes: "S'est remise d'une blessure à la patte.",
    birthDate: new Date("2023-01-15"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Malgré sa récupération, Feather reste un peu hésitante à marcher sur un terrain accidenté.",
    imgUrl: "https://i.imgur.com/lWJZSMl.jpeg",
    sex: "female",
  },
  {
    name: "Goldie",
    weight: 2300,
    race: "orpington",
    healthStatus: "injured",
    healthNotes: "Aile droite légèrement abîmée.",
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: null,
    imgUrl: "https://i.imgur.com/WqSztSB.jpeg",
    sex: "male",
  },
  {
    name: "Speckle",
    weight: 2100,
    race: "marans",
    healthStatus: "sick",
    healthNotes: "Problème respiratoire observé.",
    birthDate: new Date("2022-08-21"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Doit être surveillée de près, surtout par temps humide.",
    imgUrl: "https://i.imgur.com/1bB5qpr.jpeg",
    sex: "male",
  },
  {
    name: "Peck",
    weight: 2500,
    race: "sussex",
    healthStatus: "healthy",
    healthNotes: null,
    birthDate: new Date("2022-04-10"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Poule robuste et très curieuse, elle est souvent la première à explorer les nouveaux environnements.",
    imgUrl: "https://i.imgur.com/WqSztSB.jpeg",
    sex: "female",
  },
  {
    name: "Snow",
    weight: 2200,
    race: "brahma",
    healthStatus: "unknown",
    healthNotes: "Statut de santé non confirmé.",
    birthDate: new Date("2022-11-30"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Snow a un comportement calme et se distingue par ses plumes blanches immaculées.",
    imgUrl: "https://i.imgur.com/WqSztSB.jpeg",
    sex: "female",
  },
  {
    name: "Sunny",
    weight: 2400,
    race: "cochin",
    healthStatus: "healthy",
    healthNotes: null,
    birthDate: new Date("2023-02-10"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Son plumage jaune brillant fait honneur à son nom.",
    imgUrl: "https://i.imgur.com/VfaazJE.jpeg",
    sex: "female",
  },
  {
    name: "Mellow",
    weight: 1900,
    race: "cornish",
    healthStatus: "sick",
    healthNotes: "Problème intestinal détecté.",
    birthDate: new Date("2023-05-18"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Son appétit a diminué ces derniers jours, un suivi est nécessaire.",
    imgUrl: "https://i.imgur.com/WqSztSB.jpeg",
    sex: "female",
  },
  {
    name: "Fluffy",
    weight: 1700,
    race: "serama",
    healthStatus: "recovering",
    healthNotes: "Après une fracture mineure.",
    birthDate: new Date("2023-06-22"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: null,
    imgUrl: "https://i.imgur.com/VfaazJE.jpeg",
    sex: "female",
  },
  {
    name: "Shadow",
    weight: 2000,
    race: "houdan",
    healthStatus: "healthy",
    healthNotes: null,
    birthDate: new Date("2023-03-14"),
    userId: "kp_3c1f52aace8c45c8813b7f8b6627d93b",
    note: "Shadow est discrète mais très observatrice, toujours alerte.",
    imgUrl: "https://i.imgur.com/VfaazJE.jpeg",
    sex: "female",
  },
];

// async function main() {
//   await prisma.animal.createMany({
//     data: dummyData,
//   });

//   console.log("Seed data for animals created!");
// }

// if (require.main === module) {
//   main()
//     .catch((e) => {
//       console.error(e);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });
// }
