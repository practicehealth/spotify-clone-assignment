import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SearchPage from "./pages/search";
import Home from "./pages/home";
import SearchResult from "./pages/search-result";
import Header from "./components/Header";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
    <div className="bg-black text-white h-screen p-3 flex gap-2 overflow-hidden">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <div className="bg-[#121212] w-[80rem] sm:w-[75rem] lg:w-[80rem] overflow-y-auto overflow-x-hidden scrollbar">
        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Outlet />
        <Footer />
      </div>
    </div>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/search",
        element:<SearchPage/>
      },
      {
        path: "/search/:srch",
        element:<SearchResult/>
      },
    ],
  },
]);

export default App;
