import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Romantic from "../Assets/Images/Romantic.jpg";
import dance from "../Assets/Images/dance.jpg";
import Liked from "../Assets/Images/likedsongs.jpg";
import neffex from "../Assets/Images/neffex.jpg";
import kda from "../Assets/Images/kda.jpg";
import { data } from "../data/Homeoverviewdata";
import Card from "../Components/Card/Card";
import Lefticon from "../Assets/Icons/Lefticon";
import Righticon from "../Assets/Icons/Righticon";

const Home = () => {
  interface Playlist {
    url: string;
    Title: string;
    desc: string;
  }
  return (
    <div className="flex w-full h-screen bg-black">
      <Sidebar />
      <div className="fixed right-0 w-4/5 h-full mt-2 overflow-auto rounded-md bg-customMajor">
         <div className="top-0 h-[65px] bg-[rgb(16,16,16)] flex justify-between mb-8 w-full sticky z-40 ">
         <div className="w-[100px] h-[40px] gap-2 mx-0 flex items-center pl-6 pt-4">
        <div className="text-center flex pt-[2px] w-[30px] h-[30px] rounded-[100%] bg-black cursor-pointer">
          <Lefticon />
        </div>
        <div className="text-center flex pt-[2px] w-[30px] h-[30px] rounded-[100%] bg-black cursor-pointer">
          <Righticon />
        </div>
      </div>
      <div className="flex items-center gap-6 ml-auto mr-8 ">
        <h1 className="text-gray-500 font-bold text-[8px] md:text-[14px] ">Sign Up</h1>
        <div className="bg-white rounded-full justify-center flex items-center h-[24px] w-[80px] md:h-[48px] md:w-[110px]">
          <h1 className="text-black  font-semibold text-[10px] md:text-[19px] ">Login </h1>
        </div>
      </div>
         </div>
        
        <div className=" h-full bg-[#121212] bg-gradient-to-b from-transparent via-transparent flex flex-col  to-black  ">
        <div>
         <h1 className="md:text-[30px] text-[16px] font-bold px-4 text-white ml-2">Spotify Playlist</h1>
         </div>
          <div className="grid gap-2 px-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            {data.map((item: Playlist) => (
              <Card
                key={item.url}
                url={item.url}
                text={item.Title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
