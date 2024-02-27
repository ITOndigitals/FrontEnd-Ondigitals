import React from "react";
import * as fs from "fs";
import path from "path";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://ondigitals.com";
  const pagesDir = path.join(process.cwd(), "src/pages");

  const staticPaths = fs
    .readdirSync(pagesDir)
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "[slug].js",
        "sitemap_index.xml.js",
        "sitemapnextjs.xml.js",
        "index.js",
        "case-study",
        "sitemap",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const dynamicPaths = [
    `${BASE_URL}/vi/`,
    `${BASE_URL}/zh/`,
    `${BASE_URL}/jp/`,
    `${BASE_URL}/kr/`,
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
