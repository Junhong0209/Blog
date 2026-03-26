import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/features/blog/lib/posts";
import { PostDetailPage } from "@/features/blog/ui/PostDetailPage";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export default async function Page({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PostDetailPage
      content={post.content}
      description={post.description}
      publishedAt={post.publishedAt}
      tags={post.tags}
      title={post.title}
    />
  );
}
