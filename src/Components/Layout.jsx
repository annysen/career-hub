import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Home></Home>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
