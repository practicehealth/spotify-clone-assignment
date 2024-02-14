import React from 'react'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchPage() {
  return (
    <div className=' bg-gradient-to-b from-1% from-[#1f1f1f] to-[#121212] h-fit w-full rounded-xl '>
        <div className=' h-24 rounded-t-xl bg-black bg-opacity-40 flex items-center px-8 justify-between  top-0 fixed container z-10'>
            <div className='flex '>
                <button className=' rounded-full h-fit mt-2 bg-black p-1 text-white text-4xl mr-2'><MdNavigateBefore/></button>
                <button className=' rounded-full h-fit mt-2 bg-black p-1 text-white text-4xl'><MdNavigateNext/></button>
                <div className=' flex items-center ml-4 p-4  rounded-full bg-[#1f1f1f] text-white text-2xl '>
                <IoSearchOutline/><input className=' bg-[#1f1f1f] ml-2 w-96 text-lg' placeholder=' What do you want to listen to?'></input>
                </div>
                
            </div>
            
            <div className='px-14'>
                <button className='text-xl text-white opacity-80 hover:opacity-100' style={{ fontFamily: 'custom-font-bold' }}>Sign up</button>
                <button className=' font-medium hover:font-bold h-fit rounded-full text-xl py-4 px-10 bg-white mx-8' >Log in</button>
            </div>
        </div>

        <div className=' grid grid-rows-[3fr_0.6fr]'>
            <div className=' mt-24 px-8 text-3xl text-white' style={{ fontFamily: 'custom-font-black' }}>
                <div className=' flex justify-between'>
                <span>Browse all</span>
                
                </div>
                <div className=' flex flex-wrap justify-between gap-2'>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>

                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#006450] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Podcasts
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#8400E7] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Live Events
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover2.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#1E3264] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Made For You
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover1.png' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#E8115B] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        New Release
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover3.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>
                    <div className=' overflow-hidden mt-4 bg-opacity-80 size-64 bg-[#DC148C] rounded-lg p-6 text-3xl' style={{ fontFamily: 'custom-font-black' }}>
                        Hindi   
                        <img className=' rotate-[30deg] translate-x-20 cursor-pointer  translate-y-6 scale-75' src='/assets/images/cover4.jpg' />
                    </div>
                </div>
                
            </div>
            <div className=' grid grid-rows-[2.2fr_1fr] px-10 py-14 tracking-wider'>
                <div className=' grid grid-cols-[1fr_1fr_1fr_1.8fr]'>
                    <div className=' flex flex-col items-start'>
                        <span className=' text-xl text-white' style={{ fontFamily: 'custom-font-black' }}>Company</span>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>About</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Jobs</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>For the Record</button>
                    </div>
                    <div className=' flex flex-col items-start'>
                        <span className='mt-2 text-xl text-white' style={{ fontFamily: 'custom-font-black' }}>Communities</span>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>For Artists</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Developers</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Advertising</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Investors</button>
                    </div>
                    <div className=' flex flex-col items-start'>
                        <span className='mt-2 text-xl text-white' style={{ fontFamily: 'custom-font-black' }}>Useful links</span>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Support</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>Free Mobile App</button>
                        <button className='mt-2 text-xl text-white opacity-70 hover:underline hover:opacity-100'>For the Record</button>
                    </div>
                    <div className=' flex justify-end text-5xl gap-4'>
                        <FaInstagram className='hover:bg-[#424242] rounded-full bg-[#2b2b2b] text-white p-3'/>
                        <FaTwitter className=' hover:bg-[#424242] rounded-full bg-[#2b2b2b] text-white p-3'/>
                        <FaFacebook className='hover:bg-[#424242] rounded-full bg-[#2b2b2b] text-white p-3'/>
                    </div>

                </div>
                <div className='mt-10 border-t-2 border-[#2f2f2f]'>
                    <span className=' text-white opacity-70'>© 2024 Spotify AB</span>
                </div>
            </div>
        </div>
    </div>
  )
}
