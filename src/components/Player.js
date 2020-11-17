import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body.js';
import Trending from './Trending.js';
import Footer from './Footer.tsx';
import "../Player.css";
import "../Sidebar.css";
// import { Switch } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Player({ spotify }) {
    return (
        <div className = "player">
            {console.log("💜💜💜💜💜💜")}
            <div className = "player_body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>     
    )
}

export default Player;