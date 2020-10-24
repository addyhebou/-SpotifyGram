import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body.tsx';
import Footer from './Footer.tsx';
import "../Player.css";
import "../Sidebar.css";

function Player({ spotify }) {
    return (
        <div className = "player">
            <div className = "player_body">
                <Sidebar/>
                <Body/>
            </div>
            
            <Footer />
        </div>
    )
}

export default Player
