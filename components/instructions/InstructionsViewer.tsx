"use client";

import dynamic from "next/dynamic";

// pdf.js touches browser globals, so the viewer loads only on the client.
const InstructionsDocument = dynamic(
  () => import("./InstructionsDocument"),
  { ssr: false },
);

export default function InstructionsViewer() {
  return <InstructionsDocument />;
}
