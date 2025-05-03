import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Taylor Bryant | Portfolio",
  description: "Portfolio of Taylor Bryant, an entry-level tech professional.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
