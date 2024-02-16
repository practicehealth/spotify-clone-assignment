

import PlayButton from './UI/PlayButton.tsx'
import MobileHeader from './shared/MobileHeader.tsx'

import { tabs } from '../data/tabs.ts'
import { songs } from '../data/songs.ts'
import DesktopHeaderWSearch from './shared/DesktopHeaderWSearch.tsx'
import SuggestedSongCardRow from './UI/SuggestedSongCardRow.tsx'
import PlaylistRow from './UI/TrackRows/PlaylistsRow.tsx'
import AlbumsRow from './UI/TrackRows/AlbumsRow.tsx'
import EpisodesRow from './UI/TrackRows/EpisodesRow.tsx'

interface tab {
    title: string;
    checked: boolean;
}

interface song {
    title: string;
    artists: string;
    imgUrl: string;
    id: string;
    time: string;
}

function SearchResults() {


    return (
        <div className=' flex flex-auto flex-col relative rounded-lg bg-baseBackground overflow-y-auto overflow-x-hidden  ml-2 h-full'>
            <DesktopHeaderWSearch />
            <div className='flex lg:hidden'>
                <MobileHeader />
            </div>

            <div className='flex flex-col  h-full '>
                <div className='tabs flex w-full h-auto px-6 mt-[7px] gap-2'>
                    {tabs.map((tab: tab) => {
                        return (
                            <button className={` h-8 rounded-full cusor-pointer text-center ${tab.checked ? 'bg-white' : 'backgroundTintedBase'} inline-block`}>
                                <span className={`rounded-full flex inline-block relative px-3 py-1 ${tab.checked ? 'text-black' : 'text-white'} font-normal text-sm h-8 items-center`}>{tab.title}</span>
                            </button>
                        )
                    })}

                </div>
                <div className="flex flex-row flex-nowrap px-6 max-h-full h-full ">
                    <section className="flex flex-grow flex-shrink flex-auto flex-col max-h-full mt-6 h-full">

                        <section className='flex flex-col h-auto gap-6 lg:flex-row'>
                            <div className='top-result flex flex-col min-w-[420px]'>
                                <div className="flex items-center">
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-bold text-white">
                                            Top result
                                        </h2>
                                    </div>
                                </div>
                                <div className="relative p-5 flex flex-col gap-5 bg-cardNormalBG hover:bg-cardHoverBG rounded-lg mt-2">
                                    <div className='w-[92px] h-[92px] flex justify-start rounded-md'>
                                        <img className='w-[92px] h-[92px] rounded-md object-cover' src='https://i.scdn.co/image/ab67616d00001e02c6e5a4d3214a7423520e25e0'></img>
                                    </div>
                                    <div className='absolute bottom-5 right-5 hidden'><PlayButton /></div>
                                    <div className="flex flex-col">
                                        <h2 className='text-[32px] font-bold text-white'>PodCast Los Cuernos</h2>
                                        <div className='flex'>
                                            <span className='dot text-textSubdued flex gap-1 w-min mr-1'>Song</span>
                                            <span className='text-white'>Dj Nanow<span className='!text-textSubdued'>, </span>Nano</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='songs flex flex-col w-full h-auto'>
                                <div className="flex items-center mb-2">
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-bold text-white">
                                            Songs
                                        </h2>
                                    </div>
                                </div>
                                <div className="songs-list h-auto flex flex-col">
                                    {songs.map((song: song) => {
                                        return (
                                            <SuggestedSongCardRow
                                                title={song.title}
                                                artists={song.artists}
                                                imgUrl={song.imgUrl}
                                                id={song.id}
                                                time={song.time}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </section>

                        <section className='mt-8'>
                            <p className='text-2xl text-white font-bold'>Playlist</p>
                            <div className=' rowDiv flex max-w-full overflow-x-auto  mt-2 no-scrollbar'  style={{ width: 'calc(100vw - 400px)' }}>
                                <PlaylistRow/>
                            </div>
                        </section>

                        <section className='mt-8'>
                            <p className='text-2xl text-white font-bold'>Albums</p>
                            <div className=' rowDiv flex max-w-full overflow-x-auto  mt-2 no-scrollbar'  style={{ width: 'calc(100vw - 400px)' }}>
                                <AlbumsRow/>
                            </div>
                        </section>

                        <section className='mt-8'>
                            <p className='text-2xl text-white font-bold'>Episodes</p>
                            <div className=' rowDiv flex max-w-full overflow-x-auto  mt-2 no-scrollbar'  style={{ width: 'calc(100vw - 400px)' }}>
                                <EpisodesRow/>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SearchResults