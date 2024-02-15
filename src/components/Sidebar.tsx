import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import spotifyLogo from '../assets/logo-spotify.png';
interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { pathname } = useLocation();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        href: '/search',
        active: pathname === '/search',
      },
    ],
    [pathname],
  );
  return (
    <div className="flex h-full text-white">
      <div
        className="hidden
          md:flex
          flex-col
          gap-y-2
          bg-black
          h-full
          w-[350px]
          p-2
        "
      >
        {/* Sidebar top icons */}
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {/* Logo */}
            <Link to="/">
              <img src={spotifyLogo} alt="Spotify Logo" className="h-10 w-24 object-contain" />
            </Link>
            {/* Other routes */}
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>

        {/* Sidebar bottom part with library and policies etc.. */}

        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>

      {/* Main content */}
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
