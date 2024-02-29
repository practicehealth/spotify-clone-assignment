import React, { useContext, useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import MyContext from '../context/MyContext'
import songs from '../data/songs.js';

function SearchResult() {
  const { result, setResult } = useContext(MyContext);
  const firstSong = songs.find(item => item.id === 1);
  // console.log(firstSong);
  const [showPlayIcon, setShowPlayIcon] = useState(null);

  return (
    <div className='p-4 flex flex-col gap-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col gap-2 p-2 w-4/5 md:w-2/5'>
          <div className='text-2xl font-bold'>Top result </div>
          <div
            onMouseEnter={() => setShowPlayIcon(0)}
            onMouseLeave={() => setShowPlayIcon(null)}
            className='bg-neutral-900 p-4 mt-1 flex flex-col gap-3 rounded-xl hover:bg-neutral-800 text-white font-sans justify-start items-start'
          >
            <div className='relative'>
              <img
                src={firstSong.image}
                alt='album-art'
                className='rounded-lg h-40 w-40'
              />
              {
                showPlayIcon === 0 && (
                  <div className='absolute bottom-2 right-2 rounded-full bg-green-600 text-gray-950 text-lg h-10 w-10 flex items-center justify-center z-1'>
                    <FaPlay />
                  </div>
                )
              }
            </div>
            <div>
              <h2 className='text-lg font-semibold'> {result} </h2>
              <h3>{firstSong.type}</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-4/5 md:w-3/5'>
          <div className='text-2xl font-bold'> Songs  </div>
          <div className='flex  flex-col gap-4 p-2'>
            {
              songs.map((item) => (
                <div
                  key={item.id}
                  className='flex justify-between items-center gap-4 bg-neutral-900 hover:bg-neutral-800 p-4 rounded-md'
                >
                  <div className='flex justify-center items-center gap-4'>
                    <img
                      src={item.image}
                      alt='album-art'
                      className='rounded-lg h-12 w-12'
                    />
                    <div className='flex flex-col '>
                      <div className='text-lg font-semibold'> {result} </div>
                      <div className='text-sm text-gray-300'> {item.title} </div>
                    </div>
                  </div>
                  <div>4.00</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col p-4 gap-4'>
        <h2 className='text-xl font-bold' > {result} </h2>
        <div className='flex flex-wrap gap-7 px-4 '>
          {
            songs.map((song) => {
              return (
                <div
                  key={song.id}
                  onMouseEnter={() => setShowPlayIcon(song.id)}
                  onMouseLeave={() => setShowPlayIcon(null)}
                  className='bg-neutral-900 p-4 flex flex-col gap-3 rounded-xl hover:bg-neutral-800 w-52'
                >
                  <div className='relative'>
                    <img
                      src={song.image}
                      alt='album-art'
                      className='rounded-full h-40 w-40'
                    />
                    {
                      showPlayIcon === song.id && (
                        <div className='absolute bottom-2 right-2 rounded-full bg-green-600 text-gray-950 text-lg h-10 w-10 flex items-center justify-center z-1'>
                          <FaPlay />
                        </div>
                      )
                    }
                  </div>
                  <div className='flex flex-col flex-wrap'>
                    <h3 className='text-white font-sans font-semibold text-lg'>{song.artist}</h3>
                    <p className='text-gray-300'> {song.description} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult