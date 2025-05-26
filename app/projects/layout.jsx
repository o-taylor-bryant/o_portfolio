// generate layout with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Taylor Bryant | Projects",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
