import * as styles from "./AboutPage.css";

export const AboutPage = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>
        Backend-focused developer building scalable services, documenting decisions,
        and using writing as a way to sharpen implementation quality. This page is
        intentionally concise so the main emphasis stays on your posts and project
        portfolio.
      </p>
    </section>
  );
};
