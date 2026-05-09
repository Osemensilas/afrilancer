/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5067",
        pathname: "/uploads/**",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "5067",
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;