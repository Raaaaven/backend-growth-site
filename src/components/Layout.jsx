import Header from "../pages/header";
import Footer from "../pages/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
