/** @type {import('next').NextConfig} */
const path = require("path");
const i18nConfig = require("./i18n");
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
    rewrites = rewrites.concat(generateRewrites("vi", "lien-he", "contact"));
    rewrites = rewrites.concat(
      generateRewrites("vi", "ve-chung-toi", "about-us")
    );
    // Configurations for different paths and locales china
    rewrites = rewrites.concat(generateRewrites("zh", "dich-vu", "services"));
    rewrites = rewrites.concat(generateRewrites("zh", "lien-he", "contact"));
    rewrites = rewrites.concat(
      generateRewrites("zh", "ve-chung-toi", "about-us")
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
    // Configurations for different paths and locales korea
    rewrites = rewrites.concat(
      generateRewrites("kr", "%ec%84%9c%eb%b9%84%ec%8a%a4", "services")
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%ec%97%b0%eb%9d%bd%ed%95%98%eb%8b%a4",
        "contact"
      )
    );
    rewrites = rewrites.concat(
      generateRewrites(
        "kr",
        "%ed%9a%8c%ec%82%ac-%ec%86%8c%ea%b0%9c",
        "about-us"
      )
    );
      // Configurations for different paths and locales china
      rewrites = rewrites.concat(
        generateRewrites("zh", "%e6%9c%8d-%e5%8a%a1", "services")
      );
      rewrites = rewrites.concat(
        generateRewrites(
          "zh",
          "%e8%81%94%e7%b3%bb",
          "contact"
        )
      );
      rewrites = rewrites.concat(
        generateRewrites(
          "zh",
          "%e5%85%b3-%e4%ba%8e-%e6%88%91-%e4%bb%ac",
          "about-us"
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
      "scontent-hkg1-1.cdninstagram.com"
    ],
  },
  i18n: i18nConfig,
  trailingSlash: true,
};
module.exports = nextConfig;
