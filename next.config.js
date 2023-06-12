module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.englishtown.edu.vn", "lms-admin.englishtown.edu.vn", "erp.englishtown.edu.vn", "erp.hhddkk"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://englishtown.edu.vn/",
      },
    ],
  },
  useFileSystemPublicRoutes: true,
  compiler: {
    styledComponents: true
  }
};
