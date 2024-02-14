import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeadingArea from '../components/searchResult/HeadingArea'
import Topresult from '../components/searchResult/Topresult'
import { SongList } from '../components/searchResult/SongList'
import ArtistSection from '../components/searchResult/ArtistSection'

const SearchResult = () => {
  return (
    <div className=' flex min-w-sreen min-h-screen bg-black '>
        {/** sidebsr */}
       
            <Sidebar />
        
        {/** main */}
        <div>
            <div className=' w-full'>
                <Navbar flag={true} />
            </div>
            <div className=' px-2'>
                <HeadingArea />
            </div>
            <div className=' flex justify-between flex-col gap-2 md:flex-row md:gap-0 w-full text-white mt-1'>
                <div className=' w-full sm:w-[80%] md:w-[48%] px-4 sm:px-2'>
                    <h1 className=' text-lg font-semibold'>Top Results</h1>
                    <Topresult />
                </div>
                <div className=' w-full sm:w-[80%] md:w-[48%] px-4 sm:px-2'>
                    <h1 className=' text-lg font-semibold'>Songs</h1>
                    <SongList />
                </div>

            </div>
            <div className=' text-white px-2 sm:px-1 mt-1'>
                <h1 className='px-4 sm:px-2 text-lg font-semibold'>Artists</h1>
                <ArtistSection />
            </div>

        </div>
    </div>
  )
}

export default SearchResult