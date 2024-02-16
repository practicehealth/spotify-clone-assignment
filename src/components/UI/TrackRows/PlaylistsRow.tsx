import { playlists } from '../../../data/playlists'
import PlayListCard from '../PlayListCard'


function PlaylistRow() {
    return (
        <div
            className="flex "
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
    )
}

export default PlaylistRow