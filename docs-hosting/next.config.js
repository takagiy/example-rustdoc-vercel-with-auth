/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/rustdoc/example_rustdoc_vercel_with_auth/index.html",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
