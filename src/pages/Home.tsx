import React from "react";
import SpotifyLogo from "../components/SpotifyLogo";
import Library from "../components/Library";
import HomeMainComp from "../components/HomeMainComp";
import SignUpBanner from "../components/SignupBanner";

const Home: React.FC = () => {
  localStorage.setItem("search", "");
  return (
    <div className="grid grid-cols-4 grid-rows-3 h-screen w-full">
      <div className="">
        <SpotifyLogo />
      </div>

      <div className="col-span-3 row-span-3">
        <HomeMainComp />
      </div>
      <div className="row-span-2 ">
        <Library />
      </div>
      <SignUpBanner />
    </div>
  );
};

export default Home;
