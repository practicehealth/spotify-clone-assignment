import React from "react";
import { FaSearch, FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
const SpotifyLogo: React.FC = () => {

  return (
    <div className="bg-[#1b1b1bcb] rounded-lg shadow-lg p-6 text-white w-80 ">
      <div className="flex mb-5 cursor-pointer">
        <FaSpotify size={26} />
        <h2 className="text-lg font-semibold ">Spotify</h2>
      </div>
      <Link to="/">
        <div className="flex mb-5 cursor-pointer" >
          {" "}
          <GoHome size={27} />
          <p className="font-bold text-lg ms-5">Home</p>
        </div>
      </Link>
      <Link to="/search">
        <div className="flex mb-5 cursor-pointer" >
          {" "}
          <FaSearch size={27} />
          <p className="font-bold text-lg ms-5">Search</p>
        </div>
      </Link>
    </div>
  );
};

export default SpotifyLogo;
