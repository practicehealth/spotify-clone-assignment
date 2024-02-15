import { playlist_data } from "../utils/constants";
import PlayListCard from "./PlayListCard";
import PlayListFooter from "./PlayListFooter";

const PlayList = () => {
  return (
    <div className="absolute h-[593px] overflow-y-scroll no-scrollbar bg-gradient-to-t from-[#121212] to-[#1F1F1F] w-[1184px] top-[72px] right-2 px-6 pb-4 pt-2 rounded-b-lg">
      <div className="flex justify-between items-baseline">
        <p className="font-bold text-white text-2xl hover:underline hover:cursor-pointer">
          Spotify Playlists
        </p>
        <p className="hover:cursor-pointer hover:underline font-bold text-[#B3B3B3] text-[14px]">
          Show all
        </p>
      </div>
      <div className="flex flex-wrap mt-7 gap-4 ">
        {playlist_data.map((data)=>(
            <PlayListCard data={data}/>
        ))}
      </div>
      <PlayListFooter />
    </div>
  );
};

export default PlayList;