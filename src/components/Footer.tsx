import React from 'react';
import "../Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className = "footer">
            <div className = "footer_left">
                <img className = "footer_albumLogo" src="https://yt3.ggpht.com/a/AATXAJy0wqROWNDaMS8EcoJNvOXxPRc_zqs-Im-1owX6=s400-c-k-c0x00ffffff-no-rj" alt=""/>
                <div className="footer_songInfo">
                    <h4>All Yours</h4>
                    <p>Saint Steph</p>
                </div>
            </div>
            <div className = "footer_center">
                <ShuffleIcon className = "footer_green"/>
                <SkipPreviousIcon className = "footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className = "footer_icon"/>
                <SkipNextIcon className = "footer_icon"/>
                <RepeatIcon className = "footer_green"/>
            </div>
            <div className = "footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
