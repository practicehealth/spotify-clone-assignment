import React, { useState } from "react";
import SearchSection from "../components/SearchSection";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import SignUpFooter from "../components/SignUpFooter";

const Search: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="bg-[#000000] w-screen overflow-y-scroll h-screen">
      <div className="lg:ml-[26%]">
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <SearchSection />

      <div className="">
        <SignUpFooter />
      </div>
    </div>
  );
};

export default Search;
