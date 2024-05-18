/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // setting default page
      {
        source: "/(user-layout)",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "scontent.fhan20-1.fna.fbcdn.net",
      "scontent.cdninstagram.com",
      "instagram.fhan2-3.fna.fbcdn.net",
    ],
  },
};

export default nextConfig;
