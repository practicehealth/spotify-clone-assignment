import Header from './components/Header';
import SearchpageContent from './components/SearchpageContent';
import Data from '../src/data.json';
import { useEffect, useState } from 'react';
import { Artist, Album, Song } from './types';
import SearchresultContent from './components/SearchresultContent';

const Search = () => {
  interface FilteredResults {
    resultAlbums: Album[];
    resultSongs: Song[];
    resultArtists: Artist[];
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<FilteredResults>({
    resultAlbums: [],
    resultSongs: [],
    resultArtists: [],
  });
  const [resultType, setResultType] = useState('');

  const genres = Data.genres;
  const albums = Data.albums;
  const artists = Data.artists;

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResultType('');
      setFilteredResults({
        resultAlbums: [],
        resultSongs: [],
        resultArtists: [],
      });
      return;
    }

    const resultAlbums = albums.filter((album) => album.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const resultSongs = Data.songs.filter((song) => song.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const resultArtists = artists.filter((artist) => artist.name.toLowerCase().includes(searchQuery.toLowerCase()));

    setFilteredResults({
      resultAlbums,
      resultSongs,
      resultArtists,
    });

    if (resultAlbums.length > 0) {
      setResultType('Albums');
    } else if (resultSongs.length > 0) {
      setResultType('Songs');
    } else if (resultArtists.length > 0) {
      setResultType('Artists');
    } else {
      setResultType('No Results');
    }
  }, [searchQuery, albums, artists]);

  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery}></Header>
      <div className="mt-2 mb-7 px-6 bg-gradient-to-b from-neutral-800">
        <div className="flex justify-between items-center">
          <h1 className="text-white mt-2 text-2xl font-semibold">{resultType === '' ? 'Browse All' : resultType}</h1>
        </div>

        {/* Render Genre List here */}
        {resultType === '' ? (
          <SearchpageContent genres={genres} />
        ) : (
          <SearchresultContent type={resultType} results={filteredResults} />
        )}
      </div>
    </div>
  );
};

export default Search;
