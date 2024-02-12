import React from 'react'
import { FaGlobe } from 'react-icons/fa'
function SidebarFooter() {

  let items = ["Legal", "Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility", "Cookies"];

  return (
    <div className='bg-neutral-950 px-8 py-6 flex flex-col gap-4 rounded-b-xl'>

      <div className='flex flex-wrap'>
        {
          items.map((item, index) => {
            return (
              <li key={index} className='list-none text-sm text-gray-400 font-sans mr-4 my-1 hover:cursor-pointer hover:underline'> {item} </li>
            )
          })
        }
      </div>

      <button className='h-10 w-28 flex items-center justify-center gap-1 text-white font-semibold rounded-full hover:scale-105 border border-gray-600 hover:border-gray-100 duration-100'>
        <FaGlobe/>
        English
      </button>

    </div>
  )
}

export default SidebarFooter