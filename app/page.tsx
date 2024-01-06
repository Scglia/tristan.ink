import Image from "next/image";
import styles from "./page.module.css";
import { clsx } from "clsx";
import Header from "@/components/Header";
import illustrationLaptop from "@/public/illustration-laptop-crop.png";
import illustrationResume from "@/public/illustration-resume-crop.png";
import illustrationGps from "@/public/illustration-gps-crop.png";
import iphoneFrame from "@/public/iphone-frame.svg";
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
            <div>I&apos;m a developer and designer</div>
            <div>based in the Netherlands</div>
          </div>
          <a
            href="/Tristan Scaglia - Developer and designer.pdf"
            target="_blank"
          >
            <div
              style={{ "--animation-order": "1" } as any}
              className={styles.card}
            >
              <Image
                className={styles.cardBackground}
                fill={true}
                src={illustrationResume}
                alt="Resume illustration"
                placeholder="blur"
              />
              <div className={styles.cardContent}>
                <div className={styles.cardTagList}></div>
                <div className={styles.cardTitle} style={{ color: "#315b92" }}>
                  Resume
                </div>
              </div>
            </div>
          </a>
          <Link href="/blog/tomtom-case-study">
            <div
              className={styles.card}
              style={{ "--animation-order": "2" } as any}
            >
              <Image
                className={styles.cardBackground}
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
                <div className={styles.cardTitle} style={{ color: "#246b6b" }}>
                  Experimentation at TomTom
                </div>
              </div>
            </div>
          </Link>
          <Link href="/blog/podcast-app">
            <div
              className={styles.card}
              style={{ "--animation-order": "3" } as any}
            >
              <div
                style={{
                  background:
                    "linear-gradient(rgba(245, 222, 210, 1), rgba(225, 189, 168, 1))",
                }}
                className={clsx(
                  styles.animatedBackground,
                  styles.cardBackground
                )}
              >
                <div
                  style={{
                    height: "64%",
                    position: "relative",
                    aspectRatio: "12/25",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "3% 2px",
                      boxShadow:
                        "-21.378297805786133px 7.400180339813232px 15.622602462768555px -4.11121129989624px #AA8570, -44.401084899902344px 9.866907119750977px 36.17865753173828px -7.400180339813232px #CBA38B, -23.022783279418945px 3.288969039916992px 14.800360679626465px -7.400180339813232px rgba(123, 87, 66, 0.50), -100px 4px 114px 0px rgba(188, 145, 120, 0.70)",
                      borderRadius: "max(1.28475rem, 1.6vw)",
                    }}
                  ></div>
                  <Image
                    src={iphoneFrame}
                    alt="iPhone frame"
                    fill={true}
                    style={{ zIndex: 0 }}
                  />
                  <video
                    style={{
                      height: "100%",
                      width: "100%",
                      zIndex: 1,
                      position: "relative",
                      padding: "20% 0% 9% 0%",
                      borderRadius: "4px 4px max(26px, 2vw) max(26px, 2vw)",
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="https://res.cloudinary.com/sentiers-croises/video/upload/v1690207036/posecast-android-small.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              </div>
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
                <div className={styles.cardTitle} style={{ color: "#73503d" }}>
                  Podcast App
                </div>
              </div>
            </div>
          </Link>
          <Link href="/blog/design-exploration">
            <div
              className={styles.card}
              style={{ "--animation-order": "4" } as any}
            >
              <Image
                className={styles.cardBackground}
                fill={true}
                src={illustrationLaptop}
                alt="Design exploration illustration"
                placeholder="blur"
              />
              <div className={styles.cardContent}>
                <div className={styles.cardTagList}></div>
                <div className={styles.cardTitle} style={{ color: "#735b55" }}>
                  Design Exploration
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
