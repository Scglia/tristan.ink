import styles from "./ArticleHeader.module.css";
import Image from "next/image";

export interface ArticleHeaderProps {
  image: any;
  imageAlt: string;
  color: string;
  title: string;
  tags: string[];
}

export default function ArticleHeader({
  image,
  imageAlt,
  color,
  title,
  tags,
}: ArticleHeaderProps) {
  return (
    <div style={{ color: color }}>
      <div className={styles.tagList}>
        {tags.map((tag, i) => (
          <div key={i} className={styles.tagItem} style={{ background: color }}>
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.imageContainer}>
        <Image fill={true} src={image} alt={imageAlt} placeholder="blur" />
      </div>
    </div>
  );
}
