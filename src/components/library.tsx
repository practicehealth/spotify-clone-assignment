import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { SlSocialSpotify } from "react-icons/sl";

export default function Library () {
    return (
        <div className="p-4 text-white bg-[#111111] rounded flex flex-col gap-4">
            <ul className="">
            <li className="flex gap-2 justify-start items-center ">
            <SlSocialSpotify />
                Spotify</li>
            </ul>
            <ul className="flex flex-col gap-4">
            <li className="flex gap-2 justify-start items-center">
            <IoMdHome />
                Home
                </li>
                <li className="flex gap-2 justify-start items-center">
                <CiSearch />
                Search</li>
            </ul>
        </div>
    )
}