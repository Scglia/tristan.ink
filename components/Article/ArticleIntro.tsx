import styles from "./ArticleIntro.module.css";

export default function ArticleIntro({ children }: any) {
  return <p className={styles.intro}>{children}</p>;
}
