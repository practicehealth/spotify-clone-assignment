import { useLocation } from 'react-router-dom'
import NavigationLinks from './NavigationLinks'
import LibrarySection from './LibrarySection'
import FooterLinks from './FooterLinks'

export default function Sidebar() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className='flex flex-col h-full w-[353px]'>
            <nav className='flex flex-col gap-[8px]'>
                <div className='rounded-[8px] bg-spotify-black'>
                    <img className='mt-[12px] mx-[20px] h-[35px] w-[90px]' src='/logonew.PNG' alt='' />
                    <NavigationLinks />
                </div>

                <div className='bg-spotify-black'>
                    <LibrarySection />
                    <FooterLinks />
                </div>
            </nav>
        </div>
    )
}