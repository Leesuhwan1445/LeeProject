import "dotenv/config";

export const config = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV ?? "development",
  db: {
    host: process.env.PG_HOST ?? "localhost",
    port: Number(process.env.PG_PORT) || 5432,
    database: process.env.PG_DATABASE ?? "lee_project",
    user: process.env.PG_USER ?? "postgres",
    password: process.env.PG_PASSWORD ?? "",
  },
} as const;
