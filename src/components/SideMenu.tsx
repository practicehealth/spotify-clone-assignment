import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { FiPlus, FiGlobe } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
interface SideMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideMenu: React.FC<SideMenuProps> = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        className={` text-white ${
          showMenu
            ? "absolute top-0 left-0 min-w-[300px] bg-[#151515] h-full"
            : "hidden"
        }  lg:flex  flex-col justify-around  fixed w-[25%] top-0 z-50`}
      >
        <div className=" flex flex-col relative text-base font-medium justify-around bg-[#151515]  h-[130px] pl-5 py-4 rounded-lg">
          <button
            onClick={() => setShowMenu(false)}
            className="lg:hidden absolute top-5 right-5"
          >
            <IoIosCloseCircleOutline size={24} color="white" />
          </button>
          <div className="flex items-center">
            <FaSpotify color="white" size={24} />
            <p className="">Spotify</p>
          </div>
          <Link to="/" className="flex gap-2  items-center cursor-pointer ">
            <GoHomeFill color="white" size={24} />
            <p>Home</p>
          </Link>
          <Link
            to="/search"
            className="flex gap-2  items-center cursor-pointer"
          >
            <IoSearch color="white" size={24} />
            <p>Search</p>
          </Link>
        </div>

        <div className="bg-[#151515]   h-[300px] overflow-y-auto mt-2 pb-10  rounded-lg ">
          <div className="fixed min-w-[300px] lg:w-[25%]  bg-[#151515] pl-4 pr-8 py-4 flex justify-between scrollbar-hide">
            <div className="flex gap-2 items-center cursor-pointer">
              <BiLibrary color="white" size={24} />
              <p className=" font-medium ">Your Library</p>
            </div>
            <FiPlus color="white" size={24} />
          </div>

          <div className="flex flex-col gap-4 font-medium mx-5  px-5 py-4 rounded-lg mt-16 bg-[#242424] ">
            <div className="flex flex-col gap-2">
              <p className="">Create your first playlist</p>
              <p className="text-sm">It's easy, we'll help you</p>
            </div>
            <button className="bg-white  w-[130px] px-4 py-2 rounded-2xl text-black text-sm">
              <p className="text-black"> Create playlist</p>
            </button>
          </div>

          <div className="flex flex-col gap-3 font-medium mx-5 px-5 py-4 rounded-lg mt-6 bg-[#242424]">
            <div className="flex flex-col gap-2">
              <p className="">Create your first playlist</p>
              <p className="text-sm">It's easy, we'll help you</p>
            </div>
            <button className="bg-white w-[130px] px-4 py-2  rounded-2xl text-black text-sm">
              Create playlist
            </button>
          </div>
        </div>

        <div className="px-10 pt-5  bg-[#151515] h-[150px]  text-xs">
          <div className="flex flex-wrap  gap-4 text-xs ">
            <p className="">Legal</p>
            <p className="">Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
          </div>
          <button className="flex gap-1 border-2 border-white items-center rounded-2xl px-4 py-2 mt-4 font-medium">
            <FiGlobe size={16} />
            <p>English</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
