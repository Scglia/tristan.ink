import Image from "next/image";
import styles from "./page.module.css";
import { clsx } from "clsx";
import Header from "@/components/Header";
import illustrationApp from "@/public/illustration_app.png";
import illustrationLaptop from "@/public/illustration-laptop-crop.png";
import illustrationResume from "@/public/illustration-resume-crop.png";
import illustrationGps from "@/public/illustration-gps-crop.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="center">
        <Header />
      </div>
      <div className="center">
        <div className={styles.grid}>
          <div className={clsx(styles.card, styles.description)}>
            <div>I&apos;m a designer and developer</div>
            <div>based in the Netherlands</div>
          </div>
          <div className={styles.card}>
            <Image
              fill={true}
              src={illustrationResume}
              alt="Resume illustration"
              placeholder="blur"
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTagList}></div>
              <div className={styles.cardTitle} style={{ color: "#274E81" }}>
                Resume
              </div>
            </div>
          </div>
          <Link href="/blog/tomtom-case-study">
            <div className={styles.card}>
              <Image
                fill={true}
                src={illustrationGps}
                alt="Experimentation at TomTom illustration"
                placeholder="blur"
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
          </Link>
          <div className={styles.card}>
            <Image
              fill={true}
              src={illustrationApp}
              alt="Podcast App illustration"
              placeholder="blur"
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
              src={illustrationLaptop}
              alt="Design exploration illustration"
              placeholder="blur"
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
