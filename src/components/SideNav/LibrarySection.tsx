import { GoPlus } from 'react-icons/go';
import { VscLibrary } from 'react-icons/vsc';
import CreateBox from './CreateBox';
import SideBarBottom from './SideBarBottom';

const LibrarySection = () => {
  return (
    <div className='mr-0 p-1 mb-0 flex flex-col gap-2'>
        <div className='home-search  h-[650px]  flex flex-col gap-6  bg-[#121212] rounded-lg'>
            <div className='h-[435px]'>
            <div className='flex w-full justify-between items-center p-4 pt-5 px-3'>
                <div className='flex w-full gap-4 items-center'>
                    <VscLibrary size={29} />
                    <h5 className=' text-base font-semibold'>Your Library</h5>
                </div>
               
                <GoPlus size={29} />
            </div>

            <div className='h-[380px] flex flex-col justify-around '>
                <CreateBox heading="Create your first playlist" description="It's easy we'll help you" buttonWork="create playlist" />

                <CreateBox heading="Let's find some podcasts to follow" description="We'll keep you updated on new episodes" buttonWork="Browse podcasts"/>
            </div>  
            </div>

            <div>
                <SideBarBottom />
            </div>
            
        </div>
    </div>
  )
}

export default LibrarySection