import React from "react";
import Navbar from "../components/Navbar";
import MainContainer from "../components/Home/MainContainer";
import SignupBanner from "../components/SignupBanner"; 

export default function Home(): React.JSX.Element { 
    return (
        <>
        <div className="flex">
            <Navbar/>
            <MainContainer/>
        </div>
        <SignupBanner/>
        </>
    )
}
