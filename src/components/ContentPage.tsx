import React from "react";
import PlaylistView from "./PlayListView";
import spotifyPlaylistsCardData from "../data/spotifyPlaylistsCardData.json"
import focusCardsData from "../data/focusCardsData.json"
function ContentPage() {
 
  

  return (
    <div className="content min-h-[50rem] p-8 bg-neutral-950">
      <PlaylistView titleText="Focus" cardsData={focusCardsData} />
      <PlaylistView
      titleText="Spotify Playlists"
        cardsData={spotifyPlaylistsCardData}
      />
        <PlaylistView
                       titleText="Sound of India"
                        cardsData={focusCardsData}
                    />
    </div>
  );
}

export default ContentPage;
