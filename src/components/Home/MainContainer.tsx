import HomeNav from "./HomeNav"
import SuggestionsPlaylistCard from "./SuggestionsPlaylist"

export default function MainContainer() { 
    return ( 
        <div className="flex-[3] bg-light-dark rounded-lg my-2">
            <HomeNav/>
            <SuggestionsPlaylistCard/>
        </div>
    )
} 
