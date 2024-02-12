import React from "react";

function SearchPageContent({ title, img }) {
  return (
    <>
      <div className="max-w-[200px] mx-auto  h-full rounded-md overflow-hidden m-6 ml-1 relative  ">
        <h1 className="absolute  left-3 text-white  text-center font-bold">
          {title}
        </h1>
        <img
          className="w-[7rem] h-[5rem] object-cover rotate-45 relative left-28 top-24"
          src={img}
          alt="Card Image"
        />
      </div>
    </>
  );
}

export default SearchPageContent;
