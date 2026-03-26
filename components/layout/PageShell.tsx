import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import * as styles from "./PageShell.css";

type PageShellProps = {
  children: ReactNode;
};

export const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundAccent} />
      <div className={styles.container}>
        <SiteHeader />
        <main className={styles.main}>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
};
