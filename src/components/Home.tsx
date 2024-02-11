import Navbar from "./Navbar"
import Sidebar from "./Sidebar";
import Signup from "./Signup";
import { Outlet } from "react-router-dom";


const Home=()=>{

    return (
        <div className="relative">
            <Navbar/>
            <Sidebar/>
            <Signup/>
            <Outlet/>
        </div>
    )
};



export default Home;