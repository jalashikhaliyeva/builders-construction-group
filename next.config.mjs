// import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bcgadmin.markup.az"],
  },
  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: "az",
    // localePath: path.resolve('./locales')
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["bcgadmin.markup.az"],
//   },
// };

// export default nextConfig;