import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Signup from "./Signup"
import { Sidebar } from "./Sidebar"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet/>
        <Signup />
    </div>
  )
}