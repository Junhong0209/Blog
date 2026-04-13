"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PostCard } from "@/features/blog/ui/PostCard";
import { trackEvent } from "@/shared/lib/analytics";
import type { PostSummary } from "@/shared/types/post.type";
import * as styles from "./PostInfiniteList.css";

type PostInfiniteListProps = {
  initialPosts: PostSummary[];
  total: number;
  pageSize: number;
};

type PostsApiResponse = {
  posts: PostSummary[];
  total: number;
  hasMore: boolean;
  nextOffset: number;
};

type FetchPageParams = {
  nextOffset: number;
  searchTerm: string;
  replace: boolean;
};

export const PostInfiniteList = ({
  initialPosts,
  total,
  pageSize,
}: PostInfiniteListProps) => {
  const [query, setQuery] = useState<string>("");
  const [posts, setPosts] = useState<PostSummary[]>(initialPosts);
  const [offset, setOffset] = useState<number>(initialPosts.length);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(initialPosts.length < total);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasLoadedMore, setHasLoadedMore] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isFirstRenderRef = useRef<boolean>(true);
  const lastTrackedQueryRef = useRef<string>("");

  const fetchPage = useCallback(
    async ({ nextOffset, searchTerm, replace }: FetchPageParams) => {
      if (isFetchingRef.current) {
        return;
      }

      isFetchingRef.current = true;
      setIsLoading(true);
      setHasError(false);

      const searchParams = new URLSearchParams({
        offset: `${nextOffset}`,
        limit: `${pageSize}`,
      });

      const normalizedSearchTerm = searchTerm.trim();

      if (normalizedSearchTerm.length > 0) {
        searchParams.set("q", normalizedSearchTerm);
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch(`/api/posts?${searchParams.toString()}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load posts");
        }

        const data = (await response.json()) as PostsApiResponse;

        if (replace) {
          setPosts(data.posts);
          setHasLoadedMore(false);
        } else {
          setPosts((previousPosts) => [...previousPosts, ...data.posts]);

          if (nextOffset > 0 && data.posts.length > 0) {
            setHasLoadedMore(true);
          }
        }

        setOffset(data.nextOffset);
        setHasMore(data.hasMore);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setHasError(true);
      } finally {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }

        isFetchingRef.current = false;
        setIsLoading(false);
      }
    },
    [pageSize],
  );

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isFetchingRef.current) {
      return;
    }

    await fetchPage({
      nextOffset: offset,
      searchTerm: query,
      replace: false,
    });
  }, [fetchPage, hasMore, isLoading, offset, query]);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      isFetchingRef.current = false;
    }

    void fetchPage({
      nextOffset: 0,
      searchTerm: query,
      replace: true,
    });
  }, [fetchPage, query]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 2 || trimmedQuery === lastTrackedQueryRef.current) {
      return;
    }

    const timer = window.setTimeout(() => {
      trackEvent("search_posts", {
        search_term: trimmedQuery,
        term_length: trimmedQuery.length,
      });
      lastTrackedQueryRef.current = trimmedQuery;
    }, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    const node = sentinelRef.current;

    if (!node || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      {
        rootMargin: "300px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore]);

  return (
    <>
      <div className={styles.searchFieldWrapper}>
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          className={styles.searchInput}
          placeholder="글 제목으로 검색"
          aria-label="글 제목 검색"
        />
      </div>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {query.trim().length > 0 && posts.length === 0 && !isLoading && !hasError ? (
        <div className={styles.statusText}>검색 결과가 없습니다.</div>
      ) : null}
      {hasError ? (
        <div className={styles.statusText}>목록을 불러오지 못했습니다. 스크롤을 다시 시도해 주세요.</div>
      ) : null}
      {isLoading ? <div className={styles.statusText}>글을 불러오는 중입니다...</div> : null}
      {!hasMore && posts.length > 0 && hasLoadedMore ? (
        <div className={styles.statusText}>모든 글을 불러왔습니다.</div>
      ) : null}
      <div className={styles.sentinel} ref={sentinelRef} aria-hidden />
    </>
  );
};
