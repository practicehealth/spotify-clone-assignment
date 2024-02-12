import React from 'react';

interface CategoryProps {
  category: {
    id: number;
    title: string;
    cover: string;
    color: string;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md pt-[80%]  before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl	tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[4rem] h-[4rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
          alt={category.title}
        />
      </div>
    </div>
  );
};

export default Category;
