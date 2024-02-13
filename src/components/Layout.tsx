import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="grid grid-cols-[2.2fr,8fr] gap-4 text-white h-[100vh] overflow-hidden">
      <Sidebar />
      <div className="gap-4 h-[100vh] overflow-y-scroll pb-[300px]">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
