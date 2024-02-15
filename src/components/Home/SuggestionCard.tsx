import React from "react";

type SuggestionCardProps = {
    title : string, 
    description : string
    imageUrl : string, 
}

export default function SuggestionCard({title, description, imageUrl}: SuggestionCardProps) : React.JSX.Element { 
    return (
        <div className="group relative flex flex-col bg-[#181818] hover:bg-[#004242] rounded-lg w-1/5 m-2">
            <div className="group-hover:block absolute hidden top-[50%] left-[70%] w-full h-full ">
                <img className="rounded-full bg-[#1ED760] p-2 w-10 h-10" alt="Play" src="assets/play.svg"></img>
            </div> 
            <div className="flex flex-col p-5 ">
               <img className="rounded-lg mb-2 w-full h-full" alt="Suggestion" src={imageUrl}/> 
               <span className="font-semibold my-2">{title}</span>
               <span className="text-xs text-slate-400">{description}</span>
            </div>
        </div> 
    )
}  

