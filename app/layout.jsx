import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Taylor Bryant | Portfolio",
  description: "Portfolio of Taylor Bryant, a junior tech professional.",
  metadataBase: new URL("https://otaylorbryant.vercel.app/"),
  keywords:
    "junior tech professional, cybersecurity, incident response, network security, system hardening, Taylor Bryant, portfolio",
  openGraph: {
    title: "Taylor Bryant | Portfolio",
    description: "Portfolio of Taylor Bryant, a junior tech professional.",
    url: "https://otaylorbryant.vercel.app/",
    siteName: "Taylor Bryant Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Portfolio Image.png",
        width: 1200,
        height: 1200,
        alt: "Welcome to Taylor Bryant's Portfolio!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Bryant | Portfolio",
    description: "Portfolio of Taylor Bryant, a junior tech professional.",
    images: ["/me2.png"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
};

// Add structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taylor Bryant",
  url: "https://otaylorbryant.vercel.app/",
  jobTitle: "Junior Tech Professional",
  description:
    "Junior tech professional with experience in cybersecurity, incident response, and network security.",
  skills: [
    "Cybersecurity",
    "Incident Response",
    "Network Security",
    "System Hardening",
  ],
  image: "/profile-image.jpg", // Add your profile image
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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
