import React from 'react'
import Menu from '../componentSidebar/Menu.jsx'
import Library from '../componentSidebar/Library.jsx'
import SidebarFooter from '../componentSidebar/SidebarFooter.jsx'

function SideBar() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <Menu />
        <Library />
      </div>
      <SidebarFooter />
    </>
  )
}

export default SideBar