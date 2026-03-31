import fs from "node:fs/promises";
import path from "node:path";

const countInput = process.argv[2] ?? "3000";
const count = Number.parseInt(countInput, 10);

if (!Number.isFinite(count) || count <= 0) {
  console.error("Usage: npm run mock:posts -- <count> (count must be a positive number)");
  process.exit(1);
}

const postsDirectory = path.join(process.cwd(), "content", "posts");
const now = new Date();
const CHUNK_SIZE = 200;

const formatDate = (date) => {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const createPostTemplate = (index, date) => {
  const numericLabel = String(index + 1).padStart(5, "0");

  return `---
title: "Mock Post ${numericLabel}"
description: "무한 스크롤 테스트를 위한 가상 게시글 ${numericLabel}"
publishedAt: "${formatDate(date)}"
tags:
  - mock
  - performance
---

## Mock Content ${numericLabel}

이 글은 무한 스크롤 성능 테스트를 위해 자동 생성되었습니다.
`;
};

await fs.mkdir(postsDirectory, { recursive: true });

let created = 0;
let skipped = 0;

for (let start = 0; start < count; start += CHUNK_SIZE) {
  const end = Math.min(start + CHUNK_SIZE, count);
  const tasks = [];

  for (let index = start; index < end; index += 1) {
    const numericLabel = String(index + 1).padStart(5, "0");
    const slug = `mock-post-${numericLabel}`;
    const postFilePath = path.join(postsDirectory, `${slug}.mdx`);

    const date = new Date(now);
    date.setDate(now.getDate() - index);

    tasks.push(
      fs
        .access(postFilePath)
        .then(() => {
          skipped += 1;
        })
        .catch(async () => {
          const template = createPostTemplate(index, date);
          await fs.writeFile(postFilePath, template, "utf8");
          created += 1;
        }),
    );
  }

  await Promise.all(tasks);
}

console.log(`Mock post generation finished. created=${created}, skipped=${skipped}`);
