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
        <Router>
            <Switch>
                <Route path="/">
                    {console.log("💜💜💜💜💜💜")}
                    <div className = "player">
                        <div className = "player_body">
                            <Sidebar />
                            <Body spotify={spotify}/>
                        </div>
                        <Footer />
                    </div>    
                </Route>
                <Route path="/trending">
                    <h1>Hello</h1>
                    {console.log("💚💚💚💚💚💚")}
                    <div className = "player">
                        <div className = "player_body">
                            <Sidebar />
                            <Trending spotify={spotify}/>
                        </div>
                        <Footer />
                    </div>    
                </Route>
            </Switch>
        </Router>
        
        
    )
}

export default Player;
