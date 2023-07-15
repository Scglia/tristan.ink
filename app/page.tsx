import Image from "next/image";
import styles from "./page.module.css";
import { clsx } from "clsx";

export default function Home() {
  return (
    <main>
      <div className={styles.center}>
        <header className={styles.header}>
          <div className={styles.logo}>Tristan Scaglia</div>
          <menu className={styles.menu}>
            <li>
              <a href="mailto:tristan.scaglia@gmail.com">contact</a>
            </li>
            <span>·</span>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tristan-scaglia-299b24173/"
              >
                linkedin
              </a>
            </li>
          </menu>
        </header>
      </div>
      <div className={styles.center}>
        <div className={styles.grid}>
          <div className={styles.description}>
            <div>I&apos;m a designer and developer</div>
            <div>Based in the Netherlands</div>
          </div>
          <div className={styles.card}>
            <Image
              fill={true}
              src="/illustration_resume.jpg"
              alt="Resume illustration"
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTagList}></div>
              <div className={styles.cardTitle} style={{ color: "#274E81" }}>
                Resume
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              fill={true}
              src="/illustration_gps.jpg"
              alt="Experimentation at TomTom illustration"
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTagList}>
                <div
                  className={styles.cardTagItem}
                  style={{ background: "#1A6262" }}
                >
                  UX Case Study
                </div>
              </div>
              <div className={styles.cardTitle} style={{ color: "#165252" }}>
                Experimentation at TomTom
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              fill={true}
              src="/illustration_app.jpg"
              alt="Podcast App illustration"
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTagList}>
                <div
                  className={styles.cardTagItem}
                  style={{ background: "#604535" }}
                >
                  UI/UX
                </div>
                <div
                  className={styles.cardTagItem}
                  style={{ background: "#604535" }}
                >
                  React
                </div>
              </div>
              <div className={styles.cardTitle} style={{ color: "#4E3527" }}>
                Podcast App
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              fill={true}
              src="/illustration_laptop.jpg"
              alt="Design exploration illustration"
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTagList}></div>
              <div className={styles.cardTitle} style={{ color: "#6E2C1C" }}>
                Design Exploration
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
