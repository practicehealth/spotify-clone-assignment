import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import songs from "../../constant/songs.json";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <div className="relative">
        <h2 className="text-2xl font-bold px-8 hover:underline">
          <Link to="/">Spotify Playlists</Link>
        </h2>
        <Button
          type={"tertiary"}
          className="absolute top-1 right-5 hover:underline hover:text-[#a7a7a7]"
        >
          Show all
        </Button>

        <div className="flex flex-wrap justify-center gap-10 sm:justify-start  sm:flex-nowrap px-8 sm:gap-5 mt-4 overflow-x-auto scrollbar-hide ">
          {songs.slice(0, 5).map((song) => (
            <Card key={song.id} {...song} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
