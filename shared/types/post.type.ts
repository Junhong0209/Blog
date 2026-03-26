export type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
};

export type PostSummary = PostFrontmatter & {
  slug: string;
};
