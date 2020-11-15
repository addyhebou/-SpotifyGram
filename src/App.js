import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
// import { Router } from '@material-ui/icons';
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
          <Route path="/">
            {token ? (<Player spotify={spotify}/>) : (<Login />)}
          </Route>
          <Route path = "/trending">
            <h1 style={{color: "red"}}>Trending Boyyyyy</h1>
            console.log("💚💚💚💚💚")
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{
  // React-Router
}
{
  // localhost.com
}
{
  // localhost.com/trending
}

export default App;
