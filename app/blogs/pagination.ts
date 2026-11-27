/** Posts per Insights listing page (/blogs/ and /blogs/page/N/). */
export const ITEMS_PER_PAGE = 6;

/** URL of a blog listing page: /blogs/ for page 1, /blogs/page/N/ after. */
export function blogPageHref(page: number): string {
  return page <= 1 ? "/blogs/" : `/blogs/page/${page}/`;
}
