import SideMain from './SideMain'
import LibrarySection from './LibrarySection'

const SpotifySideBar = () => {
  return (
    <div className='w-[286px] min-w-[288px] bg-[#000] h-full'>
      <SideMain />
      <LibrarySection />
    </div>
  )
}

export default SpotifySideBar