import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login';
import { getToKenFromUrl } from './Pages/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Pages/Player';
import { useDataLayerValue } from './Pages/DataLayer';

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getToKenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("").then((response) => //Add PlayList Token
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App
