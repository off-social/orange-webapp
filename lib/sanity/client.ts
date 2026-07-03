import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // Live API in dev avoids CDN lag right after publishing; CDN in production.
  useCdn: process.env.NODE_ENV === "production",
});
