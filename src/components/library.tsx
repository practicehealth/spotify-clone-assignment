import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Card from "./card";

export default function Library () {
    return (
        <div className="p-4 text-white bg-[#111111] rounded flex flex-col gap-4">
            <ul className="flex justify-between items-center">
            <li className="flex gap-2 justify-start items-center font-bold text-[#6d6c6c]">
            <BiLibrary />
                Your Library</li>
                <FaPlus className="text-[#6d6c6c] cursor-pointer hover:text-slate-500"/>
            </ul>
            <ul className="flex flex-col gap-4">
            <Card/>
            <Card/>
            </ul>
        </div>
    )
}