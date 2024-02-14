import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import PlaylistItem from "../components/PlaylistItem";
import playlists from "../data/playlists";
import { useDispatch } from "react-redux";
import { actions } from "../store/sideBarSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full font-light h-full flex-col rounded-md justify-start overflow-hidden box-border">
      <div className="flex justify-between sticky top-0 z-10 px-1 py-4 sm:px-4 flex-none bg-bgheader">
        <div className="flex items-center gap-2 ">
          <button
            className="flex rounded-full bg-primary w-10 h-10 items-center justify-center sm:hidden"
            onClick={() => dispatch(actions.toggleSideBar())}
          >
            <RxHamburgerMenu className="text-secondary size-8" />
          </button>
          <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center">
            <FaAngleLeft className="text-secondary size-6 hover:scale-105" />
          </button>
          <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center">
            <FaAngleRight className="text-secondary size-6 hover:scale-105" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <button className="text-secondary flex font-bold hover:scale-105 hover:font-bold">
            Sign up
          </button>
          <button className="text-lg font-semibold bg-white text-black rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
            Log in
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 bg-lightGray p-2 md:p-4 md:gap-4">
        {playlists.map((p) => (
          <PlaylistItem key={p.id} playlist={p} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
