import { FaSpotify } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { VscLibrary } from "react-icons/vsc";
import Buttons from "./Buttons";
import { FiGlobe } from "react-icons/fi";

const SidebarOptions = ({ title, desc, cta }: any) => {
  return (
    <div className="text-white bg-[#242424] rounded-md py-3 px-4 mb-6">
      <p className="font-bold mb-2 ">{title}</p>
      <p className="font-semibold text-sm mb-5">{desc}</p>
      <Buttons label={cta}></Buttons>
    </div>
  );
};

const Sidebar = () => {
  const impLinks = [
    { title: "Legal", link: "#" },
    { title: "Privacy Center", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Cookies", link: "#" },
    { title: "About Ads", link: "#" },
  ];
  const navItems = [
    { title: "Home", icon: <MdHomeFilled className="w-6 h-6" />, link: "/" },
    {
      title: "Search",
      icon: <HiMiniMagnifyingGlass className="w-6 h-6" />,
      link: "/searchresult",
    },
  ];
  return (
    <nav className="w-[560px]">
      <section className="p-6 ml-2 my-2 rounded-md bg-[#121212]">
        <div className="flex items-center gap-0.5 text-white signika w-fit  cursor-pointer">
          <FaSpotify className="w-6 h-6" />
          Spotify
        </div>
        <div>
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="flex items-center gap-4 text-white font-semibold w-fit cursor-pointer mt-5"
            >
              {item.icon}
              {item.title}
            </a>
          ))}
        </div>
      </section>
      <section className="p-2 ml-2 my-2 rounded-md bg-[#121212] ">
        <div className="flex items-center gap-4 font-bold  cursor-pointer mt-2 text-[#b3b3b3] mb-6 pl-4">
          <VscLibrary className="w-6 h-6" />
          Your Library
        </div>
        <SidebarOptions
          title={"Create your first playlist"}
          desc={"It's easy, we'll help you"}
          cta={"Create Playlist"}
        />
        <SidebarOptions
          title={"Let's find some podcasts to follow"}
          desc={"We'll keep you updated on new episodes"}
          cta={"Create Playlist"}
        />
        <section className="text-[0.7rem] font-semibold text-[#b3b3b3] px-4 mt-40">
          <ul className="flex-wrap flex items-center gap-3">
            {impLinks.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {" "}
            <a href="#">Accessibility</a>
          </div>
          <div className="mt-4">
            {" "}
            <a href="#">Cookies</a>
          </div>

          <button className="border border-[#b3b3b3] hover:border-white mt-8 mb-8 bg-inherit text-sm hover:text-base text-white font-bold py-1.5 px-4 rounded-full flex items-center justify-center gap-2">
            <FiGlobe className="w-4 h-4 hover:w-5 hover:h-5" />
            English
          </button>
        </section>
      </section>
    </nav>
  );
};

export default Sidebar;
