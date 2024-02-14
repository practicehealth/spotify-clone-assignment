import Nav from './Navbar/Nav';
import HomeBoard from './HomeSection/HomeBoard';

const Home = () => {
  return (
    <div className='h-full min-h-screen overflow-y-auto rounded-t-2xl min-w-[600px]' style={{width: '-webkit-fill-available'}}>
      <div className='flex flex-col h-auto'> 
        <Nav showSearchInput={''}/>
        <HomeBoard />  
        </div>
      </div>
  );
};

export default Home;