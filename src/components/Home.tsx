
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import "../App.css"

import SongCard from './SongCard';
import MainFooter from './MainFooter';
import { playlists } from '../dataList';



type Props = {}



const Home = (props: Props) => {
    const navigate = useNavigate();



    const goForward = () => {
        navigate(1);
    };

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className='flex w-full bg-white font-light h-full flex-col rounded-md justify-start overflow-hidden box-border'>
            <div className="flex justify-between sticky top-0 z-10 px-8 py-4 flex-none bg-bgheader ">
                <div className='flex items-center gap-2'>
                    <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center" onClick={goBack}><FaAngleLeft className='text-secondary size-6 hover:scale-105' /></button>
                    <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center" onClick={goForward}><FaAngleRight className="text-secondary size-6 hover:scale-105" /></button>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <button className='text-secondary flex font-bold hover:scale-105 hover:font-bold'>Sign up</button>
                    <button className="text-lg font-semibold bg-white rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
                        Log in
                    </button>
                </div>
            </div>
            <div className=" flex flex-col overflow-y-auto flex-1 bg-primary py-8">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="mb-4 px-6">
                        <h2 className="text-white text-xl font-semibold mb-4">{playlist.name}</h2>
                        <div className="flex flex-wrap gap-6 x-6 ">
                            {playlist.cards.map((card) => (
                                <SongCard key={card.id} card={card} />
                            ))}
                        </div>
                    </div>
                ))}

                <MainFooter />
            </div>
        </div>
    )
}

export default Home