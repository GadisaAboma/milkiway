const path = require("path");

module.exports = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "http", // Change this to "http" if you're using localhost without HTTPS
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/team_images/**", // Adjust the pathname as needed
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // images: {
  //   loader: "akamai",
  //   path:
  //     process.env.NODE_ENV === "production"
  //       ? "https://abev-react.envytheme.com"
  //       : "http://localhost:3000",
  // },
  optimizeFonts: false,
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http", // Change this to "http" if you're using localhost without HTTPS
//         hostname: "localhost",
//         port: "8000",
//         pathname: "/storage/team_images/**", // Adjust the pathname as needed
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
