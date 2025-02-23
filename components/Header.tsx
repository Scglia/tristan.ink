import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Tristan Scaglia
      </Link>
      <menu className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="mailto:hi@tristan.ink">contact</a>
        </li>
        <span className={styles.menuItem}>·</span>
        <li className={styles.menuItem}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tristan-scaglia-299b24173/"
          >
            linkedin
          </a>
        </li>
      </menu>
    </header>
  );
}
