import { BiLibrary } from 'react-icons/bi'
import Button from './Button';
import { VscAdd } from 'react-icons/vsc';

export default function LibrarySection() {
    return (
        <div className='flex flex-col bg-spotify-black rounded-[8px] h-[239px]'>
            <ul className='py-[8px] px-[12px]'>
                <li className='px-[12px] py-[4px] flex items-center justify-between'>
                    <div className='flex items-center gap-[20px] h-[40px]'>
                        <div><BiLibrary color='#A7A7A7' size={24} /></div>
                        <p className='text-spotify-text-muted text-base font-700'>Your Library</p>
                    </div>
                    <Button variant='link' size='small' className='rounded-full'>
                        <VscAdd size={18} fontWeight={700} />
                    </Button>
                </li>
            </ul>

            <div className='flex flex-col gap-[24px] overflow-y-scroll '>
                <div className='mx-2 py-4 px-5 rounded-[8px] bg-spotify-selected flex flex-col gap-2'>
                    <p className='font-semibold text-base'>Create your first palylist</p>
                    <p className='text-xs font-semibold'>It's easy, we'll help you</p>
                    <Button variant='contained' size='small' className='mt-[12px] w-max'>
                        Create playlist
                    </Button>
                </div>
                <div className='mx-2 py-4 px-5 rounded-[8px] bg-spotify-selected flex flex-col gap-2 mb-[24px]'>
                    <p className='font-semibold text-base'>Create your first palylist</p>
                    <p className='text-sm font-semibold'>It's easy, we'll help you</p>
                    <Button variant='contained' size='small' className='mt-4 w-max'>
                        Create playlist
                    </Button>
                </div>
            </div>
        </div>
    )
}