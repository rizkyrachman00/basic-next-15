import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-3xl">Navbar Root</h1>
      {children}
    </>
  );
};

export default Layout;
