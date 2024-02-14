import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";
import MainFooter from "./MainFooter";

const Layout = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col p-2 box-border justify-center items-center gap-1 text-white relative">
        <div className="justify-between gap-2 flex box-border w-full">
          <SideBar />
          <Outlet />
        </div>
        <Footer />
        <MainFooter />
      </div>
    </>
  );
};

export default Layout;
