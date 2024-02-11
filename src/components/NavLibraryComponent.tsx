import React from "react" ;
import PlaylistComponent from "./PlaylistComponent";
import PodcastComponent from "./PodcastComponent";

export default function NavLibraryComponent(): React.JSX.Element { 
    return ( 
        <div className="bg-light-dark flex flex-col px-5 py-2 my-2 rounded-lg">
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <img className="w-5 h-5 mr-3" alt="Library" src="assets/library.svg"/>
                        <span className="font-semibold">Your Library</span>
                    </div>
                    <img className="w-4 h-4" alt="Add" src="assets/add.svg"/>
                </div>
                <PlaylistComponent/>
                <PodcastComponent/>
            </div>
        </div>
    )
}
