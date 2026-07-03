import type { Metadata } from "next";

import { buildNewsEventsIndexMetadata } from "@/lib/sanity/metadata";
import {
  getFeaturedPostBySection,
  getPostsBySection,
} from "@/lib/sanity/queries";

import EventsPresence from "./EventsPresence";

export const metadata: Metadata = buildNewsEventsIndexMetadata();

export default async function NewsEventsPage() {
  const [newsPosts, featuredNews, successStories] = await Promise.all([
    getPostsBySection("news"),
    getFeaturedPostBySection("news"),
    getPostsBySection("success-stories"),
  ]);

  return (
    <EventsPresence
      newsPosts={newsPosts}
      featuredNews={featuredNews}
      successStories={successStories}
    />
  );
}
