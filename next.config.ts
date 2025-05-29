/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: { module: { rules: { test: RegExp; use: string[] }[] } }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: false,
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_INSTAGRAM_API_URL: process.env.NEXT_PUBLIC_INSTAGRAM_API_URL,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL:
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    NEXT_PUBLIC_TELEGRAM_BOT_TOKEN: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN,
    NEXT_PUBLIC_TELEGRAM_FEEDBACK_CHAT_ID:
      process.env.NEXT_PUBLIC_TELEGRAM_FEEDBACK_CHAT_ID,
    NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
