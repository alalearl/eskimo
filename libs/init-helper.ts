import { PrismaClient } from '@prisma/client';

export const checkDatabase = async () => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: `${process.env.DATABASE_URL}//${process.env.DATABASE_NAME}`,
      },
    },
  });

  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    throw error;
  }

  try {
    await prisma.$executeRaw(esUserTableSchema());
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    throw error;
  } finally {
    await prisma.$disconnect();
  }

  return prisma;
};

const esUserTableSchema = () =>
  `CREATE TABLE IF NOT EXISTS ${process.env.DATABASE_NAME}.es_users ( id int PRIMARY KEY NOT NULL AUTO_INCREMENT, username varchar(255), password varchar(255) )`;
