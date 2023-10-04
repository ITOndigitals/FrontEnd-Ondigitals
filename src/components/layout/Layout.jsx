import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, className }) => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

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
