import Cards from './Cards'
import science from '../../assets/science.jpeg';
import mic from '../../assets/mic.jpg';
import popMix from '../../assets/popMix.png';
import Friday from '../../assets/Friday.jpeg';
import BollywoodCentral from '../../assets/bollywoodCentral.jpeg';
import punjabi from '../../assets/punjabi.jpeg';
import Footer from '../HomeSection/Footer';

const colors = ['#ffc107', '#f9188b', '#00bcd4', '#9c27b0', '#f44336', '#4caf50' ,'#bc6c25','#8338ec', '#0096c7','#a7c957' ];

const BrowseAll = () => {

    const cardsData = [
        { name: 'Podcasts', imageCard: science },
        { name: 'Live Events', imageCard: mic },
        { name: 'Made For You', imageCard: popMix },
        { name: 'New Releases', imageCard: Friday },
        { name: 'Hindi', imageCard: BollywoodCentral },
        { name: 'Punjabi', imageCard: punjabi },
        { name: 'Tamil', imageCard: Friday },
        { name: 'Ghazals', imageCard: BollywoodCentral },
        { name: 'Podcasts Charts', imageCard: punjabi },
        { name: 'Video Podcasts', imageCard: punjabi },
        { name: 'Telugu', imageCard: mic },
        { name: 'Pop', imageCard: popMix },
        { name: 'Made For You', imageCard: popMix },
        { name: 'New Releases', imageCard: Friday },
        { name: 'Charts', imageCard: Friday },
        { name: 'Indie', imageCard: Friday },
        { name: 'Love', imageCard: BollywoodCentral },
        { name: 'Discover', imageCard: punjabi },
        { name: 'Trending', imageCard: punjabi },
        { name: 'Mood', imageCard: Friday },
        { name: 'Bollywood Central', imageCard: BollywoodCentral },
        { name: 'Punjabi', imageCard: punjabi },
        { name: 'Punjabi', imageCard: punjabi },
        { name: 'Friday', imageCard: Friday },
        { name: 'Bollywood Central', imageCard: BollywoodCentral },
        { name: 'Punjabi', imageCard: punjabi },
        { name: 'Punjabi', imageCard: punjabi },
        { name: 'Friday', imageCard: Friday },
        { name: 'Bollywood Central', imageCard: BollywoodCentral },
        { name: 'Punjabi', imageCard: punjabi }
      ];

  return (
    <div className='w-full p-1 '>
      <div className=' gap-x-3 h-auto bg-[#121212] visible overflow-x-auto '>
        <div className='flex flex-col justify-around gap-y-3'>
          <div className='p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold '>
                Browse All
            </h1>
          </div>
          <div className='gap-4 pl-1 grid-cols-2 grid 2xl:grid-cols-6  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 '> 
          {cardsData.map((cardData, index) => (
          <Cards
            key={index}
            name={cardData.name}
            imageCard={cardData.imageCard}
            cardColor={colors[index % colors.length]} 
          />
        ))}
          </div>
    </div>
    <Footer />
    </div>
    </div>
  )
}

export default BrowseAll