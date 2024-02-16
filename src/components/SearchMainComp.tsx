import React from "react";
import LoginBar from "./LoginBar";
import BrowseAll from "./BrowseAll";

const SearchMainComp:React.FC =()=>{ return(
    <div className="bg-[#1b1b1bcb] rounded-lg  relative ">
      <LoginBar />
      <div className="pt-14 px-5 h-fit text-white">
        <BrowseAll/>
      </div>
    </div>
); };

export default SearchMainComp;