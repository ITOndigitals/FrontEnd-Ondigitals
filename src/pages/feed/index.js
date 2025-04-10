import RSS from "rss";
import { getPostsForRSS } from "../api/graphql";

export async function getServerSideProps({ res }) {
  const posts = await getPostsForRSS();

  const feed = new RSS({
    title: "Ondigitals Blog",
    description: "Articles and knowledge from On Digitals",
    feed_url: "https://ondigitals.com/feed",
    site_url: "https://ondigitals.com",
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post.id,
      url: `https://ondigitals.com${post.uri}`,
      description: post.excerpt || "",
      date: new Date(post.date),
      author: post.author?.node?.name || "Ondigitals",
      categories: post.categories?.nodes.map((c) => c.name),
      enclosure: post.featuredImage?.node?.sourceUrl
        ? {
            url: post.featuredImage.node.sourceUrl,
            type: "image/jpeg",
          }
        : undefined,
    });
  });

  res.setHeader("Content-Type", "application/xml");
  res.write(feed.xml({ indent: true }));
  res.end();

  return { props: {} };
}

export default function EmptyFeed() {
  return null;
}
