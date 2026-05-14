import React from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (

    <>
      <nav className="w-full fixed left-0 top-0 bg-transparent text-white px-8 py-4 flex items-center justify-between z-50">

        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <img src={Logo} alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold"> Park<span className="text-blue-500">Nova</span>
          </h1>
        </div>
        <div className="flex justify-end gap-4">

          <div className="hidden lg:flex items-center">
            <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">

              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >  Home
                </a>
              </li>

              <li>
                <a
                  href="/find-parking"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Find Parking
                </a>
              </li>

              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-blue-500 transition duration-300"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/features"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>

          </div>
          <button className="bg-blue-600  hover:bg-blue-700 px-5 py-2 text-sm  rounded-2xl font-semibold transition duration-300">
            Login / Sign Up
          </button>
          <button className="lg:hidden text-3xl">
            <FiMenu />
          </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;