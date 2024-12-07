import { dummyData } from "@/app/data/dummy";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.animal.createMany({
    data: dummyData,
  });

  console.log("Seed data for animals created! prisma/seed.js");
}

if (require.main === module) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
