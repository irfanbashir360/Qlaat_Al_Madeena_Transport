/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

export default nextConfig;
