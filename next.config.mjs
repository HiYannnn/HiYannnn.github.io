/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
    },
/**     images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hiyannnn.github.io',
        },
      ],
    },*/
};
export default nextConfig;  