import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Mainlayout() {
    return (
        <div className="grid gap-[8px] h-full min-h-full p-[8px] relative w-full grid-rows-[1fr,auto] grid-cols-[auto,1fr]">

            <Sidebar />


            <div className="h-[647px] ">
                <Navbar />
                <div className="">
                    <Outlet />
                </div>
            </div>
            <div className="h-[66px] col-span-3 bg-red-500 flex flex-col w-full justify-items-center">
                Hello
            </div>
        </div>
    )
}