import { useState } from "react"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';



const SideNavbar = () => {
    const [active, setActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
   

    const handleClick = () => {
        setActive(!active);
    };
    const handleSearchClick = () => {
        setSearchActive(!active);
    };

    return (
        <div className="flex flex-col items-start justify-start bg-black text-white p-4">
            <div className="flex items-center cursor-pointer">
                <img src="../images/spotifyicon.png"
                    className="h-6 w-6 rounded-full "
                    style={{ objectFit: 'cover' }}
                />
                <span className="text-md font-bold">Spotify</span>
            </div>
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
                    <SearchOutlinedIcon sx={{ fontSize: 24 }} style={{ color: searchActive ? 'gray' : 'inherit' }} />
                    <span className="text-sm font-medium ml-2" style={{ color: searchActive ? 'gray' : 'inherit' }}>Search</span>
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
            {/* crete playlist section */}
            <div className="w-full bg-zinc-900 flex flex-col items-center justify-center h-150px rounded-lg cursor-pointer mt-3">
                <div className="w-full flex flex-col  px-3 pb-2 ">
                    <p className="text-white text-lg font-bold">Create your first playlist</p>
                    <p className="text-white text-sm mt-1">It's easy, it will help you</p>
                    <button className="bg-white text-black px-4 py-2 mt-6 rounded-full font-bold w-3/4">Create Playlist</button>
                </div>
            </div>

            <div className="w-full bg-zinc-900 flex flex-col items-center justify-center h-200px rounded-lg mt-6 cursor-pointer">
                <div className="w-full flex flex-col  px-3 py-1 ">
                    <p className="text-white text-lg font-bold">Lets find some Podcast to listen</p>
                    <p className="text-white text-sm mt-1">We'll keep you updated on new </p>
                    <p className="text-white text-sm mt-1">episodes</p>
                </div>
            </div>


            {/* for legal */}
            <div className="w-full flex flex-col mt-6">
                <div className="grid grid-cols-3 gap=2">
                    {/* First row */}
                    <div className="text-zinc-500 text-xs font-bold transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Legal</div>
                    <div className="text-zinc-500 text-xs font-bold transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Privacy Center</div>
                    <div className="text-zinc-500 text-xs font-bold transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Privacy Policy</div>
                    <div className="text-zinc-500 text-xs font-bold mt-4 transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Cookies</div>
                    <div className="text-zinc-500 text-xs font-bold mt-4 transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">About ads</div>
                    <div className="text-zinc-500 text-xs font-bold mt-4 transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Accesibility</div>
                </div>
            </div>
            <button className="bg-white text-black px-4 py-2 mb-6 mt-6 rounded-full font-bold w-2/4"><LanguageOutlinedIcon className="mr-2"/>English</button>
        </div >
    )
}

export default SideNavbar