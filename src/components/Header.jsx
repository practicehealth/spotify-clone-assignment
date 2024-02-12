import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Button from "./Button";
import SearchText from "./SearchText";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = ({activeMenu, setActiveMenu}) => {
  const { pathname } = useLocation();

  return (
    <header className="bg-black px-8 py-2">
      <div className="flex justify-between sticky top-0 z-10">
        <div className="flex items-center gap:3 sm:gap-5  text-[#9f9f9f] text-lg">
          <FaChevronLeft />
          <FaChevronRight />
          <div className="hidden lg:flex">
            {pathname != "/" && <SearchText />}
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-8 ">
          <IoMenu onClick={()=>setActiveMenu(!activeMenu)} className="text-xl cursor-pointer text-[#a7a7a7] block md:hidden"/>
          <Button type={"tertiary"}>Sign up</Button>
          <Button type={"primary"} className="px-4 py-1 sm:px-8 sm:py-3 ">
            Login
          </Button>
        </div>
      </div>
      {/* FOR MOBILE */}
      <div className="flex lg:hidden w-full mt-3">
        {pathname != "/" && <SearchText />}
      </div>
    </header>
  );
};

export default Header;
