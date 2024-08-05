/** @type {import('next').NextConfig} */
const path = require("path");
const i18nConfig = require("./i18n");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
function generateRewrites(locale, sourcePath, destinationPath) {
  return [
    {
      source: `/:locale/${sourcePath}/:slug*`,
      destination: `/:locale/${destinationPath}/:slug*`,
      locale: false,
    },
    {
      source: `/:locale/${sourcePath}/`,
      destination: `/:locale/${destinationPath}/`,
      locale: false,
    },
  ];
}
const nextConfig = {
  async rewrites() {
    let rewrites = [];

    // Configurations for different paths and locales vietnam
    rewrites = rewrites.concat(
      generateRewrites("vi", "tin-tuc", "digital-news")
    );
    rewrites = rewrites.concat(generateRewrites("vi", "dich-vu", "services"));
    rewrites = rewrites.concat(generateRewrites("vi", "du-an", "case-study"));
    rewrites = rewrites.concat(generateRewrites("vi", "lien-he", "contact"));
    rewrites = rewrites.concat(
      generateRewrites("vi", "ve-chung-toi", "about-us")
    );
    rewrites = rewrites.concat(
      generateRewrites("vi", "chinh-sach-du-lieu", "data-policy")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "vi",
        "quy-tac-dao-duc-trong-digital-marketing",
        "codes-of-ethnics"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites("vi", "cac-nhom-nganh", "industries")
    );
    // Configurations for different paths and locales japan
    rewrites = rewrites.concat(
      generateRewrites("jp", "%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9", "services")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "jp",
        "%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b",
        "contact"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites("jp", "%e4%bc%9a%e7%a4%be%e6%a6%82%e8%a6%81", "about-us")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "jp",
        "%e3%82%b1%e3%83%bc%e3%82%b9%e3%82%b9%e3%82%bf%e3%83%87%e3%82%a3",
        "case-study"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "jp",
        "%e3%83%87%e3%83%bc%e3%82%bf%e3%83%9d%e3%83%aa%e3%82%b7%e3%83%bc-%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6",
        "data-policy"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "jp",
        "%e3%83%87%e3%82%b8%e3%82%bf%e3%83%ab-%e3%83%9e%e3%83%bc%e3%82%b1%e3%83%86%e3%82%a3%e3%83%b3%e3%82%b0-%e3%81%ae-%e5%80%ab%e7%90%86-%e8%a6%8f%e5%ae%9a",
        "codes-of-ethnics"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "jp",
        "%e7%a7%81%e3%81%9f%e3%81%a1%e3%81%8c%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e3%82%92%e6%8f%90%e4%be%9b%e3%81%99%e3%82%8b%e6%a5%ad%e7%95%8c",
        "industries"
      )
    );
    // Configurations for different paths and locales korea
    rewrites = rewrites.concat(
      generateRewrites("kr", "%ec%84%9c%eb%b9%84%ec%8a%a4", "services")
    );
    rewrites = rewrites.concat(
      generateRewrites("kr", "%ec%97%b0%eb%9d%bd%ed%95%98%eb%8b%a4", "contact")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%ec%82%ac%eb%a1%80-%ec%97%b0%ea%b5%ac",
        "case-study"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%ed%9a%8c%ec%82%ac-%ec%86%8c%ea%b0%9c",
        "about-us"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%eb%8d%b0%ec%9d%b4%ed%84%b0-%ec%a0%95%ec%b1%85-%ec%a0%95%eb%b3%b4",
        "data-policy"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%eb%94%94%ec%a7%80%ed%84%b8-%eb%a7%88%ec%bc%80%ed%8c%85-%eb%af%bc%ec%a1%b1-%ec%bd%94%eb%93%9c",
        "codes-of-ethnics"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%ec%9a%b0%eb%a6%ac%ea%b0%80-%ec%84%9c%eb%b9%84%ec%8a%a4%ed%95%98%eb%8a%94-%ec%82%b0%ec%97%85",
        "industries"
      )
    );
    // Configurations for different paths and locales china
    rewrites = rewrites.concat(
      generateRewrites("zh", "%e6%9c%8d-%e5%8a%a1", "services")
    );
    rewrites = rewrites.concat(
      generateRewrites("zh", "%e8%81%94%e7%b3%bb", "contact")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "zh",
        "%E6%A1%88%E4%BE%8B%E5%88%86%E6%9E%90",
        "case-study"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "zh",
        "%e5%85%b3-%e4%ba%8e-%e6%88%91-%e4%bb%ac",
        "about-us"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "zh",
        "%e6%95%b0-%e6%8d%ae-%e6%94%bf-%e7%ad%96",
        "data-policy"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "zh",
        "%e6%95%b0-%e5%ad%97-%e8%90%a5-%e9%94%80-%e9%81%93-%e5%be%b7-%e5%87%86-%e5%88%99",
        "codes-of-ethnics"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "zh",
        "%e8%a1%8c%e4%b8%9a%e5%ba%94%e7%94%a8",
        "industries"
      )
    );
    return rewrites;
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "api.ondigitals.com",
      "scontent.cdninstagram.com",
      "scontent-hkg1-2.cdninstagram.com",
      "scontent-hkg4-1.cdninstagram.com",
      "scontent-hkg1-1.cdninstagram.com",
      "images.dmca.com",
    ],
  },
  i18n: i18nConfig,
  trailingSlash: true,
};
module.exports = withBundleAnalyzer(nextConfig);
