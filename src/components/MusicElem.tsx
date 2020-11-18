import React from 'react';
import '../css/MusicElem.css';


function MusicElem({ art, songname, artist}: { art: string, songname: string, artist: string}) {
    return (
        <div className = "elem">
            <img src = {art} alt = "Artwork"/>
            <strong>{artist}</strong>
            <p>{songname}</p> 
        </div>
    )
}

export default MusicElem
