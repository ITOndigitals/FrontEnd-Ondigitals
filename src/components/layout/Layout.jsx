import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </div>
  );
};

export default Layout;
