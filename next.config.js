const path = require("path");

module.exports = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/team_images/**", // Pattern for team images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/project_banners/**", // Pattern for project banners
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/other_images/**", // Pattern for other images (example)
      },
    ],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  optimizeFonts: false,
};
