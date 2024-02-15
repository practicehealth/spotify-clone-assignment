import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

export const menus = [
  {
    id: 1,
    icon: GoHome,
    activeIcon: GoHomeFill,
    label: "Home",
    link:"/",
  },
  {
    id: 2,
    icon: BiSearch,
    activeIcon: BiSearchAlt,
    label: "Search",
    link:"/search",
  },
];
