import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body.js';
import TrendingBody from './TrendingBody.js';
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

function Trending({ spotify }) {
    return (
        <div className = "player">
            {console.log("💜💜💜💜💜💜")}
            <div className = "player_body">
                <Sidebar />
                <TrendingBody spotify={spotify}/>
            </div>
            <Footer />
        </div>     
    )
}

export default Trending;