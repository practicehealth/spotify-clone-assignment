import { IoGlobeOutline } from 'react-icons/io5';
import sidebarFooterLinks from '../mocks/sidebarFooterLinks';

export default function FooterLinks() {
    return (
        <div className='h-[208px] bg-spotify-black w-full rounded-[8px]'>
            <div className='my-[32px] mx-0 px-[24px] py-0'>
                <div className='flex flex-wrap'>
                    {
                        sidebarFooterLinks.map((item) => (
                            <div key={item.title} className='mr-[16px]'>
                                <a
                                    className='text- text-spotify-text-muted mb-[8px] no-underline'
                                    href='#'
                                >
                                    <span className='text-xxs'>{item.title}</span>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='mr-[16px]'>
                    <a
                        className='text- text-spotify-text-muted mb-[8px] no-underline'
                        href='#'
                    >
                        <span className='text-xxs'>Cookies</span>
                    </a>
                </div>
            </div>
            <div className='mb-[32px] px-[24px]'>
                <button
                    className='flex items-center font-semibold pl-[10px] pr-[14px] py-[5px] text-button rounded-full relative text-center border-[1px] border-[#878787] '
                >
                    <div className='flex items-center gap-1'>
                        <IoGlobeOutline size={18} />
                        <span>
                            English
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}