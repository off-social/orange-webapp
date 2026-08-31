export const SITE_NAME = "Orange O Tec";

export function getSiteUrl(): string {
  const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  return base || "https://orangeotec.com";
}
