import React from "react";
import SearchPageContent from "./SearchPageContent";
import data from "../data/data.json";

function SearchPage() {
  return (
    <>
      <h1 className="text-white text-[1.5rem] mt-0">Browse All</h1>

      <div className="text-white text-[1.6rem] flex flex-wrap mr-8">
        {data.map((item) => (
          <div
            key={item.id}
            className={`min-w-[200px] mx-auto rounded-md overflow-hidden  mr-3  mt-4 mb-3
            relative h-48 cursor-pointer`}
            style={{ backgroundColor: item.color }}>
            {/* Use inline style to set the background color */}
            <SearchPageContent title={item.title} img={item.image}  />
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
