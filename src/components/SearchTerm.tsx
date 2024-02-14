import React from "react";
import Heading from "./ui/Heading";
import Card from "./ui/Card";
import { albumsType } from "../data";
import SongCard from "./ui/SongCard";
import SongCardWrapper from "./ui/SongCardWrapper";

type Props = {
  bestMatch: albumsType | null;
  relatedSongs: albumsType[];
};

const SearchTerm = ({ bestMatch, relatedSongs }: Props) => {
  return (
    <div className="flex items-start justify-between gap-x-8">
      <div className="w-2/5">
        <Heading text="Top Results" />
        <Card className="">
          {bestMatch ? (
            <SongCardWrapper className="h-60">
              <div className="relative w-full h-full space-y-2 overflow-hidden rounded-md aspect-square">
                <img
                  className="w-32 h-32 rounded-lg"
                  src={bestMatch.image}
                  alt="Image"
                />
                <div className="relative">
                  <Heading className="text-3xl" text={bestMatch.name} />
                </div>
                <div className="relative flex items-center gap-x-2">
                  <p className="text-secondary">Song ·</p>
                  <p>{bestMatch.artist_info}</p>
                </div>
              </div>
            </SongCardWrapper>
          ) : (
            <p className="text-white">no result found..</p>
          )}
        </Card>
      </div>
      <div className="flex-1">
        <Heading text="Songs" />
        {relatedSongs.length > 0 ? (
          <div>
            {relatedSongs.map((item, index) => (
              <Card className="flex items-center justify-between cursor-pointer hover:bg-secondary">
                <div className="flex items-center gap-x-4">
                  <img src={item.image} alt={item.name} className="w-10 h-10" />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-secondary">{item.artist_info}</p>
                  </div>
                </div>
                <p className="text-secondary">1:51</p>
              </Card>
            ))}
          </div>
        ) : (
          <p>No results found...</p>
        )}
      </div>
    </div>
  );
};

export default SearchTerm;
