import { Fragment, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
const CLIENT_ID = "fa32cecbc87e451e971be932bc7fc87c";
const CLIENT_SECRET = "42e99c7f9ab34f62bc515686619659a5";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.access_token;
    } catch (error) {
      console.error(
        "Error getting access token:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const searchTracks = async () => {
    try {
      if (!searchInput) {
        return;
      }

      const accessToken = await getAccessToken();

      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchInput
        )}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setSearchResults(response.data.tracks.items);
    } catch (error) {
      console.error(
        "Error searching for tracks:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchTracks();
    }
  };

  const Navigate = useNavigate();

  return (
    <Fragment>
      <div className="grid grid-cols-10 p-2 gap-2">
        <Sidebar />
        <div className="col-span-7 bg-[#121212] border rounded-xl border-transparent ">
          <div className=" bg-[#090909] p-2">
            <div className="flex flex-wrap justify-between">
              <div className="flex text-white xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 items-center xl:px-6 lg:px-5 md:px-4 sm:px-2">
                <GrPrevious
                  className=" border border-transparent rounded-full p-1 bg-[#030303] cursor-pointer"
                  size={30}
                  onClick={() => {
                    Navigate("/");
                  }}
                />
                <GrNext
                  className=" border border-transparent rounded-full p-1 bg-[#030303] cursor-pointer"
                  size={30}
                  onClick={() => {
                    Navigate("/search");
                  }}
                />
                <div className="flex items-center border gap-2 rounded-full xl:px-4 lg:px-3 md:px-2 sm:px-1 bg-[#242424]">
                  <RiSearchLine onClick={searchTracks} />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onClick={searchTracks}
                    onKeyPress={handleKeyPress}
                    className=" bg-transparent xl:w-[18rem] lg:w-[15rem] md:w-[12rem] sm:w-[9rem] w-[5rem] xl:py-3 lg:py-3 md:py-3 sm:py-2 py-1 border border-transparent focus:outline-none text-sm"
                    placeholder="What do you want to listen to?"
                  />
                </div>
              </div>
              <div className="flex flex-wrap xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 items-center">
                <p className="text-[#a4a4a4] font-bold flex flex-wrap gap-2 ">
                  <span className=" tracking-widest hover:text-white cursor-pointer">
                    Premium
                  </span>
                  <span
                    span
                    className=" tracking-widest hover:text-white cursor-pointer"
                  >
                    Support
                  </span>
                  <span
                    span
                    className=" tracking-widest hover:text-white cursor-pointer"
                  >
                    Download
                  </span>
                </p>
                <p className=" text-[#4f4f4f]">|</p>
                <div className=" flex items-center xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 gap-2">
                  <button className=" text-[#a4a4a4] font-bold hover:text-white hover:scale-105">
                    Sign up
                  </button>
                  <button className=" text-black font-bold bg-white hover:scale-105 xl:px-6 lg:px-5 md:px-4 sm:px-2 rounded-full xl:py-3 lg:py-3 md:py-3 sm:py-2 py-1">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[37rem] overflow-clip overflow-y-hidden scroll-col  hover:overflow-y-scroll">
            <div className=" text-white text-xl font-bold px-6">results</div>
            <div className="flex ">
              {searchResults.length > 0 ? (
                <ul className="flex flex-wrap justify-center">
                  {searchResults.map((track) => (
                    <div
                      key={track.id}
                      className=" cursor-pointer bg-pink-500 w-[12rem] m-5 rounded-lg overflow-clip"
                    >
                      <h1 className=" text-white font-bold text-xl px-4 pt-2">
                        {track.name}
                      </h1>
                      <div className="w-[7rem] mt-12 flex">
                        <img
                          src={track.album?.images[0]?.url}
                          alt=""
                          className="mx-24 rotate-12 "
                        />
                      </div>
                    </div>
                  ))}
                </ul>
              ) : (
                <p className="text-white font-semibold text-lg p-10">
                  Search what you want and wait to load API.
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Search;
