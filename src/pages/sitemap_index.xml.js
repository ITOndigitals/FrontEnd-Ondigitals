import getTotalCounts from "../../lib/getTotalCounts";
import getSitemapPages from "../../utils/getSitemapPages";

export default function SitemapIndexPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  const details = await getTotalCounts();
  if (!details || details.length === 0) {
    throw new Error("No data available");
  }
  const sitemapIndexOds = `<?xml version='1.0' encoding='UTF-8'?>
      <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>http://localhost:3000/sitemapnextjs.xml</loc>
        </sitemap>
        ${details.map((item) => getSitemapPages(item)).join("")}
      </sitemapindex>`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemapIndexOds);
  res.end();
  return { props: {} };
}
