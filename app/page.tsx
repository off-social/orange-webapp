import Hero from "@/components/home/Hero";
import { getPostsBySection } from "@/lib/sanity/queries";

export default async function Home() {
  const newsPosts = await getPostsBySection("news");

  return (
    <main>
      <Hero newsPosts={newsPosts} />
    </main>
  );
}
