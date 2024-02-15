import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import searchIcon from '../assets/search.png';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  searchQuery?: string;
  onSearchChange?: (searchQuery: string) => void;
}

const Header: React.FC<HeaderProps> = ({ children, className, searchQuery, onSearchChange }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={twMerge(
        `
        px-6 py-4 space-y-4
        `,
        className,
      )}
    >
      <div className="w-full flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => navigate(-1)}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        {/* Fix height thing and also conditinally add the flex to have the arrows and search in a same container */}
        {pathname === '/search' && (
          <div className="hidden md:flex h-9 items-center w-[300px] ml-3 rounded-full border-2">
            <img className="ml-2" src={searchIcon} alt="" />
            <input
              id="search-input"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="Search for songs, artists, albums..."
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="bg-transparent border-0 text-ellipsis overflow-hidden whitespace-nowrap outline-none pt-0  pb-[0] pl-[12px]"
            />
          </div>
        )}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => navigate('/')}
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => navigate('/search')}
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <button
                className="
                    bg-transparent
                    text-neutral-300
                    font-medium
                  "
              >
                Sign up
              </button>
            </div>
            <div>
              <Button className="mt-0" buttonText="Log in" />
            </div>
          </>
        </div>
      </div>
      {/* Display search bar at bottom in search page only */}
      {pathname === '/search' && (
        <div className="flex md:hidden items-center py-2 rounded-full border-2">
          <img className="mx-2" src={searchIcon} alt="" />
          <input
            id="search-input"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="Search for songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="bg-transparent border-0 text-ellipsis overflow-hidden whitespace-nowrap outline-none pt-0 pr-[100px] pb-[0] pl-[12px]"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Header;
