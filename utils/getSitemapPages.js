import { sitemapPerPage } from "./variables";

export default function getSitemapPages(item) {
  const items = [];
  for (let i = 1; i <= Math.ceil(item.total / sitemapPerPage); i++) {
    let url = `https://ondigitals.com/sitemap/${item.name}_sitemap${i}.xml`;
    items.push(
      ` 
        <sitemap>
           <loc>
              ${url}
          </loc>
      </sitemap>
      `
    );
  }
  return items.join("");
}
