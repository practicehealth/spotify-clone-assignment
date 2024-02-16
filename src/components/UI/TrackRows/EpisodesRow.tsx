
import PlayListCard from '../PlayListCard'
import { episodes } from '../../../data/episodes'
function EpisodesRow() {
    return (
        <div
            className="flex "
        >
            {episodes.map((episode) => {
                return (
                    <PlayListCard
                        id={episode.id}
                        title={episode.title}
                        description={episode.date}
                        imageUrl={episode.imgUrl}
                    />
                )
            })}
        </div>
    )
}

export default EpisodesRow