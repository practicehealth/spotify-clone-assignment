import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Sidebar from '../components/Sidebar';
import songs from '../data/songs';


function Home() {
  const flag: boolean = false;

  return (
    <>
      <div className="z-10 relative wrapper bg-black min-h-screen md:min-h-screen lg:h-fit w-screen lg:w-full">
        <div className="flex">
          <Sidebar flag={true} />
          <div className="flex flex-col w-full">
            <Navbar flag={flag} />
            <div className="grid 2xl:grid-rows-auto bg-slate-500 bg-opacity-30 w-full">
              <div className="relative w-full">
                {/* Use the Song interface for the items prop */}
                <Section title="Spotify Playlists" items={songs} />
                <div
                  className={
                    'text-sm font-semibold hover:underline text-link tracking-wider text-slate-500 absolute top-3 right-3 cursor-pointer'
                  }
                >
                  Show all
                </div>
              </div>
              {/* Slice the songs array and pass it to the Section component */}
              <Section title="Sleep" items={songs.slice(0, 2)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
