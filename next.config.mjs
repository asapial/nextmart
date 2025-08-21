/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

// {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//       },
//     ],
//   },
// }

export default nextConfig;
