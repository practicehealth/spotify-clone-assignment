import Button from "./../Button";
import LeftArrow from "./../../assets/icons/leftarrow.svg?react"
import RightArrow from "./../../assets/icons/rightarrow.svg?react"
import { useLocation } from "react-router-dom";
import SearchBar from "./Searchbar";

export default function Navbar() {
  const {pathname} = useLocation();
  console.log(pathname);
  
  return (
        <div className="sticky w-full top-0 flex flex-grow justify-between bg-[var(--bg-base)] mt-2 rounded-md p-2">
              <div className="flex items-center ">
              <Button className="bg-[var(--bg-main)] rounded-full p-2 mx-2 h-[fit-content]">
                <LeftArrow fill="#FFFFFF" width={16} height={16}/>
              </Button>
              <Button className="bg-[var(--bg-main)] rounded-full p-2  h-[fit-content] hidden md:inline-block">
                <RightArrow fill="#FFFFFF" width={16} height={16}/>
              </Button>
              {
                pathname=="/search"&&<SearchBar/>
              }
              </div>
              <div className="flex flex-nowrap">
              <Button children="Sign up" className="font-semibold rounded-full px-6 bg-transparent text-gray-400"/>
              <Button children="Log in" className="font-semibold rounded-full px-6"/>
              </div>
           
        </div>

  )
}

