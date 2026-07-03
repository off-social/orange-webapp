export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatBlogMeta(iso: string, readTime: number): string {
  const minutes = Math.max(1, Math.round(readTime));
  const label = minutes === 1 ? "1 min read" : `${minutes} min read`;
  return `${formatBlogDate(iso)}  •  ${label}`;
}
