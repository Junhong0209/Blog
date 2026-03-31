import { getPaginatedPosts } from "@/features/blog/lib/posts";
import { HomePage } from "@/features/home/ui/HomePage";

const POSTS_PAGE_SIZE = 24;

export default async function Page() {
  const { posts, total } = await getPaginatedPosts(0, POSTS_PAGE_SIZE);

  return <HomePage initialPosts={posts} total={total} pageSize={POSTS_PAGE_SIZE} />;
}
