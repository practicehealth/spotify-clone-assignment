// Layout.tsx
import React from "react";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Banner from "../components/Banner";
import { Button } from "../components/ui/Button";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white bg-black">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header */}
        <header className="flex p-4 shadow md:hidden">
          <Button variant={"link"} onClick={() => setSidebarOpen(true)}>
            <GiHamburgerMenu />
          </Button>
        </header>

        {/* Main content */}
        <main className="flex-1 ml-2 overflow-x-hidden overflow-y-auto">
            {children}
        </main>
      </div>
      <Banner />
    </div>
  );
};

export default Layout;
