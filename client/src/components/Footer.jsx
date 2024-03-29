import React from "react";
import Links from "./Links";

import logo from "../../images/Dracoin_head.png";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
            <Links />
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">
          Experience the difference
        </p>
        <p className="text-white text-sm text-center font-medium mt-2">
          Email: asm13august95@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
