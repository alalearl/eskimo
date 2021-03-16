import { PrismaClient } from "@prisma/client";

export const checkDatabase = async () => {
  const prisma = new PrismaClient();

  let query;
  try {
    query = await prisma.$executeRaw("DB_ID('dms') IS NOT NUL");
  } catch (err) {
    throw err;
  }

  return prisma;
};
