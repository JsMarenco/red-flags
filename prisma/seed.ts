// Third-party dependencies
import { PrismaClient } from "@prisma/client";

// Current project dependencies

const prisma = new PrismaClient();

/**
 * @todo Add your seed data here
 */
async function seed() {}

seed()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
