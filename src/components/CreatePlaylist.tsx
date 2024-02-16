import React from "react";

interface props{
    heading: String,
    para: String,
    button: String,
}

const CreatePlaylist: React.FC<props>=({heading, para, button})=>{
    return(
        <div className="bg-[#666666cb] rounded-lg m-1 p-5">
            <p className='font-bold'>{heading}</p>
            <p className="text-sm m-1">{para}</p>
            <button className="bg-white text-black font-bold rounded-3xl w-32 h-8 text-sm">{button}</button>
        </div>
    );
}

export default CreatePlaylist;