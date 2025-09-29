import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Optimizaciones para SEO
  compress: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
  // Configuración de imágenes para mejor rendimiento
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ikizen.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**", // permite cualquier path
      },
    ],
    minimumCacheTTL: 60,
  },

  // Configuración para MDX
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Headers para SEO y seguridad
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirecciones para SEO
  async redirects() {
    return [
      // Redirecciones de URLs comunes
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Opciones de MDX
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
