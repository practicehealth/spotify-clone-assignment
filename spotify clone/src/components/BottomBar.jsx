import React from 'react'

export default function bottomBar() {
  return (
    <div className=' items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 size-full flex justify-between'>
        <div className='text-white py-[0.70rem] px-4'>
            <span className=' tracking-wide text-lg' style={{ fontFamily: 'custom-font-title' }}>Preview of Spotify</span><br/><span className=' text-xl' style={{ fontFamily: 'custom-font-book' }}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
        </div>
        <button className=' h-fit font-medium hover:font-bold rounded-full text-xl py-4 px-10 bg-white mx-8' >Sign up free</button>
    </div>
  )
}
