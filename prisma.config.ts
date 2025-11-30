import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  // Prisma 7 only accepts: url, shadowDatabaseUrl
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
