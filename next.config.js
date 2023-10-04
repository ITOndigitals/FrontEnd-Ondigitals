/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "api.ondigitals.com",
      "kimlongdiep.com",
      "s3-alpha-sig.figma.com",
    ],
},
}
module.exports = nextConfig
