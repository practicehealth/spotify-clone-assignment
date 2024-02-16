import React from "react";
import { FaPlus } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import CreatePlaylist from "./CreatePlaylist";
import { HiGlobeAlt } from "react-icons/hi";

const Library: React.FC = () => {
  return (
    <div className="bg-[#1b1b1bcb] rounded-lg shadow-lg p-6 w-80 h-fit">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <LuLibrary size={26} color="grey" />
            <p className="font-bold text-lg ms-5 text-gray-400">Your Library</p>
          </div>
          <div className="flex items-end">
            <FaPlus size={26} color="grey" />
          </div>
        </div>
        <div className="max-h-50 overflow-y-auto scroll-smooth  text-white">
          <div className="mt-2 mb-5">
            <CreatePlaylist
              heading="Create your first playlist"
              para="It's easy, we'll help you"
              button="Create playlist"
            />
          </div>
          <div className="mt-5 mb-2">
            <CreatePlaylist
              heading="Let's find some podcast to follow"
              para="We;ll keep you updated on new episodes"
              button="Browse Podcasts"
            />
          </div>
        </div>
        <div className="flex-wrap items-start text-xs mt-8 text-neutral-400  cursor-pointer">
          <a className="pr-6 "> Leagal</a>
          <a className="pr-6 "> Safety & Privacy Center</a>
          <a className="pr-6 "> PrivacyPolicy</a>
          <a className="pr-6 "> Cookies</a>
          <a className="pr-6 "> About Ads</a>
          <a className="pr-6 "> Accessibility</a>
        </div>
        <div className="mt-9 mb-5">
          <button className="bg-black font-bold rounded-3xl w-32 h-8 text-sm text-white flex items-center justify-center border border-white">
            <HiGlobeAlt size={24} className="mr-1" />
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
