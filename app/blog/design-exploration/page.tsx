import Image from "next/image";
import Article from "@/components/Article/Article";
import ArticleHeader from "@/components/Article/ArticleHeader";
import ArticleText from "@/components/Article/ArticleText";
import ArticleSubtitle from "@/components/Article/ArticleSubtitle";
import Header from "@/components/Header";
import illustrationLaptop from "@/public/illustration-laptop-blog.png";
import happyHomeowners from "@/public/happy-homeowners.png";
import collectorJerseyAuction from "@/public/collector-jersey-auction.png";

export default function DesignExploration() {
  return (
    <main>
      <div className="center">
        <Header />
      </div>
      <div className="center">
        <Article>
          <ArticleHeader
            image={illustrationLaptop}
            imageAlt="Design Exploration illustration"
            color="rgb(87 68 63)"
            title="Design Exploration"
          />
          <ArticleText>
            <ArticleSubtitle>Happy Homeowners</ArticleSubtitle>
            <p>Happy Homeowners is a french blog I&apos;ve redesigned.</p>
            <p>
              <a
                style={{ padding: "4px 0", marginTop: 4 }}
                className="link"
                href="https://www.figma.com/file/fJMeelBjUVF2iwsOPIqVxw/Nevatony?type=design&node-id=50%3A666&mode=design&t=Qkx5CE29ZZaOmNhj-1"
                target="_blank"
              >
                Figma design file
              </a>
            </p>
            <div
              style={{
                position: "relative",
                aspectRatio: "3024 / 2926",
                width: "100%",
                marginTop: 40,
              }}
            >
              <Image
                style={{ objectFit: "contain" }}
                fill={true}
                src={happyHomeowners}
                alt="Happy Homeowners"
              />
            </div>
            <ArticleSubtitle>Collector Jersey Auction</ArticleSubtitle>
            <p>
              A design exploration for a website auctionning collector sports
              jerseys.
            </p>
            <p>
              <a
                style={{ padding: "4px 0", marginTop: 4 }}
                className="link"
                href="https://www.figma.com/proto/rNNFqQ3ci9t3SK2QtHkgrF/MatchWornShirt?page-id=0%3A1&type=design&node-id=1-6&viewport=316%2C465%2C0.14&scaling=scale-down-width&starting-point-node-id=1%3A6&mode=design"
                target="_blank"
              >
                Figma prototype with video hero
              </a>
            </p>
            <div
              style={{
                position: "relative",
                aspectRatio: "1360 / 2492",
                width: "100%",
                marginTop: 40,
              }}
            >
              <Image
                style={{ objectFit: "contain", borderRadius: 20 }}
                fill={true}
                src={collectorJerseyAuction}
                alt="Collector Jersey Auction Website"
              />
            </div>
          </ArticleText>
        </Article>
      </div>
    </main>
  );
}
