import type { MetadataRoute } from "next";
import { getAllPosts } from "@/features/blog/lib/posts";
import { SITE_URL } from "@/shared/constants/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 1,
      url: SITE_URL,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE_URL}/about`,
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE_URL}/projects`,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    changeFrequency: "weekly",
    lastModified: new Date(post.publishedAt),
    priority: 0.8,
    url: `${SITE_URL}/posts/${post.slug}`,
  }));

  return [...staticRoutes, ...postRoutes];
}
