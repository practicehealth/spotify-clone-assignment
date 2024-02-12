// import React from 'react'
import { BsSpotify } from "react-icons/bs"
import MenuItem from "./MenuItem"
import sidebarLinks from "../mocks/sidebarLinks"
import { VscAdd } from "react-icons/vsc"
import Button from "./Button"
import sidebarFooterLinks from "../mocks/sidebarFooterLinks"
import { IoGlobeOutline } from "react-icons/io5"
import { useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="flex flex-col h-full w-[353px]">
            <nav className="flex flex-col gap-[8px]">
                <div className="rounded-[8px] bg-spotify-black">
                    {/* <BsSpotify size={26} className="mt-[20px] mx-[24px]" /> */}
                    <img className="mt-[12px] mx-[20px] h-[35px] w-[90px]" src="/logonew.PNG" alt="" />
                    <ul className="py-[8px] px-[12px]">
                        {
                            sidebarLinks.map((item) =>
                                <li className="px-[12px] py-[4px]">
                                    <MenuItem
                                        selected={location.pathname === item.href}
                                        key={item.title}
                                        icon={<item.unselectedIcon color={location.pathname === item.href ? "#FFFFFF" : "#A7A7A7"} size={26} />}
                                        text={item.title}
                                        href={item.href}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="bg-spotify-black">
                    <div className="flex flex-col bg-spotify-black rounded-[8px] h-[239px]">
                        <ul className="py-[8px] px-[12px]">
                            <li className="px-[12px] py-[4px] flex items-center justify-between">
                                <div className='flex items-center gap-[20px] h-[40px]'>
                                    <div><BsSpotify color="#A7A7A7" size={24} /></div>
                                    <p className='text-spotify-text-muted text-base font-700'>Your Library</p>
                                </div>
                                <Button variant="link" size="small" className="rounded-full">
                                    <VscAdd size={18} fontWeight={700} />
                                </Button>
                            </li>
                        </ul>

                        <div className="flex flex-col gap-[24px] overflow-y-scroll ">
                            <div className="mx-2 py-4 px-5 rounded-[8px] bg-spotify-selected flex flex-col gap-2">
                                <p className="font-semibold text-base">Create your first palylist</p>
                                <p className="text-xs font-semibold">It's easy, we'll help you</p>
                                <Button variant="contained" size="small" className="mt-[12px] w-max">
                                    Create playlist
                                </Button>
                            </div>
                            <div className="mx-2 py-4 px-5 rounded-[8px] bg-spotify-selected flex flex-col gap-2 mb-[24px]">
                                <p className="font-semibold text-base">Create your first palylist</p>
                                <p className="text-sm font-semibold">It's easy, we'll help you</p>
                                <Button variant="contained" size="small" className="mt-4 w-max">
                                    Create playlist
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className="h-[208px] bg-spotify-black w-full rounded-[8px]">
                        <div className="my-[32px] mx-0 px-[24px] py-0">
                            <div className="flex flex-wrap">
                                {
                                    sidebarFooterLinks.map((item) => (
                                        <div key={item.title} className="mr-[16px]">
                                            <a
                                                className="text- text-spotify-text-muted mb-[8px] no-underline"
                                                href="#"
                                            >
                                                <span className="text-xxs">{item.title}</span>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="mr-[16px]">
                                <a
                                    className="text- text-spotify-text-muted mb-[8px] no-underline"
                                    href="#"
                                >
                                    <span className="text-xxs">Cookies</span>
                                </a>
                            </div>
                        </div>
                        <div className="mb-[32px] px-[24px]">
                            <button
                                className="flex items-center font-semibold pl-[10px] pr-[14px] py-[5px] text-button rounded-full relative text-center border-[1px] border-[#878787] "
                            >
                                <div className="flex items-center gap-1">
                                    <IoGlobeOutline size={18} />
                                    <span>
                                        English
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}