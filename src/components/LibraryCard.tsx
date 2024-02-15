import React from 'react';

type LibraryCardProps = {
    title: string;
    subtitle: string;
    buttonText: string;
};

const LibraryCard: React.FC<LibraryCardProps> = ({ title, subtitle, buttonText }) => {
    return (
        <div className="bg-lightGray rounded-lg p-4">
            <div className="text-xl font-semibold mb-2  ">{title}</div>
            <div className="text-lg font-semibold mb-2  ">{subtitle}</div>
            <button className="text-black font-semibold md:font-normal md:text-md sm:text-sm bg-white rounded-full py-2 px-4  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
                {buttonText}
            </button>
        </div>
    );
};

export default LibraryCard;
