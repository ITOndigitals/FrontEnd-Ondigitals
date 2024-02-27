import getTotalCounts from "../../lib/getTotalCounts";
import getSitemapPages from "../../utils/getSitemapPages";
import { wordpressUrl } from "../../utils/variables";

export default function SitemapIndexPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    const response = await fetch(
      `https://api.ondigitals.com/wp-json/sitemap/v1/totalpages`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (!data) {
      throw new Error("No data available");
    }

    const propertyNames = Object.keys(data);
    const excludeItems = [
      "user",
      "card_review",
      "blogs_content",
      "case_study",
      "client",
      "tag",
      "category",
      "service_parent",
    ];

    const totalArray = propertyNames
      .filter((name) => !excludeItems.includes(name))
      .map((name) => {
        return { name, total: data[name] };
      });
    if (!totalArray || totalArray.length === 0) {
      throw new Error("No data available");
    }

    const sitemapIndex = `<?xml version='1.0' encoding='UTF-8'?>
      <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>http://localhost:3000/sitemapnextjs.xml</loc>
        </sitemap>
        ${totalArray.map((item) => getSitemapPages(item)).join("")}
      </sitemapindex>`;

    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=600, stale-while-revalidate=600"
    );
    res.write(sitemapIndex);
    res.end();

    return { props: {} };
  } catch (error) {
    res.statusCode = 500;
    res.write("Error generating sitemap: " + error.message);
    res.end();
    return { props: {} };
  }
}
