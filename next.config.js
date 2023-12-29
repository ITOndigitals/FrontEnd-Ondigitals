/** @type {import('next').NextConfig} */
const path = require("path");
const i18nConfig = require("./i18n");

const nextConfig = {
  async rewrites() {
    return [
      // config slug posts language Vietnam
      {
        source: "/:locale/tin-tuc/:slug*",
        destination: "/:locale/digital-news/:slug*",
        locale: false,
      },
      {
        source: "/:locale/tin-tuc/",
        destination: "/:locale/digital-news/",
        locale: false,
      },
      // config slug service language Vietnam
      {
        source: "/:locale/dich-vu/:slug*",
        destination: "/:locale/services/:slug*",
        locale: false,
      },
      {
        source: "/:locale/dich-vu/",
        destination: "/:locale/services/",
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
      "res.cloudinary.com",
    ],
  },
  i18n: i18nConfig,
  trailingSlash: true,
};
module.exports = nextConfig;
