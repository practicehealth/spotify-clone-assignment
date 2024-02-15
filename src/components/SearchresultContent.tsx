import { Album, Artist, Song } from '../types';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import SongItem from './SongItem';
interface SearchresultContentProps {
  type: string;
  results: any;
}

const SearchresultContent: React.FC<SearchresultContentProps> = ({ type, results }) => {
  if (type === 'No Results') {
    return <div className="mt-4 w-full h-full text-center text-neutral-400">No results found...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {type === 'Albums' && results.resultAlbums.map((album: Album) => <AlbumCard key={album.id} data={album} />)}
      {type === 'Songs' && results.resultSongs.map((song: Song, index: number) => <SongItem key={index} data={song} />)}
      {type === 'Artists' &&
        results.resultArtists.map((artist: Artist) => <ArtistCard key={artist.id} data={artist} />)}
    </div>
  );
};

export default SearchresultContent;
