import React from "react";
import { Icon } from "../../Icons"

const Topresult: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-slate-500 bg-opacity-30 text-white gap-2 py-5 w-full relative rounded-lg px-5">
        <div className="p-3 bg-white h-fit w-fit rounded-lg">
          <img
            className="w-20 h-20 rounded-md"
            src="https://picsum.photos/id/64/200/300"
            alt="artist"
          />
        </div>
        <div className="text-2xl font-bold">Artists</div>
        <div className="flex gap-1">
          <div className="text-[0.6rem] text-slate-300">Song</div>
          <div className="text-xs">&bull; RoadyGang</div>
        </div>
        <div className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full absolute bottom-2 right-2">
          <div className="w-3">
            <Icon name="playIcon" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topresult;
