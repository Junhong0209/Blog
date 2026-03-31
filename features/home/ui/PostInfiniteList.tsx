"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PostCard } from "@/features/blog/ui/PostCard";
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

export const PostInfiniteList = ({
  initialPosts,
  total,
  pageSize,
}: PostInfiniteListProps) => {
  const [posts, setPosts] = useState<PostSummary[]>(initialPosts);
  const [offset, setOffset] = useState<number>(initialPosts.length);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(initialPosts.length < total);
  const [hasError, setHasError] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef<boolean>(false);

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isFetchingRef.current) {
      return;
    }

    isFetchingRef.current = true;
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(`/api/posts?offset=${offset}&limit=${pageSize}`);

      if (!response.ok) {
        throw new Error("Failed to load posts");
      }

      const data = (await response.json()) as PostsApiResponse;

      setPosts((previousPosts) => [...previousPosts, ...data.posts]);
      setOffset(data.nextOffset);
      setHasMore(data.hasMore);
    } catch {
      setHasError(true);
    } finally {
      isFetchingRef.current = false;
      setIsLoading(false);
    }
  }, [hasMore, isLoading, offset, pageSize]);

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
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {hasError ? (
        <div className={styles.statusText}>목록을 불러오지 못했습니다. 스크롤을 다시 시도해 주세요.</div>
      ) : null}
      {isLoading ? <div className={styles.statusText}>글을 불러오는 중입니다...</div> : null}
      {!hasMore && posts.length > 0 ? (
        <div className={styles.statusText}>모든 글을 불러왔습니다.</div>
      ) : null}
      <div className={styles.sentinel} ref={sentinelRef} aria-hidden />
    </>
  );
};
