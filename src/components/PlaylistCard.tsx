interface PlaylistProps {
    playlist: {
        id: number,
        name: string,
        description: string,
        image : string,
        href : string
    }
}
export default function Playlists({playlist} : PlaylistProps) {
    return (
        <a className='no-underline w-max flex gap-[8px] rounded-[8px] p-[16px] relative hover:bg-spotify-selected cursor-pointer duration-300 transition-all ease-in-out'>
            <div>
                <div className='mb-[16px] h-[171px] w-[171px] rounded-[6px] '>
                    <img src={playlist.image} className='rounded-[6px]' alt={playlist.name} />
                </div>
                <div className='flex flex-col min-h-[62px]'>
                    <h4 className='font-bold text-base pb-[4px]'>{playlist.name}</h4>
                    <p className='text-spotify-text-muted text-search font-semibold w-[163px]'>{playlist.description}</p>
                </div>
            </div>
        </a>
    )
}