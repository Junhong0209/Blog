"use client";

import { useEffect, useRef } from "react";
import * as styles from "./PostComments.css";

type PostCommentsProps = {
  slug: string;
};

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING ?? "specific",
  lang: process.env.NEXT_PUBLIC_GISCUS_LANG ?? "en",
  theme: process.env.NEXT_PUBLIC_GISCUS_THEME ?? "preferred_color_scheme",
};

const hasRequiredGiscusConfig =
  Boolean(giscusConfig.repo) &&
  Boolean(giscusConfig.repoId) &&
  Boolean(giscusConfig.category) &&
  Boolean(giscusConfig.categoryId);

export const PostComments = ({ slug }: PostCommentsProps) => {
  const commentsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasRequiredGiscusConfig) {
      return;
    }

    const container = commentsContainerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");

    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", giscusConfig.repo ?? "");
    script.setAttribute("data-repo-id", giscusConfig.repoId ?? "");
    script.setAttribute("data-category", giscusConfig.category ?? "");
    script.setAttribute("data-category-id", giscusConfig.categoryId ?? "");
    script.setAttribute("data-mapping", giscusConfig.mapping);
    script.setAttribute("data-term", slug);
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusConfig.theme);
    script.setAttribute("data-lang", giscusConfig.lang);
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [slug]);

  return (
    <section className={styles.section} aria-labelledby="comments-heading">
      <h2 className={styles.title} id="comments-heading">
        Comments
      </h2>
      {hasRequiredGiscusConfig ? (
        <div className={styles.container} ref={commentsContainerRef} />
      ) : (
        <p className={styles.unavailable}>Comments are unavailable until giscus is configured.</p>
      )}
    </section>
  );
};
