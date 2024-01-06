import Article from "@/components/Article/Article";
import ArticleHeader from "@/components/Article/ArticleHeader";
import ArticleIntro from "@/components/Article/ArticleIntro";
import ArticleText from "@/components/Article/ArticleText";
import ArticleSubtitle from "@/components/Article/ArticleSubtitle";
import Header from "@/components/Header";
import illustrationApp from "@/public/illustration-app-blog.png";

export default function PodcastApp() {
  return (
    <main>
      <div className="center">
        <Header />
      </div>
      <div className="center">
        <Article>
          <ArticleHeader
            image={illustrationApp}
            imageAlt="Podcast App illustration"
            color="rgb(78, 53, 39)"
            title="Podcast App"
            tags={["UI Design", "React"]}
          />
          <ArticleText>
            <ArticleIntro>
              Posecast is a mobile app that allows users to listen to their
              favorite podcasts via RSS. It was built to practice React and
              mobile UI design as well as touch animations.
            </ArticleIntro>
            <p>And also because I love podcasts.</p>
            <ArticleSubtitle>Try it out!</ArticleSubtitle>
            <p>
              <i>
                This app is a work in progress. The player queue is currently
                there as an example.
              </i>
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: 400,
                height: "min(90dvh, 800px)",
                margin: "auto",
                padding: "40px 24px",
                textAlign: "center",
              }}
            >
              <iframe
                style={{ border: "none", borderRadius: 24 }}
                src="https://posecast.vercel.app/"
                width="100%"
                height="100%"
              />
              <a
                style={{ padding: 4, marginTop: 4 }}
                className="link"
                href="https://posecast.vercel.app/"
                target="_blank"
              >
                Open in a new window
              </a>
            </div>
            <ArticleSubtitle>External links</ArticleSubtitle>
            <p>
              <a
                style={{ padding: "4px 0", marginTop: 4 }}
                className="link"
                href="https://www.figma.com/file/7WfCGtQwL5RRg1rqBbqZqo/Posecast?type=design&node-id=588-1274&mode=design"
                target="_blank"
              >
                Figma design file
              </a>
              <br />
              <a
                style={{ padding: "4px 0", marginTop: 4 }}
                className="link"
                href="https://github.com/scglia/posecast"
                target="_blank"
              >
                Code on Github
              </a>
            </p>
          </ArticleText>
        </Article>
      </div>
    </main>
  );
}
