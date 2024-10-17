/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/githubvisitorstats.github.io",
  assetPrefix: "/githubvisitorstats.github.io/",
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
