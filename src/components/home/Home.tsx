import { useState } from "react"
import Center from "./Center"
import SideNavbar from "./SideNavbar"
import { useMediaQuery } from 'react-responsive';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';


const Home = () => {
  const [active, setActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);


  const handleClick = () => {
    setActive(!active);
  };
  const handleSearchClick = () => {
    setSearchActive(!active);
  };


  const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="flex-none w-1/4 bg-black hidden sm:block">
          <SideNavbar />
        </div>
        <div className="flex-1 bg-black ">
          <Center />
        </div>
      </div>

      {isSmallDevice && (
        <div className="w-full bg-black flex items-center justify-between px-4 py-10">
          {/* for home icon */}
          <div className="flex items-center mt-3 text-gray-400">
            <Link to="/" className="text-sm font-medium ml-2" onClick={handleClick}>
              <HomeOutlinedIcon sx={{ fontSize: 24 }} style={{ color: active ? 'gray' : 'inherit' }} />
              <span className="text-sm font-medium ml-2" style={{ color: active ? 'gray' : 'inherit' }}>Home</span>
            </Link>
          </div>
          {/* for search button */}
          <div className="flex items-center mt-3">
            <Link to="/search" className="text-sm font-medium ml-2" onClick={handleSearchClick}>
              <SearchOutlinedIcon sx={{ fontSize: 24 }} style={{ color: 'gray' }} />
            </Link>
          </div>
          {/* your library section */}
          < div className="p-4 mt-3 text-xs text-gray-400 flex items-center justify-between transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">
            <div className="flex items-center">
              <BookmarksOutlinedIcon sx={{ fontSize: 18 }} />
              <p className="text-lg ml-2 ">Your Library</p>
            </div>
            <div className="flex items-center">
              <div className="ml-auto">
                <AddOutlinedIcon sx={{ fontSize: 18 }} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-20 bg-black flex items-center justify-between px-4 py-10 bg-red-500 ">
        <div className="text-white">
          <span>Preview of Spotify</span>
          <br />
          <span>Sign up to get unlimited offer</span>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold">Sign Up</button>
      </div>
    </div>
  )
}

export default Home
