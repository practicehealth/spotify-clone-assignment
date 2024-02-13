// import React from "react";
// import { cn } from "../../utils";
// import Card from "../ui/Card";
// import { FaSpotify } from "react-icons/fa";

// type Props = {
//   isSidebarOpen: boolean;
//   setSidebarOpen: React.Dispatch<boolean>;
// };

// const Sidebar = ({ isSidebarOpen, setSidebarOpen }: Props) => {
//   return (
//     <div
//       className={cn(
//         `transform top-0 space-y-4 left-0 w-64 p-4 fixed h-full overflow-auto transition-transform duration-300 ease-in-out`,
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//       )}
//     >
//       {/* <Card>
//         <p className="flex items-center text-xl gap-x-1">
//           <FaSpotify className="text-2xl" />
//           <span className="text-bold">Spotify</span>
//         </p>
//       </Card> */}
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaSpotify } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navLinks, navLinksType } from "../../constants/navLinks";
import Card from "../ui/Card";
import { cn } from "../../utils";
import { IoLibrary } from "react-icons/io5";
import { Button } from "../ui/Button";
import { footerLinks } from "../../constants/footerLinks";

type Props = {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<boolean>;
};

const Sidebar = ({ isSidebarOpen, setSidebarOpen }: Props) => {
  const location = useLocation();

  const matchUrl = (url: string): boolean => {
    if (!url) return false;
    return url === location.pathname;
  };

  return (
    <nav
      className={`md:block top-2 w-[20rem] z-20 md:w-[30rem] lg:w-[25rem] xl:w-[22rem] h-screen space-y-2 ${
        isSidebarOpen ? "block fixed h-screen bg-black" : "hidden sticky"
      }`}
    >
      {/* MENUS */}
      <Card className="relative p-5 space-y-4 rounded-lg">
        <p className="flex items-center space-x-2 text-lg">
          <FaSpotify className="text-3xl" />
          <span className="text-semibold">Spotify</span>
        </p>

        <IoMdClose
          onClick={() => setSidebarOpen(false)}
          className="text-xl text-[#a7a7a7] block md:hidden absolute top-1 cursor-pointer right-4"
        />

        <ul className="ml-2 space-y-4">
          {navLinks.map((link: navLinksType, index: number) => (
            <Link
              key={index}
              to={link.url}
              className="flex items-center gap-5 text-secondary hover:text-white"
            >
              {matchUrl(link.url) ? (
                <link.activeIcon className="text-2xl text-white" />
              ) : (
                <link.icon className="text-2xl" />
              )}

              <span
                className={cn(
                  "font-semibold text-lg",
                  matchUrl(link.url) ? "text-white bold" : ""
                )}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </ul>
      </Card>

      {/* PLAYLIST */}
      <Card className="pt-4 pb-6 space-y-4 text-secondary">
        <div className="relative flex items-center justify-between gap-2 px-3 py-1">
          <p className="flex items-center transition-all duration-150 cursor-pointer gap-x-2 hover:text-white">
            <IoLibrary className="text-2xl" />
            <span className="font-semibold">Your Library</span>
          </p>
          <span className="p-2 transition-all duration-150 rounded-full cursor-pointer hover:bg-secondary hover:text-white">
            <FaPlus />
          </span>
        </div>

        <div className="space-y-6 overflow-y-auto h-60">
          <Card className="px-6 py-4 space-y-5 font-semibold text-white rounded-md bg-secondary">
            <div className="space-y-2">
              <p>Create your first playlist</p>
              <p className="text-sm">It's easy we will help you</p>
            </div>
            <Button>Create playlist</Button>
          </Card>

          <Card className="px-6 py-4 space-y-5 font-semibold text-white rounded-md bg-secondary">
            <div className="space-y-2">
              <p>Let's find some podcast to follow</p>
              <p className="text-sm">
                We will keep you updated for new episodes
              </p>
            </div>
            <Button>Browse podcasts</Button>
          </Card>
        </div>
        <div>
          <div className="flex flex-wrap px-3 mt-10 gap-x-6 gap-y-3">
            {footerLinks?.map((item) => (
              <Link
                className="text-xs hover:text-white text-secondary"
                key={item.url}
                to={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="my-2 ml-3">
            <Link
              className="text-xs hover:text-white text-secondary hover:underline"
              to="/cookies"
            >
              Cookies
            </Link>
          </div>
        </div>
        <div className="!mt-10 ml-4">
          <Button variant={"outline"}>
            <CiGlobe className="text-white" />
            English
          </Button>
        </div>
      </Card>
    </nav>
  );
};
export default Sidebar;
