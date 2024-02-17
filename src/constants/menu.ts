import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MenuListProps } from '../ts';
import { ROUTES } from './routes';

export const MENU_LIST: MenuListProps[] = [
  {
    Icon: faHome,
    label: "Home",
    href: ROUTES.home,
  },
  {
    Icon: faSearch,
    label: "Search",
    href: ROUTES.search,
  },
];

export const items = ["Legal", "Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility", "Cookies"];