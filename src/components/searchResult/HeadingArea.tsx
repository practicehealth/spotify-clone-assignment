import React from 'react';

const HeadingArea: React.FC = () => {
  return (
    <div className='bg-black'>
      <div className='flex gap-2 flex-wrap'>
        <div className='text-md font-semibold bg-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>All</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Songs</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Artists</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Playlists</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Albums</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Podcasts & Shows</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Genres & Modes</div>
        <div className='text-md bg-slate-300 bg-opacity-30 text-white w-fit px-4 py-1 rounded-2xl cursor-pointer'>Profiles</div>
      </div>
    </div>
  );
};

export default HeadingArea;
