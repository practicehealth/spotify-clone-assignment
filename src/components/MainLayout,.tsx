import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Button from './Button';

export default function Mainlayout() {
    return (
        <div className='grid gap-[8px] h-full min-h-full p-[8px] relative w-full grid-rows-[1fr,auto] grid-cols-[auto,1fr]'>

            <Sidebar />


            <div className='h-[647px]'>
                <Navbar />
                <div className='h-full w-full overflow-y-scroll pb-20'>
                    <Outlet />
                </div>
            </div>
            <div className='relative z-50 h-[66px] col-span-3 bg-gradient-footer flex flex-col w-full justify-items-center pt-[11px] pr-[24px] pb-[7px] pl-[15px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-search font-bold'>Preview of Spotify</p>
                        <p className='text-base font-semibold'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <Button
                        variant='contained'
                        size='medium'
                    >
                        Sign up free
                    </Button>
                </div>
            </div>
        </div>
    )
}