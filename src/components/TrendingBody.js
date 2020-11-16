import React from 'react';
import Header from './Header'
import '../Body.css';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "../components/SongRow";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function TrendingBody({ spotify }) {
    const [{ user, discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className = "body_info">
                <img src = {discover_weekly?.images[0].url} /* {user?.images[0]?.url} */ alt = ""/>
                <div className = "body_infoText">
                    <strong>TRENDING</strong>
                    <h2>TRENDING BOY</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className = "body_songs">
                <div className = "body_icons">
                    <PlayCircleFilledIcon className = "body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>

                {/* List of songs */}
                {discover_weekly?.tracks.items.map((item) =>(
                    <SongRow track = {item.track} />
                ))}

            </div>
        </div>
    );
}

export default TrendingBody;
