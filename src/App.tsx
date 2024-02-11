import Home from "./components/Home";
import PlayList from "./components/PlayList";
import Search from "./components/Search";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const App = () => {

  const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <PlayList/>
    },
    {
        path:"/search",
        element:<Search/>
    }
]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
      <Home/>
    </div>
  )
}

export default App;
