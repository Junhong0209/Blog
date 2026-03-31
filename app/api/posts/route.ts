import { NextResponse } from "next/server";
import { getPaginatedPosts } from "@/features/blog/lib/posts";

const DEFAULT_LIMIT = 24;

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offsetParam = Number.parseInt(searchParams.get("offset") ?? "0", 10);
  const limitParam = Number.parseInt(
    searchParams.get("limit") ?? `${DEFAULT_LIMIT}`,
    10,
  );

  const offset = Number.isFinite(offsetParam) ? Math.max(0, offsetParam) : 0;
  const limit = Number.isFinite(limitParam) ? Math.max(1, limitParam) : DEFAULT_LIMIT;

  const { posts, total } = await getPaginatedPosts(offset, limit);

  return NextResponse.json({
    posts,
    total,
    hasMore: offset + posts.length < total,
    nextOffset: offset + posts.length,
  });
}
