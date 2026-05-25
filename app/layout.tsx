import type { Metadata } from "next";
import { Stack_Sans_Headline, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orange",
  description: "End-to-end digital textile printing solutions from high-speed sublimation to direct-to-fabric systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
