import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // State is short term memory for handling variables
  // Disappears when page refreshes
  const [token, setToken] = useState(null)
  const [{}, dispatch] = useDataLayerValue();

  // useEffect: Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token) // stores token in State

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("💪🏿", user);
      });
    }

    console.log('I HAVE A TOKEN: 🔥', token);
  }, []);

  return (
    <div className="app">
      {
        token ? ( // If there is a token
          <Player />
        ) : ( // Else if there is no token
          <Login />
        )
      }
    </div>
  );
}

export default App;
