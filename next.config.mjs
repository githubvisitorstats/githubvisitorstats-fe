/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
