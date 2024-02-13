import { BiHome, BiSearch } from "react-icons/bi";
import { urls } from "./url";
import { MdHomeFilled } from "react-icons/md";
import { RiSearchFill } from "react-icons/ri";
import { IconType } from "react-icons";

export type navLinksType = {
  title: string;
  url: string;
  icon: IconType;
  activeIcon: IconType;
};

export const navLinks: navLinksType[] = [
  {
    title: "Home",
    url: urls.home,
    icon: BiHome,
    activeIcon: MdHomeFilled,
  },
  {
    title: "Search",
    url: urls.search,
    icon: BiSearch,
    activeIcon: RiSearchFill,
  },
];
