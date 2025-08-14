import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // How many users you want
  const userCount = 10;

  for (let i = 0; i < userCount; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
      },
    });
  }

  console.log(`${userCount} users created 🌱`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
