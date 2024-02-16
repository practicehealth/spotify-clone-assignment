import React from "react";
import LoginBar from "./LoginBar";
import SpotifyPlaylist from "./SpotifyPlaylist";

const HomeMainComp: React.FC = () => {
  return (
    <div className="bg-[#1b1b1bcb] rounded-lg  relative">
      <LoginBar />
      <div className="pt-14 px-5 pb-1 h-fit">
        <SpotifyPlaylist />
      </div>
    </div>
  );
};

export default HomeMainComp;
