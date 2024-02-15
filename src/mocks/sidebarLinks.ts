import { GoHomeFill } from 'react-icons/go'
import { GoHome } from 'react-icons/go'
import { LuSearch } from 'react-icons/lu'

const sidebarLinks = [
    {
        title : 'Home',
        unselectedIcon : GoHomeFill,
        selectedIcon : GoHome,
        href : '/'
    },
    {
        title : 'Search',
        unselectedIcon : LuSearch,
        selectedIcon : LuSearch,
        href  : '/search'
    },
];

export default sidebarLinks;