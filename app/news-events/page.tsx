import type { Metadata } from "next";

import { buildNewsEventsIndexMetadata } from "@/lib/sanity/metadata";
import {
  getFeaturedPostBySection,
  getPostsBySection,
} from "@/lib/sanity/queries";

import EventsPresence from "./EventsPresence";

export const metadata: Metadata = buildNewsEventsIndexMetadata();

export default async function NewsEventsPage() {
  const [newsPosts, featuredNews] = await Promise.all([
    getPostsBySection("news"),
    getFeaturedPostBySection("news"),
  ]);

  return (
    <EventsPresence
      newsPosts={newsPosts}
      featuredNews={featuredNews}
    />
  );
}
