import styles from "./ArticleText.module.css";

export default function ArticleText({ children }: any) {
  return <div className={styles.text}>{children}</div>;
}
