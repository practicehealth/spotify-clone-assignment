/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import SearchIcon from "./../../assets/icons/search.svg?react";
import CloseIcon from "./../../assets/icons/close.svg?react";

export default function SearchBar() {
  
   const [value,setValue] = useState(""); 
  return (
    <div className="relative ml-2 flex flex-grow flex-nowrap w-[350px]">
      <SearchIcon fill="#FFFFFF" width={18} className="absolute left-2 top-[50%] translate-y-[-50%]" />
      <input
        placeholder="what do you want to listen to?"
        className="hidden md:inline-block w-full pl-10 placeholder:font-semibold h-full py-4 focus:outline-[0.6px] focus:outline-white/0.8 rounded-2xl bg-[var(--bg-elevated-base)]  text-white"
        onChange={(e)=>setValue(e.target.value)}
        value={value}
      />
     {value!=""&&<CloseIcon fill="#FFFFFF" width={18} className="absolute right-2 top-[50%] translate-y-[-50%] hidden md:inline-block" onClick={()=>setValue("")}/>}
    </div>
  );
}
