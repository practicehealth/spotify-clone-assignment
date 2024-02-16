import spotifyCircle from '../../../public/spotifyCircle.svg'
import whiteSearch from '../../../public/whiteSearch.svg'
import MobileMenu from '../UI/MobileMenu'


function MobileHeader() {
    return (
        <header className='w-full h-14 flex items-center justify-between p-4 sticky top-0 backgroundHeaderShade z-50'>
            <div className="flex">
                <img src={spotifyCircle} className='w-8 h-8'></img>
            </div>
            <div className="flex flex-row flex-nowrap items-center">
                <a className='flex px-4 items-center h-full'>
                    <img src={whiteSearch} className='w-4 h-4'></img>
                </a>
                <button className=' h-8 rounded-full cusor-pointer text-center bg-white inline-block'>
                    <span className='rounded-full flex inline-block relative px-4 py-1 font-bold text-base items-center'>Open App</span>
                </button>
                <div className='w-6 h-6 ml-4'>
                    {/* <img src={ham} className='w-6 h-6 ml-4'></img> */}
                    <MobileMenu/>
                </div>
                
            </div>
        </header>
    )
}

export default MobileHeader