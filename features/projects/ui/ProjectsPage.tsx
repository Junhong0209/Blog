import { projects } from "../data/projects";
import * as styles from "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>
        실무형 백엔드 역량과 제품 감각을 함께 보여줄 수 있는 작업을 정리합니다.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.card} key={project.title}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
