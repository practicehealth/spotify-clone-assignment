import { Icon } from "../Icons";
import Menu from "./Sidebar/Menu";
import { UilGlobe, UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isOpen } from "../stores/mySlice";

function Sidebar() {
  const show = useSelector((state:any) => state.show);
  const dispatch = useDispatch();
  console.log(show);

  return (
    <div className=" absolute z-50 lg:static min-h-screen rounded-lg">
      <aside
        className={`w-70 2xl:w-80 px-2 pt-6 ${
          show.show ? "hidden" : ""
        } lg:flex flex-shrink-0 flex-col bg-black text-white min-h-screen  relative`}
      >
        <div
          className=" lg:hidden p-2 cursor-pointer"
          onClick={() => dispatch(isOpen())}
        >
          <UilTimes className=" w-10 h-10 mb-2" />
        </div>
        <div className="bg-slate-500 rounded-lg px-2 bg-opacity-30">
          <NavLink to="/" className="px-6">
            <img width={100} src={'/logo.svg'} alt="" className="h-5" />
          </NavLink>
          <Menu />
        </div>

        <div className="bg-slate-500 px-2 bg-opacity-30 mt-1 rounded-lg">
          <nav className="mt-1 mb-1 ">
            <ul>
              <li>
                <NavLink
                  to=""
                  className="py-2 pl-5 flex items-center justify-between group text-sm text-link font-semibold hover:text-white "
                >
                  <div className=" flex gap-2 ">
                    <Icon name="collection" />
                    Your Library
                  </div>
                  <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-50 group-hover:bg-opacity-100 rounded-sm text-black">
                    <Icon name="plus" size={12} />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className=" flex flex-col bg-slate-700 gap-3 px-2 py-4 rounded-lg bg-opacity-50 ">
            <div className=" flex flex-col gap-1">
              <h3 className=" text-md font-semibold">
                Create yout first playlist
              </h3>
              <p className=" text-xs">It's easy, we'll help you</p>
            </div>
            <div>
              <button className="text-sm font-semibold bg-white text-black py-1 px-3 rounded-xl w-[130px]">
                Create playlist
              </button>
            </div>
          </div>

          <div className=" mt-3 flex flex-col bg-slate-700  gap-3 px-2 py-4 rounded-lg bg-opacity-50">
            <div className=" flex flex-col gap-1">
              <h3 className=" text-md font-semibold">
                Let's find some podcasts to follow
              </h3>
              <p className=" text-xs">We'll keep you updated on new episodes</p>
            </div>
            <div>
              <button className="text-center text-sm font-semibold bg-white text-black py-1 px-3 rounded-xl w-[130px]">
                Find Podcast
              </button>
            </div>
          </div>

          <div className="  text-[12px]  bottom-0 left-0 w-70 2xl:w-80 px-4 bg-black py-4 absolute ">
            <div className="flex flex-wrap gap-3 opacity-50 pb-5">
              <div className="">Legal</div>
              <div>Privacy Center</div>
              <div>Privacy Policy</div>
              <div>Cookies</div>
              <div>About Ads</div>
              <div>Accessibility</div>
              <div>Cookies</div>
            </div>
            <div className=" flex items-center justify-center border border-s-white w-fit px-3 py-1 rounded-2xl">
              <UilGlobe width={20} />
              <h3 className=" font-bold">English</h3>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
