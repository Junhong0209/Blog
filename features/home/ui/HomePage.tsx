import { PostCard } from "@/features/blog/ui/PostCard";
import type { PostSummary } from "@/shared/types/post.type";
import * as styles from "./HomePage.css";

type HomePageProps = {
  posts: PostSummary[];
};

export const HomePage = ({ posts }: HomePageProps) => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Frontend Developer</p>
      <p className={styles.intro}>기록하고, 개선하고, 성장합니다.</p>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};
