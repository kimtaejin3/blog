const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  webpack(config) {
    config.cache = false;
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
