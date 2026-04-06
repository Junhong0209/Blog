import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { z } from "zod";
import type { ReactElement } from "react";
import type { PostFrontmatter, PostSummary } from "@/shared/types/post.type";
import { mdxComponents } from "../ui/MdxComponents";

const postsDirectory = path.join(process.cwd(), "content/posts");

const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().min(1),
  tags: z.array(z.string()).default([]),
});

const readPostFileNames = async (): Promise<string[]> => {
  const files = await fs.readdir(postsDirectory);

  return files.filter((fileName) => fileName.endsWith(".mdx"));
};

const getPostFilePath = (slug: string): string => {
  return path.join(postsDirectory, `${slug}.mdx`);
};

const readAndSortPosts = async (): Promise<PostSummary[]> => {
  const fileNames = await readPostFileNames();

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const source = await fs.readFile(getPostFilePath(slug), "utf8");
      const { data } = matter(source);
      const frontmatter = postFrontmatterSchema.parse(data);

      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return posts.sort((left, right) => {
    return (
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  });
};

export const getAllPosts = async (): Promise<PostSummary[]> => {
  return readAndSortPosts();
};

export const getPaginatedPosts = async (
  offset: number,
  limit: number,
): Promise<{ posts: PostSummary[]; total: number }> => {
  const safeOffset = Math.max(0, offset);
  const safeLimit = Math.max(1, limit);
  const allPosts = await readAndSortPosts();

  return {
    posts: allPosts.slice(safeOffset, safeOffset + safeLimit),
    total: allPosts.length,
  };
};

export const getPostBySlug = async (
  slug: string,
): Promise<(PostFrontmatter & { content: ReactElement }) | null> => {
  try {
    const source = await fs.readFile(getPostFilePath(slug), "utf8");
    const { content, data } = matter(source);
    const frontmatter = postFrontmatterSchema.parse(data);
    const compiled = await compileMDX<PostFrontmatter>({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
          ],
        },
      },
      components: mdxComponents,
    });

    return {
      ...frontmatter,
      content: compiled.content,
    };
  } catch {
    return null;
  }
};

export const getAllPostSlugs = async (): Promise<string[]> => {
  const fileNames = await readPostFileNames();

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
};
