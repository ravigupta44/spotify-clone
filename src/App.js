import React, {useEffect} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();


function App() {
  
  const [{ token }, dispatch] = useDataLayerValue();

useEffect(()=>{
  const hash = getTokenFromUrl();
  window.location.hash = "";
let _token = hash.access_token;


if (_token) {
  spotify.setAccessToken(_token);

  dispatch({
    type: "SET_TOKEN",
    token: _token,
  });

  spotify.getPlaylist("37i9dQZF1E37oz6IaOee60").then((response) =>
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
  );

  spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );

  dispatch({
    type: "SET_SPOTIFY",
    spotify: spotify,
  });

  spotify.getMe().then((user) => {
    dispatch({
      type: "SET_USER",
      user: user,
    });
  });

  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  });
}


},[token, dispatch]);



  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
