import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter, FaFacebook } from "react-icons/fa";
const PlaylistFooter: React.FC = () => {
  return (
    <div className="px-4">
      <div className="mt-20 flex flex-col  sm:flex-row  justify-between">
        <div className="flex flex-row  gap-4 mx-auto sm:mx-0 sm:gap-28  text-[#A7A7A7]">
          <div>
            <ul>
              <li className="font-bold text-white">Company</li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold text-white">Communities</li>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold text-white">Useful links</li>
              <li>Support</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mt-5 w-full justify-center ">
          <div className="bg-[#292929] rounded-full h-[40px] p-2 cursor-pointer">
            <IoLogoInstagram color="white" size={24} />
          </div>
          <div className="bg-[#292929] rounded-full h-[40px] p-2 cursor-pointer">
            <FaTwitter color="white" size={24} />
          </div>
          <div className="bg-[#292929] rounded-full h-[40px] p-2 cursor-pointer">
            <FaFacebook color="white" size={24} />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-2 h-10 border-[#292828] text-white"></div>
      <p className="text-[#A7A7A7] text-sm pb-40 sm:pb-0">
        &copy; 2024 Spotify AB
      </p>
    </div>
  );
};

export default PlaylistFooter;
