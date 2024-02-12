import { CiSearch } from 'react-icons/ci';

export default function SearchBox() {
    return (
        <div className='flex items-center gap-[8px]'>
            <div className='relative flex-grow-0 flex-shrink basis-[364px]'>
                <form>
                    <input
                        className='rounded-[500px] bg-spotify-selected pt-[6px] pr-[36px] pl-[36px] pb-[6px] w-full text-ellipsis h-[48px] outline-none border-none focus-visible:outline focus-visible:outline-white text-search'
                        placeholder='What do you want to listen to?'
                    />

                    <div className='flex items-center absolute left-[12px] right-[12px] top-0 bottom-0 pointer-events-none'>
                        <CiSearch fontSize={20} />
                    </div>
                </form>
            </div>
        </div>
    )
}