import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
