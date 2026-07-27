import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Orange O Tec | Digital Textile Printers, Surat",
  description:
    "Contact Orange O Tec in Surat for digital textile printing machines. Book a consultation or request a quote. Call +91 74860 32990.",
  path: "/contact/",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
