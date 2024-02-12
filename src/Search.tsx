import Header from './components/Header';
import SearchpageContent from './components/SearchpageContent';
import Genres from '../src/data.json';

const Search = () => {
  const genres = Genres.genres;
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
      <Header></Header>
      <div className="mt-2 mb-7 px-6 bg-gradient-to-b from-neutral-800">
        <div className="flex justify-between items-center">
          <h1 className="text-white mt-2 text-2xl font-semibold">Browse All</h1>
        </div>

        {/* Render Genre List here */}
        <SearchpageContent genres={genres} />
      </div>
    </div>
  );
};

export default Search;
