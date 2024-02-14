import { Link } from "react-router-dom";

interface MenuItemProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    name: string;
    url: string;
}
function MenuItem({icon, name, url}: MenuItemProps){
    return (
        <Link to={url}>
            <div className="menuItem flex gap-3 font-semibold py-2 cursor-pointer" data-url={url}>
                <span> {icon}</span>
                <span className="text-neutral-400 hover:text-neutral-100">{name}</span>
            </div>
        </Link>
    )
}

interface MenuListProps {
    data: MenuItemProps[]
}
const MenuList = ({data}: MenuListProps) => {
  return (
    <div>
        {data.map((item, index) => (
            <MenuItem key={index} icon={item.icon} name={item.name} url={item.url}/>
        ))}
    </div>
  )
}

export default MenuList