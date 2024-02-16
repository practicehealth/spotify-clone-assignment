import { albums } from '../../../data/albums'
import PlayListCard from '../PlayListCard'

function AlbumsRow() {
    return (
        <div
            className="flex gap-0"
        >
            {albums.map((song) => {
                return (
                    <PlayListCard
                        id={song.id}
                        title={song.title}
                        description={song.artists}
                        imageUrl={song.imgUrl}
                    />
                )
            })}
        </div>
    )
}

export default AlbumsRow