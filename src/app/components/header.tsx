


import React from "react";
import { Montserrat } from "next/font/google";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { PiTwitterLogoLight } from "react-icons/pi";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="w-full bg-[#252B42] flex flex-wrap items-center justify-between px-4 md:px-20 py-3">
      {/* Phone Section */}
      <div className="flex items-center gap-2 mb-3 md:mb-0">
        <BsTelephone className ="text-white w-5 h-5" />
        <p
          className={`font-bold text-[14px] text-white ${montserrat.className}`}
        >
          (225) 555-0118
        </p>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-2 mb-3 md:mb-0">
        <TfiEmail className="text-white w-5 h-5" />
        <p
          className={`${montserrat.className} font-bold text-white text-[14px] hover:underline`}
        >
          michelle.rivera@example.com
        </p>
      </div>

      {/* Follow Us and Social Media Section */}
      <div className="flex items-center gap-4">
        <p
          className={`${montserrat.className} font-bold text-white text-[14px] hover:underline`}
        >
          Follow Us:
        </p>
        <FaInstagramSquare className="text-white w-6 h-6 hover:text-gray-300" />
        <FaYoutube className="text-white w-6 h-6 hover:text-gray-300" />
        <FaFacebook className="text-white w-6 h-6 hover:text-gray-300" />
        <PiTwitterLogoLight className="text-white w-6 h-6 hover:text-gray-300" />
      </div>
    </div>
  );
};

export default Header;
