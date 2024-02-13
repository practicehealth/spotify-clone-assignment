// Layout.tsx
import React from "react";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Banner from "../components/Banner";
import { Button } from "../components/ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import Card from "../components/ui/Card";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { urls } from "../constants/url";
import SearchInput from "../components/ui/SearchInput";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
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
        <main className="flex-1 ml-2 overflow-x-hidden overflow-y-auto max-h-[89%]">
          <Card className="w-full py-4">
            <div className="px-6">
              <Navbar>
                {location.pathname.includes(urls.search) && <SearchInput />}
              </Navbar>
            </div>
            {children}
          </Card>
        </main>
      </div>
      <Banner />
    </div>
  );
};

export default Layout;
