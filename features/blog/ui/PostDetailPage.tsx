import Link from "next/link";
import type { ReactElement } from "react";
import { formatDate } from "@/shared/utils/formatDate";
import * as styles from "./PostDetailPage.css";

type PostDetailPageProps = {
  content: ReactElement;
  description: string;
  publishedAt: string;
  tags: string[];
  title: string;
};

export const PostDetailPage = ({
  content,
  description,
  publishedAt,
  tags,
  title,
}: PostDetailPageProps) => {
  return (
    <article className={styles.article}>
      <Link className={styles.backLink} href="/">
        Back to home
      </Link>
      <span className={styles.publishedAt}>{formatDate(publishedAt)}</span>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            #{tag}
          </span>
        ))}
      </div>
      {content}
    </article>
  );
};
