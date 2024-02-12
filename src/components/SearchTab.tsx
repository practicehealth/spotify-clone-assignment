import React from 'react'
import SearchNav from './SearchBar/SearchNav'

const SearchTab = () => {
  return (
    <div className='h-full min-h-screen overflow-y-auto rounded-t-2xl' style={{width: '-webkit-fill-available'}}>
      <div className='flex flex-col h-auto'> 
        <SearchNav />
      </div>
      </div>
  )
}

export default SearchTab