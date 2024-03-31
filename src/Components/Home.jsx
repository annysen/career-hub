import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
