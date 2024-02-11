import React from "react"

import NavigationComponent from "./NavigationComponent" 
import NavLibraryComponent from "./NavLibraryComponent"

export default function Navbar(): React.JSX.Element { 
    return (
        <nav className="flex flex-col flex-1 p-2">
         <NavigationComponent/>
         <NavLibraryComponent/> 
        </nav>
    )
}
