import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ConsultationProvider } from "@/data/ConsultationContext";
import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { getSiteUrl } from "@/lib/seo/site";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { Architects_Daughter, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";

const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-architects-daughter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...buildPageMetadata(staticPageSeo.home),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ConsultationProvider>
            <Navbar />
            <div style={{ paddingTop: "59px" }}>{children}</div>
            <Footer />
            <ConsultationModal />
          </ConsultationProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
