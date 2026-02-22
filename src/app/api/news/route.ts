import { NextRequest, NextResponse } from "next/server";
import { getArticles, getArticleCount } from "@/lib/db/articles";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = Math.min(Number(searchParams.get("limit") ?? 50), 100);
  const offset = Number(searchParams.get("offset") ?? 0);
  const topicId = searchParams.get("topicId")
    ? Number(searchParams.get("topicId"))
    : undefined;

  const [articles, total] = await Promise.all([
    getArticles(limit, offset, topicId),
    getArticleCount(),
  ]);

  return NextResponse.json({ articles, total });
}
