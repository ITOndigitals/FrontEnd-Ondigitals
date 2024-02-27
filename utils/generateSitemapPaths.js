export default function generateSitemapPaths(array, getPriority) {
  const excludedUrls = [
    "/footer/",
    "/header/",
    "/vi/footer-tieng-viet/",
    "/vi/header-vi/",
    "/zh/footer-trung/",
    "/jp/footer-nhat/",
    "/kr/footer-han/",
    "/kr/trang-chu-han/",
    "/jp/trang-chu-nhat/",
    "/zh/homepagechina/",
    "/vi/trang-chu/",
    "/zh/header-trung/",
    "/jp/header-nhat/",
    "/kr/header-han/",
    "",
  ];
  const frontendUrl = "https://ondigitals.com";
  const items = array
    .filter((item) => !excludedUrls.includes(item.url))
    .map(
      (item) => `
        <url>
          <loc>${frontendUrl + item?.url}</loc>
          ${
            item?.post_modified_date
              ? `<lastmod>${
                  new Date(item?.post_modified_date).toISOString().split("T")[0]
                }</lastmod>`
              : ""
          }
          <changefreq>daily</changefreq>
          <priority>${Number(getPriority).toFixed(1)}</priority>
        </url>`
    );

  return items.join("");
}
