import SongCard from './PlaylistCard';
import lofiImage from '../../assets/lofiImage.jpeg';
import allOut from '../../assets/allOut.jpeg';
import chillOut from '../../assets/chillOut.jpeg';
import TodayHits from '../../assets/TodayHits.jpeg';
import chillHits from '../../assets/chillHits.jpeg';
import jazz from '../../assets/jazz.jpeg';
import allOutEighty from '../../assets/allOutEighty.jpeg';
import piano from '../../assets/piano.jpeg';
import RockClasses from '../../assets/RockClasses.jpeg';
import stressRelief from '../../assets/stressRelief.jpeg';
import Footer from './Footer';
import { useState } from 'react';

const HomeBoard = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const playlistData = [
    { 
        heading: "lofi beats",
         description: "chill beats, lofi vibes, new tracks every week...", 
         imageSrc: lofiImage 
    },

    { 
        heading: "Today's Top Hits", 
        description: "Benson Boone is on top of the Hottest 50!", imageSrc: TodayHits
     },
    {   heading: "Chillout Lounge",
        description: "Just lean back and enjoy relaxed beats.", imageSrc: chillOut 
    },
    {   heading: "All Out 2020s", 
        description: "The biggest songs of the 2020s.", 
        imageSrc: allOut 
    },
    { 
        heading: "Jazz in the Background", 
        description: "Soft Instrumental Jazz for all your activities.",
         imageSrc: jazz
     },
    {
         heading: "Chill Hits", 
         description: "Kick back to the best new and recent chill hits.", 
         imageSrc: chillHits 
    },
    {
         heading: "Peaceful Piano", 
         description: "Peaceful piano to help you slow down, breathe, and realx.", 
         imageSrc: piano 
    },
    {
         heading: "Rock Classics", 
         description: "Rock legends & epic songs that continue to inspire generations", 
         imageSrc: RockClasses 
    },
    {
         heading: "Stress Relief", 
         description: "Calm your mind from anxiety with gentle paion and ambient...", 
         imageSrc: stressRelief
    },
    {
         heading: "All Out 80s", 
         description: "The biggest songs of the 1980s. Cover: Michael Jackson", 
         imageSrc: allOutEighty 
    }
  ];

  return (
    <div className='w-full p-1 '>
      <div className='p-2 pl-3 h-auto bg-[#121212] visible'>
        <div className='flex flex-col justify-around gap-y-3'>
          <div className='p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Spotify Playlists</h1>
            {!showAll && (
              <button className='font-semibold' onClick={toggleShowAll}>
                Show All
              </button>
            )}
          </div>

          <div className='flex gap-5 pl-6 flex-wrap'>
            {showAll ? (
              playlistData.map((playlist, index) => (
                <SongCard
                  key={index}
                  Heading={playlist.heading}
                  Description={playlist.description}
                  imageSrc={playlist.imageSrc}
                />
              ))
            ) : (
              playlistData.slice(0, 7).map((playlist, index) => (
                <SongCard
                  key={index}
                  Heading={playlist.heading}
                  Description={playlist.description}
                  imageSrc={playlist.imageSrc}
                />
              ))
            )}
          </div>
        </div>
              <Footer />
       
      </div>
    </div>
  );
}

export default HomeBoard;
