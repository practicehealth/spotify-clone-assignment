import React from "react";
import { FaSpotify } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
interface SideMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<SideMenuProps> = ({ setShowMenu }) => {
  return (
    <div
      className={` bg-[#101010] py-2 lg:py-0 w-full  h-[50px]  rounded-t-lg p-4 flex justify-between items-center`}
    >
      <div className="flex items-center gap-4  lg:ml-0 ">
        <button
          className="lg:hidden z-55 left-0 top-5 cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaSpotify color="white" size={28} />
        </button>
        <MdArrowBackIos size={20} color="#A7A7A7" />
        <MdArrowForwardIos size={20} color="#A7A7A7" />
      </div>
      <div className="flex  items-center gap-4">
        <button className="text-[#A7A7A7] font-bold hover:text-white transform transition-transform hover:scale-105">
          Sign up
        </button>
        <button className="bg-white px-6  font-medium py-2 rounded-3xl transform transition-transform hover:scale-105">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
