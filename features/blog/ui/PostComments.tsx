"use client";

import { useCallback, useEffect, useRef } from "react";
import { type ThemeMode } from "@/shared/constants/theme";
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
  themeLight: "noborder_light",
  themeDark: "noborder_dark",
};

const hasRequiredGiscusConfig =
  Boolean(giscusConfig.repo) &&
  Boolean(giscusConfig.repoId) &&
  Boolean(giscusConfig.category) &&
  Boolean(giscusConfig.categoryId);

export const PostComments = ({ slug }: PostCommentsProps) => {
  const commentsContainerRef = useRef<HTMLDivElement | null>(null);

  const getResolvedTheme = useCallback((): ThemeMode => {
    const currentTheme = document.documentElement.dataset.theme;

    return currentTheme === "dark" ? "dark" : "light";
  }, []);

  const getGiscusTheme = useCallback((theme: ThemeMode): string => {
    return theme === "dark" ? giscusConfig.themeDark : giscusConfig.themeLight;
  }, []);

  const applyGiscusTheme = useCallback(
    (theme: ThemeMode): void => {
      const iframe =
        commentsContainerRef.current?.querySelector<HTMLIFrameElement>("iframe.giscus-frame");

      if (!iframe?.contentWindow) {
        return;
      }

      iframe.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: getGiscusTheme(theme),
            },
          },
        },
        "https://giscus.app",
      );
    },
    [getGiscusTheme],
  );

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
    script.setAttribute("data-theme", getGiscusTheme(getResolvedTheme()));
    script.setAttribute("data-lang", giscusConfig.lang);
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [getGiscusTheme, getResolvedTheme, slug]);

  useEffect(() => {
    if (!hasRequiredGiscusConfig) {
      return;
    }

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ theme?: ThemeMode }>;
      const nextTheme = customEvent.detail?.theme === "dark" ? "dark" : "light";

      applyGiscusTheme(nextTheme);
    };

    window.addEventListener("themechange", handleThemeChange);

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, [applyGiscusTheme]);

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
