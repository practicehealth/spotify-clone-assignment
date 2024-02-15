import category from "../data/category";
import { categoryType } from "../data/category";

const Card = ({ title, color, cover }: categoryType) => {
  return (
    <div
      className="h-44 w-40 rounded-lg pt-2 pl-2 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <img
        src={cover}
        className="h-[70%] translate-x-10 translate-y-10 rotate-[25deg]"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="p-4">
      <h1 className="text-white text-2xl font-semibold mb-2">Browse all</h1>
      <div className="flex flex-wrap gap-6 overflow-scroll">
        {category.map((cate) => {
          return (
            <Card
              key={cate.id}
              title={cate.title}
              color={cate.color}
              cover={cate.cover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
