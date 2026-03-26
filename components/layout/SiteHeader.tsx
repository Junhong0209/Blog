import Link from "next/link";
import * as styles from "./SiteHeader.css";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        junhong.dev
      </Link>
      <nav>
        <ul className={styles.navigation}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link className={styles.navigationLink} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
