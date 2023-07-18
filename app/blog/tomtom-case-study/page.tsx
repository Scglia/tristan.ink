import Article from "@/components/Article/Article";
import ArticleHeader from "@/components/Article/ArticleHeader";
import ArticleIntro from "@/components/Article/ArticleIntro";
import ArticleText from "@/components/Article/ArticleText";
import ArticleSubtitle from "@/components/Article/ArticleSubtitle";
import Header from "@/components/Header";
import illustrationGps from "@/public/illustration-gps-blog.png";

export default function TomTomCaseStudy() {
  return (
    <main>
      <div className="center">
        <Header />
      </div>
      <div className="center">
        <Article>
          <ArticleHeader
            image={illustrationGps}
            imageAlt="Experimentation at TomTom illustration"
            color="#165252"
            title="Experimentation at TomTom"
            tags={["UX Case Study"]}
          />
          <ArticleText>
            <ArticleIntro>
              At TomTom, I was part of a team that was responsible for improving
              the user experience of the website. We used A/B testing to
              validate our ideas and measure the impact of our changes.
            </ArticleIntro>
            <p>
              But before making any changes, we have to find out what needs
              improvement.
            </p>
            <ArticleSubtitle>The problem</ArticleSubtitle>
            <p>
              Based on a poll on our website, it was discovered that a
              significant number of users were having difficulty updating their
              device. The problem was primarily attributed to two main factors:
            </p>
            <p style={{ paddingLeft: 24 }}>
              <b>1. Log-in barrier</b>
              <br />
              The best option to direct the user towards the updating path
              that&apos;s relevant to them is to log-in. However the transition
              from their landing page to the login screen was abrupt and not
              intuitive. A significant amount of users would try to find another
              way to update or give up entirely.
            </p>
            <p style={{ paddingLeft: 24 }}>
              <b>2. Disparate Landing Pages</b>
              <br />
              Users searching for the update feature were landing on different
              pages, namely the homepage, shop, and the &quot;How to
              update&quot; support page. This inconsistency made it challenging
              for users to find the update option they needed.
            </p>
            <ArticleSubtitle>The solutions</ArticleSubtitle>
            <p>
              To address the problem, the following solutions were proposed:
            </p>
            <p style={{ paddingLeft: 24 }}>
              <b>1. Add a &quot;Login to Update&quot; button</b>
              <br />A &quot;Login to Update&quot; button was added to both the
              shop and support pages. By placing this button prominently on
              these pages, users could easily locate the update feature and were
              informed of the necessity of login-in to update their device.
            </p>
            <p style={{ paddingLeft: 24 }}>
              <b>2. Prominence on the front page</b>
              <br />
              To further improve discoverability, the device update option was
              given more prominence on the front page. Careful consideration was
              given to ensure that this change did not negatively impact clicks
              or sales on other important items on the website.
            </p>
            <p style={{ paddingLeft: 24 }}>
              <b>3. Red Badge in the main menu</b>
              <br />A red badge was added to the update menu for users already
              logged-in. This badge served as a visual cue for users, drawing
              their attention to the relevant update option and encouraging them
              to take action.
            </p>
            <ArticleSubtitle>Results</ArticleSubtitle>
            <p>
              The solutions were A/B tested individually and implemented. They
              led to notable improvements in the user experience of our website.
              More users logged-in to update their device and fewer strayed from
              the happy path.
            </p>
          </ArticleText>
        </Article>
      </div>
    </main>
  );
}
