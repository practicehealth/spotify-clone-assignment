import React, { useCallback, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useParams } from "react-router-dom";
import Card from "../components/ui/Card";
import { searchNav } from "../data/searchNav";
import { Button } from "../components/ui/Button";
import { albums, albumsType } from "../data";
import { artistsData, artistsType } from "../data/artists";
import SearchTerm from "../components/SearchTerm";
import Heading from "../components/ui/Heading";
import SongCardWrapper from "../components/ui/SongCardWrapper";

type Props = {};

const SearchId = (props: Props) => {
  const { id } = useParams();
  const [bestMatch, setBestMatch] = useState<albumsType | null>(null);
  const [relatedAlbums, setRelatedAlbums] = useState<albumsType[]>([]);
  const [relatedArtists, setRelatedArtists] = useState<artistsType[]>([]);

  const performSearch = useCallback(() => {
    if (!id) return;
    const normalizedSearchTerm = id.toLowerCase();

    // 1. Best Match (Prioritize by name, then other fields)
    const bestMatchAlbum = albums.find((album) =>
      album.name.toLowerCase().startsWith(normalizedSearchTerm)
    );
    setBestMatch(bestMatchAlbum || null); // Set to null if not found

    // 2. Related Albums (Fuzzy search on all fields)
    const related = albums.filter((album) => {
      const fields = [
        album.name,
        // album.type,
        album.artist_info,
        // album.description,
      ];
      return fields.some((field) =>
        field.toLowerCase().includes(normalizedSearchTerm)
      );
    });
    setRelatedAlbums(related.slice(0, 4)); // Limit to 4

    // 3. Related Artists (Similar logic)
    const relatedArtists: artistsType[] = artistsData.filter((artist) => {
      return artist.name.toLowerCase().includes(normalizedSearchTerm);
    });
    setRelatedArtists(relatedArtists.slice(0, 4));
  }, [id]);

  console.log("best Match: ", bestMatch);
  console.log("related Songs: ", relatedAlbums);
  console.log("related Artists: ", relatedArtists);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  return (
    <Layout>
      <div className="px-4 py-4">
        <Card className="flex items-center gap-x-4">
          {searchNav?.map((item, index) => (
            <Button
              key={index}
              variant={item.url == "all" ? "default" : "secondary"}
            >
              {item.title}
            </Button>
          ))}
        </Card>

        <div>
          <SearchTerm relatedSongs={relatedAlbums} bestMatch={bestMatch} />
        </div>
        <div className="">
          <Heading text="Artists" />
          <div className="grid grid-cols-5 gap-x-6">
            {relatedArtists?.map((item, index) => (
              <SongCardWrapper className="h-60">
                <div className="relative w-full h-full space-y-2 overflow-hidden rounded-md aspect-square">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="rounded-full w-28 h-28"
                      src={item.image}
                      alt="Image"
                    />
                  </div>
                  <div className="relative ml-5">
                    <Heading className="text-lg" text={item.name} />
                  <p>{item.type}</p>
                  </div>
                </div>
              </SongCardWrapper>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchId;
