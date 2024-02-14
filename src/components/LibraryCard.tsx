import React from "react";

type LibraryCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

const LibraryCard: React.FC<LibraryCardProps> = ({
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div className="bg-lightGray rounded-lg p-3">
      <div className="text-xl font-semibold my-1 ">{title}</div>
      <div className="text-lg my-1 mb-2">{subtitle}</div>
      <button className="text-black font-bold md:text-md sm:text-sm bg-white rounded-full py-2 px-4 transition-transform duration-400 ease-in-out transform hover:scale-105">
        {buttonText}
      </button>
    </div>
  );
};

export default LibraryCard;
