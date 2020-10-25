import React from 'react';
import "../Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption.tsx';
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className = "sidebar">
            <img className = "sidebar_logo" src = "http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "Spotify Icon"></img>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            
            <br/>
            <strong className = "sidebar_title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name}/>
            ))}
            <SidebarOption title="Emo Rap" />
            <SidebarOption title="Pop" />
            <SidebarOption title="Dance" />
        </div>
    );
}

export default Sidebar;
