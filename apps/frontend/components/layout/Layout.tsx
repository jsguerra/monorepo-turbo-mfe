import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <span>Site Logo</span>
      </header>
      <main>{children}</main>
      <footer>
        <p>Site Footer</p>
      </footer>
    </>
  );
};

export default Layout;
