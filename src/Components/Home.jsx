import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Jobs></Jobs>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
