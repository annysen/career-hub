import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <h1>CareerHub</h1>

      <div className=" hidden md:flex justify-between items-center">
        <NavLink className="mx-5 text-gray-600" to="/statistics">
          Statistics
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/jobs">
          Applied Jobs
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/blog">
          Blog
        </NavLink>
      </div>

      <button className="border bg-blue-300 text-white font-bold px-5 py-3 rounded-md">
        Star Applying
      </button>

      {/* mobile nav  */}

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-blue-500 ">
              <div className=" flex items-center justify-between mb-4">
                <Link className="text-white font-bold">Career Hub</Link>
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
                <div className="flex justify-center">
                  <button className="  border bg-blue-300 text-white font-bold px-5 py-3 rounded-md">
                    Star Applying
                  </button>
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
