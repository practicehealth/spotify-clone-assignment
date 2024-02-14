import '../App.css';
import logo from '/assets/images/logo.png';
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { CiGlobe } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {
    const [hasScrolled, setHasScrolled] = useState(false);

    const handelScroll = () => {
      const scrollTop = document.getElementById('scrollable-content').scrollTop;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };


  return (
      <div className=' col-span-1 row-span-1 size-full grid grid-rows-[1fr_3fr]'>

        <div className=' bg-[#121212] mr-2 rounded-[0.66rem] flex flex-col text-white pl-8 pt-8 gap-3'>
          <img src={logo} className=' w-[6rem]' />
          
          <NavLink to={"/"} className={({isActive}) => `flex items-center text-4xl ${isActive ? "text-green-600" : ""} ` }>
            
              <GoHomeFill /> <span className=' p-2 ml-4 mt-2 text-xl tracking-wider' style={{ fontFamily: 'custom-font-title' }}>Home</span>          

          </NavLink>
          

          <NavLink to={'/search'} className={({isActive}) => `flex items-center text-4xl ${isActive ? "text-green-600": ""}`}>

              <IoSearchOutline /> <span className=' p-2 ml-4 mt-2 text-xl tracking-wider' style={{ fontFamily: 'custom-font-title' }}>Search</span>         

          </NavLink>
          

        </div>

        <div className=' bg-[#121212] rounded-lg m-2 ml-0 grid grid-rows-[1fr_3fr_3fr] text-white items-center'>

          <div className={` items-center size-full shadow-2xl ${hasScrolled ? 'shadow-black' : '' }  z-10 flex tracking-wide text-xl justify-between px-6`} style={{ fontFamily: 'custom-font-book' }} >
            <div className='flex text-2xl '><BiLibrary/> <span className='text-lg pl-2'>Your Liberary</span></div> 
            <div><FaPlus/></div>
          </div>

          <div className='overflow-y-scroll max-h-64 scroll-hidden' id='scrollable-content' onScroll={handelScroll} >
            <div className='  bg-[#242424] flex flex-col p-5 rounded-xl m-2 mb-6'>
              <span className=' text-lg mb-1' style={{ fontFamily: 'custom-font-bold' }}>Create your first playlist</span>
              <span className=' mb-1' style={{ fontFamily: 'custom-font-book' }}>It's easy, we'll help you</span>
              <button className=' w-fit mt-6 mb-1 px-4 rounded-full bg-white p-2 text-[#242424]' style={{ fontFamily: 'custom-font-bold' }}>Create playlist</button>
            </div>
            <div className='  bg-[#242424] flex flex-col p-5 rounded-xl m-2'>
              <span className=' text-lg mb-1' style={{ fontFamily: 'custom-font-bold' }}>Let's find some podcasts to follow</span>
              <span className=' mb-1' style={{ fontFamily: 'custom-font-book' }}>We will keep you updated on new episodes</span>
              <button className=' w-fit px-4 mt-6 mb-1 rounded-full bg-white p-2 text-[#242424]' style={{ fontFamily: 'custom-font-bold' }}>Browse podcasts</button>
            </div>

          </div>

          <div className='px-8 flex flex-wrap gap-x-8 gap-y-4'>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Legal</button>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Privacy Center</button>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Privacy Policy</button>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Cookies</button>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>About Ads</button>
            <button className=' hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Accessibility</button>
            <button className=' w-full text-left hover:underline text-[#929292] text-sm tracking-wide' style={{ fontFamily: 'custom-font-book' }}>Cookies</button>
            <button className=' items-center flex align-middle gap-2 rounded-full py-1 px-3 border mt-6'><CiGlobe className=' text-2xl'/><span className=' pr-1 tracking-wide text-lg pt-1' style={{ fontFamily: 'custom-font-black' }}>English</span></button>
          </div>
        </div>
      </div> 
  )
}


