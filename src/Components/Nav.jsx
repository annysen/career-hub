import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center ">
      <NavLink to="/">
        <h1 className="text-2xl font-bold">CareerHub</h1>
      </NavLink>

      <div className=" hidden md:flex justify-between items-center">
        <NavLink className="mx-5 text-gray-600" to="/statistics">
          Statistics
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/jobs">
          Applied Jobs
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/blogs">
          Blogs
        </NavLink>
      </div>

      <button className="btn-primary hidden md:flex">Star Applying</button>

      {/* mobile nav  */}

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-violet-500" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-violet-500 ">
              <div className=" flex items-center justify-between mb-4">
                <Link className="text-white font-bold text-2xl">
                  Career Hub
                </Link>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon>
                </button>
              </div>
              <nav className=" flex flex-col gap-5">
                <NavLink className=" text-white" to="/statistics">
                  Statistics
                </NavLink>
                <NavLink className=" text-white" to="/jobs">
                  Applied Jobs
                </NavLink>
                <NavLink className="text-white" to="/blog">
                  Blog
                </NavLink>
                <div className=" justify-center">
                  <button className="  btn-primary">Star Applying</button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
