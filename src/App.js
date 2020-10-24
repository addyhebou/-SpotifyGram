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
  const [{ user, token }, dispatch] = useDataLayerValue();

  // useEffect: Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({ // pop the token (userID) in to the DataLayer, meaning adding the user to the DataLayer
          type: 'SET_USER', // sends SET_USER to reducer.js
          user: user,
        })
      });
    }

    console.log('I HAVE A TOKEN: 🔥', token);
  }, []);

  console.log("💪🏿💪🏿💪🏿", user);
  console.log("👽👽", token);

  return (
    <div className="app">
      {
        token ? ( // If there is a token
          // console.log("OH LETS DO IT");
          <Player spotify={spotify}/>
        ) : ( // Else if there is no token
          <Login />
        )
      }
    </div>
  );
}

export default App;
