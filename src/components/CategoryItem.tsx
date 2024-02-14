import { FC } from "react";
import { Category } from "../types/myTypes";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="relative overflow-hidden rounded-md shadow-md w-60 h-60 sm:w-56 sm:h-52 hover:text-2xl cursor-pointer"
      style={{ backgroundColor: category.color }}
    >
      <div className="absolute top-0 left-0 right-0 p-2 font-bold text-lg text-secondary">
        {category.title}
      </div>
      <img
        src={category.cover}
        alt={category.title}
        className="absolute -bottom-2 -right-4 transform translate-x-8 translate-y-8 w-40 h-40 md:w-24 md:h-24 object-cover rounded-tr-md"
        style={{ transform: "rotate(28deg)" }}
      />
    </div>
  );
};

export default CategoryItem;
