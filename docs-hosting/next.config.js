/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/rustdoc/example_rustdoc_vercel_with_auth/index.html",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
