import React from "react";
import { menus } from "../constant/menus";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";
import Button from "./Button";
import { CiGlobe } from "react-icons/ci";
import Logo from "../assets/spotify_logo_white.png"
import { IoMdClose } from "react-icons/io";


const Sidebar = ({activeMenu, setActiveMenu}) => {
  return (
    <nav className={`md:block top-2 w-[20rem] z-20 md:w-[30rem] lg:w-[25rem] xl:w-[20rem] h-screen space-y-2 ${activeMenu ? "block fixed h-screen bg-black":"hidden sticky"}`}>
      {/* MENUS */}
      <div className="bg-[#121212] p-5 space-y-4 rounded-lg relative">
        <img
          src={Logo}
          alt="spotify logo"
          className="w-20"
        />

        <IoMdClose onClick={()=>setActiveMenu(false)} className="text-xl text-[#a7a7a7] block md:hidden absolute top-1 cursor-pointer right-4"/>

        <ul className="space-y-4">
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.link}
                className="flex items-center gap-5 text-[#a8a8a8] hover:text-white"
                onClick={()=>setActiveMenu(false)}
              >
                <menu.icon className="text-2xl" />
                <span className="font-semibold">{menu.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* PLAYLIST */}
      <div className="bg-[#121212] p-2 rounded-lg text-[#a8a8a8] space-y-4">
        <div className="flex gap-2 items-center relative px-3">
          <LuLibrary />
          <span className="font-semibold">Your Library</span>
          <FaPlus className="absolute right-3 cursor-pointer bg-[#1a1a1a]" />
        </div>

        <div className="h-44 overflow-hidden space-y-6 hover:overflow-auto">
          <div className="text-white bg-[#242424] rounded-md p-3 space-y-2">
            <p className="font-semibold">Create your first playlist</p>
            <p>It's easy we will help you</p>
            <Button type="primary" className={`px-4 py-1`}>
              Create playlist
            </Button>
          </div>

          <div className="text-white bg-[#242424] rounded-md p-3 space-y-2">
            <p className="font-semibold">Let's find some podcast to follow</p>
            <p>We will keep you updated for new episodes</p>
            <Button type="primary" className={`px-4 py-1`}>
              Browse podcasts
            </Button>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mt-10 px-3">
          {[
            "Legal",
            "Privacy Center",
            "Privacy Policy",
            "Cookies",
            "About Ads",
            "Accessbility",
          ].map((label) => (
            <p key={label} className="text-sm">{label}</p>
          ))}
        </div>

        <Button type="secondary" className="px-4 py-1 flex items-center gap-1 mx-3">
          <CiGlobe />
          English
        </Button>
      </div>
    </nav>
  );
};
export default Sidebar;
