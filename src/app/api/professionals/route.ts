"use server";

import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const filePath = path.join(process.cwd(), "src", "db", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return NextResponse.json(data.professionals);
};
