import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import SignUpFooter from "../components/SignUpFooter";
import Navbar from "../components/Navbar";
import { playlist } from "../data.json";
import CardItem from "../components/CardItem";
import PlaylistFooter from "../components/PlaylistFooter";

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="bg-[#000000] w-screen pt-2  overflow-y-scroll h-screen">
      <div>
        <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="lg:ml-[26%]">
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="h-[530px] p-2 bg-gradient-to-b sm:overflow-y-scroll from-[#1E1E1E]">
          <div className="ml-2">
            <p className="text-white text-xl font-bold ">Spotify Playlist</p>
          </div>
          <div className=" flex flex-wrap pl-4 gap-4  ">
            {playlist.map((card, index) => (
              <CardItem key={index} card={card} />
            ))}
          </div>
          <PlaylistFooter />
        </div>
      </div>
      <div className="">
        <SignUpFooter />
      </div>
    </div>
  );
};

export default Home;
