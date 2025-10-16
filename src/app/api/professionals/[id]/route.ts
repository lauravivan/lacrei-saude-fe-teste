"use server";

import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { Professional } from "@/types/professional";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const filePath = path.join(process.cwd(), "src", "db", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data: {
    professionals: Professional[];
  } = JSON.parse(jsonData);
  const professional = data.professionals.find((pro) => pro.id === params.id);
  return NextResponse.json(professional);
};
