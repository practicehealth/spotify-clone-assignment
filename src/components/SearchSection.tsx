import React, { useEffect } from "react";
import { SearchData } from "../data.json";
import SearchCardItem from "./SearchCardItem";
import PlaylistFooter from "./PlaylistFooter";

const SearchSection: React.FC = () => {
  useEffect(() => {
    console.log("searh", SearchData);
  }, []);
  return (
    <div className="h-[530px] pt-4 lg:pt-0  lg:ml-[26%] lg:p-2 bg-gradient-to-b sm:overflow-y-scroll from-[#1E1E1E]">
      <div className=" flex flex-wrap pl-4 gap-4  ">
        {SearchData.map((card, index) => (
          <SearchCardItem key={index} card={card} />
        ))}
      </div>
      <PlaylistFooter />
    </div>
  );
};

export default SearchSection;
