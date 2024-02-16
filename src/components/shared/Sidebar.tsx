import spotifyIcon from '../../../public/spotifyIcon.svg'
import home from '../../../public/home.svg'
import homeInactive from '../../../public/homeInactive.svg'
import search from '../../../public/search.svg'
import searchInactive from '../../../public/searchInactive.svg'
import library from '../../../public/library.svg'
import plus from '../../../public/plus.svg'
import globe from '../../../public/globe.svg'

import { useLocation } from 'react-router-dom';

function Sidebar() {

    const location = useLocation();



    return (
        <div className='min-w-[353px] bg-black flex flex-col h-full relative'>
            <div className='flex flex-col h-full gap-2'>
                <div className='bg-baseBackground rounded-lg flex flex-col'>
                    <div className='mt-5'>
                        <img src={spotifyIcon} className=' ml-6'></img>
                        <ul className='px-3 py-2 w-full'>
                            <li className={`px-3 py-1`}>
                                <a href="/" className="flex gap-5 h-10 items-center">
                                    {location.pathname === '/' ? <img src={home} className=' w-6 h-6'></img> : <img src={homeInactive} className=' w-6 h-6'></img>}
                                    <span className={` text-base font-bold ${location.pathname === '/' ? 'text-white' : 'text-showAllColor'}`}>Home</span>
                                </a>
                            </li>
                            <li className='px-3 py-1'>
                                <a href="/search" className="flex gap-5 h-10 items-center">
                                    {location.pathname === '/search' ? <img src={search} className=' w-6 h-6'></img> : <img src={searchInactive} className=' w-6 h-6'></img>}
                                    <span className={` text-base font-bold ${location.pathname === '/search' ? 'text-white' : 'text-showAllColor'}`}>Search</span>
                                </a>
                            </li>
                           
                            <li className='px-3 py-1'>
                                <a href="/search-results" className="flex gap-5 h-10 items-center">
                                    {location.pathname === '/search-results' ? <img src={search} className=' w-6 h-6'></img> : <img src={searchInactive} className=' w-6 h-6'></img>}
                                    <span className={` text-base font-bold ${location.pathname === '/search-results' ? 'text-white' : 'text-showAllColor'}`}>Search Results</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col bg-baseBackground rounded-lg flex-1 relative">
                    <div className="flex flex-col flex-1 z-10 w-full">
                        <div className="">
                            <div className="flex flex-col px-4 py-2">
                                <div className="flex gap-2 items-center relative">
                                    <div className=" flex items-start">
                                        <button className='flex items-center gap-3 h-10 px-2 py-1 cursor-pointer bg-transparent max-w-full me-auto'>
                                            <img src={library} className=' w-6 h-6'></img>
                                            <span className=' text-white text-base font-bold'>Your Library</span>
                                        </button>
                                    </div>
                                    <span className='block !w-8 h-8 absolute right-2'>
                                        <button className='rounded-full w-full h-full flex justify-center items-center'>
                                            <img src={plus} className='w-4 h-4'></img>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className=" flex flex-col gap-2 p-2 !pt-0 overflow-auto">
                            <section className='flex flex-col gap-5 rounded-lg px-5 py-4 my-2 bg-elevatedBaseBackground'>
                                <div className="flex flex-col gap-2">
                                    <span className=' text-white font-bold text-base text-left'>Create your first playlist</span>
                                    <span className=' text-white font-normal text-sm text-left'>It’s easy, we’ll help you</span>
                                </div>
                                <div className="self-start">
                                    <button className='rounded-full cusor-pointer text-center bg-white inline-block'>
                                        <span className='rounded-full flex inline-block relative px-4 py-1 font-bold text-sm min-h-8 items-center'>Create playlist</span>
                                    </button>
                                </div>
                            </section>
                            <section className='flex flex-col gap-5 rounded-lg px-5 py-4 my-2 bg-elevatedBaseBackground'>
                                <div className="flex flex-col gap-2">
                                    <span className=' text-white font-bold text-base text-left'>Let’s find some podcasts to follow</span>
                                    <span className=' text-white font-normal text-sm text-left'>We’ll keep you updated on new episodes</span>
                                </div>
                                <div className="self-start">
                                    <button className='rounded-full cusor-pointer text-center bg-white inline-block'>
                                        <span className='rounded-full flex inline-block relative px-4 py-1 font-bold text-sm min-h-8 items-center'>Browse podcasts</span>
                                    </button>
                                </div>
                            </section>
                        </div>

                    </div>

                    <div className="overflow-hidden z-50 absolute bottom-0 bg-baseBackground w-full ">
                        <div className="my-8 px-6">
                            <a><span className='text-xs font-normal text-[#b3b3b3]'>Cookies</span></a>
                        </div>
                        <div className="mb-8 px-6">
                            <button className='rounded-full cursor-pointer relative font-bold text-sm border border-solid border-essentialSubdued py-[3px] pl-8 pr-[15px] text-white flex items-center'>
                                <span className="absolute left-3 w-4 h-4 top-0 bottom-0 m-auto">
                                    <img src={globe}></img>
                                </span>
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar