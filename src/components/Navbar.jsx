import React from "react";

const Navbar = () => {
  return (

    <>
    <nav className="w-full position-sticky bg-transparent text-white px-8 py-4 flex items-center justify-between shadow-lg">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
          P
        </div>
        <h1 className="text-2xl font-bold"> Park<span className="text-blue-500">Nova</span>
        </h1>
      </div>

 <div className="flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          Home
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          Find Parking
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          How It Works
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          Features
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          Pricing
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition duration-300">
          Contact
        </li>
      </ul>
 
      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-2xl font-semibold transition duration-300">
        Login / Sign Up
      </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;