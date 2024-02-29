import React from 'react'

function FooterSignUp() {
    return (
        <div className='flex justify-between items-center p-3 px-4 text-gray-200 font-sans font-medium bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500'>

            <div>
                <div className='text-sm'>Preview of Spotify</div>
                <div> Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
            </div>

            <button className='h-12 w-60 lg:w-40 bg-white text-gray-950 font-bold rounded-full hover:scale-105 duration-100'>
                Sign up free
            </button>

        </div>
    )
}

export default FooterSignUp