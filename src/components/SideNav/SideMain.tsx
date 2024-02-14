import { FiSearch } from 'react-icons/fi';
import { GoHomeFill } from 'react-icons/go';
import { SiSpotify } from 'react-icons/si';
import { Link} from 'react-router-dom';


const SideMain = () => {
  return (
    <div className='mr-0 p-1 mb-0  flex flex-col gap-2'>
        <div className='home-search p-5 h-[172px] px-5 flex flex-col gap-6  bg-[#121212] rounded-lg'>
            
            <div className='flex w-full gap-x-2 '>
                <SiSpotify size={27}/>
                <h3 className='font-semibold'>Spotify</h3>
            </div>
            <div className='grid gap-y-6 cursor-pointer'>
                <Link to="/" className='opacity-65  flex w-full gap-x-4 items-center hover:opacity-100'>
                    <GoHomeFill size={27} />
                    <h2 className='font-bold'>Home</h2>
                </Link>
                <Link to='/search' className='opacity-65 flex w-full gap-x-4 items-center cursor-pointer hover:opacity-100'>
                    <FiSearch size={27}/>
                    <h2 className='font-bold '>Search</h2>
                </Link>
                
            </div>
           
        </div>
    </div>
  )
}

export default SideMain