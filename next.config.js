/** @type {import('next').NextConfig} */
const path = require("path");
const i18nConfig = require("./src/pages/i18n");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:locale/bai-viet/:slug*",
        destination: "/:locale/blog/:slug*",
        locale: false,
      },
      {
        source: "/:locale/bai-viet/",
        destination: "/:locale/blog/",
        locale: false,
      },
      {
        source: "/:locale/%E5%8D%9A%E5%AE%A2/",
        destination: "/:locale/blog/",
        locale: false,
      },
    ];
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "api.ondigitals.com",
      "kimlongdiep.com",
      "s3-alpha-sig.figma.com",
      "res.cloudinary.com"
    ],
  },
  i18n: i18nConfig,
  trailingSlash: true,
};
module.exports = nextConfig;
