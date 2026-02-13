import express from "express";
import cors from "cors";
import { config } from "./config/env.js";
import { getPool } from "./config/database.js";

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/db-check", async (_req, res) => {
  try {
    const pool = getPool();
    const result = await pool.query("SELECT NOW() as now");
    res.json({ db: "connected", serverTime: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ db: "error", message: (err as Error).message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
