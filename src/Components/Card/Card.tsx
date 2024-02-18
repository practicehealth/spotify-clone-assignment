import React from 'react';
import {FaPlay} from 'react-icons/fa'
import './Card.css'
interface CardProps {
  url?: string;
  text: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ url, text, desc }) => {
  return (
    <div className='w-[190px] h-auto  card rounded-lg cursor-pointer  bg-[#1f1e1e]  items-center p-3 '>
      <div className='relative'>
      <img className='w-[150px] h-[150px] rounded-md 'src={url} alt='Playlist Cover z-1' />
      <button  className='flex btn items-center  absolute justify-center right-0 bottom-0 rounded-[50%] bg-green-500 p-3'> 
        <FaPlay className='text-2xl text-black'/>
      </button>
      </div>
      <div className='pl-2'>
        <h1 className='text-[16px] text-white font-bold'>{text}</h1>
        <p className='text-sm font-bold text-gray-500'>{desc.substring(0,40)}...</p>
        </div>
     
    </div>
  );
};

export default Card;
