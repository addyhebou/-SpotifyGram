import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body.js';
import Footer from './Footer.tsx';
import "../css/Player.css";
import "../css/Sidebar.css";

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