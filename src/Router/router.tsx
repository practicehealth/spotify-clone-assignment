import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Search from "../Pages/Search";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/search",
        element: <Search/>,
     }, 
    {
        path:"*", 
        element : <NotFound/>
    },
    
]) 

export default router; 
