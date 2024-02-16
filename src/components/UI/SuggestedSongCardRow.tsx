import dots from '../../../public/dots.svg'
import like from '../../../public/like.svg'

interface song {
    title: string;
    artists: string;
    imgUrl: string;
    id: string;
    time: string;
}

function SuggestedSongCardRow({title, artists, imgUrl, time}: song) {
    
    return (
        <div className=' song p-4 flex gap-4 h-[76px] w-full justify-between hover:dimSongHoverBG rounded cursor-pointer'>
            <div className="flex gap-3 w-auto h-min">
                <div className='image-div flex w-11 h-11 -ml-2'>
                    <img src={imgUrl} className='w-11 h-11 object-cover'></img>
                </div>
                <div className='flex flex-col'>
                    <span className='text-white text-base font-normal overflow-hidden whitespace-nowrap'>{title}</span>
                    <span className="text-sm text-textSubdued">{artists}</span>
                </div>

            </div>
            <div className="like-time flex min-w-[120px] w-30 justify-center items-center h-full gap-6">
                <span className='w-4 h-4 hidden'>
                    <img src={like} className='w-4 h-4'></img>
                </span>
                <span className=" text-textSubdued text-sm font-normal">{time}</span>
                <span className='w-4 h-4 hidden'>
                    <img src={dots} className='w-4 h-4'></img>
                </span>
            </div>
        </div>
    )
}

export default SuggestedSongCardRow