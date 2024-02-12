import React from 'react'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function RightBar() {
  return (
    <div className=' bg-gradient-to-b from-1% from-[#1f1f1f] to-[#121212] h-fit w-full rounded-xl '>
        <div className=' h-24 rounded-t-xl bg-black bg-opacity-40 flex items-center px-8 justify-between  top-0 fixed container z-10'>
            <div className=''>
                <button className=' rounded-full bg-black p-1 text-white text-4xl mr-2'><MdNavigateBefore/></button>
                <button className=' rounded-full bg-black p-1 text-white text-4xl'><MdNavigateNext/></button>
            </div>
            <div className='px-14'>
                <button className='text-xl text-white opacity-80 hover:opacity-100' style={{ fontFamily: 'custom-font-bold' }}>Sign up</button>
                <button className=' font-medium hover:font-bold h-fit rounded-full text-xl py-4 px-10 bg-white mx-8' >Log in</button>
            </div>
        </div>

        <div className=' grid grid-rows-[3fr_2fr]'>
            <div className=' mt-24 px-8 text-3xl text-white' style={{ fontFamily: 'custom-font-black' }}>
                <div className=' flex justify-between'>
                <span>Spotify Playlists</span>
                <button className=' text-lg tracking-wide opacity-70 hover:underline hover:opacity-100' style={{ fontFamily: 'custom-font-book' }}>Show all</button>
                </div>
                <div className=' flex justify-between'>
                    <div className=' hover:bg-[#292929] hover:duration-300 mt-2 bg-opacity-80 w-64 bg-[#101010] size-fit rounded-lg p-6 text-base cursor-pointer' style={{ fontFamily: 'custom-font-book' }}>
                        <img className=' shadow-[0_0_30px_4px_rgba(0,0,0,1)] size-52 rounded' src='/assets/images/img1.jpg'/>
                        <div className=' pt-4'>
                            <span className=' text-xl' style={{ fontFamily: 'custom-font-bold' }}>Happy Hits!</span><br/>
                            <span className=' opacity-60'>Hits to boost your mood and fill you with happiness!</span>
                        </div>
                    </div>
                    <div className=' hover:bg-[#292929] hover:duration-300 mt-2 bg-opacity-80 w-64 bg-[#101010] cursor-pointer size-fit rounded-lg p-6 text-base' style={{ fontFamily: 'custom-font-book' }}>
                        <img className=' shadow-[0_0_30px_4px_rgba(0,0,0,1)] size-52 rounded' src='/assets/images/img2.jpg'/>
                        <div className=' pt-4'>
                            <span className=' text-xl' style={{ fontFamily: 'custom-font-bold' }}>With You!</span><br/>
                            <span className=' opacity-60'>The gentle sound of some of the greatest!</span>
                        </div>
                    </div>
                    <div className=' hover:bg-[#292929] hover:duration-300 mt-2 bg-opacity-80 w-64 bg-[#101010] cursor-pointer size-fit rounded-lg p-6 text-base' style={{ fontFamily: 'custom-font-book' }}>
                        <img className=' shadow-[0_0_30px_4px_rgba(0,0,0,1)] size-52 rounded' src='/assets/images/img3.jpg'/>
                        <div className=' pt-4'>
                            <span className=' text-xl' style={{ fontFamily: 'custom-font-bold' }}>Little Bit more!</span><br/>
                            <span className=' opacity-60'>Groove to the tunes a little bit more!</span>
                        </div>
                    </div>
                    <div className=' hover:bg-[#292929] hover:duration-300 mt-2 bg-opacity-80 w-64 bg-[#101010] size-fit rounded-lg p-6 text-base' style={{ fontFamily: 'custom-font-book' }}>
                        <img className=' shadow-[0_0_30px_4px_rgba(0,0,0,1)] size-52 rounded' src='/assets/images/img4.jpg'/>
                        <div className=' pt-4'>
                            <span className=' text-xl' style={{ fontFamily: 'custom-font-bold' }}>Hire Me!</span><br/>
                            <span className=' opacity-60'>Pleaseeeeeeeeeeeeeeeee! My playlist game is strong!</span>
                        </div>
                    </div>
                    <div className=' hover:bg-[#292929] hover:duration-300 mt-2 bg-opacity-80 w-64 bg-[#101010] size-fit rounded-lg p-6 text-base' style={{ fontFamily: 'custom-font-book' }}>
                        <img className=' shadow-[0_0_30px_4px_rgba(0,0,0,1)] size-52 rounded' src='/assets/images/img5.jpg'/>
                        <div className=' pt-4'>
                            <span className=' text-xl' style={{ fontFamily: 'custom-font-bold' }}>Lets Work!</span><br/>
                            <span className=' opacity-60'>Let's work, Let's make magic together!</span>
                        </div>
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
