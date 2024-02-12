import React from "react";

interface Card {
  title: string;
  description: string;
  imgLink: string;
}

interface cardItemProps {
  card: Card;
}

const CardItem: React.FC<cardItemProps> = ({ card }) => {
  return (
    <div className="p-2 bg-[#181818] cursor-pointer hover:bg-[#242424] rounded-lg w-[300px] sm:w-[200px] sm:mx-0 sm:h-[280px] mx-auto lg:mx-0 lg:w-[180px] flex flex-col gap-2 h-[400px]  lg:h-[250px]">
      <div>
        <img className="rounded-lg" src={card.imgLink} alt="" />
      </div>
      <div className="text-sm font-medium">
        <p className="text-white">{card.title}</p>
        <p className="text-[#A7A7A7]">{card.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
