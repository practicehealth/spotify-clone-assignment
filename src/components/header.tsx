import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function Header() {
    return (
        <header className="w-full h-[64px] rounded-t bg-[#111111] flex justify-between items-center p-4">
            <ul className="flex gap-2">
                <li className="bg-[#090909] rounded-full w-8 h-8 flex items-center justify-center">
                <SlArrowLeft className="w-4 h-4 text-[#a4a4a4]" />
                </li>
                <li className="bg-[#090909] rounded-full w-8 h-8 flex items-center justify-center">
                <SlArrowRight className="w-4 h-4 text-[#a4a4a4]" />
                </li>
                </ul>
                <ul className="flex gap-4 justify-center items-center">
                <li className="text-[#a4a4a4] cursor-pointer">Sign up</li>
                <div className="bg-white rounded-2xl w-20 py-2 flex justify-center items-center cursor-pointer">
                <li className="text-black font-semibold">Log in</li>
                </div>
                </ul>
            

        </header>
    )
}