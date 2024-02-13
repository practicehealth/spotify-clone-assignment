import Footer from "../components/Footer";
import GenreCard from "../components/GenreCard";
import { genreList } from "../data";

const SearchResult = () => {
  return (
    <div className="h-[805px] overflow-y-scroll bg-gradient-to-b from-[#1E1E1E] to-[#121212] w-full rounded-b-lg">
      <h2 className="pt-6 text-2xl text-white font-bold px-6">Browse all</h2>
      <div className="p-4 flex gap-4 flex-wrap items-center justify-">
        {genreList.map((item) => (
          <GenreCard
            key={item.genreTitle}
            imgUrl={item.imageUrl}
            title={item.genreTitle}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
