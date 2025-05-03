import Footer from "@/components/Footer";

export const metadata = {
  title: "Taylor Bryant | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
