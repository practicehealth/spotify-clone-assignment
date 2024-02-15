import { SEARCH_DATA } from "../utils/constants";
import PlayListFooter from "./PlayListFooter";

const Search = () => {
  console.log(SEARCH_DATA);

  return (
    <div className="w-[1184px] absolute top-[72px] right-2 bg-[#121212] p-4 overflow-y-scroll no-scrollbar h-[593px]">
      <p className="text-white font-bold text-2xl my-5">Browse all</p>
      <div className="flex flex-wrap gap-5">
        {SEARCH_DATA.map((data) => (
          <div
            className="w-[173.39px] h-[173.39px] rounded-lg p-4 relative overflow-hidden cursor-pointer"
            style={{ backgroundColor: data?.color }}
          >
            <p className="text-white w-[160px] font-bold text-[21px] absolute z-20">
              {data?.category}
            </p>
            <img
              className="w-[120.89px] h-[120.89px] absolute -bottom-5 -right-6 rotate-[25deg] z-10"
              src={data?.imgUrl}
            />
          </div>
        ))}
      </div>
      <PlayListFooter />
    </div>
  );
};

export default Search;
