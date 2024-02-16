import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LoginBar: React.FC = () => {
  const search: string | null = localStorage.getItem("search");
  return (
    <div className="bg-[#0c0c0c] absolute text-white bg-opacity-2 rounded-lg w-full flex justify-between items-center">
      <div className="flex m-3">
        <IoIosArrowBack
          size={26}
          className="bg-black mt-auto mx-5 rounded-full"
        />
        <IoIosArrowForward
          size={26}
          className="bg-black mt-auto  rounded-full"
        />
      </div>
      {search && (
        <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-start">
    <CiSearch size={40}  className="text-gray-400" />
  </div>
  <input
    type="text"
    className="w-full h-10 pl-4 pr-10 bg-[#303030] text-sm rounded-full"
    style={{textAlign: 'center'}}
    placeholder="What do you want to play?"
  />

</div>

      )}
      <div className="ml-auto">
        <button className="font-bold text-gray-400 mx-5 text-sm">
          Sign Up
        </button>
        <button className="rounded-3xl w-32 h-8 text-sm font-bold bg-white text-black">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginBar;
