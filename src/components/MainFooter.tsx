import { LuInstagram } from 'react-icons/lu'
import { RiTwitterFill } from 'react-icons/ri'
import { SiFacebook } from 'react-icons/si'

type Props = {}

const MainFooter = (props: Props) => {
    return (
        <div className=" pt-1 pb-10 px-8 flex items-center justify-between flex-col flex-none">
            <div className="flex  justify-between items-start w-full">

                {/* footer links */}
                <div className="text-sm flex gap-4">
                    <div className='flex flex-col'>
                        <div className="text-white font-semibold text-base">Company</div>
                        <div className='flex mt-2 flex-col'>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">About</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">Jobs</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out">
                                <span className="size-3.5 ">For the Record</span>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="text-white font-semibold text-base">Communities</div>
                        <div className='flex mt-2 flex-col'>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">For Artist</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">Developers</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">Advertising</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">Investors</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out">
                                <span className="size-3.5 ">Vendors</span>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="text-white font-semibold text-base">Useful Links</div>
                        <div className='flex mt-2 flex-col'>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out mr-2">
                                <span className="size-3.5 ">Support</span>
                            </a>
                            <a href="#" className="text-gray-600 font-semibold hover:text-white  py-1 rounded-lg transition-colors duration-300 ease-in-out">
                                <span className="size-3.5 ">Free Mobile App</span>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Icons */}
                <div className="flex ">
                    <div className="flex items-center">
                        <a href="#" className="block p-1 rounded-full bg-white hover:bg-gray-300 transition-colors duration-300 ease-in-out mr-2">
                            <LuInstagram className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out" />
                        </a>
                        <a href="#" className="block p-1 rounded-full bg-white hover:bg-gray-300 transition-colors duration-300 ease-in-out mr-2">
                            <RiTwitterFill className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out" />
                        </a>
                        <a href="#" className="block p-1 rounded-full bg-white hover:bg-gray-300 transition-colors duration-300 ease-in-out">
                            <SiFacebook className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-400 w-full mt-6  "></div>
            <div className="text-sm flex w-full pt-4 text-gray-600 font-semibold">© 2024 Spotify AB </div>
        </div>
    )
}

export default MainFooter