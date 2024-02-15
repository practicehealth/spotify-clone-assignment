import { Fragment } from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import Library from "../components/library";
import { VscGlobe } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="col-span-3 grid grid-rows-4">
        <div className="grid row-span-1 bg-[#121212] border rounded-xl border-transparent mb-2">
          <ul className="xl:p-4 lg:p-3 md:p-2 sm:p-1">
            <li className=" p-2 text-white font-bold flex gap-1 items-center cursor-pointer onClick={()=>{Navigate('/')}}">
              <FaSpotify size={25} />
              Spotify
            </li>
            <li
              className=" p-2 text-white font-bold flex xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 items-center cursor-pointer"
              onClick={() => {
                Navigate("/");
              }}
            >
              <GoHomeFill size={25} />
              Home
            </li>
            <li
              className=" p-2 text-[#b3b3b3] hover:text-white font-bold flex xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 items-center cursor-pointer"
              onClick={() => {
                Navigate("/search");
              }}
            >
              <FiSearch size={25} />
              Search
            </li>
          </ul>
        </div>
        <div className="row-span-3 bg-[#121212] border rounded-xl border-transparent">
          <div className="flex flex-wrap items-center justify-between xl:px-6 lg:px-5 md:px-4 sm:px-2">
            <div className="text-[#b3b3b3] hover:text-white flex font-bold gap-3  pt-3 cursor-pointer">
              <BiLibrary size={25} />
              <p className=" text-xs">Your Library</p>
            </div>
            <div className="pt-3 text-[#b3b3b3] hover:text-white flex font-bold">
              <div className="border rounded-full hover:bg-[#202020] border-transparent p-1 cursor-pointer">
                <FiPlus size={25} />
              </div>
            </div>
          </div>

          <div className=" xl:mt-5 lg:mt-4 md:mt-3 sm:mt-2 h-[17rem] overflow-y-hidden scroll-col  hover:overflow-y-scroll ">
            <Library />
          </div>

          <div className=" xl:mt-8 lg:mt-6 md:mt-4 sm:mt-2 xl:mx-6 lg:mx-5 md:mx-4 sm:mx-2">
            <p className="text-[#b3b3b3] text-xs cursor-pointer">Cookies</p>
            <div className="flex items-center gap-1 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-2 text-white">
              <div className="border border-[#b3b3b3] hover:border-white rounded-full hover:scale-105 p-1 px-3 py-1 flex items-center gap-1">
                <VscGlobe size={20} />
                <p className="text-white font-medium text-sm cursor-pointer">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
