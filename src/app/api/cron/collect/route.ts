import { NextRequest, NextResponse } from "next/server";
import { runCollectionPipeline } from "@/lib/collectors/pipeline";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await runCollectionPipeline();
  return NextResponse.json(result);
}
