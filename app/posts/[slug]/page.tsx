import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/features/blog/lib/posts";
import { SITE_NAME, SITE_URL } from "@/shared/constants/site";
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

  const postUrl = `${SITE_URL}/posts/${slug}`;

  return {
    alternates: {
      canonical: `/posts/${slug}`,
    },
    title: post.title,
    description: post.description,
    openGraph: {
      description: post.description,
      publishedTime: new Date(post.publishedAt).toISOString(),
      siteName: SITE_NAME,
      title: post.title,
      type: "article",
      url: postUrl,
    },
    twitter: {
      card: "summary_large_image",
      description: post.description,
      title: post.title,
    },
  };
};

export default async function Page({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/posts/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: "Junhong",
    },
    datePublished: new Date(post.publishedAt).toISOString(),
    description: post.description,
    headline: post.title,
    keywords: post.tags.join(", "),
    mainEntityOfPage: postUrl,
    url: postUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PostDetailPage
        content={post.content}
        description={post.description}
        publishedAt={post.publishedAt}
        slug={slug}
        tags={post.tags}
        title={post.title}
      />
    </>
  );
}
