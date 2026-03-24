/**
 * Canonical site URL for metadata, sitemap, and robots.
 * On Vercel, `VERCEL_URL` is set automatically. Override with `NEXT_PUBLIC_SITE_URL` for a custom domain.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
