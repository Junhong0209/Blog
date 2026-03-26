import type { MDXComponents } from "mdx/types";
import * as styles from "./MdxComponents.css";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className={styles.heading} {...props} />,
  h3: (props) => <h3 className={styles.subheading} {...props} />,
  p: (props) => <p className={styles.paragraph} {...props} />,
  ul: (props) => <ul className={styles.list} {...props} />,
  ol: (props) => <ol className={styles.list} {...props} />,
  li: (props) => <li className={styles.listItem} {...props} />,
  a: (props) => <a className={styles.link} {...props} />,
  code: (props) => <code className={styles.inlineCode} {...props} />,
  pre: (props) => <pre className={styles.preformatted} {...props} />,
  blockquote: (props) => <blockquote className={styles.blockquote} {...props} />,
};
