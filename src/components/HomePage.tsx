import { playlists } from '../../src/data/playlists.ts'
import MobileHeader from './shared/MobileHeader.tsx'
import PlayListCard from './UI/PlayListCard.tsx'
import DesktopHeader from './shared/DesktopHeader.tsx'

function HomePage() {

  return (
    <div className='ml-0 flex flex-auto flex-col relative rounded-lg bg-baseBackground lg:overflow-auto lg:ml-2 h-full'>
      <DesktopHeader/>
      <div className='flex lg:hidden'>
        <MobileHeader/>
      </div>
      <div className='pt-6 flex flex-col lg:pt-2 h-full  '>
        <div className="flex flex-row flex-nowrap lg:px-6 max-h-full h-full ">
          <section className="flex flex-grow flex-shrink flex-auto flex-col max-h-full h-full">
            <div className="flex items-center mb-2">
              <div className="flex-grow">
                <h2 className=" text-lg pl-4 lg:p-0 lg:text-2xl font-bold text-white">
                  Spotify Playlists
                </h2>
              </div>
              <div className='hidden lg:flex'>
                <a className='ml-2 mt-0.5'>
                  <span className='text-sm font-bold text-showAllColor'>
                    Show all
                  </span>
                </a>
              </div>
            </div>
            <div
              className=" overflow-x-auto w-screen lg:w-auto flex-nowrap flex lg:flex-wrap lg:overflow-hidden lg:gap-6 h-calc-screen "
            >
              {playlists.map((playlist) => {
                return (
                  <PlayListCard 
                    id={playlist.id}
                    title={playlist.title}
                    description={playlist.description}
                    imageUrl={playlist.imageUrl}
                  />
                )
              })}
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default HomePage