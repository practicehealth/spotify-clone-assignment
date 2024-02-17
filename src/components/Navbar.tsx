import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Navbar({ isSearch }) {
  return (
    <div className="navbar w-full h-[8rem]   justify-center  flex-direx bg-neutral-950 bg-opacity-75 flex">
      <div className="flex items-center text-white text-[17px] ml-4">
        <span className="bg-black p-3 rounded-full ">
          <IoIosArrowBack size={25} />
        </span>
        <span className="bg-black p-3 rounded-full ml-4">
          <IoIosArrowForward size={25} />
        </span>
      </div>

      <div className="flex items-center text-white text-[17px] ml-4">
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="min-w-[20rem] p-3 text-sm rounded-full bg-black "
        />
      </div>

      <div
        className="flex items-center text-white text-[17px]"
        style={{ marginLeft: "auto" }}>
          <button className="min-w-[10rem] p-3 text-sm rounded-full bg-black">Sign Up</button>
        <button className="font-bold bg-white  text-black p-2  mr-12 rounded-full min-w-[9rem]">
          {" "}
          Log in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
