"use client";

import { useState } from "react";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<"blogs" | "success">("blogs");

  return (
    <>
      <BlogHero activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "blogs" && <BlogList />}
    </>
  );
}
