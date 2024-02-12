import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { IoIosSearch as CiSearch } from "react-icons/io";
import spotify_logo from "../assets/spotify_logo_white.svg";
import { RiGlobalLine } from "react-icons/ri";
function IconText({ isSearch, setSearch }) {
  
 
  return (
    <>
      <div className="bg-neutral-950 w-[370px] p-4 rounded-md mt-4">
        <div className="flex items-center text-white text-[17px] ml-0 mt-2 mb-5">
          
          <img src={spotify_logo} alt="Spotify Logo" width="100" />
        </div>
        <div className="flex items-center text-white text-[17px] ml-0 ">
          <MdHomeFilled className="mr-2" size={30} />

          <button className="font-bold " onClick={() => setSearch(false)}>
            Home{" "}
          </button>
        </div>
        <div className="flex items-center text-white text-[17px] mt-5 ml-0">
          <CiSearch className="mr-2" size={26} />
          <button className="font-bold" onClick={() => setSearch(true)}>
            Search
          </button>
        </div>
      </div>

      {/* second part */}
      <div className="bg-neutral-950 w-[370px] p-4 rounded-md mt-4">
        <div className="flex items-center text-white text-[17px] ml-0">
          <BiLibrary className="mr-2" size={30} />
          <span className="font-bold text-neutral-300">Your Library</span>
          <span className="ml-[10rem]">
            {" "}
            <FaPlus size={25} />
          </span>
        </div>
        <div className="bg-neutral-900 w-full p-4 rounded-md mt-4">
          <div className="flex items-center text-white text-[17px] ml-0 mt-2 mb-5">
            <h2 className="font-bold">Create your first playlist</h2>
          </div>
          <div className="flex items-center text-white text-[17px] ml-0">
            <p>it's easy , we'll help you</p>
          </div>
          <div className="flex items-center text-white text-[17px] mt-5 ml-0">
            <button className="font-bold bg-white text-black p-2 rounded-full min-w-[11rem]">
              {" "}
              Create playlist
            </button>
          </div>
        </div>
        <div className="bg-neutral-900 w-full p-4 rounded-md mt-4">
          <div className="flex items-center text-white text-[17px] ml-0 mt-2 mb-5">
            <h2 className="font-bold">Let's find some podcasts to follow</h2>
          </div>
          <div className="flex items-center text-white text-[17px] ml-0">
            <p>We;ll keep you updated on new episodes</p>
          </div>
          <div className="flex items-center text-white text-[17px] mt-5 ml-0">
            <button className="font-bold bg-white text-black p-2 rounded-full min-w-[11rem]">
              {" "}
              Follow
            </button>
          </div>
          
        </div>
      </div>

      {/* thord part */}
      <div className="bg-black w-[370px] p-4 rounded-md mt-4 text-white ml-4">
      <div className="flex rounded-full border border-gray-300 p-2 ml-2 w-32">
        <RiGlobalLine size={25} />   
        <span className="ml-2">
          English
        </span>
      </div>
    </div>
    </>
  );
}

export default IconText;
