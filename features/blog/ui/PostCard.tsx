import Link from "next/link";
import type { PostSummary } from "@/shared/types/post.type";
import { formatDate } from "@/shared/utils/formatDate";
import * as styles from "./PostCard.css";

type PostCardProps = {
  post: PostSummary;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link className={styles.card} href={`/posts/${post.slug}`}>
      <span className={styles.date}>{formatDate(post.publishedAt)}</span>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.description}>{post.description}</p>
      <div className={styles.tagList}>
        {post.tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
};
