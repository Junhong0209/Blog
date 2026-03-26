import { getAllPosts } from "@/features/blog/lib/posts";
import { HomePage } from "@/features/home/ui/HomePage";

export default async function Page() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}
