const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Créer des utilisateurs
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      name: "Alice",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      name: "Bob",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: "user3@example.com",
      name: "Charlie",
    },
  });

  console.log("Users created:", user1, user2, user3);

  // Créer des posts
  const post1 = await prisma.post.create({
    data: {
      title: "First Post",
      content: "This is the content of the first post.",
      published: true,
      authorId: user1.id, // Utiliser l'ID du premier utilisateur
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Second Post",
      content: "Content of the second post.",
      published: false,
      authorId: user2.id, // Utiliser l'ID du deuxième utilisateur
    },
  });

  console.log("Posts created:", post1, post2);
}

main()
  .catch((e) => {
    console.error("Error seeding the database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
