import { useDispatch, useSelector } from "react-redux";
import { BiLibrary } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import LibraryCard from "./LibraryCard";
import { CiGlobe } from "react-icons/ci";
import { actions } from "../store/sideBarSlice";

const links: string[] = [
  "Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Us",
  "Legal",
  "Accessibility",
];

const SideBar = () => {
  const dispatch = useDispatch();
  const { sideBarIsVisible } = useSelector((state: any) => state.sideBar);

  return (
    <div
      className={`m-0 flex-col w-1/4 text-secondary rounded-md gap-2 h-full hidden sm:flex bg-black ${
        sideBarIsVisible
          ? "xs:flex absolute z-20 w-full sm:z-auto sm:w-1/4"
          : ""
      }`}
    >
      <div className="bg-primary flex flex-col font-semibold rounded-md justify-between items-start p-6 gap-2 max-h-full">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="flex justify-start items-center">
            <FaSpotify className="size-6 mr-2" />
            Spotify
          </div>
          <button
            className="sm:hidden"
            onClick={() => dispatch(actions.toggleSideBar())}
          >
            <RxCross2 className="size-6" />
          </button>
        </div>
        <div>
          <Link to="/">
            <div className="flex justify-between items-center gap-6 mb-1">
              <MdHomeFilled className="size-8" />
              <span>Home</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/search">
            <div className="flex justify-between items-center gap-6">
              <CiSearch className="size-8" />
              <span>Search</span>
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col bg-primary flex-1 box-border rounded-md ">
        <div className=" flex flex-none justify-between  items-center text-white z-10 w-full shadow-sm px-4 py-2 rounded-t-md">
          <div className="flex items-center p-1">
            <BiLibrary className="size-6 mr-2" />
            <span className="text-lg">Your library</span>
          </div>
          <div>
            <PiPlus className="size-6 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 flex-col box-border ">
          <div className=" flex flex-col p-2 overflow-y-scroll max-h-56 gap-2">
            <LibraryCard
              title="Create your first playlist"
              subtitle="it's easy, we'll help you"
              buttonText="Create playlist"
            />
            <LibraryCard
              title="Discover new music"
              subtitle="explore curated playlists"
              buttonText="Explore playlists"
            />
          </div>
          <div className=" flex flex-col text-white  w-full flex-1 rounded-b-md px-6 ">
            <div className="flex flex-wrap text-white my-7">
              <div className="flex flex-wrap gap-5">
                {links.map((link, i) => (
                  <a
                    key={`${i}${link}`}
                    target="_blank"
                    href="#"
                    className="text-xs cursor-pointer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <button className="mb-3 text-lg font-semibold bg-transparent rounded-full py-2 px-4 border border-white hover:scale-105 hover:font-bold flex items-center justify-center">
                <CiGlobe className="size-7 mr-1" /> English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
