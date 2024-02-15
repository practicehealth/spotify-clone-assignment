import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faChartSimple,
  faGlobe,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Premium from "../components/Premium";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../App.css";
import { useEffect, useRef } from "react";

const SpotifyLayout = () => {
  const { pathname } = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="p-2 w-screen h-screen">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="flex h-[92%] gap-2">
          <div className="h-full w-[26%] flex shrink-0 flex-col gap-2">
            <div className="w-full h-[24%] bg-[#111] rounded flex flex-col gap-6 p-3">
              <div className="text-white flex items-center gap-[2px]">
                <FontAwesomeIcon
                  icon={faSpotify}
                  style={{ color: "#ffffff", width: "28px", height: "28px" }}
                />
                <p>Spotify</p>
              </div>
              <div className="flex gap-5 items-center">
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "#dddddd", width: "28px", height: "28px" }}
                />
                <p className="text-[#BBB]">
                  <NavLink to="/">Home</NavLink>
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#dddddd", width: "28px", height: "28px" }}
                />
                <p className="text-[#BBB]">
                  <NavLink to="/search">Search</NavLink>
                </p>
              </div>
            </div>
            <div className="w-full h-[76%] bg-[#111] p-3 relative">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    style={{ color: "#ffffff", width: "28px", height: "28px" }}
                  />
                  <p className="text-white">Your Library</p>
                </div>
                <p className="text-white text-2xl font-light">+</p>
              </div>
              <div className="w-[98%] mx-auto h-[25%] bg-[#222] mt-6 rounded-lg py-3 px-5">
                <h4 className="text-white font-semibold">
                  Create your first playlist
                </h4>
                <p className="text-white text-sm font-light mt-1">
                  It's easy, we will help you
                </p>
                <button className="bg-white w-[130px] h-8 rounded-full mt-4 text-sm font-semibold">
                  Create playlist
                </button>
              </div>
              <div className="w-[98%] mx-auto h-[25%] bg-[#222] mt-6 rounded-lg py-3 px-5">
                <h4 className="text-white font-semibold">
                  Let's find some podcast to follow
                </h4>
                <p className="text-white text-sm font-light mt-1">
                  We'll keep you updated on new episodes
                </p>
                <button className="bg-white w-[145px] h-8 rounded-full mt-4 text-sm font-semibold">
                  Browse Podcasts
                </button>
              </div>
              <button className="text-white text-xs border border-white h-6 w-20 rounded-full flex gap-1 justify-center items-center absolute bottom-4 left-4">
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#FFF" }} />
                <p>English</p>
              </button>
            </div>
          </div>
          <div className="h-full bg-[#111] grow flex flex-col gap-2">
            <div className="flex w-full h-16 items-center justify-between px-6">
              <div className="flex gap-2 items-center">
                <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    style={{ color: "white", fontSize: "22px" }}
                  />
                </div>
                <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{
                      color: "white",
                      fontSize: "22px",
                    }}
                  />
                </div>
                {pathname.includes("search") && (
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{
                        color: "#CCC",
                        left: "13px",
                        top: "17px",
                        position: "absolute",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="What do you want to play?"
                      className="bg-[#323131] w-80 h-12 text-sm font-light rounded-full pl-9 text-white"
                      ref={inputRef}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-8">
                <p className="text-[#CCC] cursor-pointer hover:text-white font-medium">
                  Sign up
                </p>
                <button className="text-black bg-white h-11 w-24 rounded-full font-semibold hover:h-12 hover:scale-[1]">
                  Log in
                </button>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
        <Premium />
      </div>
    </div>
  );
};

export default SpotifyLayout;
