# junhong.dev

Personal developer blog built with Next.js App Router, TypeScript, Vanilla Extract, and MDX.

## New Post

```bash
npm run new:post -- my-new-post
```

This creates `content/posts/my-new-post.mdx` with the default frontmatter template.

## Stack

- Next.js
- TypeScript
- Vanilla Extract
- MDX

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Git Remote

```bash
git remote add origin <YOUR_REPOSITORY_URL>
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Branch Strategy

- `main`: production-ready branch
- `dev`: integration branch for reviewed changes
- `feature/*`: working branches created from `dev`

Recommended flow:

```bash
git switch dev
git pull origin dev
git switch -c feature/my-change

# work, commit, push
git push -u origin feature/my-change
```

Then merge in this order:

1. `feature/*` -> `dev`
2. `dev` -> `main`
