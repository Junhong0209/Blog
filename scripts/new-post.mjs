import fs from "node:fs/promises";
import path from "node:path";

const input = process.argv[2]?.trim();

if (!input) {
  console.error('Usage: npm run new:post -- "post-slug"');
  process.exit(1);
}

const slug = input
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

if (!slug) {
  console.error("Slug is empty after normalization. Use english letters or numbers.");
  process.exit(1);
}

const postsDirectory = path.join(process.cwd(), "content", "posts");
const postFilePath = path.join(postsDirectory, `${slug}.mdx`);

const publishedAt = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const title = slug
  .split("-")
  .filter(Boolean)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const template = `---
title: "${title || "Untitled Post"}"
description: "포스트 요약을 입력하세요."
publishedAt: "${publishedAt}"
tags:
  - draft
---

## 소개

여기에 글을 작성하세요.
`;

await fs.mkdir(postsDirectory, { recursive: true });

try {
  await fs.access(postFilePath);
  console.error(`Post already exists: ${postFilePath}`);
  process.exit(1);
} catch {
  await fs.writeFile(postFilePath, template, "utf8");
  console.log(`Created ${postFilePath}`);
}
