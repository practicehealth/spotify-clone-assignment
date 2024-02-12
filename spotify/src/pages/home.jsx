import { Fragment } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Playlist from "../components/playlist";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="grid grid-cols-10 p-2 gap-2">
        <Sidebar />
        <div className="col-span-7 bg-[#121212] border rounded-xl border-transparent ">
          <div className=" bg-[#090909] p-2">
            <div className="flex justify-between flex-wrap">
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
            <div className=" justify-between flex xl:px-6 lg:px-5 md:px-4 sm:px-2 pt-2">
              <h1 className=" text-white font-bold text-xl cursor-pointer">Spotify Playlist</h1>
              <p className=" text-white text-xs hover:underline cursor-pointer">Show all</p>
            </div>
            <Playlist />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
