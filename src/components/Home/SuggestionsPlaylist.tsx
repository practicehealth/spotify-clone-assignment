import SuggestionCard from "./SuggestionCard"
import dataJSON from "../../../data.json";

export default function SuggestionsPlaylistCard(){ 
    return (
        <div className="bg-light-dark flex flex-col p-2">
            <div className="m-2">
                <span className="text-2xl font-semibold">Zzzzz</span>
                <div className="flex flex-wrap">
                    {dataJSON['SpotifyPlaylists'].map((data, idx)=> { 
                           return <SuggestionCard key={idx} title={data.title} description={data.description} imageUrl={data.imageUrl}/> 
                    })
                }
                </div>
            </div>
    <div className="my-2">
                <span className="text-2xl font-semibold">Sleep</span>
                <div className="flex flex-wrap">
                    {dataJSON['Sleep'].map((data, idx)=> { 
                           return <SuggestionCard key={idx} title={data.title} description={data.description} imageUrl={data.imageUrl}/> 
                    })
                }
                </div>
            </div>

        </div>
    )
}
