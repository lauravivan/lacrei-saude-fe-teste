"use server";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "api", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  if (req.method === "GET") {
    res.status(200).json(data.professionals);
  }

  res.status(405).json({ message: "Method not allowed" });
}
