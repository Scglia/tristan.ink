import styles from "./ArticleSubtitle.module.css";

export default function ArticleSubtitle({ children }: any) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
