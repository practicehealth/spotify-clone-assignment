import React from "react";
import SongCard from "./SongCard";
import Footer from "./Footer";
import Data from "../data.json";

const SpotifyPlaylist: React.FC = () => {
  return (
    <>
      <div className="text-white flex justify-between">
        <p className="font-bold text-2xl"> Spotify Playlists</p>
        <a className="cursor-pointer text-gray-500">Show all</a>
      </div>
      <div className="flex justify-between">
        {Data.playlist.map((data) => (
          <SongCard
            image={data.imgLink}
            title={data.title}
            para={data.description}
          />
        ))}
      </div>

      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default SpotifyPlaylist;
