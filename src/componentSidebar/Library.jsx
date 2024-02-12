import React from 'react'
import { LuLibrary } from 'react-icons/lu'
import { FaPlus } from 'react-icons/fa'

const items = [
  {
    id: 1,
    title: "Create your first playlist",
    desc: "It's easy, we'll help you",
    btn: "Create Playlist",
  },
  {
    id: 2,
    title: "Let's find some podcasts to follow",
    desc: "We'll keep you updated on new episodes",
    btn: "Browse podcasts",
  },
]


function Library() {

  return (
    <div className='bg-neutral-950 flex flex-col rounded-t-xl'>
      <div className='flex justify-between item-center px-2 py-2 mx-6 text-lg font-medium'>
        <div className='flex gap-2 items-center'>
          <LuLibrary />
          Your Library
        </div>
        <div className='flex items-center'>
          <FaPlus />
        </div>
      </div>

      <div className='p-4 h-32 overflow-auto'>
        <div className='flex flex-col gap-6'>
          {
            items.map((item) => {
              return (
                <div key={item.id} className='flex flex-col gap-2 text-white font-medium px-4 py-5 bg-neutral-900 rounded-lg'>
                  <div className='text-lg'> {item.title} </div>
                  <div className='text-sm text-gray-200'> {item.desc} </div>
                  <button className='h-10 mt-2 w-40 bg-white text-gray-950 font-bold rounded-full hover:scale-105 duration-100'>
                    {item.btn}
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Library