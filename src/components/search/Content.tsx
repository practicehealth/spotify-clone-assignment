import { useState } from 'react';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import artists from "../../data/Data.json";
import { useMediaQuery } from 'react-responsive';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const isSmallDevice = useMediaQuery({ maxWidth: 768 });
    const [active, setActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);


    const handleClick = () => {
        setActive(!active);
    };
    const handleSearchClick = () => {
        setSearchActive(!active);
    };

    const filteredArtists = artists.artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div className="flex justify-between h-full items-start mt-4">
                <div className="flex">
                    <NavigateBeforeOutlinedIcon sx={{ fontSize: 24, color: 'white' }} />
                    <NavigateNextOutlinedIcon sx={{ fontSize: 24, color: 'white' }} />
                </div>
                <div className="flex items-start">
                    <input type="text" placeholder="Search" value={searchTerm} onChange={handleInputChange} className={`text-white px-4 py-2 rounded-full bg-gray-800 mr-2 ${isSmallDevice ? 'w-40' : 'w-80'} border-white`} />
                </div>
                <div className="flex mr-2">
                    <button className=" text-gray-400 px-4 py-2 my-6 rounded-full font-bold mr-2">Sign up</button>
                    <button className="bg-white text-black px-4 py-2 my-6 rounded-full font-bold">Log in</button>
                </div>
            </div>
            <h2 className='text-white font-bold text-lg ml-3'>Spotify Playlist</h2>
            <div className={`grid ${isSmallDevice ? 'grid-cols-1' : 'grid-cols-5'} gap-4 mt-3 bg-zinc-900`} style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
                {filteredArtists.map(artist => (
                    <div key={artist.id} className="flex flex-col items-center">
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-40 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                        />
                        <p className="text-white">{artist.name}</p>
                    </div>
                ))}
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
        </div>
    )
}

export default Content;
