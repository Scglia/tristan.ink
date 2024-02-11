import styles from "./ArticleSubtitle.module.css";

export default function ArticleSubtitle({ children, ...props }: any) {
  return (
    <h2 className={styles.subtitle} {...props}>
      {children}
    </h2>
  );
}
