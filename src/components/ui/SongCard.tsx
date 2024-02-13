"use client";
import DefaultImage from "../../assets/10.jpg";
import { albumsType } from "../../data";
import { shortDescription } from "../../utils";

import PlayButton from "./PlayerButton";

interface SongItemProps {
  data: albumsType;
}

const SongCard: React.FC<SongItemProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-3 overflow-hidden transition rounded-md cursor-pointer rounded-2xl group gap-x-4 bg-neutral-400/5 hover:bg-neutral-400/10">
      <div className="relative w-full h-full overflow-hidden rounded-md aspect-square">
        <img
          className="object-cover w-60 h-60"
          src={data.image || DefaultImage}
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="w-full font-semibold truncate">{data.name}</p>
        <p className="w-full pb-4 text-sm truncate text-neutral-400">
          By {data.artist_info}
        </p>
        <p>{shortDescription(data.description)}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton url={data.spotify} />
      </div>
    </div>
  );
};

export default SongCard;
