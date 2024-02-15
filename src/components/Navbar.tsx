// import React from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import SearchBox from './SearchBox';
import Button from './Button';
import SearchBox from './SearchBox';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    return (
        <header className='flex h-[64px] w-full items-center gap-[8px] justify-between z-10 px-[24px] bg-spotify-black'>
            <div className='flex items-center gap-[8px]'>
                <ArrowButtons icon={<IoIosArrowBack fontSize={28} />} />
                <ArrowButtons icon={<IoIosArrowForward color='#919191' size={28} />} />
            </div>

            {location.pathname === '/search' && <div className='flex-grow'>
                <SearchBox />
            </div>}

            <div className='flex flex-row flex-nowrap gap-[2px]'>
                <Button
                    variant='link'
                    size='medium'
                    href='#'
                >
                    Sign up
                </Button>

                <Button
                    variant='contained'
                    size='medium'
                    href='#'
                >
                    Log in
                </Button>
            </div>
        </header>
    )
}

function ArrowButtons({ icon }: { icon: React.ReactNode }) {
    return (
        <button className='h-[32px] w-[32px] border-none inline-flex items-center relative cursor-pointer p-0 bg-transparent '>
            {icon}
        </button>
    )
}

