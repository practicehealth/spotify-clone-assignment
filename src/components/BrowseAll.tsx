import React from "react";
import Footer from "./Footer";
import Data from "../data.json";
import GerneCard from "./GerneCard";

const BrowseAll: React.FC = () => {
  return (
    <>
      <div className="text-white flex justify-between">
        <p className="font-bold text-2xl"> Browse all</p>
      </div>
      <div className="flex flex-wrap pl-4 gap-4">
        {Data.SearchData.map((data) => (
          <GerneCard card={data} />
        ))}
      </div>

      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default BrowseAll;
