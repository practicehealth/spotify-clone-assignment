import React from "react";

interface props {
  image: string;
  title: string;
  para: string;
}

const SongCard: React.FC<props> = ({ image, title, para }) => {
  return (
    <div className="bg-[#1b1b1b] w-44 rounded-lg flex text-white">
      <div className="m-3  ">
        <img
          src={image}
          alt=""
          className=" rounded-lg w-48"
          
        />
        <p className="text-xl font-bold"> {title}</p>
        <p className="text-sm text-gray-500">{para}</p>
      </div>
    </div>
  );
};

export default SongCard;
