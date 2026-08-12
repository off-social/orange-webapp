import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ConsultationProvider } from "@/data/ConsultationContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { Architects_Daughter, Stack_Sans_Headline } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-6GDQT9SGY9";

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
  metadataBase: new URL("https://orangeotec.com"),
  title: "Orange O Tec | Digital Textile Printing Machine Manufacturer",
  description:
    "End-to-end digital textile printing solutions from high-speed sublimation to direct-to-fabric systems.",
  alternates: {
    canonical: "./",
  },
  verification: {
    google: "r8s94ElMsPYZ7xVn0aqReaCHlFBCQveH3q1b1S1RRlM",
  },
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

        {/* Google Analytics (gtag.js). afterInteractive keeps it out of the
            critical path, so it never delays first paint. GA4 picks up
            client-side route changes on its own via history events, so page
            views need no extra wiring. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
