import Hero from "@/components/home/Hero";
import { getPostsBySection } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Textile Printing Machine Manufacturer | Orange O Tec",
  description:
    "Orange O Tec builds Made-in-India digital textile printing machines. 600+ installations. Waterless sublimation and reactive printers, made in Surat.",
  path: "/",
});

export default async function Home() {
  const newsPosts = await getPostsBySection("news");

  return (
    <main>
      <Hero newsPosts={newsPosts} />
    </main>
  );
}
