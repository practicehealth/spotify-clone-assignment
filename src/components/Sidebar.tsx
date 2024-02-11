// import React from 'react'
import { BsSpotify } from "react-icons/bs"
import MenuItem from "./MenuItem"
import sidebarLinks from "../mocks/sidebarLinks"
import { VscAdd } from "react-icons/vsc"
import Button from "./Button"

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full w-[353px]">
            <nav className="flex flex-col gap-[8px]">
                <div className="rounded-[8px] bg-spotify-black">
                    <BsSpotify size={26} className="mt-[20px] mx-[24px]" />
                    <ul className="py-[8px] px-[12px]">
                        {
                            sidebarLinks.map((item) =>
                                <li className="px-[12px] py-[4px]">
                                    <MenuItem
                                        key={item.title}
                                        icon={<item.unselectedIcon size={26} />}
                                        text={item.title}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="flex flex-col bg-spotify-black rounded-[8px]">
                    <ul className="py-[8px] px-[12px]">
                        <li className="px-[12px] py-[4px] flex items-center justify-between">
                            <div className='flex items-center gap-[20px] h-[40px]'>
                                <div><BsSpotify size={24} /></div>
                                <p className='text-white text-base font-700'>Your Library</p>
                            </div>
                            <Button variant="link" size="small" className="rounded-full">
                                <VscAdd size={18}/> 
                            </Button>
                        </li>
                    </ul>

                    <div className="mx-2 py-4 px-5 rounded-[8px] bg-spotify-selected flex flex-col gap-2">
                        <p className="font-semibold text-base">Create your first palylist</p>
                        <p className="text-sm font-semibold">It's easy, we'll help you</p>
                        <Button variant="contained" size="small" className="mt-4 w-max">
                            Create playlist
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}