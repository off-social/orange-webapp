import { staticPageSeo } from "@/data/seo/pages";
import Hero from "@/components/home/Hero";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { getPostsBySection } from "@/lib/sanity/queries";

export const metadata = buildPageMetadata(staticPageSeo.home);

export default async function Home() {
  const newsPosts = await getPostsBySection("news");

  return (
    <main>
      <Hero newsPosts={newsPosts} />
    </main>
  );
}
