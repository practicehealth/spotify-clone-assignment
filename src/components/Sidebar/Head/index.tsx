/// <reference types="vite-plugin-svgr/client" />
import Card from "./../../Card";
import Logo from "./../../../assets/icons/logo.svg?react";
import Home from "./../../../assets/icons/home.svg?react";
import Search from "./../../../assets/icons/search.svg?react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type MenuItemType = {
  icon: ReactNode;
  text?: string;
  url?:string;
};

export default function Index() {
  const MenuItems: MenuItemType[] =
     [ { icon: <Logo fill="#FFFFFF" /> ,url:"/"},
      { icon: <Home fill="#FFFFFF" width={24} height={24} />, text: "Home",url:"/" },
      { icon: <Search fill="#FFFFFF" />, text: "Search" ,url:"search"},
    ];


  return (
    <Card className="p-4">
      <>
        {MenuItems.map((item,index) => {
          
          return <MenuItem icon={item.icon} text={item.text} url={item.url} key={index}/>;
        })}
      </>
    </Card>
  );
}

const MenuItem = ({ icon, text,url="" }: MenuItemType) => {
  console.log("Hellow");
  
  return (
    <div className="flex my-4">
      {icon}
      {text&&<NavLink to={url} className="ml-4 text-white font-semibold">{text}</NavLink>}
    </div>
  );
};
