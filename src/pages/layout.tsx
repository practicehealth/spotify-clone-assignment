import { Outlet } from "react-router-dom";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
function layout() {
  return (
    <>
      <div className="h-screen grid grid-cols-1 md:grid-cols-[350px_1fr] grid-rows-1 overflow-hidden gap-1 p-1 bg-black">
        {
          //TODO: Make Sidebar and Navbar  Responsive for mobile screen}
        }
        <Sidebar />
        <div className="flex flex-col">
        
          <Navbar />
          <div className="h-full overflow-y-scroll">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default layout;
