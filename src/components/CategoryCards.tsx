import React from 'react';

interface Category {
    id: number;
    name: string;
    color: string;
    image: string;
}

interface CategoryCardsProps {
    category: Category;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ category }) => {
    return (
        <div className="relative overflow-hidden rounded-md shadow-md w-64 h-64 md:w-40 md:h-40" style={{ backgroundColor: category.color }}>
            <div className="absolute top-0 left-0 right-0 text-center py-2 font-bold rounded-t-md text-lg text-secondary">
                {category.name}
            </div>
            <img
                src={category.image}
                alt={category.name}
                className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-40 h-40 md:w-24 md:h-24 object-cover rounded-tr-md"
                style={{ transform: 'rotate(30deg)' }}
            />
        </div>
    );
};

export default CategoryCards;
