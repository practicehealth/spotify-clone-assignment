import { CiSearch } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Menu () {
    const navigate = useNavigate();

    const navigateHome  = () => {
        // 👇️ navigate to home screen
        navigate('/');
      };
    const navigateSearch  = () => {
        // 👇️ navigate to search screen
        navigate('/search');
      };



    return (
        <div className="p-4 text-white bg-[#111111] rounded flex flex-col gap-4">
            <ul className="">
            <li className="flex gap-2 justify-start items-center font-bold text-lg cursor-pointer" onClick={navigateHome}>
            <FaSpotify className="w-6 h-6"/>
                Spotify</li>
            </ul>
            <ul className="flex flex-col gap-4">
            <li className="flex gap-2 justify-start items-center cursor-pointer" onClick={navigateHome}>
            <IoMdHome className="w-6 h-6"/>
                Home
                </li>
                <li className="flex gap-2 justify-start items-center cursor-pointer" onClick={navigateSearch}>
                <CiSearch className="w-6 h-6"/>
                Search</li>
            </ul>
        </div>
    )
}