import React from "react"
import { Link } from "react-router-dom"

export default function NavigationComponent():React.JSX.Element { 
    return (
        <div className="bg-light-dark flex flex-col px-5 py-2 rounded-lg">
            <img className="w-20 h-10 my-2" alt="Spotify" src="/assets/spotify.svg"/> 
            <Link to="/" className="flex items-center my-2">
                <img className="w-5 h-5 mr-4" alt="Home" src="/assets/home.svg"/>
                <span className="font-semibold">Home</span>
            </Link>
            <Link to="/search" className="flex items-center my-2">
                <img className="w-5 h-5 mr-4 fill-slate-500" alt="Search" src="/assets/search.svg"/>
                <span className="font-semibold">Search</span>
            </Link>
        </div>
    )
} 
