import { GoHomeFill } from "react-icons/go"
import { GoHome } from "react-icons/go"
import { LuSearch } from "react-icons/lu"

const sidebarLinks = [
    {
        title : "Home",
        unselectedIcon : GoHomeFill,
        selectedIcon : GoHome
    },
    {
        title : "Search",
        unselectedIcon : LuSearch,
        selectedIcon : LuSearch
    },
];

export default sidebarLinks;