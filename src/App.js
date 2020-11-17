import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import Player from "./components/Player";
import Trending from "./components/Trending.js";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ // pop the token (userID) in to the DataLayer, meaning adding the user to the DataLayer
          type: "SET_PLAYLISTS", // sends SET_USER to reducer.js
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcM6XdGAkZACa').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path = "/">
            {token ? (<Player spotify={spotify}/>) : (<Login />)}
            {console.log("💜💜💜💜💜💜")}
          </Route>
          <Route exact path = "/trending">
            {token ? (<Trending spotify={spotify}/>) : (<Login />)}
            {console.log("💚💚💚💚💚")}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
