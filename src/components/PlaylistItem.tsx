import { FC } from "react";
import { Playlist } from "../types/myTypes";

type PlaylistItemProps = {
  playlist: Playlist;
};

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist }) => {
  return (
    <div className="p-3 w-full xs:w-48 bg-primary rounded-lg cursor-pointer">
      <div className="w-full h-40">
        <img
          src={playlist.image}
          alt={"playlist picture"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="my-1">
        <h5 className="mb-1 font-semibold">{playlist.title}</h5>
        <p className="text-sm">{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
