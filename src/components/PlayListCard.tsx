import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import playIcon from "../assets/playIcon.svg";

const PlayListCard = ({data}:{data:any}) => {
    

    const [hover,setHover]=useState(false);
    const {category,description,imgId}=data;


    const setBgColor=()=>{
        setHover(true);
    };

    const resetBgColor=()=>{
        setHover(false);
    }

    return (
    <div className={`w-[173.39px] h-[255.56px] text-white p-4 rounded-md hover:cursor-pointer ${hover? "bg-[#3b3b3b4d] transition-all" :"bg-gradient-to-b from-[#121212] to-[#1F1F1F]"}`} onMouseOver={setBgColor} onMouseLeave={resetBgColor}>
      <div className="relative">
      <img className={`w-[141.39px] h-[141.39px] rounded-md ${hover?"shadow-lg shadow-black":""}`} src={IMG_URL + imgId}/>
      {hover && <img className={`duration-1000 transition-all transform ease-in p-[10px] rounded-full bg-[#6CDF66] hover:scale-105 shadow-md shadow-black h-[50px] w-[50px] absolute bottom-2 right-2`} src={playIcon}/>}
      </div>
      <div className="mt-5">
        <p className="font-bold text-sm truncate">{category}</p>
        <p className="text-xs font-medium text-[#858585]">{description}</p>
      </div>
    </div>
  )
}

export default PlayListCard


// bg-gradient-to-b from-[#121212] to-[#1F1F1F]