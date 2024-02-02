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
      // config slug contact language Vietnam
      {
        source: "/:locale/lien-he/:slug*",
        destination: "/:locale/contact/:slug*",
        locale: false,
      },
      {
        source: "/:locale/lien-he/",
        destination: "/:locale/contact/",
        locale: false,
      },
       // config slug about us language Vietnam
       {
        source: "/:locale/ve-chung-toi/:slug*",
        destination: "/:locale/about-us/:slug*",
        locale: false,
      },
      {
        source: "/:locale/ve-chung-toi/",
        destination: "/:locale/about-us/",
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
      "s3-alpha-sig.figma.com",
      "res.cloudinary.com",
      "scontent.cdninstagram.com",
    ],
  },
  i18n: i18nConfig,
  trailingSlash: true,
};
module.exports = nextConfig;
