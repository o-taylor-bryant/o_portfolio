import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Taylor Bryant | Customer Support & Technology Professional",
  description:
    "Profile of Taylor Bryant — a customer support and technology professional with six years of customer-facing experience. Seeking customer support, SaaS support, onboarding, and operations roles.",
  metadataBase: new URL("https://otaylorbryant.vercel.app/"),
  keywords:
    "customer support, SaaS support, product support, onboarding specialist, operations support, technical support, Taylor Bryant, Chattanooga",
  openGraph: {
    title: "Taylor Bryant | Customer Support & Technology Professional",
    description:
      "Profile of Taylor Bryant — customer support and technology professional with six years of customer-facing experience.",
    url: "https://otaylorbryant.vercel.app/",
    siteName: "Taylor Bryant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image/me.jpg",
        width: 1200,
        height: 1200,
        alt: "Taylor Bryant — Customer Support & Technology Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Bryant | Customer Support & Technology Professional",
    description:
      "Customer support and technology professional with six years of customer-facing experience.",
    images: ["/image/me2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taylor Bryant",
  url: "https://otaylorbryant.vercel.app/",
  jobTitle: "Customer Support and Technology Professional",
  description:
    "Customer support and technology professional with six years of customer-facing, analytical, and detail-driven experience. Skilled in issue resolution, documentation, onboarding support, and technical troubleshooting.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattanooga",
    addressRegion: "TN",
    addressCountry: "US",
  },
  email: "o.taylor.bryant@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/o-taylor-bryant/",
    "https://github.com/o-taylor-bryant",
  ],
  knowsAbout: [
    "Customer Support",
    "SaaS Support",
    "Onboarding",
    "Technical Support",
    "Documentation",
    "Issue Resolution",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ClientTopProgressBar />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
