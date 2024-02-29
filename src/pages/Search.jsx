import React from 'react'
import categories from '../data/categories.js'

function Search() {
  return (
    <div className='p-4 flex flex-col gap-3'>
      <h2 className='text-xl font-bold'>Browse all</h2>
      <div className='flex flex-wrap gap-6 gap-x-10 p-4 '>
        {
          categories.map((item) => {
            return (
              <div
                key={item.id}
                className='relative h-48 w-48 px-4 py-2 overflow-hidden rounded-lg'
                style={{
                  backgroundColor: `${item.color}`
                }}
              >
                <h3 className='text-xl font-bold'> {item.title} </h3>
                <img
                  src={item.cover}
                  alt="image"
                  className="absolute bottom-0 right-0 transform rotate-45 h-20 "
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Search