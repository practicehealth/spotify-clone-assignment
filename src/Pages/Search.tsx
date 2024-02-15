import React from "react";
import Navbar from "../components/Navbar";
import MainContainer from "../components/Search/MainContainer";
import SignupBanner from "../components/SignupBanner"; 

export default function Search():React.JSX.Element { 
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
