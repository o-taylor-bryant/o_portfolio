// generate layout with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Taylor Bryant | Projects",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
