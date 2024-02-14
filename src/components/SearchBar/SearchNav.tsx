import React from 'react'
import Nav from '../Navbar/Nav'
import BrowseAll from './BrowseAll'

const SearchNav = () => {
  return (
    <div>
        <Nav showSearchInput={true}/>
        <BrowseAll />
    </div>
  )
}

export default SearchNav