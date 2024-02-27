import getSitemapPageUrls from "../../../lib/getSitemapPageUrls";
import getTotalCounts from "../../../lib/getTotalCounts";
import generateSitemapPaths from "../../../utils/generateSitemapPaths";

const SitemapTagPage = () => {
  return null;
};
export async function getServerSideProps({ res, params: { slug } }) {
  let isXml = slug.endsWith(".xml");
  if (!isXml) {
    return {
      notFound: true,
    };
  }
  let getPriority = slug.includes("page")
    ? 1.0
    : slug.includes("service")
    ? 0.9
    : 0.8;

  let slugArray = slug.replace(".xml", "").split("_");
  if (slugArray.length >= 3) {
    slugArray = [
      slugArray.slice(0, -1).join("_"),
      slugArray[slugArray.length - 1],
    ];
  }
  let type = slugArray[0];
  let pageNo = slugArray[1]?.match(/(\d+)/)[0] ?? null;
  let page = pageNo ? parseInt(pageNo) : null;
  let possibleTypes = await getTotalCounts();
  if (!possibleTypes.some((e) => e.name === type)) {
    return {
      notFound: true,
    };
  }
  let pageUrls = await getSitemapPageUrls({ type, page });
  if (!pageUrls?.length) {
    return {
      notFound: true,
    };
  }
  let sitemapOds = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${generateSitemapPaths(pageUrls, getPriority)}
  </urlset>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.write(sitemapOds);
  res.end();
  return { props: {} };
}
export default SitemapTagPage;
