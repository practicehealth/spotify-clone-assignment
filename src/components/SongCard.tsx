import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { BsSpotify } from 'react-icons/bs';

interface SongCardProps {
    card: {
        id: string;
        img: string;
        songName: string;
        details: string;
    };
}

const SongCard: React.FC<SongCardProps> = ({ card }) => {

    function truncateDetails(details: any) {
        const maxWords = 7;
        const words = details.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        } else {
            return details;
        }
    }

    return (
        <div key={card.id} className="bg-songcard p-4 w-44 rounded-md relative group flex flex-col justify-between">
            <div className="relative flex">
                <img src={card.img} alt={card.songName} className="w-full h-36 rounded-md object-cover" />
                <div className="absolute bottom-2 right-2 p-2 opacity-0 group-hover:opacity-100 w-10 h-10 bg-green rounded-full items-center justify-center flex">
                    <FaPlay className="text-black flex" />
                </div>
            </div>
            <div className="absolute top-4 left-4 p-2">
                <BsSpotify />
            </div>
            <div className="mt-2">
                <div className="text-base font-semibold text-secondary">{card.songName}</div>
                <div className="text-sm flex-1 text-secondary">{truncateDetails(card.details)}</div>
            </div>
        </div>
    );
};

export default SongCard;
