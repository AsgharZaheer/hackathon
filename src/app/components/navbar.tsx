
// top-[70px]

import React from 'react';
import { Montserrat } from "next/font/google";
import { GoChevronDown } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className=" z-50 sticky  bg-white  top-0 w-full h-[58px]  md:h-[70px] sm:h-[80px] my-8 mb-1">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20">
        {/* Logo Section */}
        <h1 className={`${montserrat.className} text-[24px] font-bold`}>Bandage</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-5">
            <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>
              Home
            </li>
            <li className={`${montserrat.className} font-medium text-[#737373] text-[14px] flex items-center`}>
              Shop
              <GoChevronDown className="ml-1" />
            </li>
            <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>
              About
            </li>
            <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>
              Blog
            </li>
            <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>
              Contact
            </li>
            <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>
              Pages
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <BiUser className="text-[#23A6F0] hover:text-xl" />
          <p className={`${montserrat.className} text-[#23A6F0] text-[14px] font-bold hover:underline`}>
            Login / Register
          </p>
          <CiSearch className="w-5 h-5 text-[#23A6F0]" />
          <BsCart2 className="w-5 h-5 text-[#23A6F0]" />
          <p className="text-[12px] text-[#23A6F0]">1</p>
          <CiHeart className="w-5 h-5 text-[#23A6F0]" />
          <p className="text-[12px] text-[#23A6F0]">1</p>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden  mt-2">
        <ul className="flex flex-col items-center gap-2 py-2">
          <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>Home</li>
          <li className={`${montserrat.className} font-medium text-[#737373] text-[14px] flex items-center`}>
            Shop
            <GoChevronDown className="ml-1" />
          </li>
          <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>About</li>
          <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>Blog</li>
          <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>Contact</li>
          <li className={`${montserrat.className} font-bold text-[#737373] text-[14px]`}>Pages</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
