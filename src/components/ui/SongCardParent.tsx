import React from "react";
import { albumsType } from "../../data";
import SongCard from "./SongCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { cn } from "../../utils";

type Props = {
  title: string;
  songs: albumsType[];
  gradient?: boolean
};

const SongCardParent = ({ title, songs,gradient=false }: Props) => {
  return (
    <div className={cn("px-6", gradient && "bg-secondary-gray")}>
      <div className="flex items-center justify-between my-4">
        <Link to={"/"} className="text-2xl font-bold text-white hover:underline">{title}</Link>
        {songs.length > 5 && (
          <Button
            onClick={() => alert("Coming Soon...")}
            className="hover:underline"
            variant={"link"}
          >
            Show all
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-5 gap-x-6">
        {songs?.slice(0,5)?.map((item: albumsType, index) => (
          <SongCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SongCardParent;
