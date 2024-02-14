import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Buttons from "./Buttons";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const Topbar = () => {
  return (
    <div className=" rounded-t-md bg-[#101010] w-full h-16 px-8 flex items-center justify-between">
      <section className="flex gap-2 items-center">
        <IoIosArrowBack className="rounded-full bg-black w-6 h-6 text-[#b3b3b3] " />
        <IoIosArrowForward className="rounded-full bg-black w-6 h-6 text-[#b3b3b3]" />
        <div className="flex items-center border-2 border-white rounded-full p-3 w-fit gap-2 bg-[#242424]">
          <HiMiniMagnifyingGlass className="w-5 h-5 text-white" />
          <input
            type="search"
            placeholder="What do you want to listen to?"
            className="bg-inherit text-sm text-[#b3b3b3] outline-none w-64"
          />
        </div>
      </section>
      <section className="flex gap-6 items-center">
        <a href="" className="text-[#b3b3b3] font-bold hover:text-white">
          Sign Up
        </a>
        <Buttons label={"Log in"}></Buttons>
      </section>
    </div>
  );
};

export default Topbar;
