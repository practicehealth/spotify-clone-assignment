import { useState } from 'react'
import { playList } from '../../constants/spotifyData'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PlayList() {
    const [showPlayIcon, setShowPlayIcon] = useState<number | null>(null);

    return (
        <div className='pt-20 pl-3 pr-3 flex flex-col gap-3'>
            <h2 className='text-xl font-bold text-gray-50'>Spotify Playlists</h2>
            <div className='flex flex-wrap gap-7 px-4'>
                {
                    playList.map((song) => {
                        return (
                            <div key={song.id} onMouseEnter={() => setShowPlayIcon(song.id)} onMouseLeave={() => setShowPlayIcon(null)}
                                className='bg-neutral-900 p-4 flex flex-col gap-3 rounded-xl hover:bg-neutral-800 w-52'>
                                <div className='relative'>
                                    <img src={song.image} alt='album-art' className='rounded-lg h-40 w-48' />
                                    {
                                        showPlayIcon === song.id && (
                                            <div className='absolute bottom-2 right-2 rounded-full bg-green-600 text-gray-950 text-lg h-10 w-10 flex items-center justify-center z-1'>
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        )}
                                </div>

                                <div className='flex flex-col flex-wrap'>
                                    <h3 className='text-white font-sans font-semibold text-lg'>{song.title}</h3>
                                    <p className='text-gray-300'> {song.description} </p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default PlayList;