/** @type {import('next').NextConfig} */

// When building for GitHub Pages we export a fully static site served from a
// project subpath (https://<user>.github.io/<repo>/). Locally / in preview,
// none of this applies so the app still works from the root.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        basePath: repoBasePath,
        assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
      }),
};

export default nextConfig;
