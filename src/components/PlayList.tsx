import {playlist_data} from "../utils/constants";
import PlayListCard from "./PlayListCard";
import PlayListFooter from "./PlayListFooter";

const PlayList = () => {


  return (
    <div className="absolute h-[657px] bg-gradient-to-t from-[#121212] to-[#1F1F1F] w-[1000px] top-[64px] left-[328px] px-6 pb-4">
      <div className="flex justify-between items-baseline">
      <p className="font-bold text-white text-2xl hover:underline hover:cursor-pointer">Spotify Playlists</p>
      <p className="hover:cursor-pointer hover:underline font-bold text-[#B3B3B3] text-[14px]">Show all</p>
      </div>
      <div className="flex flex-wrap mt-2 gap-5">
        {playlist_data.map((data)=>(
                <PlayListCard data={data}/>
            ))}
      </div>
      <PlayListFooter/>
    </div>
  )
}

export default PlayList;
