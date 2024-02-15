import { BiLibrary } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { FaSpotify } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { PiPlus } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import LibraryCard from './LibraryCard'
import { CiGlobe } from "react-icons/ci";

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='flex  top-0 left-0 m-0 flex-col  w-1/4 text-secondary rounded-md gap-2 h-full' >

            <div className='bg-primary flex flex-col rounded-md justify-between items-start p-6 gap-2 max-h-full'>
                <div className='flex justify-start text-left  items-center mb-2'> <FaSpotify className='flex size-6' />Spotify</div>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <Link to='/'>
                            <GoHome className='size-6' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <Link to='/search'>
                            <CiSearch className='size-6' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/search'>Search</Link>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col bg-primary flex-1 box-border rounded-md ">
                {/* Fixed Header */}
                <div className=" flex  flex-none  justify-between  items-center text-white z-10 w-full shadow-sm px-4 py-2 rounded-t-md">

                    <div className='flex items-center p-1'>
                        <div><BiLibrary className='size-6' /></div>
                        <div> Your library</div>
                    </div>
                    <div className='flex'> <PiPlus className='size-6' /></div>

                </div>
                {/* Main Content Area */}
                <div className='flex flex-1 flex-col box-border '>
                    <div className=" flex flex-col p-4 overflow-y-scroll max-h-60 gap-2">
                        <LibraryCard
                            title="Create your first playlist"
                            subtitle="it's easy, we'll help you"
                            buttonText="Create playlist"
                        />
                        <LibraryCard
                            title="Discover new music"
                            subtitle="explore curated playlists"
                            buttonText="Explore playlists"
                        />

                    </div>
                    {/* Fixed Footer */}
                    <div className=" flex flex-col text-white  w-full flex-1 rounded-b-md px-6 ">
                        <div className='flex flex-wrap text-white my-12 '>
                            <div className='flex flex-wrap gap-2'>
                                <span className="text-xs">Privacy Center</span>
                                <span className="text-xs">Privacy Policy</span>
                                <span className="text-xs">Cookies</span>
                                <span className="text-xs">About Ads</span>
                                <span className="text-xs" >Legal</span>
                                <span className="text-xs">Accessbility</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <button className="text-lg font-semibold bg-transparent rounded-full py-2 px-4 border border-black hover:scale-105 hover:font-bold flex items-center justify-center">
                                <CiGlobe className='mr-2' /> English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar