import Header from './components/Header';

const Search = () => {
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
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white mt-2 text-2xl font-semibold">Newest songs</h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
