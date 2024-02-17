import { Outlet } from "react-router-dom";
import SectionContainer from "../section/sectionContainer";
import NavBar from "./navBar";
import Sidebar from "../sidebar/sidebar";
import FooterSignUpFree from "../footerSignUp/footer";

const Layout = () => {
    return (
        <div className='h-screen min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black'>
            <Sidebar />

            <SectionContainer className="overflow-auto relative bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
                <header className="sticky top-0 px-7 py-5 bg-[hsla(0,0%,7%,0.7)] mb-[-4rem] z-50">
                    <NavBar />
                </header>
                {/* Center screens of Home and Playlist */}
                <Outlet />
            </SectionContainer>

            <FooterSignUpFree />
        </div>
    )
}

export default Layout;