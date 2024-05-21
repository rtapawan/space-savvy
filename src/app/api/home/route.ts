import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request: NextRequest) {
  const launches = await fs.readFile(
    process.cwd() + "/src/app/resources/launches.json",
    "utf8"
  );
  const launchpads = await fs.readFile(
    process.cwd() + "/src/app/resources/launchpads.json",
    "utf8"
  );
  return new NextResponse(JSON.stringify({ launches, launchpads }), {
    status: 200,
  });
}
