import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Permissive first-pass CSP for a static content site.
 * 'unsafe-inline' covers the theme init script + JSON-LD in app/layout.tsx.
 * 'unsafe-eval' is dev-only for Next.js HMR.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // App Platform serves HTTPS; HSTS is safe for production traffic.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Canonical host is www (see content/seo.ts siteUrl). Apex → www, permanent.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "traviskessler.com" }],
        destination: "https://www.traviskessler.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
