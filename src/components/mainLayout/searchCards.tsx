import React from 'react';
import { SearchCardsProps } from '../../ts';

const CategoryCards: React.FC<SearchCardsProps> = ({ name, color, image }) => {
    return (
        <div className="relative overflow-hidden rounded-lg w-64 h-64 md:w-44 md:h-44" style={{ backgroundColor: color }}>
            <div className="absolute top-0 left-1 right-0 text-left p-2 font-bold rounded-t-md text-lg text-gray-100 text-secondary">
                {name}
            </div>
            <img
                src={image} alt={name} style={{ transform: 'rotate(30deg)' }}
                className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-40 h-40 md:w-24 md:h-24 object-cover rounded-tr-md"
            />
        </div>
    );
};

export default CategoryCards;