import React from 'react'
import spotifyWhiteLogo from '../assets/spotify-white-logo.png'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Menu() {
  return (
    <div className='flex flex-col gap-4 bg-neutral-950 py-4 px-8 text-xl font-sans  font-medium text-gray-400 duration-100 rounded-lg'>

      <Link
        to={'/'}
        className='flex gap-4 items-center hover:text-gray-100 hover:cursor-pointer'
      >
        <img
          src={spotifyWhiteLogo}
          alt="spotifyLogo"
          className='h-5 rounded-full bg-white'
        />
        Spotify
      </Link>

      <Link
        to={'/'}
        className='flex gap-4 items-center hover:underline  hover:text-gray-100 hover:cursor-pointer' >
        <FaHome />
        Home
      </Link>

      <Link
        to={'/search'}
        className='flex gap-4 items-center  hover:underline  hover:text-gray-100 hover:cursor-pointer'>
        <FaSearch />
        Search
      </Link>

    </div>
  )
}

export default Menu