import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const company = ["About", "Jobs", "For the Record"];
const Communities = ["For Artists", "Developers", "Advertising", "Investors", "Vendors"];
const useFulLinks = ["Support", "Free Mobile App"];

function Footer() {
  return (
    <div className='flex flex-col gap-16 px-8 pt-10 pb-16'>
      <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-between'>
        <div className='flex flex-col font-sans gap-2 '>
          <div className='font-bold text-lg'>Company</div>
          <div className='flex flex-col gap-1'>
            {
              company.map((item, index) => (
                <li key={index} className='list-none text-md text-gray-400  hover:cursor-pointer hover:underline'> {item} </li>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col font-sans gap-2 '>
          <div className='font-bold text-lg'>Communities </div>
          <div className='flex flex-col gap-1'>
            {
              Communities.map((item, index) => (
                <li key={index} className='list-none text-md text-gray-400  hover:cursor-pointer hover:underline'> {item} </li>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col font-sans gap-2 '>
          <div className='font-bold text-lg'>Useful links</div>
          <div className='flex flex-col gap-1'>
            {
              useFulLinks.map((item, index) => (
                <li key={index} className='list-none text-md text-gray-400  hover:cursor-pointer hover:underline'> {item} </li>
              ))
            }
          </div>
        </div>
        <div className='flex font-sans gap-4 text-xl'>
          <div className='h-12 w-12 flex items-center justify-center rounded-full p-2 bg-neutral-900 hover:bg-neutral-800'>  <FaInstagram /></div>
          <div className='h-12 w-12 flex items-center justify-center rounded-full p-2 bg-neutral-900 hover:bg-neutral-800'>  <FaTwitter /></div>
          <div className='h-12 w-12 flex items-center justify-center rounded-full p-2 bg-neutral-900 hover:bg-neutral-800'>  <FaFacebook /></div>
        </div>
      </div>
      <hr />
      <div> © 2024 Spotify AB</div>
    </div>
  )
}

export default Footer