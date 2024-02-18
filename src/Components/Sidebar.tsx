import React from 'react';
import Homeicon from '../Assets/Icons/Homeicon';
import Logo from '../Assets/Icons/Logo';
import Searchicon from '../Assets/Icons/Searchicon';
import Libraryicon from '../Assets/Icons/Libraryicon';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';



const Sidebar:React.FC = () => {
  return (
    //max-h-[797px] w-[301px]
    <div className='fixed w-1/5 h-full px-2 py-2 bg-black '>
       <div className='w-full h-[155px] bg-customMajor rounded-lg flex flex-col' >
        <div className='mt-5'>
          <Logo /> 
        </div>
  <Link to='/'>
        <div className='flex gap-[23px] text-white cursor-pointer rounded-[6px] w-[281px] h-[50px] pl-[26px] mt-[30px] '>
          <Homeicon/>
          <h1 className='hidden text-[19px] md:block hover:underline'>Home</h1>
        </div>
        </Link>
  <Link to='/search'>
        <div className='flex gap-[23px] hover:underline cursor-pointer text-white rounded-[6px] w-[281px] h-[50px] pl-[26px]   '>
          <Searchicon/>
          <h1 className='hidden text-[19px] md:block hover:underline'>Search</h1>
        </div>
        </Link>  
       </div>
       
       <div className=' w-full h-[300px] mt-2 mb-2 overflow-y-auto overflow-x-hidden  rounded-md bg-customMajor'>
       <div className='flex  text-white rounded-[6px] w-[281px] h-[50px]  items-center justify-between px-2 '>
       <div className='flex gap-[23px] text-white cursor-pointer rounded-[6px] w-[281px] h-[50px] pl-[26px] mt-[30px] '>
       <Libraryicon/>
          <h1 className='hidden  md:text-[19px]  md:block hover:underline'>Your Library</h1>
          <button className=" ml-auto flex justify-end rounded-[50%] w-auto"><FaPlus className='text-xl font '/></button>
        </div>
        
        </div>
                
        <div className='p-6 text-white font-semibold mt-4 rounded-lg bg-[#242424] w-full h-auto mx-1 '>
        <p className='font-bold '>Create your first Playlist</p>
        <p className='font-semibold'>It's easy,we'll help you  </p>
         <button className='md:px-4 md:py-2 px-2 py-2  mt-4 md:text-[16px] sm:text-sm  font-semibold text-black bg-white rounded-full'>Create Playlist</button>
       </div>
       <div className='p-6 text-white font-semibold mt-2 rounded-md bg-[#242424] w-full h-auto mx-1 '>
        <p className='font-bold  text-sm md:text-[16px]'>Let's find some Podcasts to follow</p>
        <p className='font-semibold'>We'll keep you updated on new episodes  </p>
         <button className='md:px-4 md:py-2 px-2 py-2  mt-4 md:text-[16px] sm:text-sm  font-semibold text-black bg-white rounded-full'>Browse Podcasts</button>
       </div>
       </div> 

       <div className='flex flex-wrap w-full h-auto gap-4 px-4 mt-4 text-white'>
        <a href='#' className='mx-4 text-sm text-gray-300' >Legal</a>
        <a href='#' className='mx-4 text-sm text-gray-300'>Privacy Center</a>
        <a href='#' className='mx-4 text-sm text-gray-300'>Privacy Policy</a>
        <a href='#'className='mx-4 text-sm text-gray-300'>Cookies</a>
        <a href='#'className='mx-4 text-sm text-gray-300'>About Ads</a>
        <a href='#'className='mx-4 text-sm text-gray-300'>Accessiblity</a>
        <a href='#'className='mx-4 text-sm text-gray-300'>Legal</a>
        <a href='#'className='mx-4 text-sm text-gray-300'>Legal</a>
        

       </div>
       <button className='flex items-center gap-2 px-3 py-1 mx-4 mt-4 text-white border border-white rounded-full '>
        <TbWorld/>
        <span className='text-white'>English</span>
       </button>
    </div>
  )
}

export default Sidebar