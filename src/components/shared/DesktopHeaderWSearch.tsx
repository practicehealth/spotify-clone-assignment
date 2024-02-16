import leftArrow from '../../../public/leftArrow.svg'
import rightArrow from '../../../public/rightArrow.svg'
import searchInactive from '../../../public/searchInactive.svg'

function DesktopHeaderWSearch() {
    return (
        <header className=' hidden lg:flex w-full h-16 flex items-center justify-between px-6 py-4 sticky top-0 dimNavBG z-50'>
            <div className='flex justify-start items-center flex-1 gap-2'>
                <div className="flex gap-2">
                    <button className=" opacity-60 cursor-not-allowed bg-black bg-opacity-70 border-none rounded-full inline-flex w-8 h-8  justify-center items-center relative">
                        <img src={leftArrow} className='w-4 h-4'></img>
                    </button>
                    <button className=" opacity-60 cursor-not-allowed bg-black bg-opacity-70 border-none rounded-full inline-flex w-8 h-8  justify-center items-center relative">
                        <img src={rightArrow} className='w-4 h-4'></img>
                    </button>
                </div>
                <div className='w-full max-w-[364px] relative'>
                    <input className='rounded-[500px] w-full h-12 bg-elevatedBaseBackground px-9 py-[6px] text-white text-sm font-normal' placeholder='What do you want to play?'>

                    </input>
                    <img src={searchInactive} className='w-4 h-4 absolute top-0 bottom-0 m-auto left-3'></img>
                </div>
            </div>

            <div className="flex flex-row flex-nowrap gap-2 items-center pr-2">
                <button className=' h-12 tracking-custom box-border text-base font-bold rounded-full inline-flex items-center justify-center align-middle py-2 text-textSubdued'>
                    Premium
                </button>
                <button className=' h-12 tracking-custom box-border text-base font-bold rounded-full inline-flex items-center justify-center align-middle py-2 text-textSubdued'>
                    Support
                </button>
                <button className=' h-12 tracking-custom box-border text-base font-bold rounded-full inline-flex items-center justify-center align-middle py-2 text-textSubdued'>
                    Download
                </button>
                <div className="m-4 w-px bg-white h-[25px]"></div>
                <div className="">
                    <button className='h-12 box-border text-base font-bold rounded-full inline-flex items-center justify-center align-middle p-2 !pr-8 text-textSubdued cursor-pointer '>
                        Sign up
                    </button>
                    <button className=' h-12 rounded-full cusor-pointer text-center bg-white inline-block'>
                        <span className='rounded-full flex inline-block relative px-8 py-2 font-bold text-base min-h-12 items-center'>Log in</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default DesktopHeaderWSearch