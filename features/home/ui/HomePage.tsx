import type { PostSummary } from "@/shared/types/post.type";
import { PostInfiniteList } from "./PostInfiniteList";
import * as styles from "./HomePage.css";

type HomePageProps = {
  initialPosts: PostSummary[];
  total: number;
  pageSize: number;
};

export const HomePage = ({ initialPosts, total, pageSize }: HomePageProps) => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Frontend Developer</p>
      <p className={styles.intro}>기록하고, 개선하고, 성장합니다.</p>
      <PostInfiniteList initialPosts={initialPosts} total={total} pageSize={pageSize} />
    </section>
  );
};
