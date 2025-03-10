// Importamos Prisma Client para interactuar con la base de datos
import { PrismaClient } from "@prisma/client";

// Evitamos múltiples instancias de Prisma en desarrollo
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Creamos una única instancia de Prisma (o usamos la existente en `global`)
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Opcional: Muestra las consultas SQL en la consola para debug
  });

// En desarrollo, guardamos la instancia en `global` para evitar duplicados
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
