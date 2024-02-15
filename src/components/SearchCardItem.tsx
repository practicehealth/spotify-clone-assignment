import React from "react";

interface Card {
  category: string;
  imgLink: string;
  color: string;
}

interface CardItemProps {
  card: Card;
}

const SearchCardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div
      style={{ backgroundColor: card.color }}
      className={`pl-2 pt-2 font-bold text-xl relative overflow-hidden h-[180px] rounded-lg w-[180px]`}
    >
      <p className="text-white">{card.category}</p>
      <div>
        <img
          className="rotate-45 transform translate-x-3 translate-y-3 bottom-0 right-0 absolute w-[100px] h-[100px]"
          src={card.imgLink}
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchCardItem;
