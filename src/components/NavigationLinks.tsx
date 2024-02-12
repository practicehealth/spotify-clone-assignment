import { useLocation } from 'react-router-dom';
import sidebarLinks from '../mocks/sidebarLinks';
import MenuItem from './MenuItem';

export default function NavigationLinks() {
    const location = useLocation();
    return (
        <ul className='py-[8px] px-[12px]'>
            {
                sidebarLinks.map((item) =>
                    <li className='px-[12px] py-[4px]'>
                        <MenuItem
                            selected={location.pathname === item.href}
                            key={item.title}
                            icon={<item.unselectedIcon color={location.pathname === item.href ? '#FFFFFF' : '#A7A7A7'} size={26} />}
                            text={item.title}
                            href={item.href}
                        />
                    </li>
                )
            }
        </ul>
    )
}