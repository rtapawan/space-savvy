/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/space-savvy/src/app",
  output: "export",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spacexpatchlist.space",
        port: "",
      },
      {
        protocol: "http",
        hostname: "spacexpatchlist.space",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "i.imgur.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
