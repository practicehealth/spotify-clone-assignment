import {
  UilAngleLeftB,
  UilAngleRightB,
  UilBars,
} from "@iconscout/react-unicons";
import Search from "./Navbar/Search";
import { useDispatch } from "react-redux";
import { isOpen } from "../stores/mySlice";

function Navbar({ flag=false }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(isOpen()); // Dispatching the 'isOpen' action to toggle the 'show' value
  };

  // console.log(show)

  return (
    <div>
      <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10 bg-black md:py-2">
        <div className=" flex gap-2 items-center">
          <div className=" text-white mr-2 lg:hidden" onClick={handleClick}>
            <UilBars />
          </div>
          <div className=" flex gap-2">
            <UilAngleLeftB className=" cursor-pointer bg-slate-700 bg-opacity-50 rounded-full text-white text-center w-8 h-8 p-1" />
            <UilAngleRightB className="cursor-pointer text-slate-500 w-8 h-8 p-1" />
          </div>
          <div className=" hidden md:block">
            <Search flag={flag} />
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" text-slate-300 text-sm font-semibold cursor-pointer">
            Sign up
          </div>
          <div className=" bg-white px-4 py-1 rounded-2xl text-sm font-semibold cursor-pointer text-black">
            Log in
          </div>
        </div>
      </nav>
      <div className=" md:hidden flex flex-col  xs:flex-row text-white items-center md:justify-start px-4 py-3 w-screen">
        <h3 className=" text-2xl font-bold">Search</h3>
         <Search flag={flag} />
      </div>
    </div>
  );
}

export default Navbar;
