import React from "react";

type SuggestionCardProps = {
    title : string, 
    description : string
    imageUrl : string, 
}

export default function SuggestionCard({title, description, imageUrl}: SuggestionCardProps) : React.JSX.Element { 
    return (
        <div className="relative flex flex-col bg-[#181818] rounded-lg w-1/5 m-2">
            <div className="flex flex-col p-5 ">
               <img className="rounded-lg mb-2 w-full h-full" alt="Suggestion" src={imageUrl}/> 
               <span className="font-semibold my-2">{title}</span>
               <span className="text-xs text-slate-400">{description}</span>
            </div>
        </div> 
    )
}  
